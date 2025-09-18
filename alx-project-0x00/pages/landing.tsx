import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

      <div className="flex gap-4 p-8">
        <Button label="Small Rounded" styles="rounded-sm" />
        <Button label="Medium Rounded" styles="rounded-md" />
        <Button label="Full Rounded" styles="rounded-full" />
      </div>
    </div>
  );
};
export default Landing;
