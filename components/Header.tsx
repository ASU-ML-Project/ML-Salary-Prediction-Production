import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <header className="nav">
      <Link href="/" className="nav-brand" aria-label="CompAnalytics Home">
        <Image
          src="/full-logo.png"
          alt="CompAnalytics"
          width={180}
          height={36}
          style={{ height: "36px", width: "auto", objectFit: "contain" }}
          priority
        />
      </Link>
      <nav aria-label="Main Navigation">
        <ul className="nav-links">
          <li><a href="#predict" className="nav-link">Predict</a></li>
          <li><a href="#model" className="nav-link">Model</a></li>
          <li><a href="#insights" className="nav-link">Insights</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
      <p className="nav-status">
        <i id="api-dot">●</i> <span id="api-status-text">API — Live</span>
      </p>
    </header>
  );
};

export default Header;
