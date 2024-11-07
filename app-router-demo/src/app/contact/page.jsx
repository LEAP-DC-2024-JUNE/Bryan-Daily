"use client";

// import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Contact = () => {
  const { push } = useRouter();
  const [data, setData] = useState({});

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=1")
      .then((response) => response.json())
      .then((article) => setData(article[0]));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <Link href={"/contact/test"}>Contact Page - App Router</Link> */}
      <p>Contact Page - App Router</p>
      <p>{data?.title}</p>
      <button
        onClick={() => push("/contact/test")}
        className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200"
      >
        test
      </button>
    </div>
  );
};

export default Contact;
