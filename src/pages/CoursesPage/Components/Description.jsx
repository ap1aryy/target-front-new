import React, { useState } from "react";
import { Text, Cell, Divider, Title, Button } from "@telegram-apps/telegram-ui";
import { starIconSvg } from "@/pages/CoursesPage/Utils";
import "../Style.css";
import {
  Icon16StarAlt,
  Icon24ChevronDownSmall,
  Icon24ChevronUpSmall,
} from "@vkontakte/icons";
import * as amplitude from "@amplitude/analytics-browser";
export function Description({ course, t }) {
  const [isExpanded, setIsExpanded] = useState(false);
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
          <Title
            children={t("about_course")} // Translated "About course"
            level="3"
            weight="2"
            style={{ marginBottom: 8 }}
          />
        }
        subtitle={isExpanded ? description : truncatedDescription}
        onClick={handleToggleDescription}
      />
      {description.length > 124 && (
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

      <Cell
        subtitle={
          <div style={{ fontSize: 12, lineHeight: "15px" }}>
            {t("price_description")}
          </div>
        } // Translated price description
        multiline
        children={
          <Button
            style={{
              width: "100vw",
              height: "48px",
              borderRadius: "38px",
              marginBottom: "16px",
              backgroundColor: "transparent",
              border: "2px solid rgba(0, 122, 255, 1)",
              color: "rgba(0, 122, 255, 1)",
              transition: "all 0.3s ease",
            }}
            children={t("course_price")}
            after={<Icon16StarAlt />}
            mode="outline"
            size="s"
            onMouseEnter={(e) => (e.target.style.borderColor = "#007aff")}
            onMouseLeave={(e) =>
              (e.target.style.borderColor = "rgba(0, 122, 255, 1)")
            }
          />
        }
      />
    </>
  );
}

export default Description;
