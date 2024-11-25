import { Title, Text, Cell } from "@telegram-apps/telegram-ui";
import React from "react";
import { salaryData, CoursesData } from "@/Utils/Constants";
import { useTranslation } from "react-i18next";

// Кастомные зарплаты по категориям
const averageSalaries = {
  "Machine Learning": { rub: 140000, usd: 120000 }, // Data Scientist
  "UX&UI Design": { rub: 110000, usd: 100000 }, // UX/UI Designer
  "Digital Marketing": { rub: 195000, usd: 95000 }, // Marketing
  "QA Tester&Testing": { rub: 175000, usd: 75000 }, // QA Tester
  Crypto: { rub: 160000, usd: 130000 }, // Blockchain Developer
};

// Функция для получения зарплаты по категории в зависимости от языка
const getSalaryByCategory = (id, language) => {
  // Находим курс по id в CoursesData
  const course = CoursesData.find((course) => course.id === id);

  // Если курс найден, возвращаем зарплату по его категории в нужной валюте, если нет, возвращаем 0
  if (course) {
    const salary = averageSalaries[course.category] || { rub: 0, usd: 0 };
    return language === "en" ? salary.usd : salary.rub; // Выбираем валюту в зависимости от языка
  }
  return 0;
};
export function Salary({ t, course }) {
  const { i18n } = useTranslation();
  const currencySymbol = i18n.language === "en" ? "$" : "₽";

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
        <Title weight="2" level="3">
          {t("industry_salary")}
        </Title>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {salaryData.map((item, index) => {
          // Получаем зарплату по категории и валюте
          let categorySalary = getSalaryByCategory(course?.id, i18n.language);
          if (index === 0) {
            categorySalary = categorySalary - 40000; // Для индекса 1 — 40 000
          } else if (index === 2) {
            categorySalary = categorySalary + 60000; // Для индекса 3 — прибавляем 60 000
          }
          return (
            <div key={index} style={cardStyle}>
              <Title weight="2" style={titleStyle}>
                {t(`salary_titles.${item.title.toLowerCase()}`)}
              </Title>
              <div style={subtitleStyle}>
                {t(
                  `salary_experience.${item.experience
                    .toLowerCase()
                    .replace(/ /g, "_")}`
                )}
              </div>
              <div style={salaryContainerStyle}>
                <Text style={currencyStyle} weight="2">
                  {currencySymbol}
                </Text>
                <Text weight="1" style={salaryStyle}>
                  {i18n.language === "en"
                    ? `${convertSalaryToKPlus(categorySalary)} `
                    : convertSalaryToKPlus(categorySalary)}
                  {i18n.language === "en" && (
                    <Text style={yearTextStyle}>/year</Text>
                  )}
                </Text>
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
  fontSize: "1.8vh", // Уменьшаем размер шрифта для "/year"
  fontWeight: 400,
  marginLeft: -4,
  whiteSpace: "nowrap", // Предотвращаем перенос текста
};

export default Salary;
