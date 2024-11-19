import {
  Section,
  Chip,
  Title,
  Cell,
  List,
  Button,
  Image,
  Card,
  Text,
  FixedLayout,
  Avatar,
  Divider,
  Placeholder,
  Subheadline,
} from "@telegram-apps/telegram-ui";
import WebApp from "@twa-dev/sdk";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import "./p.css";
import { UserContext } from "@/contexts/UserContext";
import { getAllChapters, getCourseDetails } from "@/Utils/thinkificAPI";
import { PopUp } from "../PurchasePage/PopUp";
import { Chapters } from "../Courses/Chapters1";
import {
  Icon24Clock,
  Icon20PlayCircle,
  Icon16StarAlt,
  Icon16Clear,
  Icon24ShareOutline,
} from "@vkontakte/icons";
import { groupedVideos } from "@/Utils/Constants";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import axios from "axios";
import * as amplitude from "@amplitude/analytics-browser";
import { courseConfig } from "@/Utils/Constants";
/**
 * @returns {JSX.Element}
 */
const BASE_URL = "https://mini-app-back.friendsdao.com/dev";

const getInitData = () => {
  const initData = window.Telegram?.WebApp?.initData || "";
  return btoa(initData);
};

export function CoursePage() {
  const params = useParams();
  const [course, setCourse] = useState(null);
  const [chapters, setChapters] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [isWaitList, setIsWaitList] = useState(false);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(null);
  const { t, i18n } = useTranslation();
  const waitlistRequestSent = useRef(false);
  const [loading, setLoading] = useState(true);
  const [isVisibleStoriesCard, setIsVisibleStoriesCard] = useState(true);
  const [isVisibleGetIt, setisVisibleGetIt] = useState(false);
  const setupMainButtonForWaitlist = () => {
    if (course?.my) {
      window.Telegram.WebApp.MainButton.text = "You in waitlist";
      window.Telegram.WebApp.MainButton.show();
      window.Telegram.WebApp.MainButton.onClick(null);
    } else {
      window.Telegram.WebApp.MainButton.text = "Join to waitlist";
      window.Telegram.WebApp.MainButton.show();
      window.Telegram.WebApp.MainButton.onClick(handleJoinWaitlist);
    }
  };

  const setupMainButtonForRegularCourse = () => {
    if (window.Telegram.WebApp.MainButton.text != "You have new course!") {
      window.Telegram.WebApp.MainButton.text = t("get_course_from");
      window.Telegram.WebApp.MainButton.show();
      window.Telegram.WebApp.MainButton.onClick(handleOpenPopUp);
    }
  };

  const formattedTimestamp = course?.timestamp
    ? format(new Date(course?.timestamp * 1000), "dd.MM.yyyy HH:mm")
    : null;
  const starIconSvg = `
<svg width="14" height="15" viewBox="0 0 14 15" fill="#24A1DE" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.63869 12.1902L3.50621 14.1092C3.18049 14.3087 2.75468 14.2064 2.55515 13.8807C2.45769 13.7216 2.42864 13.5299 2.47457 13.3491L2.95948 11.4405C3.13452 10.7515 3.60599 10.1756 4.24682 9.86791L7.6642 8.22716C7.82352 8.15067 7.89067 7.95951 7.81418 7.80019C7.75223 7.67116 7.61214 7.59896 7.47111 7.62338L3.66713 8.28194C2.89387 8.41581 2.1009 8.20228 1.49941 7.69823L0.297703 6.69116C0.00493565 6.44581 -0.0335059 6.00958 0.211842 5.71682C0.33117 5.57442 0.502766 5.48602 0.687982 5.47153L4.35956 5.18419C4.61895 5.16389 4.845 4.99974 4.94458 4.75937L6.36101 1.3402C6.5072 0.987302 6.91179 0.819734 7.26469 0.965925C7.43413 1.03612 7.56876 1.17075 7.63896 1.3402L9.05539 4.75937C9.15496 4.99974 9.38101 5.16389 9.6404 5.18419L13.3322 5.47311C13.713 5.50291 13.9975 5.83578 13.9677 6.2166C13.9534 6.39979 13.8667 6.56975 13.7269 6.68896L10.9114 9.08928C10.7131 9.25826 10.6267 9.52425 10.6876 9.77748L11.5532 13.3733C11.6426 13.7447 11.414 14.1182 11.0427 14.2076C10.8642 14.2506 10.676 14.2208 10.5195 14.1249L7.36128 12.1902C7.13956 12.0544 6.8604 12.0544 6.63869 12.1902Z" fill="000"></path>
</svg>
`;

  const handleJoinWaitlist = async () => {
    if (waitlistRequestSent.current) {
      console.log("Запрос уже отправлен, повторное отправление не требуется");
      return; // Якщо запит вже був відправлений, не відправляємо його ще раз
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/enroll`,
        { user_id: user.id, app_id: course?.id, count: 1 },
        {
          params: { type: 3 },
          headers: { User: getInitData() },
        }
      );

      console.log("Запрос на добавление в waitlist отправлен:", response.data);
      amplitude.track("add_course_to_waitlist");
      // Установим флаг, что запрос был отправлен
      waitlistRequestSent.current = true;

      // Показуем пользователю сообщение о добавлении в waitlist
      if (i18n.language === "ru") {
        alert(`Курс ${course_data?.title} был добавлен в список ожиданий`);
      } else {
        alert(`Course ${course_data?.title} was added to your Waitlist`);
      }

      // Изменим текст кнопки
      window.Telegram.WebApp.MainButton.text = "You in waitlist";
    } catch (error) {
      console.error("Ошибка при добавлении в waitlist:", error);
      window.Telegram.WebApp.MainButton.text = "You in waitlist";
      // Выводим сообщение об ошибке или другие действия при ошибке
      if (i18n.language === "ru") {
        alert(`Курс ${course_data?.title} был добавлен в список ожиданий`);
      } else {
        alert(`Course ${course_data?.title} was added to your Waitlist`);
      }
    } finally {
      // В любом случае вызываем handleOpenPopUp, даже если произошла ошибка
      window.Telegram.WebApp.MainButton.text = "You in waitlist";
      if (i18n.language === "ru") {
        alert(`Курс ${course_data?.title} был добавлен в список ожиданий`);
      } else {
        alert(`Course ${course_data?.title} was added to your Waitlist`);
      }
    }
  };

  const handleOpenChapters = (index) => {
    if (!course.my && index === 1) {
      amplitude.track("free_chapter_open");
    }

    amplitude.track("open_chapters");
    setSelectedChapterIndex(index); // Set the selected chapter index
    navigate(`/courses/${course?.id}/chapters/${index}`); // Navigate to the chapter page
    window.Telegram.WebApp.MainButton.hide();
  };

  const handleCloseHint = () => {
    amplitude.track("Hide What Traget is");
    localStorage.setItem("closeOnBoarding", "true");
    setIsVisibleStoriesCard(false);
  };

  // Function to check if a chapter is completed
  const isChapterCompleted = (courseId, index) => {
    console.log(courseId + " " + index);
    const completedChapters =
      JSON.parse(localStorage.getItem("completedChapters")) || {};
    return (
      completedChapters[parseInt(courseId, 10)]?.includes(
        parseInt(index, 10)
      ) || false
    );
  };
  const courseTagsConfig = {
    2925675: ["Digital", "TON", "Telegram"],
    2926478: ["Fitness", "Training"],
    2930629: ["Analytic", "Beginners"],
    2930630: ["Digital", "UX"],
    2930631: ["Digital", "Beginners", "Data"],
    2930632: ["Telegram", "TON", "Digital", "TMA"],
  };

  const getTranslatedTags = (courseId) => {
    return (courseTagsConfig[courseId] || []).map((tag) =>
      t(`course_tags.${tag}`)
    );
  };
  //   const star = <svg width="14" height="15" viewBox="0 0 14 15" fill="#24A1DE" xmlns="http://www.w3.org/2000/svg">
  //     <path fill-rule="evenodd" clip-rule="evenodd" d="M6.63869 12.1902L3.50621 14.1092C3.18049 14.3087 2.75468 14.2064 2.55515 13.8807C2.45769 13.7216 2.42864 13.5299 2.47457 13.3491L2.95948 11.4405C3.13452 10.7515 3.60599 10.1756 4.24682 9.86791L7.6642 8.22716C7.82352 8.15067 7.89067 7.95951 7.81418 7.80019C7.75223 7.67116 7.61214 7.59896 7.47111 7.62338L3.66713 8.28194C2.89387 8.41581 2.1009 8.20228 1.49941 7.69823L0.297703 6.69116C0.00493565 6.44581 -0.0335059 6.00958 0.211842 5.71682C0.33117 5.57442 0.502766 5.48602 0.687982 5.47153L4.35956 5.18419C4.61895 5.16389 4.845 4.99974 4.94458 4.75937L6.36101 1.3402C6.5072 0.987302 6.91179 0.819734 7.26469 0.965925C7.43413 1.03612 7.56876 1.17075 7.63896 1.3402L9.05539 4.75937C9.15496 4.99974 9.38101 5.16389 9.6404 5.18419L13.3322 5.47311C13.713 5.50291 13.9975 5.83578 13.9677 6.2166C13.9534 6.39979 13.8667 6.56975 13.7269 6.68896L10.9114 9.08928C10.7131 9.25826 10.6267 9.52425 10.6876 9.77748L11.5532 13.3733C11.6426 13.7447 11.414 14.1182 11.0427 14.2076C10.8642 14.2506 10.676 14.2208 10.5195 14.1249L7.36128 12.1902C7.13956 12.0544 6.8604 12.0544 6.63869 12.1902Z" fill="000"></path>
  // </svg>
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
    if (!user) {
      navigate("/");
      return;
    }
    if (user.courseIdLink) {
      setUser({
        ...user, // Preserve other user properties
        courseIdLink: null, // Set courseIdLink to null
      });
    }
    // Функція для завантаження курсу
    const loadCourseDetails = async () => {
      try {
        const courseData = await getCourseDetails(user.id, params.courseId); // Загрузка курса
        setCourse(courseData);
        handleGetAllChapters();
        setLoading(false);
      } catch (error) {
        console.error("Не удалось загрузить курс:", error);
      } finally {
        setLoading(false); // Снимаем состояние загрузки
      }
    };

    loadCourseDetails();

    amplitude.track("load_my_course");

    const handleGetAllChapters = async () => {
      try {
        const courseList = await getAllChapters(params.courseId, user.id);
        setChapters(courseList);
      } catch (error) {
        console.error("Не удалось загрузить главы:", error);
      }
    };
  }, [params, user, navigate]);

  const handleGoToStories = () => {
    amplitude.track("Open Stories from Course Page");
    navigate("/courses/stories");
  };

  useEffect(() => {
    if (course?.my) {
      window.Telegram.WebApp.MainButton.hide();
    } else if (course?.id === 2930632) {
      amplitude.track("load_waitlist");
      setIsWaitList(true);
      setupMainButtonForWaitlist();
    } else {
      setupMainButtonForRegularCourse();
    }

    if (localStorage.getItem("closeOnBoarding")) {
      setIsVisibleStoriesCard(false);
    }

    if (localStorage.getItem("hasSeenAllStories")) {
      setisVisibleGetIt(true);
    }

    return () => {
      window.Telegram.WebApp.MainButton.offClick(handleOpenPopUp);
    };
  }, [course]);

  const handleOpenPopUp = () => {
    if (loading) {
      return; // Если курс все еще загружается, ничего не делать
    }

    // Действия, которые можно выполнять после загрузки курса
    amplitude.track("open_buy_choise_menu");
    console.log(course);
    navigate("/buy", { state: { course } });
  };
  const handleShareCourse = () => {
    amplitude.track("share_course");
    const shareLink = `https://t.me/share/url?url=http://t.me/thetargetbot/learn?startapp=course-${course.id}_source-${user.id}\n`;
    window.open(shareLink, "_blank");
  };

  if (loading) {
    return null;
  }

  return (
    <div>
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          overflow: "hidden",
          margin: "-2vh 0 auto",
        }}
      >
        <img
          src={courseConfig[course?.id]?.img || "default_image_path_here"}
          width="100%"
          height="150px"
          style={{ objectFit: "cover", display: "block" }}
        />
      </div>

      <List style={{ padding: "10px 10px" }}>
        <Title level="1" weight="2">
          {t(course?.id.toString() + ".Course_name")}
        </Title>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text weight="3">{t("Course")}</Text>
          <Icon24ShareOutline onClick={handleShareCourse} />
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          {getTranslatedTags(course?.id).map((translatedTag, index) => (
            <Chip key={index} mode="mono">
              {translatedTag}
            </Chip>
          ))}
        </div>
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
        {/* If the course belongs to the user, show validity date */}
        {course?.my && course?.type == 1 && (
          <Section style={{ marginTop: 8 }}>
            <Cell
              style={{ pointerEvents: "none" }}
              before={<Icon24Clock />}
              hint={formattedTimestamp}
              subhead={t("valid")}
            />
          </Section>
        )}

        <Card>
          <Cell
            multiline
            subhead={t("Description")}
            children={t(course?.id.toString() + ".Description")}
          />
          <Divider />
          {course?.id == 2925675 && (
            <>
              <Cell multiline subhead={t("Video_lan")} children="English" />

              <Divider />
              <Cell
                multiline
                subhead={t("Video_dur")}
                children={t("Video_val")}
              />
            </>
          )}
          {course?.id == 2926478 && (
            <>
              <Cell multiline subhead={t("Video_lan")} children="Russian" />

              <Divider />
              <Cell
                multiline
                subhead={t("Video_dur")}
                children={t("Video_val2")}
              />
            </>
          )}
        </Card>

        <Text weight="1">{t("Chapters")}</Text>

        {course?.my && course?.id != 2930632 ? (
          <div>
            <Section style={{ marginTop: 8 }}>
              {chapters.map((chapter, index) => (
                <Cell
                  key={chapter.id}
                  subhead={`${t("Chapter")} ${index + 1}`} // Заголовок "Chapter X"
                  multiline={true}
                  onClick={
                    !isWaitList ? () => handleOpenChapters(chapter.id) : null
                  }
                  subtitle={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Button
                        style={{ marginTop: 8 }}
                        before={<Icon20PlayCircle />}
                        size="s"
                        mode="bezeled"
                      >
                        {t("Open")} {/* Кнопка открытия */}
                      </Button>
                      {isChapterCompleted(course?.id, index + 1) && (
                        <>
                          <Icon16StarAlt
                            style={{ marginLeft: "8px", marginTop: 8 }}
                          />
                          <Text
                            style={{
                              marginLeft: "8px",
                              fontSize: "14px",
                              marginTop: 8,
                            }}
                          >
                            {t("Completed")}
                          </Text>
                        </>
                      )}
                    </div>
                  }
                >
                  {t(course?.id.toString() + "." + "chapters." + chapter.id)}{" "}
                  {/* Замените на нужный ключ перевода */}
                </Cell>
              ))}
            </Section>
          </div>
        ) : (
          <>
            <Section style={{ marginTop: 8 }}>
              {/* Первая глава */}
              {course?.id === 2930632 ? (
                // Если курс с id 2930632, первая глава всегда неактивна
                <Cell
                  key={chapters[0]?.id}
                  style={{ pointerEvents: "none" }} // Первая глава неактивна
                  subhead={`${t("Chapter")} 1`}
                  children={t(`${course?.id}.${"chapters"}.${chapters[0]?.id}`)}
                  subtitle={
                    <div>
                      <div className="card-items-inf">
                        <div>{`${t("Less_len")} ${
                          chapters[0]?.chapter_item_id
                        }`}</div>
                      </div>
                    </div>
                  }
                />
              ) : isVisibleGetIt ? (
                // Если isVisibleGetIt = true, показываем кнопку "Get it for Free"
                <Cell
                  key={chapters[0]?.id}
                  subhead={`${t("Chapter")} 1`}
                  multiline={true}
                  onClick={() => handleOpenChapters(chapters[0]?.id)} // Открыть главу
                  subtitle={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Button style={{ marginTop: 8, width: "100vw" }} size="m">
                        {t("Get_it_forFree")}
                      </Button>
                    </div>
                  }
                >
                  {t(`${course?.id}.${"chapters"}.${chapters[0]?.id}`)}
                </Cell>
              ) : (
                // Если isVisibleGetIt = false, также показываем кнопку "Get it for Free"
                <Cell
                  style={{
                    pointerEvents: course?.id === 2930632 ? "none" : "auto",
                  }} // Главы блокируются для курса 2930632
                  subhead={`${t("Chapter")} ${1}`} // Номер главы
                  children={t(
                    course?.id.toString() + "." + "chapters." + chapters[0]?.id
                  )}
                  subtitle={
                    <div>
                      <div className="card-items-inf">
                        <div>{`${t("Less_len")} ${
                          chapters[0]?.chapter_item_id
                        }`}</div>
                        {course?.id === 2925675 && (
                          <>
                            •<div>{`${t("Video_count")} 2`}</div>
                          </>
                        )}
                      </div>
                    </div>
                  }
                  onClick={!isWaitList ? handleOpenPopUp : null} // Открыть попап покупки для заблокированных глав
                  multiline={true}
                />
              )}

              {/* Остальные главы */}
              {chapters.slice(1).map((chapter, index) => {
                const videosInChapter = groupedVideos[chapter.id]; // Получаем видео для этого раздела
                const videoCount = videosInChapter ? videosInChapter.length : 0; // Подсчитываем количество видео

                return (
                  <div key={chapter.id}>
                    <Cell
                      style={{
                        pointerEvents: course?.id === 2930632 ? "none" : "auto",
                      }} // Главы блокируются для курса 2930632
                      subhead={`${t("Chapter")} ${index + 2}`} // Номер главы
                      children={t(
                        course?.id.toString() + "." + "chapters." + chapter.id
                      )}
                      subtitle={
                        <div>
                          <div className="card-items-inf">
                            <div>{`${t("Less_len")} ${
                              chapter.chapter_item_id
                            }`}</div>
                            {course?.id === 2925675 && (
                              <>
                                •
                                <div>{`${t("Video_count")} ${videoCount}`}</div>
                              </>
                            )}
                          </div>
                        </div>
                      }
                      onClick={!isWaitList ? handleOpenPopUp : null} // Открыть попап покупки для заблокированных глав
                      multiline={true}
                    />
                    {index < chapters.length - 1 && <Divider />}{" "}
                    {/* Разделитель между главами */}
                  </div>
                );
              })}
            </Section>
          </>
        )}

        {/* <Text weight="1">{t('Menthors')}</Text>

        {!course?.my ? (
          <Section style={{ marginTop: 8 }}>
            <Cell
              subtitle="Krud Live"
              children="David Kruel"
              before={<Avatar size={32} src={`https://t.me/i/userpic/320/markokhman.jpg`} />}
              after={<Button mode="plain" style={{ borderRadius: "50px" }} after={star}>50</Button>}
            />
          </Section>
        ) : (
          <Section style={{ marginTop: 8 }}>
            <Cell
              hint="David Kruel"
                subhead="Krud Live"
                 onClick={() => window.open('https://t.me/markokhman', '_blank')}
              subtitle={
                <Button
                  style={{ marginTop: 8 }}
                  before={<Icon24Message />}
                  size="s"
                  mode="bezeled"
                >
                  {t('Contact_via_Telegram')}
                </Button>
              }
            />
          </Section>
        )} */}

        {course?.id === 2930632 && course?.my && (
          <FixedLayout
            style={{
              padding: 16,
            }}
          >
            <Button size="l" stretched>
              {t("YouWaitlist")}
            </Button>
          </FixedLayout>
        )}
      </List>
    </div>
  );
}
