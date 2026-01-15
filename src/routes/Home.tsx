import { services } from "../data/services";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Khắc Dấu Huy Hoàng – Long Xuyên, An Giang</h1>
          <p className="hero__lead">
            Khắc dấu lấy liền, ship toàn quốc. Nhận khắc dấu tên, dấu công ty, dấu tròn, dấu vuông, dấu hoàn công…
          </p>

          <div className="hero__cta">
            <a className="btn" href="https://zalo.me/0366754440" target="_blank" rel="noreferrer">
              Chat Zalo nhận báo giá
            </a>
            <a className="btn btn--ghost" href="#/bang-gia">
              Xem bảng giá
            </a>
          </div>

          <div className="hero__badges">
            <div className="badge">Miễn phí thiết kế mẫu</div>
            <div className="badge">Sửa đến khi đúng</div>
            <div className="badge">Giao nhanh • Ship toàn quốc</div>
          </div>
        </div>
      </section>

      {/* Dịch vụ */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2>Dịch vụ khắc dấu</h2>
            <p>Giá hiển thị là giá tham khảo theo mô hình “giá từ”. Yêu cầu chi tiết vui lòng chat Zalo.</p>
          </div>

          <div className="grid">
            {services.map((s) => (
              <a key={s.slug} className="card" href={`#/dich-vu/${s.slug}`}>
                <div className="card__title">{s.name}</div>
                <div className="card__price">Giá: <strong>{s.priceFrom}</strong></div>
                <div className="card__text">{s.lead}</div>
                <div className="card__action">
                  <span className="link">Xem chi tiết →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quy trình */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <h2>Quy trình đặt khắc dấu nhanh</h2>
            <p>Chốt đơn qua Zalo, duyệt mẫu nhanh, làm và giao đúng hẹn.</p>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step__num">1</div>
              <div className="step__title">Gửi nội dung/mẫu qua Zalo</div>
              <div className="step__text">Bạn gửi nội dung cần khắc hoặc ảnh mẫu/logo.</div>
            </div>
            <div className="step">
              <div className="step__num">2</div>
              <div className="step__title">Duyệt thiết kế</div>
              <div className="step__text">Chỉnh sửa đến khi đúng trước khi khắc.</div>
            </div>
            <div className="step">
              <div className="step__num">3</div>
              <div className="step__title">Khắc & giao hàng</div>
              <div className="step__text">Nhận tại Long Xuyên hoặc ship toàn quốc.</div>
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            <a className="btn" href="https://zalo.me/0366754440" target="_blank" rel="noreferrer">
              Chat Zalo để đặt khắc dấu
            </a>
          </div>
        </div>
      </section>

      {/* Local SEO links */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2>Khắc dấu theo khu vực</h2>
            <p>Tập trung Long Xuyên – An Giang, hỗ trợ ship toàn quốc.</p>
          </div>

          <div className="pillRow">
            <a className="pill" href="#/khu-vuc/khac-dau-long-xuyen">Khắc dấu Long Xuyên</a>
            <a className="pill" href="#/khu-vuc/khac-dau-an-giang">Khắc dấu An Giang</a>
          </div>
        </div>
      </section>
    </main>
  );
}
