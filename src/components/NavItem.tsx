import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  label: string;
  href: string;
}

export const NavItem = ({ label, href }: NavItemProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // For home page, use anchor links; for other pages, link back to home with hash
  const linkHref = isHomePage ? href : `/${href}`;

  if (isHomePage) {
    return (
      <a
        href={href}
        className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground hover-underline transition-colors"
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      to={linkHref}
      className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground hover-underline transition-colors"
    >
      {label}
    </Link>
  );
};
