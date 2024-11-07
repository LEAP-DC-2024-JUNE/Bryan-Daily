import Link from "next/link";

const Test = async () => {
  const data = await fetch("https://dev.to/api/articles?per_page=1").then(
    (response) => response.json()
  );
  return (
    <div>
      <p>Test Page - App Router</p>
      <p>{data[0].title}</p>
      <Link
        href={"/contact"}
        className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200"
      >
        Go back
      </Link>
    </div>
  );
};

export default Test;
