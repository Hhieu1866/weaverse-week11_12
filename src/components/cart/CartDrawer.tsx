import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCartStore } from "@/stores/cart";
import { Separator } from "../ui/separator";
import FancyButton from "../ui/FancyButton";

export function CartDrawer() {
  const { isCartOpen, closeCart, items, total } = useCartStore();

  return (
    <Sheet open={isCartOpen} onOpenChange={closeCart}>
      <div className="bg-main"></div>
      <SheetContent className="w-[500px]">
        <SheetHeader>
          <SheetTitle className="font-custom text-5xl font-bold">
            Your Cart
          </SheetTitle>
        </SheetHeader>
        <p className="mt-3 text-sm">
          You’re only £28.00 away from free UK shipping
        </p>

        <div className="mt-8">
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: £{item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
              <Separator className="my-5" />
              <p className="text-sm uppercase tracking-widest">
                Add a gift note
              </p>
              <Separator className="my-5" />{" "}
              <h3 className="text-sm uppercase tracking-widest">
                Total: £{total.toFixed(2)}
              </h3>
              <FancyButton
                className="mt-10 w-full border border-black"
                bgColor="bg-black"
                textColor="text-white"
                hoverBgColor="bg-main"
                hoverTextColor="text-black"
              >
                GO TO CHECKOUT
              </FancyButton>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
