export type BlogPost = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  alt: string;
  author?: string;
  date?: string;
  content?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "watchhouse-x-nomad",
    title: "WatchHouse x NOMAD.",
    category: "Spotlight",
    excerpt:
      "For this year's London Coffee Festival, we've partnered with NOMAD Coffee on a one-off release...",
    image: "/NomadBlog.webp",
    alt: "NomadBlog",
    author: "WatchHouse",
    date: "May 13, 2025",
    content:
      "For this year's London Coffee Festival, we've partnered with NOMAD Coffee on a one-off release. Born from a shared respect for process and precision, the collaboration brought NOMAD's Head Roaster, Rebeca Silva - also the current SCA Spain Roasting Champion - into our Maltby Street Roastery to work alongside WatchHouse's Nikol Novotná. The result is a co-roasted take on a standout natural Gesha from Pedro Rodriguez in Bolivia. It's a meeting of minds, methods, and machines - roasted on the Probat UG22, a model trusted by both roasteries. The coffee itself is clean, expressive and quietly complex. Just like the collaboration behind it. To mark the launch, we're hosting a one-day-only pop-up at WatchHouse Spitalfields, where you'll find a shared menu featuring espresso, pour-over and batch brews from both NOMAD and WatchHouse - including the release itself, Los Rodriguez Gesha. You'll also find it served on batch and available as a limited retail drop in London Houses throughout the week of the festival. Small release. Shared story. Strong cup.",
  },
  {
    id: "introducing-matcha",
    title: "Introducing: matcha.",
    category: "Spotlight",
    excerpt:
      "Three drinks. Two matchas. No shortcuts. At WatchHouse, every ingredient we serve is carefully chosen...",
    image: "/MatchaInHouse.webp",
    alt: "MatchaInHouse",
    author: "WatchHouse",
    date: "April 29, 2025",
    content:
      "Three drinks. Two matchas. No shortcuts. At WatchHouse, every ingredient we serve is carefully chosen, not just for what it is but for what it represents. With matcha, we've sourced ceremonial-grade powders that reflect both heritage and craft. Expect a trio of drinks — hot, iced, and with milk — each served to highlight matcha’s complexity. It’s the same WatchHouse standard of quality, applied to a new ritual.",
  },
  {
    id: "origin-colombia",
    title: "Origin: Colombia.",
    category: "Spotlight",
    excerpt:
      "Think of spectacular coffee, and Colombia is the origin that comes to mind. With its dramatic landscapes, diverse microclimates...",
    image: "/Colombian_Vista.webp",
    alt: "Colombian_Vista",
    author: "WatchHouse",
    date: "April 10, 2025",
    content:
      "Think of spectacular coffee, and Colombia is the origin that comes to mind. With its dramatic landscapes, diverse microclimates, and centuries of tradition, Colombia produces coffees as vibrant as its culture. Our latest release captures the best of the region — clean sweetness, layered acidity, and a profile that reminds us why Colombia remains an icon in specialty coffee. Each cup is a postcard from the Andes, brewed to be savoured.",
  },
  {
    id: "eugenioides",
    title: "Eugenioides.",
    category: "Spotlight",
    excerpt:
      "At WatchHouse, our pursuit of the exceptional takes us to some of the most remarkable producers in the world...",
    image: "/Eugenioides.gif",
    alt: "Eugenioides",
    author: "WatchHouse",
    date: "March 25, 2025",
    content:
      "At WatchHouse, our pursuit of the exceptional takes us to some of the most remarkable producers in the world. This time, it led us to Coffea eugenioides — a rare species and one of the progenitors of Arabica. Its cup is unlike anything else: low in caffeine, with a natural sweetness and creamy body that feels both familiar and entirely new. It’s a glimpse into coffee’s origins, and perhaps, its future.",
  },
  {
    id: "nikol-novotna",
    title: "Nikol Novotná: WatchHouse Head Roaster.",
    category: "Spotlight",
    excerpt:
      "At WatchHouse, we take pride in the exceptional talent driving our craft, and few embody this more than Nikol Novotná...",
    image: "/Nikol1.webp",
    alt: "Nikol1",
    author: "WatchHouse",
    date: "March 12, 2025",
    content:
      "At WatchHouse, we take pride in the exceptional talent driving our craft, and few embody this more than Nikol Novotná, our Head Roaster. With years of experience across Europe’s leading roasteries, Nikol brings technical precision and creative vision to every roast. Her approach blends science with intuition, shaping coffees that are not only consistent but memorable. Nikol represents the heartbeat of WatchHouse roasting — curious, exacting, and committed to better coffee.",
  },
  {
    id: "golden-cardamom-latte",
    title: "Golden Cardamom Latte: a touch of spice.",
    category: "Spotlight",
    excerpt:
      "Spice meets comfort in our Golden Cardamom Latte — a modern twist on a classic pairing...",
    image: "/GCL.gif",
    alt: "GoldenCardamomLatte",
    author: "WatchHouse",
    date: "February 26, 2025",
    content:
      "Spice meets comfort in our Golden Cardamom Latte — a modern twist on a classic pairing. We combine freshly ground cardamom with our signature espresso and steamed milk, finished with a dusting of turmeric for colour and depth. The result is warming, aromatic, and indulgent. It’s a latte that bridges tradition and innovation, crafted for cold mornings and quiet afternoons alike.",
  },
  {
    id: "modern-coffee-gift-guide",
    title: "Our Modern Coffee gift guide.",
    category: "Spotlight",
    excerpt:
      "Celebrate the festive season with gifts that embody warmth, flavour, and craftsmanship...",
    image: "/WH_Gifts_GIF.gif",
    alt: "WH_Gifts_GIF",
    author: "WatchHouse",
    date: "December 10, 2024",
    content:
      "Celebrate the festive season with gifts that embody warmth, flavour, and craftsmanship. Our curated selection includes everything from rare single-origin beans to elegant brewing equipment, alongside WatchHouse-designed ceramics and accessories. Each item is chosen to elevate the ritual of coffee, whether for seasoned enthusiasts or those just starting their journey. This year, give the gift of modern coffee — thoughtful, timeless, and always in good taste.",
  },
  {
    id: "rarities-04",
    title: "Rarities 04: Finca Hartmann Gesha",
    category: "Spotlight",
    excerpt:
      "Our fourth Rarities release celebrates one of the world’s most distinctive varieties — the Gesha from Finca Hartmann...",
    image: "/Social_Rarities_Edition_04_Square_with_Box.webp",
    alt: "Rarities04",
    author: "WatchHouse",
    date: "November 15, 2024",
    content:
      "Our fourth Rarities release celebrates one of the world’s most distinctive varieties — the Gesha from Finca Hartmann in Panama. With jasmine-like aromatics, vibrant tropical fruit notes, and a silky texture, this coffee is a benchmark for elegance. Harvested in small lots and roasted with meticulous care, it represents the pinnacle of craft. Limited in quantity, Rarities 04 is as rare as it is remarkable.",
  },
  {
    id: "europes-best-coffee-shop",
    title: "Europe's Best Coffee Shop Chain.",
    category: "Spotlight",
    excerpt:
      "Celebrating our tenth anniversary year, WatchHouse is honoured to be named Europe's Best Coffee Shop Chain at the 2024 European Coffee Awards...",
    image: "/ECA.webp",
    alt: "ECA",
    author: "WatchHouse",
    date: "October 28, 2024",
    content:
      "Celebrating our tenth anniversary year, WatchHouse is honoured to be named Europe's Best Coffee Shop Chain at the 2024 European Coffee Awards. This recognition reflects not only our commitment to coffee excellence but also the hard work of our teams across London and beyond. It’s a milestone that inspires us to keep pushing forward, redefining what modern coffee can be. To our community — thank you for being part of the journey.",
  },
];

export const BLOG_TOPICS = [
  "Coffee",
  "Design",
  "Education",
  "Houses",
  "Sustainability",
  "Teams",
];

export const findBlogPost = (id: string) => BLOG_POSTS.find((p) => p.id === id);
