export type Product = {
  id: string;
  img: string;
  alt: string;
  name: string;
  desc: string;
  price: string;
  content: string;
  isFavourite?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    img: "/1829.webp",
    alt: "1829",
    name: "1829 Espresso.",
    desc: "Our 1829 Espresso is our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk based experience.",
    price: "£12.00",
    content:
      "Carefully curated. Harmoniously balanced. 1829 Espresso is our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk based experience. Aquiares Estate was established in 1890 and is Costa Rica's largest coffee farm. It's situated on the fertile slopes of the Turrialba Volcano. In the 1980s, Alfonso Robelo revitalized the estate by fostering a community where workers could own homes, promoting stability and pride among its 1,800 residents. Today his son Diego Robelo, continues this legacy: focusing on specialty coffee production, environmental protection, and carbon neutrality. The Entre Ríos lot exemplifies Aquiares commitment to quality and sustainability. It is grown at elevations between 1,000 and 1,400 meters and benefits from rich volcanic soils and a biodiverse environment. Processed using the fully washed method, the beans are depulped and fermented to remove mucilage, then slowly mechanically dried, resulting in a sweet and textured cup with notes of hazelnut, chocolate and dried fruit. The lot has also been certified as deforestation-free by Enveritas, reflecting Aquiares dedication to environmental responsibility. We are proud to introduce more lots from Aquiares into our offering and to showcase coffees like this Entre Ríos estate lot in our Houses. - Davide Orazi, Projects and Community Manager. Find out more about our 1829 Espresso subscription here.",
    isFavourite: false,
  },
  {
    id: "2",
    img: "/SeptemberJhonatanGasca.webp",
    alt: "Jhonatan Gasca.",
    name: "Jhonatan Gasca.",
    desc: "Ventures: complex and adventurous, explore flavours that will surprise your palate.",
    price: "£14.00",
    content: "",
    isFavourite: false,
  },
  {
    id: "3",
    img: "/Roaster_s-Spotlight-GIF-April-2024.gif",
    alt: "Rumudamo",
    name: "Rumudamo.",
    desc: "Horizons: expressive and unique. Unusual origins and profiles pushing the boundaries of expectation.",
    price: "£16.00",
    content: "",
    isFavourite: false,
  },
  {
    id: "4",
    img: "/Product_Shots_Rituals.webp",
    alt: "Rituals 1kg Set",
    name: "Rituals 1kg Set",
    desc: "Keep your daily cup consistent, for longer.",
    price: "£55.00",
    content: "",
    isFavourite: false,
  },
  {
    id: "5",
    img: "/Product_Shots_Venturesx5.webp",
    alt: "Ventures 1kg Set",
    name: "Ventures 1kg Set",
    desc: "More of your seasonal favourites, with a little saving.",
    price: "£65.00",
    content: "",
    isFavourite: false,
  },
  {
    id: "6",
    img: "/Product_Shots_Horizonss.webp",
    alt: "Horizons 1kg Set",
    name: "Horizons 1kg Set",
    desc: "More of our boldest releases, with a little saving.",
    price: "£75.00",
    content: "",
    isFavourite: false,
  },
  {
    id: "7",
    img: "/Mixed_Pods.webp",
    alt: "Mixed_Pods",
    name: "Pods | Mixed Set",
    desc: "A journey across Rituals, Ventures and Horizons",
    price: "From £21.00",
    content: "",
    isFavourite: true,
  },
  {
    id: "8",
    img: "/KINTOTUMBLER.webp",
    alt: "KINTOTUMBLER",
    name: "Kinto Travel Tumbler.",
    desc: "Double-walled stainless steel vacuum flask, perfect for hot or cold brews (up to 6 hours)",
    price: "From £35.00",
    content: "",
    isFavourite: true,
  },
  {
    id: "9",
    img: "/MonowareMug.webp",
    alt: "MonowareMug",
    name: "WatchHouse x Monoware Mug.",
    desc: "Enhance your daily coffee ritual with this everyday mug, a ceramic piece conceived with care.",
    price: "From £22.00",
    content: "",
    isFavourite: true,
  },
  {
    id: "10",
    img: "/MizuMiruku.webp",
    alt: "MizuMiruku",
    name: "Mizu Matcha.",
    desc: "Our matcha designed for usucha tea preparation.",
    price: "£27.00",
    content: "",
    isFavourite: true,
  },
  {
    id: "11",
    img: "/MatchaMiruku.webp",
    alt: "MatchaMiruku",
    name: "Miruku Matcha.",
    desc: "Our matcha designed for milk​.",
    price: "£55.00",
    content: "",
    isFavourite: true,
  },
  {
    id: "12",
    img: "/WHCUPPINGSPOON.webp",
    alt: "WHCUPPINGSPOON",
    name: "WatchHouse Cupping Spoon.",
    desc: " A humble yet essential piece of equipment for those who appreciate the finer details. ",
    price: "£12.00",
    content: "",
    isFavourite: true,
  },
  {
    id: "13",
    img: "/Bundle_June_2024.webp",
    alt: "Bundle_June_2024",
    name: "1829 Espresso 1kg Coffee Beans",
    desc: "More of our bestselling coffee with a saving for you.",
    price: "£60.00",
    content: "",
    isFavourite: true,
  },
];

export const findProduct = (id: string) => PRODUCTS.find((p) => p.id === id);