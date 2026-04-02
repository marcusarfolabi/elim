import { User, UserPlus, Church, Heart, BookOpen } from "lucide-react";

export const NAVLINKS = [
  { name: "Our Pastors", href: "/pastors", icon: User },
  { name: "Appointment", href: "/appointment", icon: UserPlus },
  { name: "Our Pillars", href: "/pillars", icon: Church },
  { name: "Salvation", href: "/salvation", icon: Heart },
  { name: "Our Resources", href: "/resources", icon: BookOpen },
];

export type Resource = {
  title: string;
  category:
    | "Children"
    | "Youth"
    | "Manual"
    | "Devotional"
    | "Training"
    | "Music"
    | "Books";
  description: string;
  file: string;
  slug: string;
  color: string;
  ageGroup?: string;
  format?: string;
  size?: string;
};

export const RESOURCES: Resource[] = [
  {
    title: "RCCGNA Children’s Ministry",
    category: "Children",
    slug: "rccgna-childrens-ministry",
    description:
      "The official manual for the children's ministry in the North America region, covering foundational teachings and activities for ages 2-12.",
    file: "/assets/resources/setting-up-childrens-ministry.pdf",
    color: "from-green-400 to-emerald-500",
    ageGroup: "Ages 2-12",
    format: "PDF",
    size: "250KB",
  },
  {
    title: "Junior Church 'Zeal'",
    category: "Children",
    slug: "junior-church-zeal",
    description:
      "Engaging lessons for the younger generation to build 'Weapons of Worship' and strong spiritual roots.",
    file: "https://www.redemptionstore.church/collections/activity-books/products/preorder-toddler-zeal-0-5-years-activity-book-2025-2026",
    color: "from-yellow-400 to-orange-500",
    ageGroup: "Ages 6-12",
  },
  {
    title: "Special Victory Hour 2026",
    category: "Devotional",
    slug: "special-victory-hour",
    description:
      "A powerful devotional guide for adults, designed to deepen your prayer life and spiritual victories in the new year.",
    file: "/assets/resources/special-victory-hour.pdf",
    color: "from-blue-400 to-purple-500",
    ageGroup: "Adults",
    format: "PDF",
    size: "270KB",
  },

  // --- 2. YOUTH & YOUNG ADULTS ---
  {
    title: "YAYA Sunday School",
    category: "Youth",
    slug: "yaya-sunday-school",
    description:
      "The Youth and Young Adults (YAYA) manual, tackling modern challenges with timeless biblical truths.",
    file: "/assets/resources/yaya-manual.pdf",
    color: "from-purple-500 to-pink-600",
    ageGroup: "Youth/Adults",
  },

  // --- 3. TEACHERS & LEADERSHIP TRAINING ---
  {
    title: "Zeal Teacher's Guide",
    category: "Training",
    slug: "zeal-teachers-guide",
    description:
      "A comprehensive guide for Junior Church teachers to effectively communicate the Gospel to children.",
    file: "https://www.redemptionstore.church/products/teachers-manual-teen-zeal-2021-2022-ecopy?_pos=2&_sid=067d0c7b8&_ss=r",
    color: "from-green-400 to-emerald-600",
    ageGroup: "Teachers",
  },
  {
    title: "Workers in Training",
    category: "Manual",
    slug: "workers-in-training",
    description:
      "The foundation for service. Learn the doctrines, discipline, and dedication required of a vessel in God's house.",
    file: "https://www.redemptionstore.church/collections/training-manual/products/workers-in-training-manual-e-copy-download?_pos=1&_sid=342db8850&_ss=r",
    color: "from-blue-600 to-indigo-700",
    ageGroup: "Prospective Workers",
  },
  {
    title: "School of Disciples",
    category: "Training",
    slug: "school-of-disciples",
    description:
      "Advanced training for those ready to go beyond membership into true discipleship and leadership.",
    file: "https://www.redemptionstore.church/collections/training-manual/products/sunday-school-students-manual-workbook?_pos=1&_sid=0245e4666&_ss=r",
    color: "from-slate-700 to-slate-900",
    ageGroup: "Leaders",
  },

  // --- 4. SPIRITUAL GROWTH & DEVOTIONALS ---
  {
    title: "Baptismal Manual",
    category: "Manual",
    slug: "baptismal-manual",
    description:
      "Essential teachings for those ready to identify with Christ's death and resurrection through water baptism.",
    file: "https://www.redemptionstore.church/collections/training-manual/products/baptismal-class-manual?_pos=1&_sid=c9b128fd4&_ss=r",
    color: "from-cyan-500 to-blue-600",
    ageGroup: "All Ages",
  },
  {
    title: "Open Heavens 2026",
    category: "Devotional",
    slug: "open-heavens-2026",
    description:
      "Daily prophetic guidance and spiritual nourishment authored by Pastor E.A. Adeboye.",
    file: "https://www.redemptionstore.church/collections/devotional/products/open-heavens-english",
    color: "from-orange-500 to-red-600",
    ageGroup: "General",
  },
  {
    title: "RCCG Hymnal",
    category: "Music",
    slug: "rccg-hymnal-digital",
    description:
      "Digital collection of 800+ hymns used in the mission, including sheet music for instrumentalists.",
    file: "https://www.redemptionstore.church/products/hymn-book-hardback?_pos=1&_sid=f59706775&_ss=r",
    color: "from-blue-400 to-cyan-500",
    ageGroup: "Choir/General",
  },

  // --- 5. BOOKS BY PASTORS ---
  {
    title: "Secrets of Fasting & Prayer",
    category: "Books",
    slug: "secrets-of-fasting",
    description:
      "A profound guide by Daddy G.O. on unlocking spiritual power through consecrated living.",
    file: "https://www.redemptionstore.church/collections/pastor-e-a-adeboye-1/products/secrets-of-fasting-prayer-by-e-a-adeboye?_pos=1&_sid=aa27ef774&_ss=r",
    color: "from-emerald-500 to-teal-600",
    ageGroup: "General",
  },
  {
    title: "The Anatomy of Greatness",
    category: "Books",
    slug: "anatomy-of-greatness",
    description:
      "Discover the biblical principles that lead to true, lasting impact in your generation.",
    file: "https://www.redemptionstore.church/collections/popular-authors/products/anatomy-of-greatness-ebook?_pos=1&_sid=68b0cc3ac&_ss=r",
    color: "from-rose-500 to-red-600",
    ageGroup: "General",
  },
];
