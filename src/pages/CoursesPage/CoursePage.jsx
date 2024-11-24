// CoursePage.js
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "@/contexts/UserContext";
import { getCourseDetails, getAllChapters } from "@/Utils/thinkificAPI";
import * as amplitude from "@amplitude/analytics-browser";
import { Button, FixedLayout } from "@telegram-apps/telegram-ui";
import WebApp from "@twa-dev/sdk";
import Head from "./Components/Head";
import Description from "./Components/Description";
import ChaptersList from "./Components/ChapterList";
import WhatIsTarget from "./Components/WhatIsTarget";
import { useTranslation } from "react-i18next";
import "./Style.css";

export function CoursePage() {
  const params = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [chapters, setChapters] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [isVisibleStoriesCard, setIsVisibleStoriesCard] = useState(true);
  const [isWaitList, setIsWaitList] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const loadCourseDetails = async () => {
      try {
        const courseData = await getCourseDetails(user.id, params.courseId);
        setCourse(courseData);
        const courseChapters = await getAllChapters(params.courseId, user.id);
        setChapters(courseChapters);
      } catch (error) {
        console.error("Failed to load course:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCourseDetails();
  }, [params, user]);

  useEffect(() => {
    function onClick() {
      navigate("/");
    }
    !WebApp.BackButton.isVisible && WebApp.BackButton.show();
    WebApp.BackButton.onClick(onClick);
    amplitude.track("back_to_home");
    return () => WebApp.BackButton.offClick(onClick);
  }, [navigate]);

  const handleShareCourse = () => {
    amplitude.track("share_course");
    const shareLink = `https://t.me/share/url?url=http://t.me/thetargetbot/learn?startapp=course-${course.id}_source-${user.id}\n`;
    window.open(shareLink, "_blank");
  };

  const handleGoToStories = () => {
    amplitude.track("Open Stories from Course Page");
    navigate("/courses/stories");
  };

  const handleOpenChapters = (chapterId) => {
    navigate(`/course/${params.courseId}/chapter/${chapterId}`);
  };

  const handleCloseHint = () => {
    setIsVisibleStoriesCard(false);
  };

  const setupMainButtonForWaitlist = () => {
    if (course?.my) {
      window.Telegram.WebApp.MainButton.text = "You in waitlist";
      window.Telegram.WebApp.MainButton.show();
      window.Telegram.WebApp.MainButton.onClick(null);
    } else {
      window.Telegram.WebApp.MainButton.text = "Join to waitlist";
      window.Telegram.WebApp.MainButton.show();
      window.Telegram.WebApp.MainButton.onClick(handleJoinWaitlist);
    }
  };

  const setupMainButtonForRegularCourse = () => {
    if (window.Telegram.WebApp.MainButton.text != "You have new course!") {
      window.Telegram.WebApp.MainButton.text = t("get_course_from");
      window.Telegram.WebApp.MainButton.show();
      window.Telegram.WebApp.MainButton.onClick(handleOpenPopUp);
    }
  };

  return (
    <div>
      <Head
        course={course}
        user={user}
        t={t}
        handleShareCourse={handleShareCourse}
      />
      <Description course={course} t={t} />
      <WhatIsTarget
        t={t}
        handleGoToStories={handleGoToStories}
        handleCloseHint={handleCloseHint}
        isVisibleStoriesCard={isVisibleStoriesCard}
      />
      <ChaptersList
        course={course}
        chapters={chapters}
        t={t}
        isWaitList={isWaitList}
        handleOpenChapters={handleOpenChapters}
        isChapterCompleted={() => {}}
      />
    </div>
  );
}
