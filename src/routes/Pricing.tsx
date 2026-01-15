import { pricing } from "../data/pricing";

export default function Pricing() {
  return (
    <main className="container" style={{ padding: "28px 0" }}>
      <h1 style={{ marginTop: 0 }}>Bảng giá khắc dấu (tham khảo)</h1>
      <p style={{ color: "var(--muted)", maxWidth: 860 }}>
        Giá dưới đây là khung “giá từ” theo từng nhóm sản phẩm. Giá thực tế có thể thay đổi theo kích thước, loại cán,
        số lượng và độ phức tạp nội dung/logo. Vui lòng chat Zalo để nhận báo giá chi tiết và mẫu duyệt.
      </p>

      <div className="tableWrap">
        <table className="table">
          <thead>
            <tr>
              <th>Loại dấu</th>
              <th>Giá</th>
              <th>Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {pricing.map((p) => (
              <tr key={p.name}>
                <td><strong>{p.name}</strong></td>
                <td>{p.price}</td>
                <td style={{ color: "var(--muted)" }}>{p.note ?? "Liên hệ để báo giá chi tiết"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a className="btn" href="https://zalo.me/0366754440" target="_blank" rel="noreferrer">
          Chat Zalo nhận báo giá
        </a>
        <a className="btn btn--ghost" href="#/lien-he">Thông tin liên hệ</a>
      </div>
    </main>
  );
}
