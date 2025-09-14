import SuggestedProducts from "@/components/SuggestedProducts";
import FancyButton from "@/components/ui/FancyButton";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "@/stores/cart";
import FancyHoverText from "@/components/ui/FancyHoverText";

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, total } = useCartStore();

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  return (
    <main className="bg-main">
      <section className="container mx-auto px-20 py-16">
        <div className="flex items-start gap-2">
          <h1 className="font-custom text-6xl font-bold">Your Cart</h1>
          <p className="font-custom">{items.length}</p>
        </div>

        <div className="mt-5 flex items-start gap-8">
          <div className="w-2/3">
            <p className="text-sm">
              You’re only <b>£5.00</b> away from free UK shipping
            </p>

            <Separator className="my-5 h-[0.5px] bg-black" />

            {items.length === 0 ? (
              <div className="py-8 text-center">
                <p className="font-custom text-xl font-bold">
                  Your cart is empty
                </p>
                <FancyHoverText
                  className="mt-4"
                  onClick={() => navigate("/products")}
                >
                  Continue Shopping
                </FancyHoverText>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="w-44">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-full rounded object-cover"
                      />
                    </div>
                    <p className="flex-1 font-custom text-2xl font-bold">
                      {item.name}
                    </p>
                    <div className="flex items-center justify-between gap-6">
                      <button
                        className="cursor-pointer"
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus />
                      </button>
                      <div className="text-lg font-bold">{item.quantity}</div>
                      <button
                        className="cursor-pointer"
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus />
                      </button>
                    </div>
                    <p className="font-medium">
                      £{(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      className="cursor-pointer text-red-600"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <Separator className="my-5 h-[0.5px] bg-gray-400" />

            {/* Make your perfect cup. */}
            <SuggestedProducts />
          </div>

          <div className="w-1/3 rounded-2xl bg-second px-4 py-10">
            <h2 className="font-custom text-5xl font-bold">Order Summary</h2>

            <Separator className="my-5 h-[0.5px] bg-black" />

            <p className="text-xs uppercase tracking-widest">Add a gift note</p>

            <Separator className="my-5 h-[0.5px] bg-black" />

            <div className="flex items-start justify-between">
              <p className="text-xs uppercase tracking-widest">Total</p>
              <h2 className="text-3xl font-medium">£{total.toFixed(2)}</h2>
            </div>

            <p className="mt-5 font-medium">
              Shipping & taxes calculated at checkout
            </p>

            <Separator className="my-5 h-[0.5px] bg-black" />

            <FancyButton
              className="w-full border border-black"
              bgColor="bg-black"
              textColor="text-main"
              hoverBgColor="bg-second"
              hoverTextColor="text-black"
              onClick={() => navigate("/checkout")}
            >
              Go to checkout
            </FancyButton>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
