import Image from 'next/image';

const Picture = () => {
  return (
    <Image 
      src='./download.svg'
      width={300}
      height={300}
      alt="logo"
    />
  );
}

export default Picture;