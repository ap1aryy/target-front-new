import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { courseMappings } from "./CoursesMapping";
import * as amplitude from "@amplitude/analytics-browser";
import { useTranslation } from "react-i18next";
import { Button } from "@telegram-apps/telegram-ui";
import "./Chapters.css";

export function Chapters() {
  const navigate = useNavigate();
  const { courseId, index } = useParams();
  const { t, i18n } = useTranslation();

  const [progress, setProgress] = useState(0); // Состояние для прогресса
  const chapterRef = useRef(null); // Реф для отслеживания прокрутки
  const startTouch = useRef(null);

  useEffect(() => {
    // Отключаем прокрутку на родительском элементе
    document.body.style.overflow = "hidden";

    window.Telegram.WebApp.BackButton.show();
    window.Telegram.WebApp.BackButton.onClick(handleClose);

    const handleTouchStart = (e) => {
      startTouch.current = e.touches[0].clientY;
    };
    const handleTouchMove = (e) => {
      if (startTouch.current !== null) {
        const delta = e.touches[0].clientY - startTouch.current;
        if (delta < -50) setIsFullScreen(true);
      }
    };
    const handleTouchEnd = () => {
      startTouch.current = null;
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      // Восстанавливаем прокрутку после выхода с компонента
      document.body.style.overflow = "auto";

      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [index]);

  const handleClose = () => {
    amplitude.track("close_chapter");
    navigate(`/courses/${courseId}`);
  };

  const handleFinishLesson = () => {
    amplitude.track("finish_chapter");
    const completedChapters =
      JSON.parse(localStorage.getItem("completedChapters")) || {};

    if (!completedChapters[courseId]) {
      completedChapters[courseId] = [];
    }

    if (!completedChapters[courseId].includes(parseInt(index, 10))) {
      completedChapters[courseId].push(parseInt(index, 10));
      localStorage.setItem(
        "completedChapters",
        JSON.stringify(completedChapters)
      );
    }

    handleClose();
  };

  const renderLessons = () => {
    const language = i18n.language;
    const lessonsModule = courseMappings[language]?.[courseId];

    if (!lessonsModule) {
      console.error(
        `Course with courseId ${courseId} not found for language ${language}.`
      );
      return null;
    }

    const lessonKey = `Lesson${index}`;
    const lessons = Object.keys(lessonsModule)
      .filter((key) => key.startsWith(lessonKey))
      .map((key) => lessonsModule[key]);

    return lessons.map((LessonComponent, i) => (
      <div key={i}>
        <LessonComponent />
      </div>
    ));
  };

  // Функция для вычисления прогресса
  const handleScroll = () => {
    const chapterElement = chapterRef.current;
    if (chapterElement) {
      const scrollTop = chapterElement.scrollTop;
      const scrollHeight = chapterElement.scrollHeight;
      const clientHeight = chapterElement.clientHeight;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setProgress(scrolled);
    }
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px", // Высота полоски
          backgroundColor: "var(--tg-theme-accent-text-color)", // Цвет полоски
          width: `${progress}%`, // Прогресс полоски
          zIndex: 1000, // Чтобы полоска была поверх контента
        }}
      ></div>

      <div
        ref={chapterRef}
        onScroll={handleScroll}
        style={{
          paddingTop: "8px", // Отступ сверху для прогресс-бара
          height: "100vh", // Ограничиваем высоту экрана
          overflowY: "auto", // Разрешаем вертикальную прокрутку внутри компонента
          overflowX: "hidden",
        }}
      >
        <div>
          <div onClick={(e) => e.stopPropagation()}>
            <div className="chapter">{renderLessons()}</div>
            <Button
              style={{ width: "100%", marginTop: 16, marginBottom: 16 }}
              onClick={handleFinishLesson}
            >
              {t("chapters1_finish")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
