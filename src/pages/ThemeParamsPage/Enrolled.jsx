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

const courseConfig  = {
    "2925675": {
      img: "https://i.ibb.co/zmv0JD2/image-2024-11-06-19-37-49.png",
      chapters: "9 chapters",
      videos: "32 videos",
      duration: "15 hours"
    },
    "2926478": {
      img: "ProProduct",
      chapters: "3 chapters",
      videos: "0 videos",
      duration: "3.5 hours"
    },
    "2930629": {
      img: "https://import.cdn.thinkific.com/999858/1S51nlgTuqOqzfwOyBvy_image_2024-11-10_23-40-27.png",
      chapters: "5 chapters",
      videos: "0 videos",
      duration: "6 hours"
    },
    "2930630": {
      img: "https://import.cdn.thinkific.com/999858/A8eR3MtBT7eVWGIzTOjR_image_2024-11-10_23-40-39.png",
      chapters: "5 chapters",
      videos: "0 videos",
      duration: "6 hours"
    },
    "2930631": {
      img: "https://import.cdn.thinkific.com/999858/bNYERdoYSOa5r1mgZpPb_image_2024-11-10_23-40-51.png",
      chapters: "5 chapters",
      videos: "0 videos",
      duration: "6 hours"
    },
    "2930632": {
      img: "https://import.cdn.thinkific.com/999858/AfSeEPtIQaO17HA4krxu_image_2024-11-10_23-41-01.png",
      chapters: "5 chapters",
      videos: "0 videos",
      duration: "6 hours"
    },
    // Добавьте данные для других курсов здесь
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
  {Array.isArray(courses) && courses.length > 0 &&
  courses
    .filter(course => course.my === true && course.id !== 2930632) // Only show courses where `my` is true and id is not 2930632
    .map((course, index) => (
      <div key={index}>
        <Cell
          style={{ border: 'none', padding: "10px" }}
          after={<Icon20ChevronRightOutline />}
          before={
            <Avatar
              size={48}
              style={{ borderRadius: "5px" }}
              src={courseConfig[course.id].img}
            />
          }
          onClick={() => handleGoToCourse(course)}
        >
          {/* Use t() with nested keys, e.g., t(course.id.toString() + '.Course_name') */}
          {t(course.id.toString() + '.Course_name')}
        </Cell>
      </div>
    ))}
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
          
           onClick={() => window.open(i18n.language === 'ru' ? "https://t.me/thetarget_courses_ru" : "https://t.me/thetarget_courses", "_blank")}

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
