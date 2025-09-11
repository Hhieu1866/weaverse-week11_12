import FancyButton from "./ui/FancyButton";

const OurFavourites = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto px-20 py-32">
        <div className="flex items-center justify-between">
          <h1 className="font-custom text-6xl font-bold">Our favourites.</h1>
          <FancyButton className="border border-black bg-transparent">
            SHOP NOW
          </FancyButton>
        </div>
      </div>
    </div>
  );
};

export default OurFavourites;
