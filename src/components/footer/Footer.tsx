import { memo, useMemo } from "react";
import { Fragment } from "react";

import { StyledFooter } from "./Footer.styles";

export const Footer = memo((): JSX.Element => {
  const year = useMemo(() => new Date().getFullYear(), []);

  const footerText = ["v7.0.0", "GPL-3.0", year, "© Mateusz Perczak"];

  return (
    <StyledFooter>
      <p className="footer-wrapper">
        <a
          className="title-link"
          href="https://github.com/MateuszPerczak/portfolio"
          rel="noopener noreferrer"
          target="_blank"
        >
          Portfolio
        </a>
        <span className="text-wrapper">
          {footerText.map((text, index) => (
            <Fragment key={`footer-text-${index}`}>
              <span>{text}</span>
              {footerText.length - 1 !== index && <span>|</span>}
            </Fragment>
          ))}
        </span>
      </p>
    </StyledFooter>
  );
});

Footer.displayName = "Footer";
