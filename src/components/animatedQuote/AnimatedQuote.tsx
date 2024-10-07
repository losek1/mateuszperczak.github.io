import Css from "@icons/css.svg?react";
import Git from "@icons/git.svg?react";
import Python from "@icons/python.svg?react";
import React from "@icons/react.svg?react";
import Typescript from "@icons/typescript.svg?react";
import type { CSSProperties, FC } from "react";

import StyledAnimatedQuote from "./AnimatedQuote.styles";

type Item = {
  gridArea?: CSSProperties["gridArea"];
  icon: FC;
  label?: string;
};

const lol: Item[] = [
  {
    icon: Python,
    gridArea: "a",
  },
  {
    icon: Typescript,
    gridArea: "b",
  },
  {
    icon: Css,
    label: "CSS",
    gridArea: "c",
  },
  {
    icon: React,
    gridArea: "d",
  },
  {
    icon: Git,
    gridArea: "e",
  },
];

const AnimatedQuote = (): JSX.Element => {
  return (
    <StyledAnimatedQuote>
      {/* <div>What i use</div> */}

      <div className="d">
        {lol.map(({ gridArea, icon: Icon, label }, index) => (
          <div key={index} className="e" style={{ gridArea }}>
            <Icon />
            {label && <span className="c">{label}</span>}
          </div>
        ))}
      </div>

      {/* <div className="a">
        <div className="b">
          <Typescript />
          <span className="c">Typescript</span>
        </div>
        <div className="b">
          <React />
          <span className="c">React</span>
        </div>
        <div className="b">
          <Python />
          <span className="c">Python</span>
        </div>
        <div className="b">
          <Css />
          <span className="c">Css</span>
        </div>
      </div> */}

      {/* <div className="header">
        <span>My experience</span>
      </div>
      <div className="job-wrapper">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="job">
            <div className="job-icon">
              <Briefcase />
            </div>
            <div className="job-body">
              <div className="job-section">
                <span className="job-title">Fullstack deveoper</span>
                <span className="job-year">Coig S.A</span>
              </div>
              <div className="buttons">
                <a className="button">
                  <span>Open</span>
                  <Link />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </StyledAnimatedQuote>
  );
};

export default AnimatedQuote;
