import React, { useState, useEffect } from "react";
import { Title, Text, Cell } from "@telegram-apps/telegram-ui";
import Skeleton from "react-loading-skeleton"; // Импортируем Skeleton
import { salaryData, CoursesData } from "@/Utils/Constants";
import { useTranslation } from "react-i18next";

// Кастомные зарплаты по категориям
const averageSalaries = {
  "Machine Learning": { rub: 140000, usd: 120000 },
  "UX&UI Design": { rub: 110000, usd: 100000 },
  "Digital Marketing": { rub: 195000, usd: 95000 },
  "QA Tester&Testing": { rub: 175000, usd: 75000 },
  Crypto: { rub: 160000, usd: 130000 },
};

// Функция для получения зарплаты по категории в зависимости от языка
const getSalaryByCategory = (id, language) => {
  const course = CoursesData.find((course) => course.id === id);
  if (course) {
    const salary = averageSalaries[course.category] || { rub: 0, usd: 0 };
    return language === "en" ? salary.usd : salary.rub;
  }
  return 0;
};

export function Salary({ t, course }) {
  const { i18n } = useTranslation();
  const currencySymbol = i18n.language === "en" ? "$" : "₽";

  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки

  // Эмуляция загрузки данных
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Загружаем данные через 2 секунды
    }, 200);
  }, []);

  // Функция для преобразования зарплаты в формат с "K+" (например, "70000" -> "70K+")
  const convertSalaryToKPlus = (salary) => {
    if (salary >= 1000) {
      const salaryInK = (salary / 1000).toFixed(0); // Отделяем тысячи
      return `${salaryInK}K+`;
    }
    return `${salary}K+`; // Для зарплаты меньше 1000 просто возвращаем как есть
  };

  return (
    <Cell multiline style={{ pointerEvents: "none" }}>
      <div style={{ marginBottom: "20px" }}>
        {isLoading ? (
          <Skeleton width={120} height={20} /> // Скелетон для заголовка
        ) : (
          <Title weight="2" level="3">
            {t("industry_salary")}
          </Title>
        )}
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {salaryData.map((item, index) => {
          let categorySalary = getSalaryByCategory(course?.id, i18n.language);
          if (index === 0) {
            categorySalary = categorySalary - 40000; // Для индекса 1 — 40 000
          } else if (index === 2) {
            categorySalary = categorySalary + 60000; // Для индекса 3 — прибавляем 60 000
          }

          return (
            <div key={index} style={cardStyle}>
              {isLoading ? (
                <Skeleton width={100} height={20} /> // Скелетон для заголовка категории
              ) : (
                <Title weight="2" style={titleStyle}>
                  {t(`salary_titles.${item.title.toLowerCase()}`)}
                </Title>
              )}

              {isLoading ? (
                <Skeleton width={80} height={16} /> // Скелетон для подписи
              ) : (
                <div style={subtitleStyle}>
                  {t(
                    `salary_experience.${item.experience
                      .toLowerCase()
                      .replace(/ /g, "_")}`
                  )}
                </div>
              )}

              <div style={salaryContainerStyle}>
                {isLoading ? (
                  <Skeleton width={30} height={18} /> // Скелетон для символа валюты
                ) : (
                  <Text style={currencyStyle} weight="2">
                    {currencySymbol}
                  </Text>
                )}

                {isLoading ? (
                  <Skeleton width={60} height={20} /> // Скелетон для значения зарплаты
                ) : (
                  <Text weight="1" style={salaryStyle}>
                    {i18n.language === "en"
                      ? `${convertSalaryToKPlus(categorySalary)} `
                      : convertSalaryToKPlus(categorySalary)}
                    {i18n.language === "en" && (
                      <Text style={yearTextStyle}>/year</Text>
                    )}
                    {i18n.language === "ru" && (
                      <Text style={yearTextStyle}>/мес</Text>
                    )}
                  </Text>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Cell>
  );
}

const cardStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "10px 12px",
  width: "30vw",
  height: "auto",
  color: "white",
  background:
    "linear-gradient(141.43deg, #007AFF 16.4%, rgba(0, 102, 214, 0.9) 65.76%, #D9EBFF 118.17%)",
  borderRadius: "20px",
  overflow: "hidden",
  border: "px solid",
};

const titleStyle = {
  color: "#ffff",
  fontSize: "3vh",
};

const subtitleStyle = {
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "15px",
};

const salaryContainerStyle = {
  display: "flex",
  width: "100vw",
  alignItems: "flex-start",
  marginTop: "1vh",
  justifyContent: "flex-start",
};

const salaryStyle = {
  fontSize: "2.5vh",
};

const currencyStyle = {
  fontSize: "2.5vh",
};

const yearTextStyle = {
  textAlight: "center",
  fontSize: "1.4vh",
  fontWeight: 400,
  whiteSpace: "nowrap",
};

export default Salary;
