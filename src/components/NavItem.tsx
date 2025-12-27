import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  label: string;
  href: string;
  isPage?: boolean;
}

export const NavItem = ({ label, href, isPage }: NavItemProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const className = "text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground hover-underline transition-colors";

  // If it's a dedicated page, always use Link
  if (isPage) {
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    );
  }

  // For home page, use anchor links; for other pages, link back to home with hash
  if (isHomePage) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link to={`/${href}`} className={className}>
      {label}
    </Link>
  );
};
