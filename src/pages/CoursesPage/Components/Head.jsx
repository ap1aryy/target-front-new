import React from "react";
import {
  Title,
  Image,
  Button,
  AvatarStack,
  Avatar,
  Chip,
  Info,
  Caption,
  Cell,
} from "@telegram-apps/telegram-ui";
import { shareIcon } from "@/pages/CoursesPage/Utils";
export function Head({ course, user, t, handleShareCourse }) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          width: "100vw",
          height: "180px",
          marginBottom: 200,
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src="https://import.cdn.thinkific.com/999858/pyyc0rCgRaa3ekSGO7VK_image_2024-11-11_12-22-24.png"
            style={{
              position: "absolute",
              top: -5,
              left: 0,
              right: 0,
              height: "180px",
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
              maxWidth: "60%",
              wordWrap: "break-word",
            }}
          >
            <Title level="3" weight="3" children="TON & Telegram " />
          </div>
          <Button
            children="Share"
            style={{
              position: "absolute",
              bottom: "15%",
              right: "5%",
              borderRadius: "40px",
              wordWrap: "break-word",
            }}
            after={shareIcon}
            size="s"
          />
        </div>
      </div>

      <div
        style={{
          marginTop: "200px",
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
                  <Avatar size={28} />
                  <Avatar size={28} />
                  <Avatar size={28} />
                </AvatarStack>
              }
              type="avatarStack"
            >
              1+K enrolled
            </Info>
          }
          type="avatarStack"
        />
      </div>

      <div
        style={{
          marginBottom: 16,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Cell children="Language:" />
        <Button mode="bezeled" children="English" />
        <Button mode="bezeled" children="Russian" />
      </div>
    </>
  );
}

export default Head;
