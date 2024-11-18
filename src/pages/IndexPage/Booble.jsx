import React from "react";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import "./IndexPage.css";
import { useTranslation } from "react-i18next";
import { CoursesData } from "@/Utils/Constants";
import { useNavigate } from "react-router-dom";

export default function CategoryBubbles(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Опции для настройки библиотеки BubbleUI
  const options = {
    size: 180,
    minSize: 20,
    gutter: -70,
    provideProps: true,
    numCols: 3,
    fringeWidth: 160,
    yRadius: 130,
    xRadius: 150,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 5,
  };

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  // Группировка курсов по категориям
  const groupedCourses = CoursesData.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  // Категории с курсами
  const categoriesWithCourses = Object.keys(groupedCourses).filter(
    (categoryName) => groupedCourses[categoryName].length > 0
  );

  // Добавляем категорию "Ads", которая будет представлять категории без курсов
  const categoriesWithOneEmpty = [...categoriesWithCourses, "Ads"];

  // Объект с изображениями для каждой категории, от 1.svg до 7.svg, и дефолтное изображение
  const categoryImages = {
    "QA Tester&Testing": "/images/7.svg",
    "Machine Learning": "/images/2.svg",
    SMM: "/images/3.svg",
    "Accounting&Lawyers": "/images/4.svg",
    "1C": "/images/5.svg",
    Manicure: "/images/6.svg",
    "UX&UI Design": "/images/4.svg",
    Psychology: "/images/3.svg", // Для "Психология" используем 1.svg как пример
    "Digital Marketing": "/images/5.svg",
    SQL: "/images/3.svg",
    "Stock Market (Finance)": "/images/4.svg",
    Crypto: "/images/1.svg",
    Ads: "/images/6.svg", // Изображение для категории "Ads" или пустых категорий
  };

  // Генерация пузырей для категорий
  const children = categoriesWithOneEmpty.map((category, i) => {
    // Получаем изображение для текущей категории, если нет - используем дефолтное (1.svg)
    const categoryImage = categoryImages[category] || "/images/1.svg";

    return (
      <div
        className="child"
        key={i}
        onClick={() => handleCategoryClick(category)}
      >
        <img src={`${categoryImage}`} style={{ width: "10vw" }} />
        <div className="child-text">{t(category)}</div>
      </div>
    );
  });

  return (
    <div className="bubble-container">
      <BubbleUI options={options} className="myBubbleUI">
        {children}
      </BubbleUI>
    </div>
  );
}
