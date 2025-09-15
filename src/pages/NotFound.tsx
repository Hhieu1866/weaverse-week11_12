import FancyButton from "@/components/ui/FancyButton";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-main">
      <div className="text-center">
        <h1 className="font-custom text-9xl font-bold text-gray-300">404</h1>
        <h2 className="mb-4 font-custom text-4xl font-bold">Page Not Found</h2>
        <p className="mb-8 max-w-md text-lg text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-x-4">
          <FancyButton
            bgColor="bg-black"
            textColor="text-main"
            hoverBgColor="bg-gray-800"
            onClick={() => window.history.back()}
          >
            Go Back
          </FancyButton>
          <FancyButton
            bgColor="bg-transparent"
            textColor="text-black"
            hoverBgColor="bg-black"
            hoverTextColor="text-main"
            className="border border-black"
            onClick={() => (window.location.href = "/")}
          >
            Go Home
          </FancyButton>
        </div>
      </div>
    </div>
  );
}


