import { useEffect, useRef, useState } from 'react';
import { Title, List, Button, Text, Section, Cell } from '@telegram-apps/telegram-ui';
import './Chapters.css';
import { Icon16Cancel } from '@vkontakte/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { courseMappings } from './CoursesMapping';
import * as amplitude from '@amplitude/analytics-browser';
export function Chapters() {
  const navigate = useNavigate();
   const { courseId, index } = useParams();
   amplitude.track('load_chapter');
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
  

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [index]);

  const handleClose = () => {
    amplitude.track('close_chapter');
  navigate(-1);
};

 const handleFinishLesson = () => {
  amplitude.track('finish_chapter');
  const completedChapters = JSON.parse(localStorage.getItem('completedChapters')) || {};
  
  // Ensure there is an entry for this courseId
  if (!completedChapters[courseId]) {
    completedChapters[courseId] = [];
  }

  if (!completedChapters[courseId].includes(parseInt(index, 10))) {
    completedChapters[courseId].push(parseInt(index, 10));
    localStorage.setItem('completedChapters', JSON.stringify(completedChapters));
  }

  handleClose();
};

const renderLessons = () => {
  const language = i18n.language;
  const lessonsModule = courseMappings[language]?.[courseId];

  if (!lessonsModule) {
    console.error(`Course with courseId ${courseId} not found for language ${language}.`);
    return null;
  }

  // Определение уроков на основе главы
  const lessonKey = `Lesson${index}`;
  const lessons = Object.keys(lessonsModule)
    .filter(key => key.startsWith(lessonKey))
    .map(key => lessonsModule[key]);

  return lessons.map((LessonComponent, i) => (
    <div key={i} >
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
