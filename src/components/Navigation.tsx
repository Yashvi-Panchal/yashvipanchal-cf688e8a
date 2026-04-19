import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { NavItem } from './NavItem';

const navItems = [
  { label: 'About', href: '/about', isPage: true },
  { label: 'Work', href: '#work' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface NavigationProps {
  breadcrumb?: BreadcrumbItem;
}

export const Navigation = ({ breadcrumb }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-background/95 backdrop-blur-sm border-b border-hairline'
          : ''
      }`}
      style={{ height: 'var(--nav-height)' }}
    >
      <div className="section-container h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            aria-label="Yashvi Panchal — Home"
            className="group relative block font-serif overflow-hidden whitespace-nowrap"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: '22px',
              fontWeight: 400,
              lineHeight: 1,
              color: 'hsl(var(--foreground))',
              width: '2ch',
              transition: 'width 0.4s ease-in-out',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.width = '11ch')}
            onMouseLeave={(e) => (e.currentTarget.style.width = '2ch')}
          >
            <span
              className="inline-block align-baseline transition-opacity duration-[400ms] ease-in-out group-hover:opacity-0"
              aria-hidden="true"
            >
              YP
            </span>
            <span
              className="absolute left-0 top-0 inline-block opacity-0 transition-opacity duration-[400ms] ease-in-out group-hover:opacity-100"
              aria-hidden="true"
            >
              Yashvi Panchal
            </span>
          </Link>

          {breadcrumb && (
            <>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground truncate max-w-[200px] md:max-w-none">
                {breadcrumb.label}
              </span>
            </>
          )}
        </div>

        <ul className="flex items-center gap-7 md:gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavItem label={item.label} href={item.href} isPage={item.isPage} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
