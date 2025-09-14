import { CirclePlus } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const SuggestedProducts = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "WatchHouse x Monoware Mug.",
      price: "From £22.00",
      image: "/MonowareMug_BOTTOM_ALIGNED.webp",
    },
    {
      id: 2,
      name: "1829 Espresso. x WatchHouse Kinto Travel Tumbler Set.",
      price: "From £42.00",
      image: "/1829XTRAVELTUMBLER.webp",
    },
    {
      id: 3,
      name: "Traveller's Set.",
      price: "From £60.00",
      image: "/WH_NPods.webp",
    },
    {
      id: 4,
      name: "Rituals Pods.",
      price: "From £18.00",
      image: "/public/1829-espresso.webp",
    },
  ];

  const scrollToNext = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 0;
    const styles = getComputedStyle(el);
    const gapStr = (styles.columnGap || styles.gap || "0").toString();
    const gap = parseFloat(gapStr) || 0;
    const amount = cardWidth + gap;

    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % products.length;
      el.scrollTo({
        left: newIndex * amount,
        behavior: "smooth",
      });
      return newIndex;
    });
  }, [products.length]);

  useEffect(() => {
    const interval = setInterval(scrollToNext, 3000);
    return () => clearInterval(interval);
  }, [scrollToNext]);

  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-widest">
        Make your perfect cup.
      </p>

      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-2 overflow-x-auto overflow-y-visible"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex min-w-full shrink-0 items-center justify-between gap-2 rounded-2xl bg-[#eee1c7] p-3"
          >
            <div className="max-w-28">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="flex w-full flex-col items-start gap-1">
              <p className="font-custom text-lg font-bold">{product.name}</p>
              <p className="text-sm font-medium">{product.price}</p>
            </div>
            <button>
              <CirclePlus className="size-7" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-1">
        {products.map((_, index) => (
          <div
            key={index}
            className={`h-[1px] w-3 ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestedProducts;
