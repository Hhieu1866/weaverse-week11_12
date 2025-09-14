import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Separator } from "./ui/separator";
import FancyButton from "./ui/FancyButton";

// Product data - easy to maintain and add new products
const products = [
  {
    id: "espresso",
    title: "1829 Espresso.",
    description:
      "Our 1829 Espresso is our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk based experience.",
    price: "£12.00",
    image: "/1829-espresso.webp",
    imageAlt: "1829 espresso",
    gradientFrom: "#E6CEB0",
    gradientTo: "#CEB191",
    checkBgColor: "#CAB196",
    buttonText: "BUY NOW",
    textColor: "text-black", // default
    separatorColor: "bg-black",
  },
  {
    id: "rituals",
    title: "Rituals Subscription.",
    description: "Smooth, everyday coffee. Rituals, on subscription.",
    price: "£10.80",
    image: "/rituals.webp",
    imageAlt: "rituals",
    gradientFrom: "#E7D0B1",
    gradientTo: "#CDB090",
    checkBgColor: "#CAB196",
    buttonText: "SUBSCRIBE NOW",
    textColor: "text-black",
    separatorColor: "bg-black",
  },
  {
    id: "ventures",
    title: "Ventures Subscription.",
    description: "Curious coffee, delivered. Ventures, on subscription.",
    price: "£12.60",
    image: "/ventures.webp",
    imageAlt: "ventures",
    gradientFrom: "#BC8F8B",
    gradientTo: "#AC6E6A",
    checkBgColor: "#BA827D",
    buttonText: "SUBSCRIBE NOW",
    textColor: "text-white",
    separatorColor: "bg-white",
  },
  {
    id: "horizons",
    title: "Horizons Subscription.",
    description: "Bold brews, delivered. Horizons, on subscription.",
    price: "£14.40",
    image: "/horizons.webp",
    imageAlt: "horizons",
    gradientFrom: "#BC8F8B",
    gradientTo: "#AC6E6A",
    checkBgColor: "#BA827D",
    buttonText: "SUBSCRIBE NOW",
    textColor: "text-white",
    separatorColor: "bg-white",
  },
];

const benefits = [
  "Free UK shipping.",
  "Always 10% off.",
  "Pause, skip or cancel at any time.",
];

const SubscribeSection = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;

    // Calculate single-card width + gap
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 0;
    const styles = getComputedStyle(el);
    const gapStr = (styles.columnGap || styles.gap || "0").toString();
    const gap = parseFloat(gapStr) || 0;
    const amount = cardWidth + gap;

    el.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-main">
      <div className="container mx-auto flex gap-6 px-20 py-32">
        {/* Left side - static content */}
        <div className="flex w-1/4 flex-col justify-between pt-28">
          <div className="space-y-5">
            <h1 className="font-custom text-6xl font-bold leading-none">
              Subscribe today.
            </h1>
            <p className="font-medium">
              WatchHouse. YourHouse. The Modern Coffee experience in the comfort
              of your own home.
            </p>
            <p className="font-medium">Subscribe for a neverending cup.</p>
          </div>
          <div className="flex items-start gap-2">
            <button
              type="button"
              onClick={() => scroll("prev")}
              className="rounded-full bg-black p-2 transition hover:bg-black/80"
              aria-label="Previous"
            >
              <ChevronLeft className="text-white" />
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              className="rounded-full bg-black p-2 transition hover:bg-black/80"
              aria-label="Next"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>
        </div>

        {/* Right side - scrollable cards */}
        <div
          ref={scrollerRef}
          className="no-scrollbar -mx-1 flex flex-1 snap-x snap-mandatory flex-nowrap gap-7 overflow-x-auto overflow-y-visible px-1 pb-2 pt-28"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative flex w-72 shrink-0 snap-start flex-col rounded-2xl p-6 ${product.textColor}`}
              style={{
                background: `linear-gradient(to right, ${product.gradientFrom}, ${product.gradientTo})`,
              }}
            >
              {/* Product image */}
              <img
                src={product.image}
                alt={product.imageAlt}
                className="absolute -top-28 left-1/2 -translate-x-1/2"
              />

              {/* Card content */}
              <div className="mt-28 flex-1">
                <div className="space-y-3">
                  <h2 className="font-custom text-xl font-bold">
                    {product.title}
                  </h2>
                  <p className="text-sm">{product.description}</p>
                  <p className="font-custom text-lg">{product.price}</p>
                </div>

                <Separator className={`my-3 ${product.separatorColor}`} />

                <p className="text-sm font-bold">Subscribe today.</p>
                <div className="mt-3 space-y-4 text-sm font-medium">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className="rounded-full p-0.5"
                        style={{ backgroundColor: product.checkBgColor }}
                      >
                        <Check className="size-3" />
                      </div>
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <FancyButton padding="px-7 py-2" className="mt-6 w-full">
                {product.buttonText}
              </FancyButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
