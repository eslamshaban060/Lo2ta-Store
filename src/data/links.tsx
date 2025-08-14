import { MessageSquare, Headphones, Search, Grid } from "lucide-react";
interface InfoPage {
  title: string;
  link: string;
}

export const NavLinks = [
  {
    name: "الرئسية",
    link: "/",
  },
  {
    name: "المنتجات",
    link: "/products",
  },
  {
    name: "العروض",
    link: "/offers",
  },
  {
    name: "من نحــن",
    link: "/about",
  },
  {
    name: "اتصل بنا",
    link: "/contact",
  },
];

export const InfoPages: InfoPage[] = [
  {
    title: "الأسئلة الشائعة",
    link: "/faq",
  },
  {
    title: "الشحن والإرجاع",
    link: "/shipping-returns",
  },
  {
    title: "سياسة الخصوصية",
    link: "/privacy-policy",
  },
  {
    title: "شروط الخدمة",
    link: "/terms-of-service",
  },
];

export const Categories = [
  {
    id: 1,
    title: "طعام",
    link: "/products/food",
    subcategories: [
      { name: "ساندوتشات", link: "/products/food/sandwiches" },
      { name: "حلويات شرقية", link: "/products/food/sweets" },
      { name: "مخبوزات", link: "/products/food/bakery" },
      { name: "عصائر طبيعية", link: "/products/food/juices" },
      { name: "منتجات منزلية", link: "/products/food/homemade" },
    ],
  },
  {
    id: 2,
    title: "ملابس",
    link: "/products/clothing",
    subcategories: [
      { name: "تيشرتات رجالي", link: "/products/clothing/men-tshirts" },
      { name: "إيشاربات حريمي", link: "/products/clothing/scarves" },
      { name: "شرابات وجوارب", link: "/products/clothing/socks" },
      { name: "ملابس أطفال", link: "/products/clothing/kids" },
    ],
  },
  {
    id: 3,
    title: "إكسسوارات",
    link: "/products/accessories",
    subcategories: [
      { name: "ساعات تقليد", link: "/products/accessories/watches" },
      { name: "نظارات شمس", link: "/products/accessories/sunglasses" },
      { name: "اكسسوارات بنات", link: "/products/accessories/jewelry" },
      { name: "محافظ وميداليات", link: "/products/accessories/wallets" },
    ],
  },
  {
    id: 4,
    title: "هدايا رمزية",
    link: "/products/gifts",
    subcategories: [
      { name: "بوكس هدايا", link: "/products/gifts/box" },
      { name: "شموع معطرة", link: "/products/gifts/candles" },
      { name: "ورود صناعية", link: "/products/gifts/flowers" },
      { name: "لوحات صغيرة", link: "/products/gifts/art" },
    ],
  },
  {
    id: 5,
    title: "مستحضرات تجميل",
    link: "/products/beauty",
    subcategories: [
      { name: "روج وكحل", link: "/products/beauty/makeup" },
      { name: "ماسكات طبيعية", link: "/products/beauty/masks" },
      { name: "صابون طبيعي", link: "/products/beauty/soap" },
      { name: "كريمات محلية", link: "/products/beauty/creams" },
    ],
  },
  {
    id: 6,
    title: "منتجات يدوية",
    link: "/products/handmade",
    subcategories: [
      { name: "أعمال خرز", link: "/products/handmade/beads" },
      { name: "مشغولات كروشيه", link: "/products/handmade/crochet" },
      { name: "صواني خشب", link: "/products/handmade/wood" },
      { name: "دفاتر مزخرفة", link: "/products/handmade/notebooks" },
    ],
  },

  {
    id: 7,
    title: "أطفال",
    link: "/products/kids",
    subcategories: [
      { name: "ألعاب صغيرة", link: "/products/kids/toys" },
      { name: "قصص أطفال", link: "/products/kids/books" },
      { name: "إكسسوارات مدرسية", link: "/products/kids/supplies" },
      { name: "بوكس مفاجآت", link: "/products/kids/surprise-box" },
    ],
  },
];

// main slide data
export const sliderData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    badge: "فقط 100 جنيه!",
    title: "منتجات متنوعة",
    subtitle: "أفضل العروض",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    badge: "توصيل مجاني!",
    title: "أحدث المنتجات",
    subtitle: "وصل حديثاً",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    badge: "خصم 20%",
    title: "تسوق بأقل سعر",
    subtitle: "عروض حصرية",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    badge: "اطلب الآن!",
    title: "أزياء عصرية",
    subtitle: "تشكيلة جديدة",
  },
];

// Types
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Features: FeatureProps[] = [
  {
    icon: <Grid />,
    title: "بساطة السعر الثابت",
    description: "جميع المنتجات بسعر 100 جنيه مصري فقط—بدون مفاجآت.",
  },
  {
    icon: <MessageSquare />,
    title: "دردشة مباشرة مع البائع",
    description: "تحدث مباشرة مع التجار عبر واتساب أو من خلال الاتصال.",
  },
  {
    icon: <Headphones />,
    title: "دعم متواصل",
    description: "فريق خدمة العملاء متاح 24 ساعة لمساعدتك في أي وقت.",
  },
  {
    icon: <Search />,
    title: "فئات مختارة بعناية",
    description: "طعام، أزياء، أدوات منزلية، هدايا، مستحضرات تجميل وأكثر.",
  },
];
