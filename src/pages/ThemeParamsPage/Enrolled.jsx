import { Section, Cell, Text, Placeholder, Avatar, Button } from '@telegram-apps/telegram-ui';
import { Icon20ChevronRightOutline } from '@vkontakte/icons';
import WebApp from '@twa-dev/sdk';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Enrolled.css';

import { UserContext } from '@/contexts/UserContext';

import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

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
  const navigate = useNavigate()
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

 
  useEffect(() => {
    if (!courses || courses.length === 0) {
      navigate('/');
    }
  }, [courses, navigate]);
WebApp.BackButton.hide();
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [popUpUrl, setPopUpUrl] = useState('');

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

  return (
    <div>
      <div style={{ padding: 16, gap: 8 }}>
        <div className="head">
          <Text weight="1">{t("You")}</Text>
          {/* <div className="language">
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
          </div> */}
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
                           style={{ pointerEvents: 'none' }} 

            before={
              <Avatar size={42} src={`https://t.me/i/userpic/320/${user.username}.jpg`} />
            }
          />
        </Section>
      </div>

      <Section
        style={{ height: "100%", margin:" 0 16px 10px 16px"}}
        >
   {Array.isArray(courses) && courses.length > 0 &&
  courses.filter(course => course.my === true) // Only show courses where `my` is true
          .map((course, index) => (
            <div>
        <Cell
              description=""
              hint=""
              interactiveAnimation=""
              subhead=""
              subtitle=""
              titleBadge=""
              style={{ pointerEvents: 'none' }}
            >
              {t("Enrolled_courses")}
            </Cell>
      <Cell
        style={{border:'none',padding:"10px"}}
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
        {/* Используем t() с вложенными ключами, например, t(course.id.toString() + '.Course_name') */}
        {t(course.id.toString() + '.Course_name')}
      </Cell>
              </div>
    ))
        }
         </Section>
        <Section style={{ height: "100%", margin:" 0 16px 80px 16px"}}>
        <Cell
          style={{border:'none',alignItems:"flex-start"}}
          multiline
              hint=""
              interactiveAnimation=""
              subhead=""
          titleBadge=""
          children={t('follow_our_channel')}
          subtitle={t('follow_our_channel_desc')}
          before={
                    <Avatar
                      size={48}
                      style={{ borderRadius: "5px", marginTop:"30%" }}
                      src="https://i.ibb.co/CtPSccK/photo-2024-11-10-13-12-28.jpg" 
                    />
                  }
          description={<Button style={{borderRadius:40,margin:"8px 0",height:"5vh"}}>{t('follow_us')}</Button>}
          after=''
          
           onClick={() => window.open("https://t.me/thetarget_learning", "_blank")}
        >
          
            </Cell>
</Section>
 {Array.isArray(courses) && !courses.some(course => course?.my === true) ? (
  <Placeholder style={{ paddingTop: 20, paddingBottom: 20 }} description="Gotcha! That's the end!">
    <img
      width="75%"
      alt="Telegram sticker"
      src="https://s1.gifyu.com/images/Sy9DJ.gif"
    />
  </Placeholder>
) : null}


      


      {isPopUpOpen && (
        <EnrolledPopUp url={popUpUrl} onClose={handleClosePopUp} />
      )}
    </div>
  );
}
