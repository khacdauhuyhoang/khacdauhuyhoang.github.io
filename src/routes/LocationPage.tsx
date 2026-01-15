import { useParams } from "react-router-dom";

const content: Record<string, { title: string; lead: string; body: string[] }> = {
  "khac-dau-long-xuyen": {
    title: "Khắc dấu Long Xuyên – Nhận làm nhanh, ship toàn quốc",
    lead: "Nhận khắc dấu tại Long Xuyên (An Giang): dấu tên, dấu công ty, dấu tròn, dấu vuông, dấu ngày tháng năm, dấu số nhảy, dấu hoàn công…",
    body: [
      "Khắc Dấu Huy Hoàng nhận làm dấu lấy liền tại TP. Long Xuyên, hỗ trợ thiết kế mẫu miễn phí và chỉnh sửa đến khi đúng trước khi khắc.",
      "Bạn chỉ cần nhắn Zalo nội dung cần khắc (hoặc gửi hình/logo). Chúng tôi gửi mẫu duyệt, sau đó tiến hành khắc và giao theo yêu cầu.",
      "Hỗ trợ nhận hàng tại Long Xuyên hoặc ship toàn quốc. Giá hiển thị trên website là giá tham khảo theo mô hình “giá từ”, các yêu cầu đặc biệt sẽ báo giá chi tiết qua Zalo."
    ]
  },
  "khac-dau-an-giang": {
    title: "Khắc dấu An Giang – Làm nhanh, giao tận nơi",
    lead: "Nhận khắc dấu tại An Giang: Long Xuyên và các khu vực lân cận. Có ship toàn quốc theo yêu cầu.",
    body: [
      "Nếu bạn ở An Giang và cần khắc dấu gấp, bạn có thể gửi nội dung qua Zalo để được tư vấn nhanh và nhận báo giá.",
      "Chúng tôi làm đa dạng loại dấu: dấu tên, dấu chức danh, dấu công ty, dấu tròn, dấu vuông, dấu ngày tháng năm, dấu số nhảy, dấu hoàn công…",
      "Nhắn Zalo để nhận mẫu duyệt và báo giá chi tiết theo kích thước, loại cán và độ phức tạp nội dung."
    ]
  }
};

export default function LocationPage() {
  const { slug } = useParams();

  const data = slug ? content[slug] : undefined;

  if (!data) {
    return (
      <main className="container" style={{ padding: "28px 0" }}>
        <h1>Khu vực không tồn tại</h1>
        <p>Vui lòng quay lại trang chủ.</p>
        <a className="btn btn--ghost" href="#/">Về trang chủ</a>
      </main>
    );
  }

  return (
    <main className="container" style={{ padding: "28px 0" }}>
      <h1 style={{ marginTop: 0 }}>{data.title}</h1>
      <p style={{ color: "var(--muted)", maxWidth: 860 }}>{data.lead}</p>

      <div style={{ marginTop: 14, display: "grid", gap: 10, maxWidth: 900 }}>
        {data.body.map((p, i) => (
          <p key={i} style={{ margin: 0, lineHeight: 1.7, color: "var(--text)" }}>
            {p}
          </p>
        ))}
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a className="btn" href="https://zalo.me/0366754440" target="_blank" rel="noreferrer">
          Chat Zalo báo giá
        </a>
        <a className="btn btn--ghost" href="#/bang-gia">Xem bảng giá</a>
      </div>
    </main>
  );
}
