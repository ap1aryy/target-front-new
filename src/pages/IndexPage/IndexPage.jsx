import {
  Section,
  Cell,
  Image,
  Link,
  Card,
  Info,
  Placeholder,
  Avatar,
  Input,
  Tappable,
  Button,
} from "@telegram-apps/telegram-ui";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./IndexPage.css";

import { UserContext } from "@/contexts/UserContext";
import WebApp from "@twa-dev/sdk";
import * as amplitude from "@amplitude/analytics-browser";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import {
  Icon16Clear,
  Icon20ChevronRightOutline,
  Icon24Search,
  Icon24Dismiss,
  Icon24Info,
} from "@vkontakte/icons";
import { useTranslation } from "react-i18next";
import { courseConfig } from "@/Utils/Constants";
import { getAllCourses } from "@/Utils/thinkificAPI";
import CategoryBubbles from "./Booble";
import { CoursesData, CategoriesData } from "@/Utils/Constants";
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
  const handleGoToStories = () => {
    amplitude.track("Open Stories from Home Page");
    navigate("/courses/stories");
  };

  const handleCloseHint = () => {
    amplitude.track("Hide What Traget is");
    localStorage.setItem("closeOnBoarding", "true");
    setIsVisibleStoriesCard(false);
  };

  const groupedCourses = CoursesData.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  // Разделим категории на те, в которых есть курсы, и те, в которых их нет
  const categoriesWithCourses = Object.keys(groupedCourses).filter(
    (categoryName) => groupedCourses[categoryName].length > 0
  );

  const categoriesWithoutCourses = CategoriesData.filter(
    (category) => !groupedCourses[category.name]
  );

  const allCategories = CategoriesData.map((category) => category.name);
  const [search, setSearch] = useState("");

  const CourseButton = () => {
    return <Button children="Start" size="s" mode="bezeled" />;
  };
  const filteredCourses = CoursesData.filter((course) => {
    const courseName = t(course.id.toString() + ".Course_name").toLowerCase();
    return courseName.includes(search.toLowerCase());
  });

  return (
    <div style={{ overflowX: "hidden" }}>
      <div style={{}}>
        <Input
          header="Search"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          after={
            <Tappable
              Component="div"
              style={{
                display: "flex",
              }}
              onClick={() => setSearch("")}
            >
              {search ? <Icon24Dismiss /> : <Icon24Search />}
            </Tappable>
          }
        />

        {!search && <CategoryBubbles />}

        {search && (
          <>
            {filteredCourses.length > 0 ? (
              <Section
                header={<Section.Header>{t("FoundCourses")}</Section.Header>}
                style={{
                  height: "100%",
                }}
              >
                {filteredCourses.map((course) => (
                  <Cell
                    key={course.id}
                    before={<Image size={48} src={course.img} />}
                    children={t(course.id.toString() + ".Course_name")}
                    subtitle={`${course.chapters.length} ${t("chapters")}`}
                    after={<CourseButton />}
                    onClick={() => handleGoToCourse(course)}
                  />
                ))}
              </Section>
            ) : (
              <></> // Сообщение, если курсы не найдены
            )}
          </>
        )}

        {!search && (
          <>
            {isVisibleStoriesCard && (
              <Card style={{ marginTop: "20px" }}>
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
                      {t("ReadMore")}
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

            <div style={{ marginTop: "20px" }}>
              {categoriesWithCourses.map((categoryName) => {
                const courses = groupedCourses[categoryName];
                const limitedCourses = courses.slice(0, 3);
                return (
                  <Section
                    key={categoryName}
                    header={<Section.Header>{t(categoryName)}</Section.Header>}
                    style={{
                      height: "100%",
                    }}
                  >
                    <Section>
                      {limitedCourses.map((course) => (
                        <Cell
                          key={course.id}
                          after={
                            <Button
                              children="Start"
                              size="s"
                              mode="bezeled"
                              onClick={() => handleGoToCourse(course)}
                            />
                          }
                          before={
                            <Image
                              src={course.img}
                              size={48}
                              style={{ borderRadius: "5px" }}
                            />
                          }
                          subtitle={`${course.chapters.length} ${t(
                            "chapters"
                          )}`}
                          onClick={() => handleGoToCourse(course)}
                          children={t(course.id.toString() + ".Course_name")}
                        />
                      ))}
                    </Section>

                    {/* Показывать кнопку "Browse all", если курсов больше 3 */}
                    {courses.length > 3 && (
                      <Section>
                        <Button
                          style={{
                            width: "100%",
                          }}
                          children="Browse all"
                          size="m"
                          mode="plain"
                          onClick={() => {
                            console.log(categoryName);
                            navigate(`/category/${categoryName}`);
                          }}
                        />
                      </Section>
                    )}
                  </Section>
                );
              })}

              {categoriesWithoutCourses.length > 0 && (
                <Section style={{ marginTop: 16, marginBottom: 80 }}>
                  <Cell
                    before={
                      <Image size={48}>
                        <Icon24Info />
                      </Image>
                    }
                    children="More courses coming"
                    subtitle="Follow Target community for updates"
                    after={
                      <Button
                        children="Follow"
                        size="s"
                        mode="bezeled"
                        onClick={() =>
                          window.open(
                            i18n.language === "ru"
                              ? "https://t.me/thetarget_courses_ru"
                              : "https://t.me/thetarget_courses",
                            "_blank"
                          )
                        }
                      />
                    }
                    multiline
                  />
                </Section>
              )}
            </div>
          </>
        )}
      </div>

      {/* <Section style={{ marginTop: 16 }}>
        <Cell
          style={{
            border: "none",
            alignItems: "flex-start",
            marginBottom: 100,
          }}
          hint=""
          interactiveAnimation=""
          subhead=""
          titleBadge=""
          children={t("more_courses")}
          subtitle={t("more_courses_soon")}
          description={
            <Button
              style={{ borderRadius: 40, margin: "8px 0", height: "5vh" }}
            >
              {t("follow_us")}
            </Button>
          }
          after=""
          before={
            <Avatar
              size={48}
              style={{ borderRadius: "5px", marginTop: "30%" }}
              src="https://i.ibb.co/CtPSccK/photo-2024-11-10-13-12-28.jpg"
            />
          }
          onClick={() =>
            window.open(
              i18n.language === "ru"
                ? "https://t.me/thetarget_courses_ru"
                : "https://t.me/thetarget_courses",
              "_blank"
            )
          }
        ></Cell>
      </Section> */}

      {!courses && (
        <Placeholder
          style={{ paddingTop: 16, paddingBottom: 16 }}
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
