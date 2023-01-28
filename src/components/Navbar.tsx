import { createElement, useState } from "react";
import "../css/Navbar.css";
import { content } from "../data/data";
import "../index.css";
import { usePortfolioContext } from "../utilities/contextAPI";
import { mobileView } from "../utilities/MediaQuery";

const Navbar = () => {
  const { nav } = content;
  const [activeNav, setActiveNav] = useState<string>(nav[0].innerHtml);
  const { displayNav } = usePortfolioContext();

  const isShowing = displayNav();
  const isMobileView = mobileView();

  return (
    <nav style={{ display: !isShowing ? "flex" : "none" }}>
      <a
        href={`${nav[0].link}`}
        title={nav[0].title}
        className={activeNav === nav[0].innerHtml ? "active" : ""}
        onClick={() => setActiveNav(nav[0].innerHtml)}
      >
        <span style={{ display: isMobileView ? "none" : "block" }}>
          {createElement(nav[0].icon)}
        </span>
        {nav[0].innerHtml}
      </a>
      <a
        href={`${nav[1].link}`}
        title={nav[1].title}
        className={activeNav === nav[1].innerHtml ? "active" : ""}
        onClick={() => setActiveNav(nav[1].innerHtml)}
      >
        <span style={{ display: isMobileView ? "none" : "block" }}>
          {createElement(nav[1].icon)}
        </span>
        {nav[1].innerHtml}
      </a>
      <a
        href={`${nav[2].link}`}
        title={nav[2].title}
        className={activeNav === nav[2].innerHtml ? "active" : ""}
        onClick={() => setActiveNav(nav[2].innerHtml)}
      >
        <span style={{ display: isMobileView ? "none" : "block" }}>
          {createElement(nav[2].icon)}
        </span>
        {nav[2].innerHtml}
      </a>
      <a
        href={`${nav[3].link}`}
        title={nav[3].title}
        className={activeNav === nav[3].innerHtml ? "active" : ""}
        onClick={() => setActiveNav(nav[3].innerHtml)}
      >
        <span style={{ display: isMobileView ? "none" : "block" }}>
          {createElement(nav[3].icon)}
        </span>
        {nav[3].innerHtml}
      </a>
      <a
        href={`${nav[4].link}`}
        title={nav[4].title}
        className={activeNav === nav[4].innerHtml ? "active" : ""}
        onClick={() => setActiveNav(nav[4].innerHtml)}
      >
        <span style={{ display: isMobileView ? "none" : "block" }}>
          {createElement(nav[4].icon)}
        </span>
        {nav[4].innerHtml}
      </a>
    </nav>
  );
};

export default Navbar;
