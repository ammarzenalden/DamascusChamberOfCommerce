import { Link, useLocation } from 'react-router';
import { Menu, X, Building2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/Button';
import { clsx } from 'clsx';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'الرئيسية', path: '/' },
    { label: 'الخدمات', path: '/services' },
    { label: 'الأكاديمية', path: '/academy' },
    { label: 'ريادة الأعمال', path: '/entrepreneurship' },
    { label: 'المساحات المكتبية', path: '/coworking' },
    { label: 'ذوي الهمم', path: '/inclusion' },
    { label: 'الوظائف', path: '/jobs' },
	{ label: 'Gate to Trade', path: '/gate-to-trade' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Menu - Right Side */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={clsx(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  isActive(item.path)
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-green-lighter hover:text-primary'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Logo - Center */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col items-end">
              <span className="text-xl font-bold text-primary group-hover:text-green-hover transition-colors">
                غرفة تجارة دمشق
              </span>
              <span className="text-sm text-muted-foreground">
                المنصة الرقمية
              </span>
            </div>
            <div className="bg-primary p-2.5 rounded-xl group-hover:bg-green-hover transition-colors">
              <Building2 className="w-7 h-7 text-white" />
            </div>
          </Link>

          {/* Auth Buttons - Left Side (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                لوحة التحكم
              </Button>
            </Link>
            <Button size="sm">
              تسجيل الدخول
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={clsx(
                    'px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive(item.path)
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-green-lighter'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    لوحة التحكم
                  </Button>
                </Link>
                <Button className="w-full">
                  تسجيل الدخول
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
