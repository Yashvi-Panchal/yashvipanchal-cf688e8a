export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-hairline">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="font-sans text-[13px] text-muted-foreground">
            © {currentYear} Yashvi Panchal. All rights reserved.
          </p>

          <p className="font-serif italic text-primary text-[15px]">
            Designed with intention.
          </p>
        </div>
      </div>
    </footer>
  );
};
