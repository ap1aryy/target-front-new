import { useEffect, useRef, useState } from 'react';
import {
   Title, List, Button, Text
} from '@telegram-apps/telegram-ui';
import { Lesson1_1, Lesson1_2, Lesson1_3, Lesson1_4, Lesson1_5, Lesson2_1, Lesson2_2, Lesson2_3, Lesson2_5, Lesson2_6} from './Lessons';
import './Chapters.css'
export function Chapters({ onClose, index }) {
  useEffect(() => {
    window.Telegram.WebApp.MainButton.show();
    window.Telegram.WebApp.MainButton.text = "Back";
    window.Telegram.WebApp.MainButton.onClick(() => {
      handleClose();
    });

    // Обработчик событий свайпа
    const handleTouchStart = (e) => {
      startTouch.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (startTouch.current !== null) {
        const delta = e.touches[0].clientY - startTouch.current;
        if (delta < -50) {
          setIsFullScreen(true);  // Если свайп вверх, открываем на полный экран
        }
      }
    };

    const handleTouchEnd = () => {
      startTouch.current = null;
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    // Очистка после удаления компонента
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);
   const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); // Ожидание анимации перед вызовом onClose
  };
  const [isClosing, setIsClosing] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const startTouch = useRef(null)
  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div
       className={`popup-menu ${isClosing ? 'popup-slide-out' : 'popup-slide-in'} ${isFullScreen ? 'popup-fullscreen' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {index == 1 && (
          <>         
           < Lesson1_1 />
          < Lesson1_2 />
            < Lesson1_3 />
            < Lesson1_4 />
            < Lesson1_5 />
            </>
        )}
        {index == 2 && (
          <>         
           < Lesson2_1 />
          < Lesson2_2 />
            < Lesson2_3 />
            < Lesson2_5 />
            < Lesson2_6 />
            </>
        )}
        
      </div>
    </div>
  );
}
