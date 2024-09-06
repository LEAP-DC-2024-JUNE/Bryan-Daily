import Chip from "@/components/Chip";

const PropsTest = () => {
  return (
    <div className="flex flex-col">
      <Chip title="From parent component Billy" />
      <Chip title="Test" />
    </div>
  );
};

export default PropsTest;