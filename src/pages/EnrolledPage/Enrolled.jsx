import {
  Section,
  Cell,
  Text,
  Placeholder,
  Avatar,
  Button,
} from "@telegram-apps/telegram-ui";
import { Icon20ChevronRightOutline } from "@vkontakte/icons";
import WebApp from "@twa-dev/sdk";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Enrolled.css";

import { UserContext } from "@/contexts/UserContext";

import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { courseConfig } from "@/Utils/Constants";
import { EnrolledPopUp } from "./EnrolledPopUp";
import { getAllCourses } from "@/Utils/thinkificAPI";
import * as amplitude from "@amplitude/analytics-browser";
import { useTranslation } from "react-i18next";

/**
 * @returns {JSX.Element}
 */
export function EnrollmentsPage() {
  amplitude.track("open_my_courses");
  const { user } = useContext(UserContext);
  const [courses, setCourses] = useState(null);
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    if (!user?.id) return; // Пропустить попытку, если user.id нет

    let attempts = 0; // Счётчик попыток
    const fetchCourses = async () => {
      try {
        amplitude.track("load_courses_home_page");
        const courseList = await getAllCourses(user.id);
        setCourses(courseList);
      } catch (error) {
        attempts++;
        console.error(
          `Не удалось загрузить курсы, попытка ${attempts}:`,
          error
        );

        if (attempts < MAX_RETRY_ATTEMPTS) {
          setTimeout(fetchCourses, RETRY_INTERVAL); // Повторить попытку через интервал
        } else {
          console.error(
            "Достигнуто максимальное количество попыток загрузки курсов."
          );
        }
      }
    };

    fetchCourses();
  }, [user]);
  WebApp.BackButton.hide();
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [popUpUrl, setPopUpUrl] = useState("");

  window.Telegram.WebApp.MainButton.hide();

  const handleGoToCourse = (course) => {
    amplitude.track("open_my_course");
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
    <div style={{ overflowY: "auto" }}>
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
            style={{ pointerEvents: "none" }}
            before={
              <Avatar
                size={42}
                src={`https://t.me/i/userpic/320/${user.username}.jpg`}
              />
            }
          />
        </Section>
      </div>

      <Section style={{ height: "100%", margin: " 0 16px 10px 16px" }}>
        <Cell
          description=""
          hint=""
          interactiveAnimation=""
          subhead=""
          subtitle=""
          titleBadge=""
          style={{ pointerEvents: "none" }}
        >
          {t("Enrolled_courses")}
        </Cell>
        {Array.isArray(courses) &&
          courses.length > 0 &&
          courses
            .filter((course) => course.my === true && course.id !== 2930632) // Only show courses where `my` is true and id is not 2930632
            .map((course, index) => (
              <div key={index}>
                <Cell
                  style={{ border: "none", padding: "10px" }}
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
                  {t(course.id.toString() + ".Course_name")}
                </Cell>
              </div>
            ))}
      </Section>
      {/* <Section style={{ height: "100%", margin:" 0 16px 80px 16px"}}>
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
</Section> */}
      {Array.isArray(courses) &&
      !courses.some((course) => course?.my === true) ? (
        <Placeholder
          style={{ paddingTop: 20, paddingBottom: 20 }}
          description="Gotcha! That's the end!"
        >
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
