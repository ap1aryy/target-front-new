import React, { useState, useEffect } from "react";
import { Text, Cell, Divider, Title, Button } from "@telegram-apps/telegram-ui";
import { starIconSvg } from "@/pages/CoursesPage/Utils";
import Skeleton from "react-loading-skeleton"; // Импортируем Skeleton
import "../Style.css";
import {
  Icon16StarAlt,
  Icon24ChevronDownSmall,
  Icon24ChevronUpSmall,
} from "@vkontakte/icons";
import * as amplitude from "@amplitude/analytics-browser";

export function Description({ course, t, handleOpenPopUp }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Добавляем состояние загрузки

  useEffect(() => {
    if (course) setIsLoading(false);
  }, [course]);

  const description = t(course?.id.toString() + ".Description") || "";
  const truncatedDescription =
    description.length > 124
      ? description.substring(0, 124) + "..."
      : description;

  const handleToggleDescription = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <>
      <Cell
        multiline
        children={
          isLoading ? (
            <Skeleton width={200} height={224} />
          ) : (
            <Title
              children={t("about_course")} // Translated "About course"
              level="3"
              weight="2"
              style={{ marginBottom: 8 }}
            />
          )
        }
        subtitle={
          isLoading ? (
            // Скелетон для описания
            <Skeleton count={3} />
          ) : isExpanded ? (
            description
          ) : (
            truncatedDescription
          )
        }
        onClick={handleToggleDescription}
      />

      {description.length > 124 && !isLoading && (
        <Button
          style={{
            pointerEvents: "auto",
            marginLeft: "63%",
            marginTop: -20,
          }}
          children={isExpanded ? t("show_less") : t("show_more")} // Translated Show less / Show more
          mode="plain"
          size="s"
          onClick={handleToggleDescription}
          after={
            isExpanded ? (
              <Icon24ChevronUpSmall style={{ transition: "transform 0.3s" }} />
            ) : (
              <Icon24ChevronDownSmall
                style={{ transition: "transform 0.3s" }}
              />
            )
          }
        />
      )}

      {!course?.my && !isLoading && (
        <Cell
          subtitle={
            <div style={{ fontSize: 12, lineHeight: "15px" }}>
              {t("price_description")}
            </div>
          } // Translated price description
          multiline
          children={
            <>
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: 40,
                  width: 30,
                  height: 20,
                  display: "flex",
                  flexDirection: "row",
                  justifycontent: "center",
                  alignItems: "center",
                  backgroundColor: "var(--tg-theme-button-color)",
                  color: "var(--tg-theme-button-text-color)",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  zIndex: 200,
                  fontWeight: "bold",
                }}
              >
                {t("-90%")}
              </span>
              <Button
                onClick={() => handleOpenPopUp()}
                style={{
                  width: "100vw",
                  height: "48px",
                  borderRadius: "38px",
                  marginBottom: "16px",
                  backgroundColor: "transparent",
                  border: "2px solid var(--tg-theme-button-color)",
                  color: "var(--tgui--link_color)",
                  transition: "all 0.3s ease",
                  position: "relative", // Добавляем позиционирование для родительского элемента
                }}
                children={
                  <>
                    <span
                      dangerouslySetInnerHTML={{ __html: t("course_price") }}
                    />
                  </>
                }
                mode="outline"
                size="s"
              />
            </>
          }
        />
      )}

      {/* Добавим Divider, если данные загружены */}
      {!isLoading && <Divider />}
    </>
  );
}

export default Description;
