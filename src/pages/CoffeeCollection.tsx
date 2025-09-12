import FancyButton from "@/components/ui/FancyButton";
import FancyHoverText from "@/components/ui/FancyHoverText";
import { Separator } from "@/components/ui/separator";

type Product = {
  id: string;
  img: string;
  alt: string;
  name: string;
  desc: string;
  price: string;
};

const PRODUCTS: Product[] = [
  {
    id: "1829-1",
    img: "/1829.webp",
    alt: "1829",
    name: "1829 Espresso.",
    desc: "Our 1829 Espresso is our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk based experience.",
    price: "£12.00",
  },
  {
    id: "SeptemberJhonatanGasca",
    img: "/SeptemberJhonatanGasca.webp",
    alt: "Jhonatan Gasca.",
    name: "Jhonatan Gasca.",
    desc: "Ventures: complex and adventurous, explore flavours that will surprise your palate.",
    price: "£14.00",
  },
  {
    id: "Rumudamo",
    img: "/Roaster_s-Spotlight-GIF-April-2024.gif",
    alt: "Rumudamo",
    name: "Rumudamo.",
    desc: "Horizons: expressive and unique. Unusual origins and profiles pushing the boundaries of expectation.",
    price: "£16.00",
  },
];

const CoffeeCollection = () => {
  return (
    <div>
      <section className="bg-secondary">
        <div className="container mx-auto px-20 py-8">
          <div className="flex items-center justify-between text-xs tracking-widest">
            <p>SHOP</p>
            <p>ELOWEN</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-center font-custom text-8xl font-bold">
              Whole Coffee <br /> Beans
            </p>
            <p className="max-w-[550px] text-center font-medium">
              Try our coffee in your home, the way you prefer. Order beans or
              ask us to grind to your preference with over 5 choices based on
              your at home set up.
            </p>
          </div>

          <Separator className="my-20 bg-gray-400" />

          <div className="grid grid-cols-3">
            {PRODUCTS.map((p) => (
              <div
                key={p.id}
                className="flex flex-col items-center justify-between gap-8 p-6"
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <img src={p.img} alt={p.alt} />
                  <p className="font-custom text-lg font-bold">{p.name}</p>
                  <p className="px-3 text-center">{p.desc}</p>
                  <p className="font-bold">{p.price}</p>
                </div>
                <div className="flex w-full flex-col items-center gap-3">
                  <FancyButton
                    padding="px-7 py-2"
                    bgColor="bg-black"
                    textColor="text-white"
                    hoverBgColor="bg-white"
                    hoverTextColor="text-black"
                    className="w-full"
                  >
                    Buy now
                  </FancyButton>
                  <FancyHoverText className="text-xs uppercase tracking-widest">
                    Read more
                  </FancyHoverText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoffeeCollection;
