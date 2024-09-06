// index.js
// import Header, { HeaderDescription, HeaderTitle } from "@/component/Header";
import Picture from "@/components/Picture";
import Text from "@/components/Text";

export default function Home() {
  return (
    <>
      <div className="flex justify-around w-full">
        <Picture />
        <Picture />
        <Picture />
      </div>
      <div className="flex justify-around w-full">
        <Text />
        <Text />
      </div>
    </>
  );
}
