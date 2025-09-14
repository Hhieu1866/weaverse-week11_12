import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Lock, HelpCircle, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, type CheckoutFormData } from "@/lib/validations";
import { toast } from "sonner";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "credit",
      rememberMe: true,
      useBillingAddress: true,
    },
  });

  const paymentMethod = watch("paymentMethod");

  const onSubmit = (data: CheckoutFormData) => {
    console.log("Checkout data:", data);
    toast.success("Order placed successfully!");
    // Handle order submission here
  };

  return (
    <div className="min-h-screen bg-second">
      <div className="container mx-auto px-20 py-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-8">
            {/* Left Column - Checkout Form */}
            <div className="flex-1 space-y-8">
              {/* Express Checkout */}
              <Card>
                <CardContent className="p-6">
                  <p className="mb-4 text-center font-medium text-gray-600">
                    Express checkout
                  </p>
                  <div className="flex gap-3">
                    <Button className="h-12 flex-1 bg-[#f2ba36] hover:bg-[#e6a832]">
                      <img
                        src="/paypal.png"
                        alt="PayPal"
                        className="h-6 w-auto"
                      />
                    </Button>
                    <Button className="h-12 flex-1 bg-gray-200 hover:bg-gray-300">
                      <img
                        src="/ggpay.png"
                        alt="Google Pay"
                        className="h-6 w-auto"
                      />
                    </Button>
                  </div>

                  <div className="relative my-8">
                    <Separator className="h-[0.5px] bg-gray-300" />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm tracking-widest">
                      OR
                    </span>
                  </div>

                  <div className="space-y-8">
                    {/* Contact Section */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Contact</h3>
                        <Button variant="link" className="h-auto p-0">
                          Sign in
                        </Button>
                      </div>
                      <div>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Email"
                          {...register("email")}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Delivery Section */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Delivery</h3>
                      <div>
                        <Select
                          onValueChange={(value) => setValue("country", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Country/Region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="vn">Vietnam</SelectItem>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.country && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.country.message}
                          </p>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Input
                            id="firstName"
                            placeholder="First name"
                            {...register("firstName")}
                          />
                          {errors.firstName && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors.firstName.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <Input
                            id="lastName"
                            placeholder="Last name"
                            {...register("lastName")}
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors.lastName.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <Input
                          id="address"
                          placeholder="Address"
                          {...register("address")}
                        />
                        {errors.address && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.address.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Input
                          id="apartment"
                          placeholder="Apartment, suite, etc. (optional)"
                          {...register("apartment")}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Input
                            id="city"
                            placeholder="City"
                            {...register("city")}
                          />
                          {errors.city && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors.city.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <Input
                            id="postal"
                            placeholder="Postal code (optional)"
                            {...register("postalCode")}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Shipping Method */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Shipping method</h3>
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Label htmlFor="standard">Standard</Label>
                          </div>
                          <span className="font-semibold">£70.00</span>
                        </div>
                      </div>
                    </div>

                    {/* Payment */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">Payment</h3>
                      <p className="text-sm text-muted-foreground">
                        All transactions are secure and encrypted.
                      </p>

                      <RadioGroup
                        value={paymentMethod}
                        onValueChange={(v) =>
                          setValue("paymentMethod", v as "credit" | "paypal")
                        }
                        className="space-y-4"
                      >
                        {/* CREDIT CARD */}
                        <div
                          className={`rounded-xl border ${
                            paymentMethod === "credit"
                              ? "border-black"
                              : "border-muted-foreground/30"
                          }`}
                        >
                          <div
                            className={`flex w-full items-center justify-between rounded-t-xl px-4 py-3 ${
                              paymentMethod === "credit" ? "border-b" : ""
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="credit" id="credit" />
                              <Label
                                htmlFor="credit"
                                className="cursor-pointer"
                              >
                                Credit card
                              </Label>
                            </div>
                            <div className="flex items-center gap-2">
                              <img
                                src="/visa.webp"
                                alt="Visa"
                                className="h-6 w-auto"
                              />
                              <img
                                src="/MasterCard.webp"
                                alt="Mastercard"
                                className="h-6 w-auto"
                              />
                              <img
                                src="/american_express.webp"
                                alt="AmEx"
                                className="h-6 w-auto"
                              />
                              <div className="rounded-full border px-2 text-xs">
                                +5
                              </div>
                            </div>
                          </div>

                          {paymentMethod === "credit" && (
                            <div className="space-y-4 px-4 py-4">
                              <div className="relative">
                                <Input
                                  placeholder="Card number"
                                  className="h-12"
                                  {...register("cardNumber")}
                                />
                                <Lock className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                              </div>
                              {errors.cardNumber && (
                                <p className="text-sm text-red-500">
                                  {errors.cardNumber.message}
                                </p>
                              )}

                              <div className="grid grid-cols-2 gap-4">
                                <Input
                                  placeholder="Expiration date (MM / YY)"
                                  className="h-12"
                                  {...register("expiryDate")}
                                />
                                <div className="relative">
                                  <Input
                                    placeholder="Security code"
                                    className="h-12"
                                    {...register("securityCode")}
                                  />
                                  <HelpCircle className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                </div>
                              </div>
                              {(errors.expiryDate || errors.securityCode) && (
                                <p className="text-sm text-red-500">
                                  {errors.expiryDate?.message ||
                                    errors.securityCode?.message}
                                </p>
                              )}

                              <Input
                                placeholder="Name on card"
                                className="h-12"
                                {...register("nameOnCard")}
                              />
                              {errors.nameOnCard && (
                                <p className="text-sm text-red-500">
                                  {errors.nameOnCard.message}
                                </p>
                              )}

                              <div className="flex items-center gap-2 rounded-b-xl bg-muted/30 px-3 py-3">
                                <Checkbox
                                  id="billing"
                                  {...register("useBillingAddress")}
                                />
                                <Label
                                  htmlFor="billing"
                                  className="cursor-pointer"
                                >
                                  Use shipping address as billing address
                                </Label>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* PAYPAL */}
                        <div
                          className={`rounded-xl border ${
                            paymentMethod === "paypal"
                              ? "border-black"
                              : "border-muted-foreground/30"
                          }`}
                        >
                          <div
                            className={`flex w-full items-center justify-between rounded-t-xl px-4 py-3 ${
                              paymentMethod === "paypal" ? "border-b" : ""
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="paypal" id="paypal" />
                              <Label
                                htmlFor="paypal"
                                className="cursor-pointer"
                              >
                                PayPal
                              </Label>
                            </div>
                            <img
                              src="/paypal.webp"
                              alt="PayPal"
                              className="h-6 w-auto"
                            />
                          </div>

                          {paymentMethod === "paypal" && (
                            <div className="px-4 py-8">
                              <div className="mx-auto max-w-md text-center">
                                <div className="mx-auto mb-6 h-28 w-40 rounded border border-muted-foreground/40" />
                                <p className="text-sm text-muted-foreground">
                                  After clicking "Pay with PayPal", you will be
                                  redirected to PayPal to complete your purchase
                                  securely.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Remember me */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Remember me</h3>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" {...register("rememberMe")} />
                        <Label htmlFor="remember">
                          Save my information for a faster checkout with a Shop
                          account
                        </Label>
                      </div>
                      <div>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                          <Input
                            id="phone"
                            placeholder="Mobile phone number"
                            className="pl-10"
                            {...register("phone")}
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                            +84
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
                    <Lock className="h-4 w-4" />
                    <span>Secure and encrypted</span>
                    <span className="ml-auto">shop</span>
                  </div>

                  <Button type="submit" className="mt-6 h-12 w-full text-lg">
                    Review order
                  </Button>

                  <Separator className="my-6" />

                  <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                    <Button variant="link" className="h-auto p-0">
                      Refund policy.
                    </Button>
                    <Button variant="link" className="h-auto p-0">
                      Shipping
                    </Button>
                    <Button variant="link" className="h-auto p-0">
                      Privacy policy.
                    </Button>
                    <Button variant="link" className="h-auto p-0">
                      Terms of service
                    </Button>
                    <Button variant="link" className="h-auto p-0">
                      Cancellations
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Order Summary (Sticky) */}
            <div className="w-96">
              <div className="sticky top-20">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="mb-4 text-xl font-semibold">
                      Order Summary
                    </h2>

                    {/* Product Item */}
                    <div className="mb-4 flex items-center gap-4">
                      <div className="relative">
                        <div className="rounded-md bg-second">
                          <img
                            src="/KINTOTUMBLER_BOTTOM_ALIGNED.webp"
                            alt="Kinto Travel Tumbler"
                            className="h-16 w-16 rounded object-cover"
                          />
                        </div>
                        <Badge className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full text-xs">
                          1
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Kinto Travel Tumbler.</p>
                        <p className="text-sm text-gray-600">£35.00</p>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    {/* Discount Code */}
                    <div className="mb-4 flex gap-2">
                      <Input placeholder="Discount code" className="flex-1" />
                      <Button variant="outline">Apply</Button>
                    </div>

                    <Separator className="my-4" />

                    {/* Cost Breakdown */}
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>£35.00</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span>Shipping</span>
                          <HelpCircle className="h-4 w-4 text-gray-400" />
                        </div>
                        <span>£70.00</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <p>
                          <span className="text-xs text-gray-400">GBP</span>{" "}
                          £105.00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
