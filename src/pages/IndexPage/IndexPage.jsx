import {
  Section,
  Cell,
  Title,
  Link,
  Card,
  Info,
  Placeholder,
  Avatar,
  Badge,
  Divider,
  Button,
} from "@telegram-apps/telegram-ui";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./IndexPage.css";

import { UserContext } from "@/contexts/UserContext";
import WebApp from "@twa-dev/sdk";
import * as amplitude from "@amplitude/analytics-browser";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Icon16Clear } from "@vkontakte/icons";
import { useTranslation } from "react-i18next";
import { courseConfig } from "@/Utils/Constants";
import { getAllCourses } from "@/Utils/thinkificAPI";

import { CoursesData } from "@/Utils/Constants";
import { CoursesContext } from "@/contexts/CoursesContext";
/**
 * @returns {JSX.Element}
 */
export function IndexPage() {
  const { t, i18n } = useTranslation();

  const { user, setUser } = useContext(UserContext);
  const { courses, setCourses } = useContext(CoursesContext);
  const [isVisibleStoriesCard, setIsVisibleStoriesCard] = useState(true);
  const navigate = useNavigate();
  window.Telegram.WebApp.MainButton.hide();
  window.Telegram.WebApp.MainButton.text = t("get_course_from");

  const MAX_RETRY_ATTEMPTS = 3;
  const RETRY_INTERVAL = 2000;

  useEffect(() => {
    if (courseConfig[user.courseIdLink]) {
      navigate(`/courses/${user.courseIdLink}`);
    }
  }, [user]);

  useEffect(() => {
    if (!user?.id) return; // Пропустить попытку, если user.id нет

    if (localStorage.getItem("closeOnBoarding")) {
      setIsVisibleStoriesCard(false);
    }

    let attempts = 0; // Счётчик попыток
    const fetchCourses = async () => {
      try {
        amplitude.track("load_courses_home_page");
        const courseList = CoursesData;
        setCourses(courseList);
      } catch (error) {
        attempts++;
        console.error(
          `Не удалось загрузить курсы, попытка ${attempts}:`,
          error
        );

        if (attempts < MAX_RETRY_ATTEMPTS) {
          setTimeout(fetchCourses, RETRY_INTERVAL);
        } else {
          console.error(
            "Достигнуто максимальное количество попыток загрузки курсов."
          );
        }
      }
    };

    fetchCourses();
  }, [user]);

  const handleGoToCourse = (course) => {
    amplitude.track("open_best_choise");
    navigate(`/courses/${course.id}`);
  };
  WebApp.BackButton.isVisible && WebApp.BackButton.hide();
  const filteredCourses = courses?.filter((course) => course.id !== 0);

  const handleGoToStories = () => {
    navigate("/courses/stories");
  };

  const handleCloseHint = () => {
    localStorage.setItem("closeOnBoarding", "true");
    setIsVisibleStoriesCard(false);
  };

  console.log(i18n.language);
  return (
    <div>
      <div
        style={{
          padding: 16,
          gap: 8,
          marginBottom: 80,
        }}
      >
        {isVisibleStoriesCard && (
          <Card>
            <Cell
              subhead={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  {t("whatIsTarget")}
                  <Icon16Clear onClick={handleCloseHint} />
                </div>
              }
              children={t("Check_out_a")}
              multiline
              subtitle={
                <Button
                  size="s"
                  onClick={handleGoToStories}
                  style={{ marginTop: "20px" }}
                >
                  {t("Get_it_forFree")}
                </Button>
              }
            />
            {/* <Button
            onClick={handleGoToStories}
            style={{ width: "100vw", margin: "20px 0" }}
          >
            {t("whatIsTarget")}
          </Button> */}
          </Card>
        )}
        <Title
          weight="2"
          style={{
            marginBottom: 4,
          }}
        >
          {" "}
          {t("Popular_courses")}
        </Title>

        {filteredCourses?.map((course) => (
          <Card
            key={course.id}
            style={{
              width: "100%",
              textAlign: "left",
              height: "265px",
              marginTop: 8,
            }}
            onClick={() => handleGoToCourse(course)}
          >
            <img
              alt="Course Image"
              src={courseConfig[course.id]?.img || "default_image_path_here"}
              style={{
                display: "block",
                height: "170px",
                objectFit: "cover",
                width: "100%",
              }}
            />
            <Card.Cell
              readOnly
              subtitle={
                // <div>
                //   {t('Course')}
                //   <div className='card-items-inf'>
                //     <div>{courseConfig[course.id]?.chapters || "N/A"}</div>
                //     •
                //     <div>{courseConfig[course.id]?.videos || "N/A"}</div>
                //     •
                //     <div>{courseConfig[course.id]?.duration || "N/A"}</div>
                //   </div>
                // </div>
                <div>
                  {t("Course")}
                  <div className="card-items-inf">
                    <div>
                      {courseConfig[course.id]?.chapters} {t("chapters")}
                    </div>
                    •
                    {courseConfig[course.id]?.videos !== "0 " && (
                      <>
                        <div>
                          {courseConfig[course.id]?.videos} {t("videos")}
                        </div>
                        •
                      </>
                    )}
                    <div>
                      {courseConfig[course.id]?.duration} {t("duration")}
                    </div>
                  </div>
                </div>
              }
            >
              {t(course.id.toString() + ".Course_name")}
            </Card.Cell>
          </Card>
        ))}
      </div>
      {/* <List>

        <Section
          header={<Cell
           
            before=""
            description=""
            hint=""
            interactiveAnimation=""
            subhead=""
            subtitle=""
            titleBadge=""
          >
            Choise of the day
          </Cell>} />




            <div className='centered'>
          {courses.map((course, index) => (
          <Card
            key={index}
            style={{
              width: "85%",
              textAlign: "left",
              height: "250px" 
            }}
            onClick={() => handleGoToCourse(course)}
          >
            <img
              alt="Course Image"
              src="https://i.ibb.co/zmv0JD2/image-2024-11-06-19-37-49.png"
              style={{
                display: 'block',
                height: "170px", 
                objectFit: 'cover',
                width: "100%"
              }}
            />
            <Card.Cell readOnly
              subtitle={<div>
                Course
                
              </div>}
            >
              {course.title}
            </Card.Cell>
          </Card>
        ))}
</div>
      </List> */}

      {/* <Section style={{ height: "100%", margin:" 0 16px 80px 16px"}}> */}

      {/* <Section
          header={
            <Cell
              style={{ pointerEvents: 'none' }} 
              before={<Icon20FireAltOutline style={{marginRight:-10}}/>}
              description=""
              hint=""
              interactiveAnimation=""
              subhead=""
              subtitle=""
              titleBadge=""
            >
              {t('Popular_courses')}
            </Cell>
          }
        >
          
          <Cell
             after={<Icon20ChevronRightOutline />}
            before={<Avatar 
              size={48}
              style={{borderRadius: "5px"}} 
              src='https://i.ibb.co/zrJfDsc/image-2024-11-07-04-31-19.png'
            />}
            subtitle={`9 ${t("chapters")}`}
            onClick={() => handleGoToCourse(courses[0])}
          >
            TON Blockchain & Telegram
          </Cell>
          <Cell
             after={<Icon20ChevronRightOutline />}
            before={<Avatar
              src='https://i.ibb.co/KDtp0XK/image-2024-11-07-04-31-31.png'
              size={48} style={{borderRadius: "5px"}} />}
            subtitle={`3 ${t("chapters2")}`}
            onClick={() => handleGoToCourse(courses[1])}
          >
            ProProduct
          </Cell>

        </Section>

        <Section
          header={
            <Cell
               style={{ pointerEvents: 'none' }} 
              before=""
              description=""
              hint=""
              interactiveAnimation=""
              subhead=""
              subtitle=""
              titleBadge=""
            >
              TON & Telegram {t("courses")}
            </Cell>
          }
        >
          
          <Cell
             after={<Icon20ChevronRightOutline />}
            before={<Avatar 
              size={48}
              style={{borderRadius: "5px"}} 
              src='https://i.ibb.co/zrJfDsc/image-2024-11-07-04-31-19.png'
            />}
            subtitle={`9 ${t("chapters")}`}
            onClick={() => handleGoToCourse(courses[0])}
          >
            TON Blockchain & Telegram
          </Cell>

          <Cell
          before={<Avatar 
            size={48}
            style={{borderRadius: "5px"}} 
            children={<Icon24Clock />}
          />}
          subtitle={
            <Link>{t('Coming_sson')}</Link>
          }
        >
          Telegram Mini Apps
        </Cell>

        </Section>

        <Section
          header={
            <Cell
               style={{ pointerEvents: 'none' }} 
              before=""
              description=""
              hint=""
              interactiveAnimation=""
              subhead=""
              subtitle=""
              titleBadge=""
            >
              Product Management {t('courses')}
            </Cell>
          }
        >
          
          <Cell
             after={<Icon20ChevronRightOutline />}
            before={<Avatar
              src='https://i.ibb.co/KDtp0XK/image-2024-11-07-04-31-31.png'
              size={48} style={{borderRadius: "5px"}} />}
            subtitle={`3  ${t("chapters2")}`}
            onClick={() => handleGoToCourse(courses[1])}
          >
            ProProduct
          </Cell>

        </Section> */}

      {/* <Cell
          style={{border:'none',alignItems:"flex-start"}}
              hint=""
              interactiveAnimation=""
              subhead=""
          titleBadge=""
          children={t('more_courses')}
          subtitle={t('more_courses_soon')}
          description={<Button style={{borderRadius:40,margin:"8px 0",height:"5vh"}}>{t('follow_us')}</Button>}
          after=''
          before={
                    <Avatar
                      size={48}
                      style={{ borderRadius: "5px", marginTop:"30%" }}
                      src="https://i.ibb.co/CtPSccK/photo-2024-11-10-13-12-28.jpg" 
                    />
                  }
        onClick={() => window.open(i18n.language === 'ru' ? "https://t.me/thetarget_courses_ru" : "https://t.me/thetarget_courses", "_blank")}

        >
        </Cell>
      </Section> */}
      {!courses && (
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
      )}
    </div>
  );
}
