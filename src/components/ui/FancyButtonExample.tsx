import FancyButton from './FancyButton';

const FancyButtonExample = () => {
  return (
    <div className="space-y-4 p-8">
      <h2 className="text-2xl font-bold mb-6">FancyButton Examples</h2>
      
      {/* Default button */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Default</h3>
        <FancyButton>Click me</FancyButton>
      </div>

      {/* Custom colors */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Custom Colors</h3>
        <FancyButton 
          bgColor="bg-green-100" 
          hoverBgColor="bg-green-600"
        >
          Green Button
        </FancyButton>
      </div>

      {/* Custom styling */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Custom Styling</h3>
        <FancyButton 
          bgColor="bg-purple-100" 
          hoverBgColor="bg-purple-600"
          className="h-16 px-8 text-lg"
        >
          Large Purple Button
        </FancyButton>
      </div>

      {/* With click handler */}
      <div>
        <h3 className="text-lg font-semibold mb-2">With Click Handler</h3>
        <FancyButton 
          bgColor="bg-red-100" 
          hoverBgColor="bg-red-600"
          onClick={() => alert('Button clicked!')}
        >
          Click to Alert
        </FancyButton>
      </div>
    </div>
  );
};

export default FancyButtonExample;
