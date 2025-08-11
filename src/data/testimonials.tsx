export default interface Testimonial {
  id: number;
  name: string;
  avatar?: string;
  comment: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "فاطمة كريم",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    comment:
      "أحب بساطة الموقع وسهولة الشراء، كل المنتجـات بسعر ثابت وهــو  100 جنيه وأتواصل مباشرة مع البائع المحلي في الشارع بكل سهولة.",
    rating: 5,
  },
  {
    id: 2,
    name: "محمد عبدالله",
    comment:
      "لقطة ستور غيرت طريقة تسوقي تمامًا، فأنا الآن أتعرف على البائعين المحليين وأدعم مجتمعي، مع توفير الوقت والجهد في نفس الوقت.",
    rating: 4,
  },
  {
    id: 3,
    name: "سارة محمود",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    comment:
      "بصفتي مالكة لمتجر صغير، ساعدني لقطة ستور على الوصول إلى عملاء جدد وتنمية أعمالي بشكل ملحوظ بدون تكاليف باهظة أو تعقيدات.",
    rating: 5,
  },
  {
    id: 4,
    name: "أحمد رجب",
    comment:
      "أحب أن جميع المنتجات بسعر واحد، فهذا يجعل التسوق أسهل بكثير ويمنع أي مفاجآت عند الدفع، لتكون التجربة ممتعة في كل مرة.",
    rating: 4,
  },
  {
    id: 5,
    name: "هدى سامي",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    comment:
      "خدمـــة العملاء ممتـــازة جـــدا جــدا  والتوصيـل سريع جــــدًا، أصبـــح لقطـــة ستور جزءًا أساسيًا من روتين التــسوق الأسبــوعي الخـــاص بي.",
    rating: 5,
  },
];
