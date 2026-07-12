const links = [
  ["Home", "#top"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Resume", "#resume"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

const Navbar = () => {
  return (
    <header className="site-header" id="top">
      <nav className="navbar">
        <div className="container d-flex align-items-center justify-content-between gap-3">
          <a className="navbar-brand brand-mark m-0" href="#top">
            AK
          </a>

          <div className="nav-links">
            {links.map(([label, href]) => (
              <a key={label} className="nav-link" href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
