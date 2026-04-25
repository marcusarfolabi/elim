import { User, Church, Heart, BookOpen, Image } from "lucide-react";

export const NAVLINKS = [
  { name: "Our Pastors", href: "/our-pastors", icon: User },
  { name: "Our Pillars", href: "/our-pillar", icon: Church },
  { name: "Men's Fellowship", href: "/men-fellowship", icon: Heart },
  { name: "Our Resources", href: "/our-resources", icon: BookOpen },
  { name: "Our Gallery", href: "/our-gallery", icon: Image },
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

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "annointing-1",
    src: "/assets/gallery/annointing_service_1.jpg",
    alt: "Annointing Service",
    caption: "Moments of divine encounter and consecration.",
  },
  {
    id: "annointing-2",
    src: "/assets/gallery/annointing_service_2.jpg",
    alt: "Annointing Service Highlights",
    caption: "A special atmosphere of prayer and grace.",
  },
  {
    id: "choir-main",
    src: "/assets/gallery/choir.jpg",
    alt: "The Elim Choir",
    caption: "Leading the congregation into the presence of God.",
  },
  {
    id: "levites-1",
    src: "/assets/gallery/levites_1.jpg",
    alt: "Levites in Ministry",
    caption: "Dedicated service in the house of the Lord.",
  },
  {
    id: "levites-2",
    src: "/assets/gallery/levites_2.jpg",
    alt: "Levites Service",
    caption: "Heartfelt worship and ministry.",
  },
  {
    id: "media-team",
    src: "/assets/gallery/media.jpg",
    alt: "Media Ministry",
    caption: "Spreading the gospel through digital excellence.",
  },
  {
    id: "reg-pastor-1",
    src: "/assets/gallery/region_pastor_1.jpg",
    alt: "Regional Pastor",
    caption: "Spiritual leadership and guidance for the region.",
  },
  {
    id: "reg-pastor-2",
    src: "/assets/gallery/region_pastor_2.jpg",
    alt: "Regional Pastor in Action",
    caption: "Feeding the flock with the Word of Truth.",
  },
  {
    id: "reg-pastor-main",
    src: "/assets/gallery/region_pastor.jpg",
    alt: "Regional Leadership",
    caption: "A shepherd's heart for the people.",
  },
  {
    id: "study-session",
    src: "/assets/gallery/study.jpg",
    alt: "Bible Study",
    caption: "Deep dives into the scriptures for spiritual growth.",
  },
  {
    id: "ushering-2",
    src: "/assets/gallery/ushering_2.jpg",
    alt: "Ushering Ministry",
    caption: "Welcoming everyone with the love of Christ.",
  },
  {
    id: "ushering-main",
    src: "/assets/gallery/ushering.jpg",
    alt: "Greeters and Ushers",
    caption: "Serving with a smile in the sanctuary.",
  },
  {
    id: "worship-1",
    src: "/assets/gallery/worship_praise_1.jpg",
    alt: "Worship and Praise",
    caption: "Lifting holy hands in total surrender.",
  },
  {
    id: "worship-2",
    src: "/assets/gallery/worship_praise_2.jpg",
    alt: "Intimate Worship",
    caption: "An atmosphere of praise and thanksgiving.",
  },
  {
    id: "worship-main",
    src: "/assets/gallery/worship_praise.jpg",
    alt: "Congregational Worship",
    caption: "One voice, one heart, one God.",
  },
  {
    id: "youth-min",
    src: "/assets/gallery/youth_minister.jpg",
    alt: "Youth Minister",
    caption: "Empowering the next generation for Christ.",
  },
  {
    id: "youth-pastor",
    src: "/assets/gallery/youth_pastor.jpg",
    alt: "Youth Leadership",
    caption: "Visionary leadership for our young adults.",
  },
  {
    id: "zonal-pastor",
    src: "/assets/gallery/zonal_pastor.jpg",
    alt: "Zonal Pastor",
    caption: "Building strong foundations across our zones.",
  },
];

export const IDENTITY_CARDS = [
  {
    title: "We are",
    iconName: "Users",
    description:
      "Elim Sanctuary is a member of the Redeemed Christian Church of God (RCCG) and also the Provincial Headquarters for Lagos Province 37. We are a church that is open to all ages and social classes.",
    image: "/assets/gallery/worship_praise_1.jpg",
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "We Aim",
    iconName: "Target",
    description:
      "To develop a relentless prayer force. To identify and recruit prayer warriors within all the natural groups within the church. Quarterly Prayer retreats to maintain and generate fresh fire.",
    image: "/assets/gallery/annointing_service_1.jpg",
    color: "from-brand-blue/20 to-transparent",
  },
  {
    title: "We Stand For",
    iconName: "Shield",
    description:
      "Humility | Repentance | Soul winning | Confidentiality | Passion | Commitment | Persistence. We believe in spreading God's love, grace, and salvation to mankind.",
    image: "/assets/gallery/study.jpg",
    color: "from-purple-500/20 to-transparent",
  },
];

export const FOOTER_DATA = {
  address:
    "34-36 Alimosho Road, Off Lagos-Abeokuta Expressway, By Go-Ye Junction, Akowonjo Lagos",
  phone: "+2348033030090",
  email: "info@rccg-elimsanctuary.org",
  socials: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/rccgesl/video",
      icon: "Facebook",
    },
    { name: "Twitter", href: "https://twitter.com/RccgESL", icon: "Twitter" },
    {
      name: "Instagram",
      href: "https://www.instagram.com/rccgelimsanctuary",
      icon: "Instagram",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCs7I0BXvWu79rrH8jJZza0Q",
      icon: "Youtube",
    },
  ],
  forms: [
    { name: "SALVATION FORM", href: "#" },
    { name: "APPOINTMENT FORM", href: "#" },
    { name: "MENS FELLOWSHIP FORM", href: "#" },
    { name: "TESTIMONY FORM", href: "#" },
    { name: "CHOIR APPLICATION", href: "#" },
  ],
};

export const menFellowship = [
  {
    name: "samson",
    image: "/assets/men/samson.png",
    accent: "border-yellow-600",
  },
  {
    name: "oyeniyi",
    image: "/assets/men/oyeniyi.png",
    accent: "border-green-600",
  },
  {
    name: "olayiwola",
    image: "/assets/men/olayiwola.png",
    accent: "border-blue-600",
  },
  {
    name: "tolu",
    image: "/assets/men/tolu.png",
    accent: "border-orange-600",
  },
  {
    name: "Adeyemi",
    image: "/assets/men/adeyemi.png",
    accent: "border-red-600",
  },
  {
    name: "kunle",
    image: "/assets/men/kunle.png",
    accent: "border-pink-600",
  },
  {
    name: "femi",
    image: "/assets/men/femi.png",
    accent: "border-green-600",
  },
  // {
  //   name: "Folorosho",
  //   image: "/assets/men/folorosho.png",
  //   accent: "border-green-600",
  // },
  {
    name: "olawale",
    image: "/assets/men/olawale.png",
    accent: "border-gray-600",
  },
  {
    name: "matthew",
    image: "/assets/men/matthew.png",
    accent: "border-black",
  },
  {
    name: "linus",
    image: "/assets/men/linus.png",
    accent: "border-purple-600",
  },
  {
    name: "Abiola",
    image: "/assets/men/abiola.png",
    accent: "border-blue-600",
  },
  {
    name: "felix",
    image: "/assets/men/felix.png",
    accent: "border-yellow-600",
  },
];

