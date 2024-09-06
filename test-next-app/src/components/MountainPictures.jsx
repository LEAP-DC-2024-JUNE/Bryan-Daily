import Picture2 from "@/components/Picture2";
import Pic from "../../public/img/download.jpg";

const MountainPictures = () => {
  const arr = [
    Pic,
    Pic,
    Pic,
    Pic
  ]
  return (
    <div className="w-2/4">
      <h1 className="font-bold text-blue-900 text-center text-2xl mb-8">Mountain Pictures</h1>
      <div className="flex flex-wrap gap-5">
        {arr.map( (name) => <Picture2 name={name} /> )}
      </div>
    </div>
  );
}

export default MountainPictures;