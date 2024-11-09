import { Section, Cell, Text, Placeholder, Avatar } from '@telegram-apps/telegram-ui';
import { Icon20ChevronRightOutline } from '@vkontakte/icons';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Enrolled.css';

import { UserContext } from '@/contexts/UserContext';

import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import { getAllCourses } from '@/Utils/thinkificAPI';

import { EnrolledPopUp } from './EnrolledPopUp';
import { CoursesContext } from '@/contexts/CoursesContext';

import { useTranslation } from 'react-i18next';

/**
 * @returns {JSX.Element}
 */
export function EnrollmentsPage() {
  const { user } = useContext(UserContext);
  const { courses, setCourses } = useContext(CoursesContext);
  const { i18n, t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseList = await getAllCourses(user.id);
        setCourses(courseList);
      } catch (error) {
        console.error('Не удалось загрузить курсы:', error);
      }
    };

    fetchCourses();
  }, [user]);

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [popUpUrl, setPopUpUrl] = useState('');
  const navigate = useNavigate();

  window.Telegram.WebApp.MainButton.hide();

  const handleGoToCourse = (course) => {
    navigate(`/courses/${course.id}`, { state: { course } });
  };

  const handleOpenPopUp = (url) => {
    setPopUpUrl(url);
    setIsPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  if (!courses) {
    return <Spinner />;
  }

  return (
    <div>
      <div style={{ padding: 16, gap: 8 }}>
        <div className="head">
          <Text weight="1">{t("You")}</Text>
          <div className="language">
            <Text
              weight="1"
              className={i18n.language === 'en' ? 'active-language' : ''}
              onClick={() => changeLanguage('en')}
            >
              EN
            </Text>
            &nbsp;
            <Text
              weight="1"
              className={i18n.language === 'ru' ? 'active-language' : ''}
              onClick={() => changeLanguage('ru')}
            >
              RU
            </Text>
          </div>
        </div>

        <Section
          style={{
            marginTop: 8,
            borderRadius: 5,
          }}
        >
          <Cell
            subtitle={t("Reasearcher")}
            children={user.first_name}
            before={
              <Avatar size={42} src={`https://t.me/i/userpic/320/${user.username}.jpg`} />
            }
          />
        </Section>
      </div>

      <Section style={{ height: "100%", marginBottom: 80 }}>
        <Section
          header={
            <Cell
              description=""
              hint=""
              interactiveAnimation=""
              subhead=""
              subtitle=""
              titleBadge=""
            >
              {t("Enrolled_courses")}
            </Cell>
          }
        >
          {Array.isArray(courses) && courses.length > 0 &&
            courses.filter(course => course.my === true) // Only show courses where `my` is true
              .map((course, index) => (
                <Cell
                  key={index}
                  after={<Icon20ChevronRightOutline />}
                  before={
                    <Avatar
                      size={48}
                      style={{ borderRadius: "5px" }}
                      src="https://i.ibb.co/zrJfDsc/image-2024-11-07-04-31-19.png"
                    />
                  }
                  onClick={() => handleGoToCourse(course)}
                >
                  {course.title}
                </Cell>
              ))
          }
        </Section>
        <Section>
          <Placeholder style={{ paddingTop: 20, paddingBottom: 20 }} description="Gotcha! That's the end!">
            <img
              width="75%"
              alt="Telegram sticker"
              src='https://s1.gifyu.com/images/Sy9DJ.gif'
            />
          </Placeholder>
        </Section>
      </Section>

      {isPopUpOpen && (
        <EnrolledPopUp url={popUpUrl} onClose={handleClosePopUp} />
      )}
    </div>
  );
}
