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
} from "@telegram-apps/telegram-ui";
import { Icon28Play, Icon16StarAlt, Icon20PlayCircle } from "@vkontakte/icons";
import { BreadCrumbsItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/Breadcrumbs/components/BreadCrumbsItem/BreadCrumbsItem";
import { useNavigate } from "react-router-dom";
import "../Style.css";
import { groupedVideos } from "@/Utils/Constants";
import { courseConfig } from "@/Utils/Constants";
import * as amplitude from "@amplitude/analytics-browser";
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
  const navigate = useNavigate();

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
              <Cell
                key={index}
                multiline
                after={
                  chapter.id == 1 && course?.id != 2930632 && !course?.my ? (
                    <Button
                      children={t("free")}
                      style={{
                        position: "absolute",
                        marginBottom: "25%",
                        marginRight: "15%",
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
                children={t(
                  course?.id.toString() + "." + "chapters." + chapter.id
                )}
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
                style={{ maxHeight: 100 }}
                onClick={!isWaitList ? handleOpenPopUp : null}
              />
              {index == 0 && <Divider />}
            </>
          );
        })}
      </List>
    </>
  );
}

export default ChaptersList;
