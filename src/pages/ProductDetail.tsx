import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { findProduct } from "@/data/products";
import { Check, ChevronDown, CirclePlus, Minus, Plus } from "lucide-react";
import { useParams } from "react-router-dom";
import { useSignal } from "@preact/signals-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FancyButton from "@/components/ui/FancyButton";
import { IconOne, IconThree, IconTwo } from "@/components/icons";
import RecentlyViewed from "@/components/RecentlyViewed";
import { useCartStore } from "@/stores/cart";
import { useRecentlyViewedStore } from "@/stores/recentlyViewed";
import { motion } from "framer-motion";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const p = id ? findProduct(id) : undefined;

  const quantity = useSignal(1);
  const { addItem, openCart } = useCartStore();
  const { addItem: addToRecentlyViewed } = useRecentlyViewedStore();

  useEffect(() => {
    if (p) addToRecentlyViewed(p);
  }, [p, addToRecentlyViewed]);

  const handleDecreaseQuantity = () => {
    if (quantity.value > 1) quantity.value = quantity.value - 1;
  };
  const handleIncreaseQuantity = () => {
    quantity.value = quantity.value + 1;
  };

  const handleAddToCart = () => {
    if (!p) return;
    const cartItem = {
      id: `${p.id}-${Date.now()}`,
      productId: p.id,
      name: p.name,
      price: parseFloat(p.price.replace("£", "")),
      image: p.img,
      quantity: quantity.value,
    };
    addItem(cartItem);
    openCart();
  };

  return (
    <main className="bg-main">
      <section className="container mx-auto px-4 py-10 md:px-20 md:py-16">
        {/* 2 cột: mobile dọc, desktop ngang */}
        <div className="relative flex flex-col gap-8 md:flex-row md:gap-8">
          {/* Image */}
          <div className="w-full md:sticky md:top-0 md:w-2/3 md:self-start">
            <img
              src={p?.img}
              alt={p?.name || ""}
              className="w-full object-contain"
            />
          </div>

          {/* Right panel */}
          <div className="mt-2 flex w-full flex-col gap-3 md:mt-24 md:w-1/3">
            <h1 className="font-custom text-3xl font-bold md:text-5xl">
              {p?.name}
            </h1>
            <span className="text-sm md:text-base">
              Our 1829 Espresso is our seasonal espresso for milk. We source,
              roast and brew this coffee specifically for an exceptional milk
              based experience. <strong>Read more</strong>.
            </span>

            <Separator className="bg-black" />

            {/* Specs */}
            <div className="space-y-4 text-sm md:text-base">
              <div className="flex items-center justify-between">
                <p className="font-bold">Tasting Notes.</p>
                <p>Prune, Nutella, Hazelnut</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Origin.</p>
                <p>Costa Rica</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Region.</p>
                <p>Turrialba</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Traceability.</p>
                <p>Aquiares Estate</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Altitude.</p>
                <p>1200MaSL</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Varieties.</p>
                <p>Marsellesa, Obata</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Process.</p>
                <p>Washed</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Bag Size.</p>
                <p>200g</p>
              </div>
            </div>

            <Separator className="my-5 bg-gray-400" />

            {/* Grind */}
            <div className="flex items-center justify-between">
              <p className="font-bold">Grind.</p>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 rounded-full border border-black bg-transparent px-5 py-1">
                  Whole bean <ChevronDown className="size-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Grind.</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>French Press</DropdownMenuItem>
                  <DropdownMenuItem>Aeropress</DropdownMenuItem>
                  <DropdownMenuItem>v60</DropdownMenuItem>
                  <DropdownMenuItem>Kalita Wave</DropdownMenuItem>
                  <DropdownMenuItem>Moka Pot</DropdownMenuItem>
                  <DropdownMenuItem>Espresso</DropdownMenuItem>
                  <DropdownMenuItem>Chemex</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Quantity */}
            <div className="flex items-center justify-between">
              <p className="font-bold">Quantity.</p>
              <div className="flex items-center justify-between gap-6">
                <button
                  type="button"
                  className="cursor-pointer"
                  onClick={handleDecreaseQuantity}
                >
                  <Minus />
                </button>
                <div className="text-lg font-bold">{quantity.value}</div>
                <button
                  type="button"
                  className="cursor-pointer"
                  onClick={handleIncreaseQuantity}
                >
                  <Plus />
                </button>
              </div>
            </div>

            {/* Purchase Tabs */}
            <Tabs defaultValue="left" className="w-full">
              <TabsList className="w-full rounded-full border border-black bg-transparent">
                <TabsTrigger
                  value="left"
                  className="w-full rounded-full data-[state=active]:!bg-black data-[state=active]:!text-white"
                >
                  One-time purchase
                </TabsTrigger>
                <TabsTrigger
                  value="right"
                  className="w-full rounded-full data-[state=active]:!bg-black data-[state=active]:!text-white"
                >
                  Subscribe & save 10%
                </TabsTrigger>
              </TabsList>

              {/* tab 1 */}
              <TabsContent value="left">
                <FancyButton
                  bgColor="bg-black"
                  textColor="text-main"
                  hoverBgColor="bg-second"
                  hoverTextColor="text-black"
                  className="mt-3 w-full border border-black"
                  onClick={handleAddToCart}
                >{`${p?.price} - Add to Cart`}</FancyButton>
              </TabsContent>

              {/* tab 2 */}
              <TabsContent value="right">
                <div className="space-y-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-[#CAB196] p-1">
                      <Check className="size-3" />
                    </div>
                    <p className="text-sm font-medium">Free UK shipping.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-[#CAB196] p-1">
                      <Check className="size-3" />
                    </div>
                    <p className="text-sm font-medium">Always 10% off.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-[#CAB196] p-1">
                      <Check className="size-3" />
                    </div>
                    <p className="text-sm font-medium">
                      Pause, skip or cancel at any time.
                    </p>
                  </div>
                </div>
                <FancyButton
                  bgColor="bg-black"
                  textColor="text-main"
                  hoverBgColor="bg-second"
                  hoverTextColor="text-black"
                  className="mt-3 w-full border border-black"
                >{`${p?.price} - Subscribe`}</FancyButton>
              </TabsContent>
            </Tabs>

            <Separator className="my-5 bg-gray-400" />

            {/* Cross-sell */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest">
                Make your perfect cup.
              </p>
              <div className="flex items-center justify-between gap-2 rounded-2xl bg-[#efd9c0c0] p-3">
                <div className="max-w-28">
                  <img
                    src="/MonowareMug_BOTTOM_ALIGNED.webp"
                    alt="MonowareMug_BOTTOM_ALIGNED"
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-1">
                  <p className="font-custom text-lg font-bold">
                    WatchHouse x Monoware Mug.
                  </p>
                  <p className="text-sm font-medium">From £22.00</p>
                </div>
                <button type="button">
                  <CirclePlus className="size-7" />
                </button>
              </div>
              <div className="flex items-center justify-center gap-1">
                <div className="h-0.5 w-3 bg-black" />
                <div className="h-0.5 w-3 bg-gray-300" />
                <div className="h-0.5 w-3 bg-gray-300" />
                <div className="h-0.5 w-3 bg-gray-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Info split line */}
        <div className="my-14 flex flex-col items-center justify-center gap-4 md:my-20">
          <p className="text-xs uppercase tracking-widest">Info.</p>
          <Separator className="h-[0.5px] w-full bg-black" />
        </div>

        {/* Content */}
        <div className="px-4 md:px-80">
          <p className="text-justify text-sm font-medium md:text-base">
            {p?.content}
          </p>
        </div>
      </section>

      {/* Icons row */}
      <section className="bg-second">
        <div className="container mx-auto flex flex-col items-start gap-8 px-4 py-12 md:flex-row md:items-start md:gap-10 md:px-20 md:py-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex items-start gap-2"
          >
            <IconOne size={100} />
            <div>
              <h2 className="font-custom text-xl font-bold md:text-2xl">
                Globally sourced. Locally crafted.
              </h2>
              <p className="text-sm md:text-base">
                Cupped, tested, developed and roasted at our Coffee Lab right
                here in South London.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex items-start gap-2"
          >
            <IconTwo size={100} />
            <div>
              <h2 className="font-custom text-xl font-bold md:text-2xl">
                Modern Coffee. Holistic approach.
              </h2>
              <p className="text-sm md:text-base">
                It encapsulates the attention to detail, creativity, and focus
                on provenance and quality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="flex items-start gap-2"
          >
            <IconThree size={100} />
            <div>
              <h2 className="font-custom text-xl font-bold md:text-2xl">
                No two Houses the same.
              </h2>
              <p className="text-sm md:text-base">
                Each of our locations are designed to play a contemporary role
                in the Modern Coffee experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <RecentlyViewed />
    </main>
  );
};

export default ProductDetail;
