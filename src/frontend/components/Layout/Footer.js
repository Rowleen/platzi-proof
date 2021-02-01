import React from "react";

import "styles/components/footer.styl";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        Developed with 💚 by{" "}
        <a
          className="github-link"
          href="https://github.com/Rowleen"
          target="blank"
        >
          Rowleen
        </a>
      </div>
    </footer>
  );
};

export default Footer;
