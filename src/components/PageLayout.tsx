import { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { storageService } from "../services/storage.service";
import type { ReactNode } from "react";


export default function PageLayout({
  children,
  maxWidth = "lg",
}: {
  children: ReactNode;
  maxWidth?: "md" | "lg";
}) {
  const { isAuthenticated, baSlug } = useAuth();
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeStudyPath, setActiveStudyPath] = useState("/studies");
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (baSlug) setActiveStudyPath(`/${baSlug}`);
  }, [baSlug]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/framework", label: "Framework Overview" },
    { path: "/domains", label: "Structural Domains" },
    { path: "/methodology", label: "Methodology" },
    { path: "/applications", label: "Applications" },
    { path: "/governance", label: "Governance" },
    { path: activeStudyPath, label: "Active Studies", isActiveStudies: true },
    { path: "/survey", label: "Survey" },
  ];

  const isNavItemActive = (path: string, isActiveStudies?: boolean) => {
    if (isActiveStudies) {
      return (
        location.pathname === "/studies" ||
        (baSlug != null && location.pathname === `/${baSlug}`)
      );
    }
    return location.pathname === path;
  };

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setIsProfileOpen(false);
    };
    document.addEventListener("click", h);
    return () => document.removeEventListener("click", h);
  }, []);

  const handleLogout = () => {
    storageService.resetAuthData();
    setIsProfileOpen(false);
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-charcoal">
      <header className="sticky top-0 z-50 bg-charcoal/95 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">AXIS</span>
              <span className="text-xl font-bold text-cyan-400">FRAMEWORK</span>
            </Link>
            <div className="flex items-center gap-2">
              <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      isNavItemActive(item.path, item.isActiveStudies)
                        ? "text-cyan-400"
                        : "text-stone-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              {isAuthenticated && (
                <div className="relative ml-2" ref={profileRef}>
                  <button type="button" onClick={() => setIsProfileOpen(!isProfileOpen)} className="p-2.5 rounded-lg text-stone-300 hover:text-cyan-400 hover:bg-white/5" aria-label="Profile">
                    <User className="w-5 h-5" />
                  </button>
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 py-2 w-48 bg-charcoal-light rounded-xl border border-white/10 z-50">
                      <Link to="/account" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm text-stone-300 hover:bg-white/5 hover:text-cyan-400">
                        <User className="w-4 h-4" /> Account
                      </Link>
                      <button type="button" onClick={handleLogout} className="flex items-center gap-2 w-full px-4 py-2.5 text-left text-sm text-stone-300 hover:bg-amber-500/10 hover:text-amber-400">
                        <LogOut className="w-4 h-4" /> Log out
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <main className={"pt-10 pb-24 px-6 lg:px-12 mx-auto " + (maxWidth === "md" ? "max-w-4xl" : "max-w-6xl")}>
        {children}
      </main>
    </div>
  );
}
