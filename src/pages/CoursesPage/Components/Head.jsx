import React, { useState, useEffect } from "react";
import {
  Title,
  Image,
  Button,
  AvatarStack,
  Avatar,
  Info,
  Text,
  Cell,
} from "@telegram-apps/telegram-ui";
import Skeleton from "react-loading-skeleton"; // Импортируем Skeleton
import { shareIcon } from "@/pages/CoursesPage/Utils";
import { courseConfig } from "@/Utils/Constants";
import * as amplitude from "@amplitude/analytics-browser";

export function Head({ course, user, t }) {
  const [isLoading, setIsLoading] = useState(true); // Добавляем состояние для загрузки

  // Эмуляция загрузки данных
  useEffect(() => {
    if (course) setIsLoading(false);
  }, [course]);
  const enrolledCounts = {
    2925675: "3K+", // Пример для курса с id=2925675
    2926478: "500+", // Пример для курса с id=2926478
    2930629: "2K+", // Пример для курса с id=2930629
    2930630: "800+", // Пример для курса с id=2930630
    2930631: "1.5K+", // Пример для курса с id=2930631
    2930632: "3K+", // Пример для курса с id=2930632
  };

  const handleShareCourse = () => {
    amplitude.track("share_course");
    const shareLink = `https://t.me/share/url?url=http://t.me/thetargetbot/learn?startapp=course-${course.id}_source-${user.id}\n`;
    window.open(shareLink, "_blank");
  };
  const enrolledCount = enrolledCounts[course?.id] || "0";
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          width: "100vw",
          height: "240px",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {isLoading ? (
            // Пока загружается изображение, показываем Skeleton
            <Skeleton height={240} width="100%" />
          ) : (
            <>
              <Image
                src={courseConfig[course?.id]?.img || "default_image_path_here"}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "240px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "0 0 16px 16px",
                }}
              />

              {/* Полоска градиента */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "35%", // Высота полоски (1/4 от изображения)
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
                  borderRadius: "0 0 16px 16px", // Обеспечивает скругление углов
                }}
              />
            </>
          )}
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              maxWidth: "50%",
              wordWrap: "break-word",
            }}
          >
            {isLoading ? (
              // Пока данные курса загружаются, показываем Skeleton
              <Skeleton width={150} height={20} />
            ) : (
              <Title
                level="3"
                weight="1"
                style={{
                  fontSize: "24px",
                }}
                children={t(course?.id?.toString() + ".Course_name")}
              />
            )}
          </div>
          <Button
            children={t("Share")}
            style={{
              position: "absolute",
              bottom: "10%",
              right: "5%",
              borderRadius: "40px",
              wordWrap: "break-word",
              fontWeight: 400,
            }}
            after={shareIcon}
            size="s"
            onClick={handleShareCourse}
          />
        </div>
      </div>

      <div
        style={{
          marginTop: "256px",
          marginBottom: 16,
          marginLeft: 16,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {isLoading ? (
          // Пока данные о пользователе загружаются, показываем Skeleton
          <Skeleton width={120} height={18} />
        ) : (
          <Info
            avatarStack={
              <AvatarStack>
                <Avatar
                  style={{
                    boxShadow: `0 0 0 3px var(--tg-theme-secondary-bg-color)`, // Цвет фона темы для тени
                  }}
                  size={28}
                  src="https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/82bec838-05c8-4d68-b173-2284a6ad4e52/how-to-stop-being-a-people-pleaser"
                />
                <Avatar
                  style={{
                    boxShadow: `0 0 0 3px var(--tg-theme-secondary-bg-color)`, // Цвет фона темы для тени
                  }}
                  size={28}
                  src="https://magazine.scienceconnected.org/wp-content/uploads/2021/03/qtq80-uMPS9J.jpeg"
                />
                <Avatar
                  style={{
                    boxShadow: `0 0 0 3px var(--tg-theme-secondary-bg-color)`, // Цвет фона темы для тени
                  }}
                  size={28}
                  src="https://thehumanbean.com/cdn/shop/files/woman_smiling_holding_drink_hot_cup_brown_cup_adrian_august_2022.jpg?v=1679677878&width=1500"
                />
              </AvatarStack>
            }
            type="avatarStack"
          >
            {t("enrolled_count", { count: enrolledCount })}{" "}
          </Info>
        )}
      </div>
      {!isLoading && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Cell
            subtitle={t("Language")}
            style={{ pointerEvents: "none" }}
            after={
              isLoading ? (
                // Показываем Skeleton для кнопок языка
                <>
                  <Skeleton width={60} height={30} />
                  <Skeleton width={60} height={30} />
                </>
              ) : (
                <>
                  <Button
                    mode="bezeled"
                    children={t("English")}
                    style={{
                      pointerEvents: "none",
                      marginLeft: "-4%",
                      borderRadius: 6,
                      fontWeight: 400,
                    }}
                    size="s"
                  />
                  <Button
                    mode="bezeled"
                    children={t("Russian")}
                    style={{
                      pointerEvents: "none",
                      borderRadius: 6,
                      marginLeft: "4%",
                    }}
                    size="s"
                  />
                </>
              )
            }
          />
        </div>
      )}
    </>
  );
}

export default Head;
