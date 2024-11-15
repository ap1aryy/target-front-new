import { Image, Button } from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "@/contexts/UserContext";
import { useTranslation } from "react-i18next";
import * as amplitude from "@amplitude/analytics-browser";
/**
 * @returns {JSX.Element}
 */
export function StoriesPage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Список изображений
  const imagesEn = [
    `/images/en/image.png`,
    `/images/en/image_2024-11-15_18-16-02.png`,
    `/images/en/image_2024-11-15_18-15-52.png`,
  ];

  const imagesRu = [
    `/images/ru/image_2024-11-15_18-88-09.png`,
    `/images/ru/image_2024-11-15_19-45-18.png`,
    `/images/ru/image_2024-11-15_19-45-33.png`,
  ];

  const images = i18n.language === "ru" ? imagesRu : imagesEn;
  const [currentIndex, setCurrentIndex] = useState(0); // Индекс текущего изображения

  // Показываем MainButton и задаём обработчик
  useEffect(() => {
    const BackButton = window.Telegram.WebApp.BackButton;
    BackButton.show();
    BackButton.text = "Skip";
    BackButton.onClick(handleSkip);
    trackStoryView(0);

    window.Telegram.WebApp.MainButton.hide();
    // Очистка при размонтировании компонента
  }, []);

  const handleNext = () => {
    handleNavigate(1); // Переход к следующему изображению
  };

  // Функция для переключения на следующее/предыдущее изображение
  const handleNavigate = (direction) => {
    const nextIndex = currentIndex + direction;

    if (nextIndex < 0 || nextIndex >= images.length) {
      navigate(-1); // Выход за пределы рамок — возвращаемся назад
    } else {
      setCurrentIndex(nextIndex); // Устанавливаем новый индекс
      trackStoryView(nextIndex);
    }
  };

  // Функция для пропуска всей очереди
  const handleSkip = () => {
    navigate(-1); // Сразу возвращаемся назад
  };

  // Определяем текст для кнопки в зависимости от текущего индекса
  const buttonText =
    currentIndex === images.length - 1 ? t("close") : t("next");

  // Сохранение состояния в localStorage, когда пользователь дошел до последнего изображения
  const handleClose = () => {
    if (currentIndex === images.length - 1) {
      localStorage.setItem("hasSeenAllStories", "true"); // Сохраняем, что пользователь просмотрел все сторисы
      navigate(-1); // Закрываем или переходим назад
    } else {
      handleNext(); // Если не последняя, продолжаем к следующей
    }
  };

  const trackStoryView = (index) => {
    amplitude.track("Story Viewed", {
      storyIndex: index + 1, // Индекс сториса (начинается с 1)
      totalStories: images.length, // Общее количество сторис
    });

    // Если это последний сторис, трекаем что просмотрены все
    if (index === images.length - 1) {
      amplitude.track("All Stories Viewed", {
        totalStories: images.length,
      });
    }
  };

  const trackClickEvent = (event, storyIndex) => {
    amplitude.track(event, {
      storyIndex: storyIndex,
      totalStories: images.length,
    });
  };

  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      {/* Статус-бар */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              height: "4px",
              margin: "0 2px",
              backgroundColor:
                index <= currentIndex ? "#fff" : "rgba(255, 255, 255, 0.5)",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Изображение текущей сторис */}
      <img
        src={images[currentIndex]}
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        onClick={(e) => {
          const { clientX, currentTarget } = e;
          const width = currentTarget.offsetWidth;

          if (clientX > width / 2) {
            trackClickEvent("Next Story Clicked", currentIndex + 1);
            handleNavigate(1);
          } else {
            trackClickEvent("Previous Story Clicked", currentIndex + 1);
            handleNavigate(-1);
          }
        }}
      />

      <Button
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          left: 20,
          backgroundColor: "white",
          color: "black",
        }}
        onClick={handleClose} // Обработчик нажатия на кнопку
        backgroundColor="white"
        children={buttonText}
        size="l"
      />
    </div>
  );
}
