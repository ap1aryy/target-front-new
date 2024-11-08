import { useEffect, useRef, useState } from 'react';
import {
  Title, List, Button, Text, Section, Cell, FixedLayout
} from '@telegram-apps/telegram-ui';
import {
  Lesson1_1, Lesson1_2, Lesson1_3, Lesson1_4, Lesson1_5,
  Lesson2_1, Lesson2_2, Lesson2_3, Lesson2_5, Lesson2_6,
  Lesson3_1, Lesson3_2, Lesson3_3, Lesson3_5, Lesson5_5,
  Lesson6_4, Lesson6_3, Lesson6_2, Lesson6_1,
  Lesson7_1, Lesson7_2, Lesson7_3, Lesson7_4, Lesson7_5,
  Lesson8_4, Lesson8_3, Lesson8_2, Lesson8_1
} from './Lessons';
import './Chapters.css'
import { Icon16Cancel } from '@vkontakte/icons';

export function Chapters({ onClose, index }) {
  const [isClosing, setIsClosing] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const startTouch = useRef(null);
  const lastLessonRef = useRef(null);

  useEffect(() => {
  // Show and set up the Back button
  window.Telegram.WebApp.BackButton.show();
  window.Telegram.WebApp.BackButton.onClick(handleClose);

  // Swipe event listeners
  const handleTouchStart = (e) => {
    startTouch.current = e.touches[0].clientY;
  };
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

  // Scroll to last completed lesson on component mount
  const lastCompletedLesson = localStorage.getItem(`chapter_${index}_lastLesson`);
  if (lastLessonRef.current && lastCompletedLesson) {
    lastLessonRef.current.scrollIntoView();
  }

  return () => {
    // Clean up Back button and swipe listeners
    window.Telegram.WebApp.BackButton.hide();
    window.Telegram.WebApp.BackButton.onClick(null);
    window.removeEventListener('touchstart', handleTouchStart);
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  };
}, [index]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); // Wait for animation
  };

  const handleFinishLesson = () => {
    // Save progress in local storage
    localStorage.setItem(`chapter_${index}_lastLesson`, `Lesson${index}`);
    // Call onClose after finishing lesson
    handleClose();
  };

  const renderLessons = () => {
    const lessons = {
      1: [Lesson1_1, Lesson1_2, Lesson1_3, Lesson1_4, Lesson1_5],
      2: [Lesson2_1, Lesson2_2, Lesson2_3, Lesson2_5, Lesson2_6],
      3: [Lesson3_1, Lesson3_2, Lesson3_3, Lesson3_5],
      4: [],
      5: [Lesson5_5],
      6: [Lesson6_1, Lesson6_2, Lesson6_3, Lesson6_4],
      7: [Lesson7_1, Lesson7_2, Lesson7_3, Lesson7_4, Lesson7_5],
      8: [Lesson8_1, Lesson8_2, Lesson8_3, Lesson8_4],
    };

    // Render all lesson parts
    return (lessons[index] || []).map((LessonComponent, i) => (
      <div key={i} ref={i === lessons[index].length - 1 ? lastLessonRef : null}>
        <LessonComponent />
      </div>
    ));
  };

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div
        className={`popup-menu ${isClosing ? 'popup-slide-out' : 'popup-slide-in'} ${isFullScreen ? 'popup-fullscreen' : ''}`}
        style={{ height: "100%" }}
        onClick={(e) => e.stopPropagation()}
      >
        <FixedLayout vertical="top" ></FixedLayout>
        {renderLessons()}
        {/* Show "Finish" button at the bottom of the lesson */}
        <Button
          style={{ width: "100%", marginTop: 16, marginBottom: 16 }}
          onClick={handleFinishLesson}
        >
          Finish
        </Button>
      </div>
    </div>
  );
}
