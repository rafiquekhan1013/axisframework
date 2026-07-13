import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../hooks/useAuth';
import { storageService } from '../services/storage.service';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { isAuthenticated, baSlug } = useAuth();

  const activeStudiesPath = baSlug ? `/${baSlug}` : "/studies";

  const isNavLinkActive = (path: string, isActiveStudies?: boolean) => {
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
    document.addEventListener('click', h);
    return () => document.removeEventListener('click', h);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', shortLabel: 'Home' },
    { path: '/framework', label: 'Framework Overview', shortLabel: 'Framework' },
    { path: '/domains', label: 'Structural Domains', shortLabel: 'Domains' },
    { path: '/methodology', label: 'Methodology', shortLabel: 'Methodology' },
    { path: '/applications', label: 'Applications', shortLabel: 'Applications' },
    { path: '/governance', label: 'Governance', shortLabel: 'Governance' },
    { path: activeStudiesPath, label: 'Active Studies', shortLabel: 'Studies', isActiveStudies: true },
    { path: '/survey', label: 'Survey', shortLabel: 'Survey' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal/95 nav-blur border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:gap-4 h-16 lg:h-20">
          <Link to="/" className="shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-lg lg:text-xl xl:text-2xl font-bold tracking-tight whitespace-nowrap"
            >
              <span className="text-white">AXIS</span>
              <span className="text-cyan-400 ml-1 lg:ml-2">FRAMEWORK</span>
            </motion.div>
          </Link>

          <div className="hidden lg:flex flex-1 min-w-0 items-center justify-end gap-0.5">
            <nav
              className="flex flex-nowrap items-center justify-end max-w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Main navigation"
            >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="relative shrink-0 px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors whitespace-nowrap"
              >
                <span
                  className={`${
                    isNavLinkActive(link.path, link.isActiveStudies)
                      ? 'text-cyan-400'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  <span className="xl:hidden">{link.shortLabel}</span>
                  <span className="hidden xl:inline">{link.label}</span>
                </span>
                {isNavLinkActive(link.path, link.isActiveStudies) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            </nav>
          </div>

          <div className="flex items-center gap-1 shrink-0 ml-auto lg:ml-0">
            {isAuthenticated && (
              <div className="relative" ref={profileRef}>
                <button
                  type="button"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="p-2 text-stone-300 hover:text-cyan-400 transition-colors"
                  aria-label="Profile"
                  aria-expanded={isProfileOpen}
                >
                  <User size={20} />
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-charcoal-light rounded-xl border border-white/10 z-50">
                    <Link
                      to="/account"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-stone-300 hover:bg-white/5 hover:text-cyan-400"
                    >
                      <User size={16} /> Account
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        storageService.resetAuthData();
                        setIsProfileOpen(false);
                        window.location.href = '/';
                      }}
                      className="flex items-center gap-2 w-full px-4 py-2.5 text-left text-sm text-stone-300 hover:bg-amber-500/10 hover:text-amber-400"
                    >
                      <LogOut size={16} /> Log out
                    </button>
                  </div>
                )}
              </div>
            )}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle navigation"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-charcoal-light border-t border-white/10"
        >
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isNavLinkActive(link.path, link.isActiveStudies)
                    ? 'bg-cyan-400/10 text-cyan-400'
                    : 'text-stone-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
