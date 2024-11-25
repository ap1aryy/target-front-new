import React, { useState, useEffect } from "react";
import { Section, Cell, Avatar } from "@telegram-apps/telegram-ui";
import { Icon28ChevronRightOutline } from "@vkontakte/icons";
import "../Style.css";
import * as amplitude from "@amplitude/analytics-browser";

export function WhatIsTarget({ t, handleGoToStories, isVisibleStoriesCard }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  // Значення для визначення свайпа
  let touchStartY = 0;
  let touchEndY = 0;

  useEffect(() => {
    amplitude.track("show_what_is_target");

    const showTimeout = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => {
        setIsEntering(true);
      }, 50);
    }, 100);

    const hideTimeout = setTimeout(() => {
      setIsHidden(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }, 12000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  // Обробники подій для свайпа
  const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndY = e.touches[0].clientY;

    if (touchStartY - touchEndY > 50) {
      // Визначення свайпа вгору
      setIsHidden(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }
  };

  return (
    isVisible && (
      <Section
        style={{
          position: "absolute",
          zIndex: 10,
          top: isHidden ? "-20px" : isEntering ? "16px" : "-100px",
          left: 10,
          right: 10,
          transition: "top 0.5s ease, opacity 0.5s ease",
          opacity: isHidden ? 0 : 1,
          height: 80,
        }}
        onClick={handleGoToStories}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <Cell
          style={{ height: 80 }}
          multiline
          after={<Icon28ChevronRightOutline />}
          before={
            <Avatar
              src={"/logo.png"}
              size={55}
              style={{ borderRadius: "5px" }}
            />
          }
          subtitle={t("onboarding_subtitle")}
          children={t("what_is_target")}
        />
      </Section>
    )
  );
}

export default WhatIsTarget;
