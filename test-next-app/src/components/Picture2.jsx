import Image from "next/image";

const Picture2 = (props) => {
  return (
    <Image 
      src={props.name}
      width={200}
      height={200}
      alt="Mountain"
    />
  );
}

export default Picture2;