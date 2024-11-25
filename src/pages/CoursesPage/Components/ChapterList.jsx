// ChaptersList.js
import React from "react";
import {
  Text,
  Cell,
  Image,
  Button,
  Title,
  List,
  Divider,
  Section,
} from "@telegram-apps/telegram-ui";
import { Icon28Play, Icon16StarAlt, Icon20PlayCircle } from "@vkontakte/icons";
import { BreadCrumbsItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/Breadcrumbs/components/BreadCrumbsItem/BreadCrumbsItem";
import { useNavigate } from "react-router-dom";
import "../Style.css";
import { groupedVideos } from "@/Utils/Constants";
import { courseConfig } from "@/Utils/Constants";
import { useEffect, useState } from "react";
export function ChaptersList({
  course,
  chapters,
  t,
  isWaitList,
  handleOpenChapters,
  handleOpenPopUp,
  isChapterCompleted,
  isVisibleGetIt,
}) {
  const [isOneLine, setIsOneLine] = useState(false);

  useEffect(() => {
    // Проверяем, занимает ли текст одну строку
    const checkTextLength = () => {
      const element = document.getElementById("chapterTitle");
      if (element) {
        const lineHeight = parseInt(
          window.getComputedStyle(element).lineHeight,
          10
        );
        const height = element.offsetHeight;
        if (height <= lineHeight) {
          setIsOneLine(true);
        } else {
          setIsOneLine(false);
        }
      }
    };

    checkTextLength();
    window.addEventListener("resize", checkTextLength);
    return () => {
      window.removeEventListener("resize", checkTextLength);
    };
  }, []);

  return (
    <>
      <Cell
        children={<Title weight="2" level="3" children={t("course_program")} />}
      />
      <List>
        {chapters.map((chapter, index) => {
          const videosInChapter = groupedVideos[chapter.id]; // Получаем видео для этого раздела
          const videoCount = videosInChapter ? videosInChapter.length : 0; // Подсчитываем количество видео
          return (
            <>
              <Section
                style={{
                  marginBottom: index === 0 && !course?.my ? "12px" : "8px",
                }}
              >
                <Cell
                  style={{ height: !course?.my ? "95px" : "auto" }}
                  key={index}
                  multiline
                  after={
                    chapter.id == 1 && course?.id != 2930632 && !course?.my ? (
                      <Button
                        children={t("free")}
                        style={{
                          position: "absolute",
                          marginBottom: "95px",
                          marginRight: "50px",
                          padding: "0 12px",
                          borderRadius: 6,
                          height: 32,
                        }}
                        size="s"
                        onClick={() => handleOpenChapters(chapters[0]?.id)}
                      />
                    ) : null
                  }
                  before={
                    <div style={{ position: "relative" }}>
                      <Image
                        src={
                          courseConfig[course?.id]?.img ||
                          "default_image_path_here"
                        }
                        size={64}
                      />
                      <Icon28Play
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          color: "white",
                        }}
                      />
                    </div>
                  }
                  children={
                    <div className="single-line-text">
                      {t(
                        course?.id.toString() + "." + "chapters." + chapter.id
                      )}
                    </div>
                  }
                  subtitle={
                    course?.my && course?.id != 2930632 ? (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Button
                          style={{ marginTop: 8 }}
                          before={<Icon20PlayCircle />}
                          size="s"
                          mode="bezeled"
                          children={t("Open")}
                          onClick={() => handleOpenChapters(chapter?.id)}
                        />
                        {isChapterCompleted(course?.id, index + 1) && (
                          <>
                            <Icon16StarAlt
                              style={{ marginLeft: "8px", marginTop: 8 }}
                            />
                            <Text
                              style={{
                                marginLeft: "8px",
                                fontSize: "14px",
                                marginTop: 8,
                              }}
                            >
                              {t("Completed")}
                            </Text>
                          </>
                        )}
                      </div>
                    ) : (
                      <div>
                        <div className="card-items-inf">
                          <div>{`${t("Less_len")} ${
                            chapter.chapter_item_id
                          }`}</div>
                          {course?.id === 2925675 && (
                            <>
                              •<div>{`${t("Video_count")} ${videoCount}`}</div>
                            </>
                          )}
                        </div>
                      </div>
                    )
                  }
                  onClick={
                    isWaitList
                      ? null
                      : course?.my
                      ? () => handleOpenChapters(chapter?.id) // передаємо функцію, не викликаємо її
                      : index !== 0
                      ? () => handleOpenPopUp() // також передаємо функцію без виклику
                      : () => handleOpenChapters(chapters[0]?.id) // передаємо функцію
                  }
                />
              </Section>

              {index == 0 && !course?.my && (
                <Divider
                  style={{
                    borderColor: "rgba(112, 117, 121, 0.6)",
                  }}
                />
              )}
            </>
          );
        })}
      </List>
    </>
  );
}

export default ChaptersList;
