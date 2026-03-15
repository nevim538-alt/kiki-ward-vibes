const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 pb-24 md:pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="font-display text-2xl tracking-wider text-foreground">KIKI WARD</span>
          <p className="font-body text-sm text-muted-foreground mt-1">
            Music Club · Praha 3 – Žižkov
          </p>
        </div>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kiki Ward Music Club. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
