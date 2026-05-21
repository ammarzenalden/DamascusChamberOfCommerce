import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { AcademyPage } from "./pages/AcademyPage";
import { CourseDetailsPage } from "./pages/CourseDetailsPage";
import { EntrepreneurshipPage } from "./pages/EntrepreneurshipPage";
import { CoworkingPage } from "./pages/CoworkingPage";
import { InclusionPage } from "./pages/InclusionPage";
import { JobsPage } from "./pages/JobsPage";
import { UserDashboard } from "./pages/UserDashboard";
import { AdminDashboard } from "./pages/AdminDashboard";
import { NotFound } from "./pages/NotFound";
import { GateToTradePage } from './pages/GateToTradePage';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "academy", Component: AcademyPage },
      { path: "academy/:courseId", Component: CourseDetailsPage },
      { path: "entrepreneurship", Component: EntrepreneurshipPage },
      { path: "coworking", Component: CoworkingPage },
      { path: "inclusion", Component: InclusionPage },
      { path: "jobs", Component: JobsPage },
      { path: "dashboard", Component: UserDashboard },
      { path: "admin", Component: AdminDashboard },
      { path: "*", Component: NotFound },
	  {
  path: '/gate-to-trade',
  element: <GateToTradePage />,
},
    ],
  },
]);
