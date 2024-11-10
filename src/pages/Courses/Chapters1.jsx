import { useEffect, useRef, useState } from 'react';
import { Title, List, Button, Text, Section, Cell } from '@telegram-apps/telegram-ui';
import './Chapters.css';
import { Icon16Cancel } from '@vkontakte/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { courseMappings } from './CoursesMapping';

export function Chapters() {
  const navigate = useNavigate();
  const { index } = useParams();
  const id = location.state?.courseId;
 
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.Telegram.WebApp.BackButton.show();
    window.Telegram.WebApp.BackButton.onClick(handleClose);

    const handleTouchStart = (e) => { startTouch.current = e.touches[0].clientY; };
    const handleTouchMove = (e) => {
      if (startTouch.current !== null) {
        const delta = e.touches[0].clientY - startTouch.current;
        if (delta < -50) setIsFullScreen(true);
      }
    };
    const handleTouchEnd = () => { startTouch.current = null; };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    const lastCompletedLesson = localStorage.getItem(`chapter_${index}_lastLesson`);
    if (lastLessonRef.current && lastCompletedLesson) {
      lastLessonRef.current.scrollIntoView();
    }

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [index]);

  const handleClose = () => {
  navigate(-1);
};

 const handleFinishLesson = () => {
  const completedChapters = JSON.parse(localStorage.getItem('completedChapters')) || [];
  handleClose();

  if (!completedChapters.includes(index)) {
    completedChapters.push(parseInt(index, 10));  // Преобразование в целое число с основанием 10
    localStorage.setItem('completedChapters', JSON.stringify(completedChapters));
  }
};

const renderLessons = () => {
  const language = i18n.language;
  const lessonsModule = courseMappings[language]?.[id];

  if (!lessonsModule) {
    console.error(`Course with id ${id} not found for language ${language}.`);
    return null;
  }

  // Определение уроков на основе главы
  const lessonKey = `Lesson${index}`;
  const lessons = Object.keys(lessonsModule)
    .filter(key => key.startsWith(lessonKey))
    .map(key => lessonsModule[key]);

  return lessons.map((LessonComponent, i) => (
    <div key={i} ref={i === lessons.length - 1 ? lastLessonRef : null}>
      <LessonComponent />
    </div>
  ));
};


  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className={`popup-menu2`} style={{ height: "100%" }} onClick={(e) => e.stopPropagation()}>
        {renderLessons()}
        <Button style={{ width: "100%", marginTop: 16, marginBottom: 16 }} onClick={handleFinishLesson}>
          {t('chapters1_finish')}
        </Button>
      </div>
    </div>
  );
}
