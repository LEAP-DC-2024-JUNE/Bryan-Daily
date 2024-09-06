import MountainPictures from "@/components/MountainPictures";
import Tags from "@/components/Tags";
import Title from "@/components/Title";

const Components = () => {
  return (
    <div className="flex flex-col items-center gap-8 w-full top-28 relative">
      <Title />

      <Tags />

      <MountainPictures />
      
    </div>
  );
}

export default Components;