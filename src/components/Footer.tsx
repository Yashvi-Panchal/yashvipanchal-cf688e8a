export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-muted-foreground font-sans">
            © {currentYear} Yashvi Panchal. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground font-sans">
            Designed with intention. Built with restraint.
          </p>
        </div>
      </div>
    </footer>
  );
};
