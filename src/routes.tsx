import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import GuestGuard from "./components/GuestGuard";
import AuthGuard from "./components/AuthGuard";
import Support from "./components/Support";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/login/ResetPassword";
import Account from "./pages/account/Account";
import Home from "./pages/Home";
import FrameworkOverview from "./pages/FrameworkOverview";
import StructuralDomains from "./pages/StructuralDomains";
import Methodology from "./pages/Methodology";
import Applications from "./pages/Applications";
import Governance from "./pages/Governance";
import { Content } from "./components/Content";
import Terms from "./pages/Terms";
import Survey from "./pages/survey/Survey";
import Studies from "./pages/Studies";

function Layout() {
  return (
    <div className="min-h-screen bg-charcoal">
      <ScrollToTop />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "framework", element: <FrameworkOverview /> },
      { path: "domains", element: <StructuralDomains /> },
      { path: "methodology", element: <Methodology /> },
      { path: "applications", element: <Applications /> },
      { path: "governance", element: <Governance /> },
      { path: "forgot-password", element: <GuestGuard><ForgotPassword /></GuestGuard> },
      { path: "reset-password/:token", element: <GuestGuard><ResetPassword /></GuestGuard> },
      { path: "account", element: <AuthGuard><Account /></AuthGuard> },
      { path: "support", element: <Support /> },
      { path: "terms", element: <Terms /> },
      { path: "survey", element: <Survey /> },
      { path: "survey/:id", element: <Survey /> },
      { path: "studies", element: <Studies /> },
      { path: ":first/:second?/:third?", element: <Content /> },
    ],
  },
];

export default routes;
