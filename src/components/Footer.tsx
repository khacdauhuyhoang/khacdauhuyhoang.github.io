export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="footer__title">Khắc Dấu Huy Hoàng</div>
          <div className="footer__text">
            KDC Tây Sông Hậu, TP. Long Xuyên, Tỉnh An Giang
            <br />
            Nhận khắc dấu lấy liền – ship toàn quốc
          </div>
        </div>

        <div>
          <div className="footer__title">Liên hệ</div>
          <div className="footer__text">
            Zalo: <a href="https://zalo.me/0366754440" target="_blank" rel="noreferrer">0366754440</a>
            <br />
            Giờ làm: 08:00 – 20:00 (hàng ngày)
          </div>
        </div>

        <div>
          <div className="footer__title">Dịch vụ</div>
          <div className="footer__text">
            Dấu tên • Dấu công ty • Dấu tròn • Dấu vuông
            <br />
            Dấu ngày tháng năm • Dấu số nhảy • Dấu hoàn công
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        © {new Date().getFullYear()} Khắc Dấu Huy Hoàng. All rights reserved.
      </div>
    </footer>
  );
}
