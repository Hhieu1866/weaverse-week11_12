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

  // Add to recently viewed when product loads
  useEffect(() => {
    if (p) {
      addToRecentlyViewed(p);
    }
  }, [p, addToRecentlyViewed]);

  const handleDecreaseQuantity = () => {
    if (quantity.value > 1) {
      quantity.value = quantity.value - 1;
    }
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
      <section className="container mx-auto px-20 py-16">
        <div className="relative flex gap-8 px-14">
          <div className="sticky top-0 w-2/3 self-start">
            <img
              src={p?.img}
              alt={p?.name || ""}
              className="w-full object-contain"
            />
          </div>

          <div className="mt-24 flex w-1/3 flex-col gap-3">
            <h1 className="font-custom text-5xl font-bold">{p?.name}</h1>
            <span>
              Our 1829 Espresso is our seasonal espresso for milk. We source,
              roast and brew this coffee specifically for an exceptional milk
              based experience. <strong>Read more</strong>.
            </span>

            <Separator className="bg-black" />

            <div className="space-y-4">
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

            <div className="flex items-center justify-between">
              <p className="font-bold">Quantity.</p>
              <div className="flex items-center justify-between gap-6">
                <button
                  className="cursor-pointer"
                  onClick={handleDecreaseQuantity}
                >
                  <Minus />
                </button>
                <div className="text-lg font-bold">{quantity}</div>
                <button
                  className="cursor-pointer"
                  onClick={handleIncreaseQuantity}
                >
                  <Plus />
                </button>
              </div>
            </div>

            <Tabs defaultValue="left" className="w-[400px]">
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

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest">
                Make your perfect cup.
              </p>
              <div className="flex items-center justify-between gap-2 rounded-2xl bg-[#efd9c0c0] p-3">
                <div className="max-w-28">
                  <img src="/public/MonowareMug_BOTTOM_ALIGNED.webp" alt="" />
                </div>
                <div className="flex w-full flex-col items-start gap-1">
                  <p className="font-custom text-lg font-bold">
                    WatchHouse x Monoware Mug.
                  </p>
                  <p className="text-sm font-medium">From £22.00</p>
                </div>
                <button>
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

        <div className="my-20 flex flex-col items-center justify-center gap-4">
          <p className="text-xs uppercase tracking-widest">Info.</p>
          <Separator className="h-[0.5px] w-full bg-black" />
        </div>

        {/* content */}
        <div className="px-80">
          <p className="text-justify font-medium">{p?.content}</p>
        </div>
      </section>

      <section className="bg-second">
        <div className="container mx-auto flex items-start gap-10 px-20 py-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex items-start gap-2"
          >
            <div className="">
              <IconOne size={100} />
            </div>
            <div>
              <h2 className="font-custom text-2xl font-bold">
                Globally sourced. Locally crafted.
              </h2>
              <p>
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
            <div className="">
              <IconTwo size={100} />
            </div>
            <div>
              <h2 className="font-custom text-2xl font-bold">
                Modern Coffee. Holistic approach.
              </h2>
              <p>
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
            <div className="">
              <IconThree size={100} />
            </div>
            <div>
              <h2 className="font-custom text-2xl font-bold">
                No two Houses the same.
              </h2>
              <p>
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
