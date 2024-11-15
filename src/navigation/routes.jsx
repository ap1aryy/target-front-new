import { IndexPage } from "@/pages/IndexPage/IndexPage";
import { CoursePage } from "@/pages/CoursesPage/CoursePage";
import { EnrollmentsPage } from "@/pages/EnrolledPage/Enrolled";
import { Chapters } from "@/pages/Courses/Chapters1";
import { PopUp } from "@/pages/PurchasePage/PopUp";
import { StoriesPage } from "@/pages/StoriesPage/Stories";
/**
 * @typedef {object} Route
 * @property {string} path
 * @property {import('react').ComponentType} Component
 * @property {string} [title]
 * @property {import('react').JSX.Element} [icon]
 */

/**
 * @type {Route[]}
 */
export const routes = [
  { path: "/", Component: IndexPage },
  { path: "/courses/:courseId", Component: CoursePage, title: "Course" },
  { path: "/enrollments", Component: EnrollmentsPage, title: "Enroll" },
  {
    path: "/courses/:courseId/chapters/:index",
    Component: Chapters,
    title: "Chapters",
  },
  { path: "/buy", Component: PopUp, title: "PopUp" },
  { path: "/courses/stories", Component: StoriesPage, title: "StoriesPage" },
];
