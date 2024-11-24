import React, { useState } from "react";
import { Card, Cell, Divider, Title, Button } from "@telegram-apps/telegram-ui";
import { starIconSvg } from "@/pages/CoursesPage/Utils";
import "../Style.css";
import { Icon16StarAlt } from "@vkontakte/icons";
export function Description({ course, t }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const description = t(course?.id.toString() + ".Description") || "";
  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
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
            children="About course"
            level="3"
            weight="3"
            style={{ marginBottom: 16 }}
          />
        }
        subtitle={isExpanded ? description : truncatedDescription} // Show full or truncated description
      />
      {description.length > 40 && (
        <Cell
          after={
            <Button
              children={isExpanded ? "Show less" : "Show more"} // Toggle the button text
              mode="plain"
              size="s"
              onClick={handleToggleDescription}
            />
          }
        />
      )}

      <Cell
        children={
          <Button
            style={{
              width: "100vw",
              height: "48px",
              borderRadius: 38,
              margin: "16px 0",
            }}
            children={"Course price: 100"}
            after={<Icon16StarAlt />}
            mode="outline"
            size="s"
          />
        }
        subtitle="100 Telegram Stars equals approximately $250. Price includes full access for one month."
        multiline
      />
    </>
  );
}

export default Description;
