import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  label: string;
  href: string;
  isPage?: boolean;
}

export const NavItem = ({ label, href, isPage }: NavItemProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const className =
    "font-sans text-[13px] tracking-[0.02em] text-foreground/80 hover:text-primary transition-colors";

  if (isPage) {
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    );
  }

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
