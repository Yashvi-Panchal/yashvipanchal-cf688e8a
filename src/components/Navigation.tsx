import { useState, useEffect } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Media', href: '#media' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : ''
      }`}
      style={{ height: 'var(--nav-height)' }}
    >
      <div className="section-container h-full flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-lg tracking-wide hover:text-primary transition-colors"
        >
          YP
        </a>
        
        <ul className="flex items-center gap-8 md:gap-12">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground hover-underline transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
