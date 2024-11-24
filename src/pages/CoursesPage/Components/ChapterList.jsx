// ChaptersList.js
import React from "react";
import { Section, Cell, Divider, Button, Text } from "@telegram-apps/telegram-ui";
import {
    Icon20PlayCircle,
    Icon16StarAlt,
  } from "@vkontakte/icons";
import { groupedVideos } from "@/Utils/Constants";  // Для групування відео по розділах
import { useNavigate } from "react-router-dom";
import '../Style.css'
export function ChaptersList ({
  course,
  chapters,
  t,
  isWaitList,
  handleOpenChapters,
  handleOpenPopUp,
  isChapterCompleted,
}) {
  const navigate = useNavigate();

  return (
    <Section style={{ marginTop: 8 }}>
      {chapters.map((chapter, index) => {
        const videosInChapter = groupedVideos[chapter.id]; // Відео в розділі
        const videoCount = videosInChapter ? videosInChapter.length : 0; // Підрахунок відео
        const isCompleted = isChapterCompleted(course?.id, index + 1);

        return (
          <div key={chapter.id}>
            <Cell
              subhead={`${t("Chapter")} ${index + 1}`}
              multiline
              onClick={!isWaitList ? () => handleOpenChapters(chapter.id) : null}
              subtitle={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Button style={{ marginTop: 8 }} before={<Icon20PlayCircle />} size="s" mode="bezeled">
                    {t("Open")}
                  </Button>
                  {isCompleted && (
                    <>
                      <Icon16StarAlt style={{ marginLeft: "8px", marginTop: 8 }} />
                      <Text style={{ marginLeft: "8px", fontSize: "14px", marginTop: 8 }}>{t("Completed")}</Text>
                    </>
                  )}
                </div>
              }
            >
              {t(course?.id.toString() + ".chapters." + chapter.id)}
            </Cell>
            {index < chapters.length - 1 && <Divider />}
          </div>
        );
      })}
    </Section>
  );
};

export default ChaptersList;