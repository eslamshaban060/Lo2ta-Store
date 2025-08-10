export default interface ProductType {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
  subcategories: string[];
}
export const Products: ProductType[] = [
  {
    id: "1",
    name: "كمفورت ملونوا منظف سوفت للملابس - 1 لتر",
    description: "منظف ومعطر عالي الجودة للملابس بكل كفاءة",
    image:
      "https://cdn.mafrservices.com/sys-master-root/hb5/hf0/52483130064926/624803_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "مستحضرات تجميل",
    subcategories: ["كريمات محلية", "ماسكات طبيعية"],
  },
  {
    id: "2",
    name: "مناديل بامبرز مبللة للأطفال لطيفة - 64 منديل",
    description: "مناديل مبللة ناعمة وملائمة لبشرة الأطفال الحساسة",
    image:
      "https://cdn.mafrservices.com/sys-master-root/h95/hd2/50551381590046/347778_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "أطفال",
    subcategories: ["إكسسوارات مدرسية", "بوكس مفاجآت"],
  },
  {
    id: "3",
    name: "كابل ديفيا MX70C مايكرو يو اس بي أسود عالي الجودة",
    description: "كابل شحن ومزامنة بيانات متوافق مع أجهزة المايكرو USB",
    image:
      "https://cdn.mafrservices.com/sys-master-root/hf5/hfa/52141608271902/623687_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "إكسسوارات",
    subcategories: ["محافظ وميداليات", "نظارات شمس"],
  },
  {
    id: "4",
    name: "بيكو بطاطس طازجة ومميزة الوزن 3 كجم",
    description: "بطاطس طازجة ذات جودة عالية للاستخدام اليومي",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/641483/1730108403/641483_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "طعام",
    subcategories: ["مخبوزات", "ساندوتشات"],
  },

  {
    id: "6",
    name: "كلوركس بخاخ مزيل للبقع ويحمي ألوان الملابس - 500 مل",
    description: "مزيل بقع قوي وفعال للملابس الملونة بحماية مثالية",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/445709/1747202404/445709_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "مستحضرات تجميل",
    subcategories: ["صابون طبيعي", "ماسكات طبيعية"],
  },
  {
    id: "7",
    name: "بلسم جونسون للأطفال ضد تشابك الشعر - حجم 200 مل",
    description: "بلسم خفيف لفك تشابك شعر الأطفال بلطف وفعالية",
    image:
      "https://cdn.mafrservices.com/sys-master-root/hb9/h07/10071890919454/509515_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "أطفال",
    subcategories: ["ألعاب صغيرة", "قصص أطفال"],
  },
  {
    id: "8",
    name: "كابل USB-C إلى USB-C إي ترين شحن سريع - 60 وات 1 متر",
    description: "كابل شحن سريع Type-C إلى Type-C بقدرة 60 وات ممتازة",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/643455/1732532403/643455_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "إكسسوارات",
    subcategories: ["نظارات شمس", "ساعات تقليد"],
  },
  {
    id: "9",
    name: "بيكو ذرة حلوة مقطعة طازجة جاهزة للطبخ",
    description: "ذرة حلوة مقطعة طازجة وسهلة الاستخدام للطبخ السريع",
    image:
      "https://cdn.mafrservices.com/sys-master-root/h1c/h1f/33147915763742/592208_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "طعام",
    subcategories: ["عصائر طبيعية", "منتجات منزلية"],
  },
  {
    id: "10",
    name: "جولد حلاوة طحينية بالسمسم الفاخرة - 900 جرام",
    description: "حلاوة طحينية مميزة مع السمسم ذات جودة عالية من جولد",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/610304/1730272203/610304_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "طعام",
    subcategories: ["حلويات شرقية"],
  },

  {
    id: "11",
    name: "بريكس مزيل بقع للملابس - عبوة 500 جم",
    description: "مسحوق فعال لإزالة البقع المستعصية من الملابس بسهولة",
    image:
      "https://cdn.mafrservices.com/sys-master-root/ha2/h0f/62520567365662/629178_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "مستحضرات تجميل",
    subcategories: ["ماسكات طبيعية", "كريمات محلية"],
  },
  {
    id: "12",
    name: "شامبو جونسون للأطفال لفك تشابك الشعر - 200 مل",
    description: "شامبو لطيف يساعد على فك تشابك شعر الأطفال بسهولة",
    image:
      "https://cdn.mafrservices.com/sys-master-root/h07/h16/10071887740958/509502_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "أطفال",
    subcategories: ["ألعاب صغيرة", "قصص أطفال"],
  },
  {
    id: "13",
    name: "كابل شحن تايب سي من سمارت جيت - 1 متر - أسود",
    description: "كابل شحن Type-C إلى Type-C عالي الجودة من سمارت جيت",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/637888/1738244403/637888_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "إكسسوارات",
    subcategories: ["نظارات شمس", "ساعات تقليد"],
  },

  {
    id: "15",
    name: "عسل نحل طبيعي من امتنان - عبوة 450 جرام",
    description: "عسل نقي وطبيعي 100% من علامة امتنان الموثوقة",
    image:
      "https://cdn.mafrservices.com/sys-master-root/h2f/h91/15632522412062/262289_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "طعام",
    subcategories: ["منتجات منزلية"],
  },
  {
    id: "16",
    name: "معطر ملابس شايني برائحة اللافندر - 2.5 لتر",
    description: "معطر ملابس ومنعم برائحة اللافندر المنعشة والمميزة",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/657542/1753000221/657542_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "مستحضرات تجميل",
    subcategories: ["كريمات محلية", "ماسكات طبيعية"],
  },
  {
    id: "17",
    name: "زيت جونسون للأطفال مرطب طبيعي - 200 مل",
    description: "زيت طبيعي يرطب ويحمي بشرة الأطفال الحساسة بلطف",
    image:
      "https://cdn.mafrservices.com/sys-master-root/h98/hef/14539448352798/10412_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "مستحضرات تجميل",
    subcategories: ["كريمات محلية", "ماسكات طبيعية"],
  },
  {
    id: "18",
    name: "كابل شحن USB-C إلى لايتنج إي ترين - 1 متر - أبيض",
    description: "كابل شحن Type-C إلى Lightning متوافق مع أجهزة آبل",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/643456/1732532403/643456_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "إكسسوارات",
    subcategories: ["نظارات شمس", "محافظ وميداليات"],
  },
  {
    id: "19",
    name: "بلح محشي فاخر بالفستق - عبوة 200 جم",
    description: "بلح فاخر ومحشو بنكهات الفستق المميزة واللذيذة",
    image:
      "https://cdn.mafrservices.com/sys-master-root/h26/h20/9347487563806/507751_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "طعام",
    subcategories: ["حلويات شرقية"],
  },
  {
    id: "20",
    name: "حلاوة الميزان طحينية سادة - 900 جرام",
    description: "حلاوة طحينية سادة بجودة عالية من علامة الميزان",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/534858/1745827804/534858_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "طعام",
    subcategories: ["حلويات شرقية"],
  },
  {
    id: "21",
    name: "منعم الملابس كومفورت برائحة اللافندر - 1 لتر",
    description: "منعم أقمشة فاخر مع رائحة اللافندر المنعشة والطويلة",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/648508/1744196403/648508_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "مستحضرات تجميل",
    subcategories: ["كريمات محلية", "ماسكات طبيعية"],
  },
  {
    id: "22",
    name: "لهاية ديزني بتصميم ميكي مع مشبك للأطفال",
    description: "لهاية أطفال مميزة بتصميم ميكي ماوس الأنيق والعملي",
    image:
      "https://cdn.mafrservices.com/sys-master-root/h04/h83/15418223460382/331254_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "أطفال",
    subcategories: ["ألعاب صغيرة", "قصص أطفال"],
  },
  {
    id: "23",
    name: "كابل شحن سريع لافينتو USB-C إلى USB-C 60 وات 1 متر",
    description: "كابل شحن سريع وقوي من نوع Type-C بقدرة 60 وات ممتازة",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/656943/1751446803/656943_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "إكسسوارات",
    subcategories: ["نظارات شمس", "ساعات تقليد"],
  },
  {
    id: "24",
    name: "بلح مصري فاخر عالي الجودة - عبوة 450 جم",
    description: "بلح مصري فاخر وطازج مع نكهة مميزة وقوام متماسك",
    image:
      "https://cdn.mafrservices.com/sys-master-root/hdb/h6d/61776648601630/626479_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "طعام",
    subcategories: ["حلويات شرقية"],
  },
  {
    id: "25",
    name: "هيرو زبدة الفول السوداني كرنشي - عبوة 300 جم",
    description: "زبدة فول سوداني مقرمشة بطعم لذيذ من هيرو الشهيرة",
    image:
      "https://cdn.mafrservices.com/sys-master-root/h52/hbe/63626863345694/554456_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "طعام",
    subcategories: ["منتجات منزلية"],
  },
  {
    id: "26",
    name: "أوكسي مسحوق غسيل أورينتال - عبوة 1500 جم",
    description: "مسحوق غسيل فعال ومناسب لجميع أنواع الملابس والأقمشة",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/603891/1737293403/603891_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "مستحضرات تجميل",
    subcategories: ["ماسكات طبيعية", "صابون طبيعي"],
  },
  {
    id: "27",
    name: "سيريلاك أطفال 3 فواكه وقمح مع لبن - 250 جم",
    description: "طعام أطفال غني بالفواكه والقمح واللبن عالي القيمة الغذائية",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/462321/1751374803/462321_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "أطفال",
    subcategories: ["قصص أطفال", "ألعاب صغيرة"],
  },
  {
    id: "28",
    name: "كابل شحن ريفيرسونج USB إلى مايكرو يو اس بي عالي الجودة",
    description: "كابل شحن متين من USB إلى مايكرو USB من ماركة ريفيرسونج",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/650410/1742373003/650410_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "إكسسوارات",
    subcategories: ["محافظ وميداليات", "نظارات شمس"],
  },

  {
    id: "30",
    name: "هيرو ديليشيا عسل البرسيم سكويز - عبوة 450 جم",
    description: "عسل برسيم طبيعي من هيرو ديليشيا بعبوة سهلة الاستخدام",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/500882/1748863804/500882_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "طعام",
    subcategories: ["منتجات منزلية"],
  },
  {
    id: "31",
    name: "كمفورت منعم ملابس برائحة الزهور واللافندر - 1 لتر",
    description: "منعم أقمشة فاخر برائحة الزهور واللافندر المنعشة والرائعة",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/643784/1732026604/643784_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "مستحضرات تجميل",
    subcategories: ["كريمات محلية", "ماسكات طبيعية"],
  },
  {
    id: "32",
    name: "كابل شحن سريع لافينتو USB-C 60 وات 1 متر - أسود",
    description: "كابل شحن سريع Type-C إلى Type-C بقوة 60 وات من لافينتو",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/656932/1751446803/656932_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "إكسسوارات",
    subcategories: ["نظارات شمس", "ساعات تقليد"],
  },
  {
    id: "33",
    name: "ماما بطاطس طازجة وعالية الجودة - 5 كجم",
    description: "بطاطس ماما طازجة ومميزة مع جودة ممتازة للطبخ",
    image:
      "https://cdn.mafrservices.com/sys-master-root/h7a/h10/15632953573406/565971_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "طعام",
    subcategories: ["مخبوزات", "ساندوتشات"],
  },
  {
    id: "34",
    name: "هيرو ديليشيا عسل حوائج طبيعي - عبوة 650 جم",
    description: "عسل طبيعي فاخر من هيرو ديليشيا بنكهة حوائج مميزة",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/500887/1748863804/500887_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "طعام",
    subcategories: ["منتجات منزلية"],
  },
  {
    id: "35",
    name: "كمفورت منعم أقمشة برائحة الزهور الفواحة",
    description: "منعم أقمشة فخم برائحة الزهور الفواحة والمنعشة",
    image:
      "https://cdn.mafrservices.com/sys-master-root/ha4/he3/49510726696990/153381_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "مستحضرات تجميل",
    subcategories: ["كريمات محلية", "ماسكات طبيعية"],
  },
  {
    id: "36",
    name: "كابل إي ترين USB إلى تايب سي - 1 متر - أبيض DC05W",
    description: "كابل شحن USB متوافق مع أجهزة Type-C من إي ترين",
    image:
      "https://cdn.mafrservices.com/pim-content/EGY/media/product/645239/1734343803/645239_main.jpg?im=Resize=400",
    price: "100 جنيه",
    category: "إكسسوارات",
    subcategories: ["محافظ وميداليات", "نظارات شمس"],
  },
];
