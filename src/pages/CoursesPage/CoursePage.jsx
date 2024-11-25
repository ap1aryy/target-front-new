// CoursePage.js
import React, { useEffect, useState, useContext, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "@/contexts/UserContext";
import { getCourseDetails, getAllChapters } from "@/Utils/thinkificAPI";
import * as amplitude from "@amplitude/analytics-browser";
import { Button, FixedLayout } from "@telegram-apps/telegram-ui";
import WebApp from "@twa-dev/sdk";
import Head from "./Components/Head";
import Description from "./Components/Description";
import ChaptersList from "./Components/ChapterList";
import WhatIsTarget from "./Components/WhatIsTarget";
import { useTranslation } from "react-i18next";
import "./Style.css";
import Salary from "./Components/Salary";
import axios from "axios";

const BASE_URL = "https://mini-app-back.friendsdao.com/dev";

const getInitData = () => {
  const initData = window.Telegram?.WebApp?.initData || "";
  return btoa(initData);
};

export function CoursePage() {
  const params = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [chapters, setChapters] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [isVisibleStoriesCard, setIsVisibleStoriesCard] = useState(true);
  const [isWaitList, setIsWaitList] = useState(false);
  const { t, i18n } = useTranslation();
  const [isVisibleGetIt, setisVisibleGetIt] = useState(false);
  const waitlistRequestSent = useRef(false);
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

  useEffect(() => {
    function onClick() {
      navigate("/");
    }
    !WebApp.BackButton.isVisible && WebApp.BackButton.show();
    WebApp.BackButton.onClick(onClick);
    amplitude.track("back_to_home");
    return () => WebApp.BackButton.offClick(onClick);
  }, [navigate]);

  const handleShareCourse = () => {
    amplitude.track("share_course");
    const shareLink = `https://t.me/share/url?url=http://t.me/thetargetbot/learn?startapp=course-${course.id}_source-${user.id}\n`;
    window.open(shareLink, "_blank");
  };

  const handleGoToStories = () => {
    amplitude.track("Open Stories from Course Page");
    navigate("/courses/stories");
  };

  const handleOpenChapters = (index) => {
    if (!course.my && index === 1) {
      amplitude.track("free_chapter_open");
    }

    amplitude.track("open_chapters");
    navigate(`/courses/${course?.id}/chapters/${index}`); // Navigate to the chapter page
    WebApp.MainButton.hide();
  };

  const handleCloseHint = () => {
    setIsVisibleStoriesCard(false);
  };

  const setupMainButtonForWaitlist = () => {
    console.log("1");
    if (course?.my) {
      WebApp.MainButton.text = "You in waitlist";
      WebApp.MainButton.show();
      WebApp.MainButton.onClick(null);
    } else {
      WebApp.MainButton.text = "Join to waitlist";
      WebApp.MainButton.show();
      WebApp.MainButton.onClick(handleJoinWaitlist);
    }
  };

  const setupMainButtonForRegularCourse = () => {
    if (WebApp.MainButton.text != "You have new course!") {
      WebApp.MainButton.text = t("get_course_from");
      WebApp.MainButton.show();
      WebApp.MainButton.onClick(handleOpenPopUp);
    }
  };

  useEffect(() => {
    console.log("1");
    if (course?.id === 2930632) {
      WebApp.MainButton.hide();
      console.log("1");
      amplitude.track("load_waitlist");
      setIsWaitList(true);
      setupMainButtonForWaitlist();
    } else if (course?.my) {
      WebApp.MainButton.hide();
    } else if (course) {
      console.log("2");
      setupMainButtonForRegularCourse();
    }

    if (localStorage.getItem("closeOnBoarding")) {
      setIsVisibleStoriesCard(false);
      setisVisibleGetIt(true);
    }

    return () => {
      WebApp.MainButton.offClick(handleOpenPopUp);
    };
  }, [course]);

  const handleJoinWaitlist = async () => {
    if (waitlistRequestSent.current) {
      console.log("Запрос уже отправлен, повторное отправление не требуется");
      return;
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
      waitlistRequestSent.current = true;

      if (i18n.language === "ru") {
        alert(`Курс ${course_data?.title} был добавлен в список ожиданий`);
      } else {
        alert(`Course ${course_data?.title} was added to your Waitlist`);
      }

      window.Telegram.WebApp.MainButton.text = "You in waitlist";
    } catch (error) {
      console.error("Ошибка при добавлении в waitlist:", error);
      window.Telegram.WebApp.MainButton.text = "You in waitlist";
      if (i18n.language === "ru") {
        alert(`Курс ${course_data?.title} был добавлен в список ожиданий`);
      } else {
        alert(`Course ${course_data?.title} was added to your Waitlist`);
      }
    } finally {
      window.Telegram.WebApp.MainButton.text = "You in waitlist";
      if (i18n.language === "ru") {
        alert(`Курс ${course_data?.title} был добавлен в список ожиданий`);
      } else {
        alert(`Course ${course_data?.title} was added to your Waitlist`);
      }
    }
  };

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
  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка страницы к верхней части
  }, []);
  const handleOpenPopUp = () => {
    if (loading) {
      return; // Если курс все еще загружается, ничего не делать
    }

    // Действия, которые можно выполнять после загрузки курса
    amplitude.track("open_buy_choise_menu");
    console.log(course);
    navigate("/buy", { state: { course } });
  };
  return (
    <div>
      <Head
        course={course}
        user={user}
        t={t}
        handleShareCourse={handleShareCourse}
      />
      <Description course={course} t={t} />
      {isVisibleStoriesCard && (
        <WhatIsTarget
          t={t}
          handleGoToStories={handleGoToStories}
          handleCloseHint={handleCloseHint}
          isVisibleStoriesCard={isVisibleStoriesCard}
        />
      )}
      {course?.id != 2926478 && <Salary t={t} />}
      <ChaptersList
        course={course}
        chapters={chapters}
        t={t}
        isWaitList={isWaitList}
        handleOpenChapters={handleOpenChapters}
        isChapterCompleted={isChapterCompleted}
        isVisibleGetIt={isVisibleGetIt}
        handleOpenPopUp={handleOpenPopUp}
      />
    </div>
  );
}
