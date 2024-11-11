import { IndexPage } from '@/pages/IndexPage/IndexPage';
import { CoursePage } from '@/pages/InitDataPage/CoursePage';
import { EnrollmentsPage } from '@/pages/ThemeParamsPage/Enrolled';
import { Chapters } from '@/pages/Courses/Chapters1';
import { PopUp } from '@/pages/LaunchParamsPage/PopUp';
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
  { path: '/', Component: IndexPage },
  { path: "/courses/:courseId", Component: CoursePage, title: 'Course' },
  { path: "/enrollments", Component: EnrollmentsPage, title: 'Enroll' },
  { path: "/courses/:courseId/chapters/:index", Component: Chapters, title: 'Chapters' },
  { path: "/buy", Component: PopUp, title: 'PopUp'}
];
