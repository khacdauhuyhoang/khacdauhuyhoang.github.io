import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="brand">
          <div className="brand__name">Khắc Dấu Huy Hoàng</div>
          <div className="brand__sub">Long Xuyên, An Giang • Ship toàn quốc</div>
        </div>

        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav__link is-active" : "nav__link")}>
            Trang chủ
          </NavLink>
          <NavLink to="/bang-gia" className={({ isActive }) => (isActive ? "nav__link is-active" : "nav__link")}>
            Bảng giá
          </NavLink>
          <NavLink to="/khu-vuc/khac-dau-long-xuyen" className={({ isActive }) => (isActive ? "nav__link is-active" : "nav__link")}>
            Long Xuyên
          </NavLink>
          <NavLink to="/lien-he" className={({ isActive }) => (isActive ? "nav__link is-active" : "nav__link")}>
            Liên hệ
          </NavLink>

          <a className="nav__cta" href="https://zalo.me/0366754440" target="_blank" rel="noreferrer">
            Chat Zalo
          </a>
        </nav>
      </div>
    </header>
  );
}
