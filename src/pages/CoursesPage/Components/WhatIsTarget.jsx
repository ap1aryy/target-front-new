// WhatIsTarget.js
import React from "react";
import { Card, Cell, Button } from "@telegram-apps/telegram-ui";
import '../Style.css'
import {
    Icon16Clear,
  } from "@vkontakte/icons";

  export function  WhatIsTarget ({ t, handleGoToStories, handleCloseHint, isVisibleStoriesCard }) {
  return (
    isVisibleStoriesCard && (
      <Card>
        <Cell
          subhead={
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              {t("whatIsTarget")}
              <Icon16Clear onClick={handleCloseHint} />
            </div>
          }
          children={t("Check_out_a")}
          multiline
          subtitle={
            <Button
              size="s"
              onClick={handleGoToStories}
              style={{ marginTop: "20px" }}
            >
              {t("ReadMore")}
            </Button>
          }
        />
      </Card>
    )
  );
};
export default WhatIsTarget;