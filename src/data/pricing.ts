export type PricingItem = { name: string; price: string; note?: string };

export const pricing: PricingItem[] = [
  { name: "Dấu tên", price: "80.000 – 160.000đ", note: "Tùy kích thước, loại cán" },
  { name: "Dấu chữ ký", price: "120.000 – 160.000đ", note: "Tùy độ phức tạp chữ ký" },
  { name: "Dấu tròn công ty", price: "từ 220.000đ", note: "Tùy kích thước, loại cán" },
  { name: "Dấu vuông", price: "80.000 – 280.000đ", note: "Dấu địa chỉ, MST, shop" },
  { name: "Dấu chức danh", price: "80.000 – 120.000đ", note: "Giám đốc, Kế toán…" },
  { name: "Dấu công ty", price: "từ 220.000đ", note: "Thiết kế theo nội dung công ty" },
  { name: "Dấu logo theo yêu cầu", price: "180.000 – 280.000đ", note: "Logo phức tạp báo giá riêng" },
  { name: "Dấu hoàn công", price: "550.000 – 580.000đ", note: "Theo mẫu hồ sơ xây dựng" },
  { name: "Dấu ngày tháng năm", price: "từ 80.000đ", note: "Loại thường / tự động" },
  { name: "Dấu số nhảy", price: "từ 180.000đ", note: "Số chữ số tùy chọn" }
];
