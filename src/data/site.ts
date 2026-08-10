export type Publication = {
  title: string;
  authors?: string;
  venue: string;
  year: number;
  type: "Conference" | "Journal" | "Workshop" | "Magazine";
  image?: string;
  link?: string;
  note?: string;
};

export type NewsItem = {
  date: string;
  label: string;
  title: string;
  /** Substrings of `title` rendered in the accent colour (venues, awards). */
  venues?: string[];
};

export type Person = {
  name: string;
  role: string;
  group: "PhD" | "Master" | "Undergraduate" | "Visiting";
  interests: string[];
  image: string;
  email?: string;
};

export const navigation = [
  { label: "Research", href: "/research/" },
  { label: "People", href: "/people/" },
  { label: "Publications", href: "/publications/" },
  { label: "Join us", href: "/join/" },
  { label: "Hardware", href: "/hardware/" },
  { label: "Photos", href: "/photos/" }
];

export const researchAreas = [
  {
    index: "01",
    title: "Extended Reality Systems",
    description:
      "End-to-end systems for immersive media: from volumetric video pipelines to latency-aware delivery and interaction.",
    tags: ["Volumetric video", "Real-time media", "QoE"]
  },
  {
    index: "02",
    title: "AI at the Edge",
    description:
      "Practical AI systems that fit the constraints of devices, accelerators, networks, and the people using them.",
    tags: ["Edge AI", "NPU systems", "On-device intelligence"]
  },
  {
    index: "03",
    title: "Multi-Agent Systems",
    description:
      "We design collaborative AI agents that reason, coordinate, and act together to solve complex tasks across real systems.",
    tags: ["Multi-agent systems", "Agentic AI", "Distributed coordination"]
  }
];

export const news: NewsItem[] = [
  { date: "2026.08", label: "Publication", title: "A new paper was accepted to ACM SIGCOMM 2026.", venues: ["ACM SIGCOMM 2026"] },
  { date: "2026.08", label: "Community", title: "Two research interns joined the lab." },
  { date: "2026.03", label: "Recognition", title: "A new paper was accepted to IEEE SECON 2026.", venues: ["IEEE SECON 2026"] },
  { date: "2026.01", label: "Community", title: "Two research interns joined the lab." },
  { date: "2026.01", label: "Award", title: "Goodsol received a Gold Award at Samsung HumanTech Paper Awards 2026.", venues: ["Samsung HumanTech Paper Awards 2026"] },
  { date: "2025.07", label: "Publication", title: "New papers were accepted to INFOCOM 2026 and NSDI 2026.", venues: ["INFOCOM 2026", "NSDI 2026"] }
];

/**
 * Splits a news title into plain and accented segments so venue names can be
 * highlighted without embedding markup in the data.
 */
