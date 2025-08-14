export default interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl: string;
  authorName: string;
}

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "كيفية استخدام لقطة ستور للتسوق بسهولة وأمان",
    description:
      "تعرف على خطوات سهلة للتسوق بسرعة وأمان عبر منصة لقطة ستور واستمتع بتجربة تسوق فريدة من نوعها",
    date: "٥ مايو ٢٠٢٤",
    category: "دليل المستخدم",
    imageUrl:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    authorName: "أحمد محمود",
  },
  {
    id: 2,
    title: "قصص نجاح التجار في المنيا بعد الانضمام للمنصة",
    description:
      "نستعرض قصص نجاح أصحاب المحلات الصغيرة بعد انضمامهم لمنصتنا وكيف ساعدتهم على زيادة المبيعات",
    date: "٢ مايو ٢٠٢٤",
    category: "قصص نجاح",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    authorName: "سارة خالد",
  },
  {
    id: 3,
    title: "منتجات جديدة وحصرية هذا الأسبوع على لقطة ستور",
    description:
      "اكتشف أحدث المنتجات التي انضمت لمنصة لقطة ستور هذا الأسبوع واستفد من العروض الحصرية المقدمة",
    date: "١ مايو ٢٠٢٤",
    category: "منتجات جديدة",
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    authorName: "محمد عبدالله",
  },
  {
    id: 4,
    title: "كيف تبدأ مشروعك الخاص على منصة لقطة ستور؟",
    description:
      "دليل شامل لكل من يرغب في بدء مشروع تجاري على منصة لقطة ستور والاستفادة من مميزاتها الفريدة",
    date: "٢٨ أبريل ٢٠٢٤",
    category: "ريادة أعمال",
    imageUrl:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop",
    authorName: "عمر فتحي",
  },
];
