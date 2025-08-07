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
