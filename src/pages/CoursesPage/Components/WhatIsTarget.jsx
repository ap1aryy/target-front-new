import React, { useState, useEffect } from "react";
import { Section, Cell, Avatar, Image } from "@telegram-apps/telegram-ui";
import { Icon28ChevronRightOutline } from "@vkontakte/icons";
import "../Style.css";
import * as amplitude from "@amplitude/analytics-browser";
export function WhatIsTarget({
  t,
  handleGoToStories,
  handleCloseHint,
  isVisibleStoriesCard,
}) {
  const [isVisible, setIsVisible] = useState(isVisibleStoriesCard);
  const [isHidden, setIsHidden] = useState(false);

  // Show the component for 4 seconds upon mounting and then hide it with animation
  useEffect(() => {
    amplitude.track("show_what_is_target");
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsHidden(true); // Trigger the sliding-up animation
        setTimeout(() => {
          setIsVisible(false); // Actually hide the component after animation
        }, 300); // Duration of the sliding animation (matches CSS transition)
      }, 6000);

      return () => clearTimeout(timer); // Clear the timeout on component unmount
    }
  }, [isVisible]);

  return (
    isVisible && (
      <Section
        style={{
          position: "absolute",
          zIndex: 10,
          top: isHidden ? "-100px" : "10px", // Slide up when hidden
          left: 10,
          right: 10,
          transition: "top 0.3s ease", // Slide-up animation
        }}
        onClick={handleGoToStories}
      >
        <Cell
          multiline
          after={<Icon28ChevronRightOutline />}
          before={
            <Avatar
              src={"/logo.png"}
              size={48}
              style={{ borderRadius: "5px" }}
            />
          }
          subtitle={t("onboarding_subtitle")} // Translated subtitle
          children={t("what_is_target")} // Translated title
        />
      </Section>
    )
  );
}

export default WhatIsTarget;