export function splitNewsTitle(item: NewsItem): { text: string; venue: boolean }[] {
  const venues = item.venues ?? [];
  if (venues.length === 0) return [{ text: item.title, venue: false }];
  const pattern = venues.map((venue) => venue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  return item.title
    .split(new RegExp(`(${pattern})`))
    .filter((segment) => segment.length > 0)
    .map((segment) => ({ text: segment, venue: venues.includes(segment) }));
}

export const people: Person[] = [
  {
    name: "Sihyeon Lee",
    role: "Ph.D. Student",
    group: "PhD",
    interests: ["Edge NPU", "Real-time transcription", "Translation"],
    image: "/assets/images/team/shlee_photo.jpg",
    email: "sihyeon78945@gmail.com"
  },
  {
    name: "Jaeyong Lee",
    role: "Undergraduate Researcher",
    group: "Undergraduate",
    interests: ["Edge computing", "AI for short video"],
    image: "/assets/images/team/jylee_photo.jpeg",
    email: "wodydy0507@korea.ac.kr"
  },
  {
    name: "Byeongjun Kwon",
    role: "Undergraduate Researcher",
    group: "Undergraduate",
    interests: ["vLLM"],
    image: "/assets/images/team/bjkwon_photo.png"
  },
  {
    name: "Jeongsu Hwang",
    role: "Undergraduate Researcher",
    group: "Undergraduate",
    interests: ["Edge NPU"],
    image: "/assets/images/team/undergraduate_sample.png"
  },
  {
    name: "Sungwon Woo",
    role: "Master Student",
    group: "Master",
    interests: ["Multi-agent systems", "Edge AI systems"],
    image: "/assets/images/team/swwoo_photo.JPG",
    email: "wkehdck753@naver.com"
  },
  {
    name: "Yereum Choi",
    role: "Master Student",
    group: "Master",
    interests: ["AIOps", "RL for cloud scheduling"],
    image: "/assets/images/team/yrchoi_photo.png",
    email: "yr0955@gmail.com"
  },
  {
    name: "Hyeonjoon Jang",
    role: "Visiting Researcher · Ph.D. at KAIST EE",
    group: "Visiting",
    interests: ["Volumetric video streaming"],
    image: "/assets/images/team/hjjang_photo.jpeg"
  }
];

export const publications: Publication[] = [
  {
    title: "DeepSFU: Scalable Deepfake Detection for Video Conferencing",
    venue: "ACM SIGCOMM",
    year: 2026,
    type: "Conference",
    image: "/assets/images/publications/deepsfu.png"
  },
  {
    title: "PAVE: Mitigating Non-Congestive Delay for Seamless Video Calls over NextG Mobile Networks",
    venue: "IEEE INFOCOM",
    year: 2026,
    type: "Conference",
    image: "/assets/images/publications/PAVE.png",
    link: "https://doi.org/10.1109/INFOCOM59046.2026.11571323"
  },
  {
    title: "eXpressSFU: Toward Super-Scalable Video Conferencing with SmartNICs",
    venue: "USENIX NSDI",
    year: 2026,
    type: "Conference",
    image: "/assets/images/publications/expresssfu.png",
    link: "https://www.usenix.org/conference/nsdi26/presentation/tran"
  },
  {
    title: "QCON: Seamless QoE-Aware 5G Streaming via Multi-Connectivity",
    venue: "USENIX NSDI",
    year: 2026,
    type: "Conference",
    image: "/assets/images/publications/QCON.png",
    link: "https://www.usenix.org/conference/nsdi26/presentation/lee"
  },
  {
    title: "DualEngine: A Thermal-Aware Vision Inference Framework via Mobile and Cloud Co-Execution",
    authors: "Pyeongjun Choi, Jeongsoo Kim, Seyeon Kim, Jeongho Kwak",
    venue: "IEEE SECON",
    year: 2026,
    type: "Conference",
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11579018"
  },
  {
    title: "DeltaStream: 2D-Inferred Delta Encoding for Live Volumetric Video Streaming",
    authors: "Hojeong Lee, YuHong Kim, Sangwoo Ryu, James Won-Ki Hong, Sangtae Ha, Seyeon Kim",
    venue: "ACM MobiSys",
    year: 2025,
    type: "Conference",
    image: "/assets/images/publications/deltastream.png",
    link: "https://dl.acm.org/doi/abs/10.1145/3711875.3729131"
  },
  {
    title: "NeuroBalancer: Balancing System Frequencies with Punctual Laziness for Timely and Energy-efficient DNN Inferences",
    authors: "Kyungmin Bin, Seyeon Kim, Sangtae Ha, Song Chong, Kyunghan Lee",
    venue: "IEEE Transactions on Mobile Computing",
    year: 2025,
    type: "Journal",
    image: "/assets/images/publications/neurobalancer.jpg",
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10819653"
  },
  {
    title: "Dejavu: Reinforcement Learning-based Cloud Scheduling with Demonstration and Competition",
    authors: "Seonwoo Kim, Yoonsung Nam, Minwoo Park, Heewon Lee, Seyeon Kim, Sangtae Ha",
    venue: "IEEE MASS",
    year: 2024,
    type: "Conference",
    image: "/assets/images/publications/dejavu.jpg",
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10723527"
  },
  {
    title: "LLMem: Estimating GPU Memory Usage for Fine-Tuning Pre-Trained LLMs",
    authors: "Taeho Kim, Yanming Wang, Vatshank Chaturvedi, Lokesh Gupta, Seyeon Kim, Yongin Kwon, Sangtae Ha",
    venue: "IJCAI",
    year: 2024,
    type: "Conference",
    image: "/assets/images/publications/llmem.jpg",
    link: "https://arxiv.org/pdf/2404.10933",
    note: "Long talk · Top 2%"
  },
  {
    title: "Repurposing Cellular Reference Signals: Accurate RSRP Measurements with Mobile Phones",
    authors: "Max Hollingsworth, Yaguang Zhang, Todd Schumann, Chris Anderson, Michael Cotton, Seyeon Kim, Sangtae Ha, Dirk Grunwald",
    venue: "IEEE DySPAN Workshop",
    year: 2024,
    type: "Workshop",
    image: "/assets/images/publications/repurposing.jpg",
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10632813"
  },
  {
    title: "CoActo: CoActive Neural Network Inference Offloading with Fine-grained and Concurrent Execution",
    authors: "Kyungmin Bin, Jongseok Park, Chanjeong Park, Seyeon Kim, Kyunghan Lee",
    venue: "ACM MobiSys",
    year: 2024,
    type: "Conference",
    image: "/assets/images/publications/coacto.jpg",
    link: "https://dl.acm.org/doi/pdf/10.1145/3643832.3661885"
  },
  {
    title: "ENTRO: Tackling the Encoding and Networking Trade-off in Offloaded Video Analytics",
    authors: "Seyeon Kim, Kyungmin Bin, Donggyu Yang, Sangtae Ha, Kyunghan Lee, Song Chong",
    venue: "ACM Multimedia",
    year: 2023,
    type: "Conference",
    image: "/assets/images/publications/entro.jpg",
    link: "https://dl.acm.org/doi/pdf/10.1145/3581783.3613785"
  },
  {
    title: "zTT: Learning-based DVFS with Zero Thermal Throttling for Mobile Devices",
    authors: "Seyeon Kim, Kyungmin Bin, Sangtae Ha, Kyunghan Lee, Song Chong",
    venue: "ACM GetMobile",
    year: 2022,
    type: "Magazine",
    image: "/assets/images/publications/ztt_getmobile.jpg",
    link: "https://dl.acm.org/doi/pdf/10.1145/3529706.3529714",
    note: "Invited paper · Highlight"
  },
  {
    title: "RL-based FEC Adjustment for Better QoE in WebRTC",
    authors: "Insoo Lee, Seyeon Kim, Sandesh Dhawaskar Sathyanarayana, Kyungmin Bin, Song Chong, Kyunghan Lee, Dirk Grunwald, Sangtae Ha",
    venue: "ACM Multimedia",
    year: 2022,
    type: "Conference",
    image: "/assets/images/publications/rfec.jpg",
    link: "https://dl.acm.org/doi/pdf/10.1145/3503161.3548370",
    note: "Oral · Top 2%"
  },
  {
    title: "zTT: Learning-based DVFS with Zero Thermal Throttling for Mobile Devices",
    authors: "Seyeon Kim, Kyungmin Bin, Sangtae Ha, Kyunghan Lee, Song Chong",
    venue: "ACM MobiSys",
    year: 2021,
    type: "Conference",
    image: "/assets/images/publications/ztt_mobisys.jpg",
    link: "https://dl.acm.org/doi/pdf/10.1145/3458864.3468161",
    note: "Best Paper"
  }
];

export const featuredPublications = publications.slice(0, 4);
