const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-gradient-aqua font-bold">Yankurije Yvonne</span>. All rights reserved.
        </p>
        <p className="font-mono text-[10px] text-muted-foreground/50 tracking-wider uppercase">
          Built with precision
        </p>
      </div>
    </footer>
  );
};

export default Footer;
