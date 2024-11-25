import { Title, Text, Cell } from "@telegram-apps/telegram-ui";
import React from "react";
import { salaryData } from "@/Utils/Constants";

import { useTranslation } from "react-i18next";
export function Salary({ t }) {
  const { i18n } = useTranslation();
  const currencySymbol = i18n.language === "en" ? "$" : "₽";
  return (
    <Cell multiline style={{ pointerEvents: "none" }}>
      <div style={{ marginBottom: "20px" }}>
        <Title weight="2" level="3">
          {t("industry_salary")} {/* Translated "Industry salary" */}
        </Title>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {salaryData.map((item, index) => (
          <div key={index} style={cardStyle}>
            <Title weight="2" style={titleStyle}>
              {t(`salary_titles.${item.title.toLowerCase()}`)}{" "}
            </Title>
            <div style={subtitleStyle}>
              {t(
                `salary_experience.${item.experience
                  .toLowerCase()
                  .replace(/ /g, "_")}`
              )}{" "}
            </div>
            <div style={salaryContainerStyle}>
              <Text style={currencyStyle} weight="2">
                {currencySymbol}
              </Text>
              <Text weight="1" style={salaryStyle}>
                {item.salary}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </Cell>
  );
}

const cardStyle = {
  position: "relative", // Для можливості додавання псевдоелемента
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
  overflow: "hidden", // Забезпечує, щоб псевдоелемент не виходив за межі картки
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
  alignItems: "center",
  marginTop: "1vh",
  justifyContent: "flex-start",
};

const salaryStyle = {
  fontSize: "3.5vh",
};

const currencyStyle = {
  fontSize: "3vh",
};

export default Salary;
