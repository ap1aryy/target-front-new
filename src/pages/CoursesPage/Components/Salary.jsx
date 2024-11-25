import { Title, Text, Cell } from "@telegram-apps/telegram-ui";
import React from "react";
import { salaryData } from "@/Utils/Constants";
import * as amplitude from "@amplitude/analytics-browser";
export function Salary({ t }) {
  // Added t for translation function
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
            <Title style={subtitleStyle}>
              {t(
                `salary_experience.${item.experience
                  .toLowerCase()
                  .replace(/ /g, "_")}`
              )}{" "}
            </Title>
            <div style={salaryContainerStyle}>
              <Text weight="2" style={salaryStyle}>
                {item.salary} {/* Salary stays as it is */}
              </Text>
              <Text style={currencyStyle} weight="2">
                ₽
              </Text>
            </div>
          </div>
        ))}
      </div>
    </Cell>
  );
}

const cardStyle = {
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
};

const titleStyle = {
  fontSize: "3vh",
};

const subtitleStyle = {
  fontSize: "1.5vh",
  lineHeight: "1.5",
};

const salaryContainerStyle = {
  display: "flex",
  alignItems: "flex-end",
  marginTop: "1vh",
  justifyContent: "space-between",
};

const salaryStyle = {
  fontSize: "3vh",
};

const currencyStyle = {
  fontSize: "2.5vh",
};

export default Salary;
