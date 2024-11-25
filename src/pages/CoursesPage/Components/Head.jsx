import React from "react";
import {
  Title,
  Image,
  Button,
  AvatarStack,
  Avatar,
  Info,
  Caption,
  Cell,
} from "@telegram-apps/telegram-ui";
import { shareIcon } from "@/pages/CoursesPage/Utils";
import { courseConfig } from "@/Utils/Constants";
import * as amplitude from "@amplitude/analytics-browser";
export function Head({ course, user, t }) {
  const handleShareCourse = () => {
    amplitude.track("share_course");
    const shareLink = `https://t.me/share/url?url=http://t.me/thetargetbot/learn?startapp=course-${course.id}_source-${user.id}\n`;
    window.open(shareLink, "_blank");
  };

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
          <Image
            src={courseConfig[course?.id]?.img || "default_image_path_here"}
            style={{
              position: "absolute",
              top: -5,
              left: 0,
              right: 0,
              height: "240px",
              width: "100%",
              objectFit: "cover",
              borderRadius: "0 0 16px 16px",
            }}
          />
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
            <Title
              level="3"
              weight="3"
              children={t(course?.id.toString() + ".Course_name")}
            />
          </div>
          <Button
            children={t("Share")}
            style={{
              position: "absolute",
              bottom: "10%",
              right: "5%",
              borderRadius: "40px",
              wordWrap: "break-word",
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
        <Info
          avatarStack={
            <Info
              avatarStack={
                <AvatarStack>
                  <Avatar
                    style={{ boxShadow: "none" }}
                    size={28}
                    src="https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/82bec838-05c8-4d68-b173-2284a6ad4e52/how-to-stop-being-a-people-pleaser"
                  />
                  <Avatar
                    style={{ boxShadow: "none" }}
                    size={28}
                    src="https://magazine.scienceconnected.org/wp-content/uploads/2021/03/qtq80-uMPS9J.jpeg"
                  />
                  <Avatar
                    style={{ boxShadow: "none" }}
                    size={28}
                    src="https://thehumanbean.com/cdn/shop/files/woman_smiling_holding_drink_hot_cup_brown_cup_adrian_august_2022.jpg?v=1679677878&width=1500"
                  />
                </AvatarStack>
              }
              type="avatarStack"
            >
              {t("enrolled_count", { count: "1K+" })}{" "}
              {/* Translated enrolled count */}
            </Info>
          }
          type="avatarStack"
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Cell
          subtitle={
            <Title children={t("Language")} style={{ fontSize: "2.3 vh" }} />
          }
          style={{ pointerEvents: "none" }}
          after={
            <>
              <Button
                mode="bezeled"
                children={t("English")}
                style={{
                  pointerEvents: "none",
                  marginLeft: "-4%",
                  borderRadius: 6,
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
          }
        />
      </div>
    </>
  );
}

export default Head;
