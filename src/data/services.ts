export type Service = {
  slug: string;
  name: string;
  priceFrom: string;
  lead: string;
};

export const services: Service[] = [
  { slug: "khac-dau-ten", name: "Khắc dấu tên", priceFrom: "80.000 – 160.000đ", lead: "Gọn, rõ nét, dùng cho cá nhân – shop – văn phòng." },
  { slug: "khac-dau-cong-ty", name: "Khắc dấu công ty", priceFrom: "từ 220.000đ", lead: "Khắc dấu theo thông tin doanh nghiệp, làm nhanh." },
  { slug: "khac-dau-tron", name: "Khắc dấu tròn", priceFrom: "từ 220.000đ", lead: "Dấu tròn công ty, dấu tròn theo yêu cầu." },
  { slug: "khac-dau-vuong", name: "Khắc dấu vuông", priceFrom: "80.000 – 280.000đ", lead: "Dấu vuông địa chỉ, mã số thuế, shop." },
  { slug: "khac-dau-chuc-danh", name: "Khắc dấu chức danh", priceFrom: "80.000 – 120.000đ", lead: "Giám đốc, Kế toán, Thủ quỹ… rõ ràng, chuyên nghiệp." },
  { slug: "dau-ngay-thang-nam", name: "Dấu ngày tháng năm", priceFrom: "từ 80.000đ", lead: "Dễ chỉnh ngày, phù hợp chứng từ – kho – văn thư." },
  { slug: "dau-so-nhay", name: "Dấu số nhảy", priceFrom: "từ 180.000đ", lead: "Đánh số tự tăng, quản lý đơn – phiếu – hồ sơ." },
  { slug: "khac-dau-hoan-cong", name: "Khắc dấu hoàn công", priceFrom: "550.000 – 580.000đ", lead: "Dùng cho hồ sơ xây dựng, theo mẫu phổ biến." }
];
