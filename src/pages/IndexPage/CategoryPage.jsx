import {
  Image,
  List,
  Button,
  Input,
  Tappable,
  Section,
  Cell,
  Card,
  Avatar,
  Breadcrumbs,
  Placeholder,
} from "@telegram-apps/telegram-ui";
import {
  Icon16Clear,
  Icon20ChevronRightOutline,
  Icon24Info,
} from "@vkontakte/icons";
import WebApp from "@twa-dev/sdk";
import { useState, useEffect } from "react";
import { Icon24Search, Icon24Dismiss } from "@vkontakte/icons";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";
import { BreadCrumbsItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/Breadcrumbs/components/BreadCrumbsItem/BreadCrumbsItem";
import { useNavigate, useParams } from "react-router-dom";
import { CoursesData } from "@/Utils/Constants";
import { useTranslation } from "react-i18next";
import { courseConfig } from "@/Utils/Constants";
/**
 * @returns {JSX.Element}
 */
export function TargetCategory() {
  const [search, setSearch] = useState("");
  const { categoryName } = useParams(); // Отримуємо категорію з параметрів маршруту
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const CourseButton = () => {
    return <Button children="Start" size="s" mode="bezeled" />;
  };
  useEffect(() => {
    function onClick() {
      navigate("/");
    }
    !WebApp.BackButton.isVisible && WebApp.BackButton.show();
    WebApp.BackButton.onClick(onClick);
    amplitude.track("back_to_home");
    return () => WebApp.BackButton.offClick(onClick);
  }, [navigate]);
  useEffect(() => {
    if (!search) return;
    console.log("search:", search);
  }, [search]);

  const groupedCourses = CoursesData.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});
  const coursesInCategory = groupedCourses[categoryName] || [];
  const limitedCourses = coursesInCategory.slice(0, 100); // Обмежуємо список курсів до 3
  const filteredCourses = CoursesData.filter((course) => {
    const courseName = t(course.id.toString() + ".Course_name").toLowerCase();
    return courseName.includes(search.toLowerCase());
  });

  const handleGoToCourse = (course) => {
    amplitude.track("open_best_choise");
    navigate(`/courses/${course.id}`);
  };

  return (
    <>
      <List>
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
              {search && <Icon24Dismiss />}
              {!search && <Icon24Search />}
            </Tappable>
          }
        />

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
            {limitedCourses.length != 0 && (
              <SectionHeader>
                {t("Courses in category")} {t(categoryName)}
              </SectionHeader>
            )}
            {limitedCourses.map((course) => (
              <Card
                type="ambient"
                key={course.id}
                style={{
                  width: "100%",
                }}
                onClick={() => handleGoToCourse(course)}
              >
                <Image
                  src={course.img}
                  style={{
                    display: "block",
                    objectFit: "cover",
                    height: 200,
                    width: "100%",
                  }}
                  alt={course.title}
                />
                <Card.Cell
                  readOnly
                  subtitle={
                    <Breadcrumbs divider="dot">
                      <BreadCrumbsItem style={{ paddingLeft: 0 }}>
                        {courseConfig[course.id]?.chapters} {t("chapters")}
                      </BreadCrumbsItem>
                      <BreadCrumbsItem>
                        {courseConfig[course.id]?.duration} {t("hours")}
                      </BreadCrumbsItem>

                      {courseConfig[course.id]?.videos !== "0 " && (
                        <>
                          <BreadCrumbsItem style={{ paddingRight: 0 }}>
                            {courseConfig[course.id]?.videos} {t("videos")}
                          </BreadCrumbsItem>
                        </>
                      )}
                    </Breadcrumbs>
                  }
                  children={t(course.id.toString() + ".Course_name")}
                />
              </Card>
            ))}
          </>
        )}
      </List>
      {limitedCourses.length === 0 && (
        <>
          <Placeholder
            style={{ paddingTop: 16, paddingBottom: 16 }}
            description={t("No courses in the category yet")}
          >
            <img
              width="75%"
              alt="Telegram sticker"
              src="https://s1.gifyu.com/images/Sy9DJ.gif"
            />
          </Placeholder>
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
        </>
      )}
    </>
  );
}
