import EmailIcon from "@/icons/EmailIcon";
import Tag from "./Tag";
import CopyIcon from "@/icons/CopyIcon";
import PhoneIcon from "@/icons/PhoneIcon";
import Link from "next/link";
import GithubLogo from "@/icons/GithubLogo";
import TwitterLogo from "@/icons/TwitterLogo";
import FigmaLogo from "@/icons/FigmaLogo";

const Contact = () => {
  return (
    <div id="contact" className="px-20 py-24">
      <div className="flex flex-col items-center gap-12 px-8">
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <Tag text="Get in touch" />
          </div>
          <div>
            <h2 className="text-xl max-w-[576px] mx-auto text-center">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</h2>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-5 items-center">
            <EmailIcon />
            <h2 className="font-semibold text-4xl text-gray-900">tom@pinecone.mn</h2>
            <CopyIcon />
          </div>
          <div className="flex gap-5 items-center">
            <PhoneIcon />
            <h2 className="font-semibold text-4xl text-gray-900">+976 88112233</h2>
            <CopyIcon />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col gap-2">
            <p>You may also find me on these platforms!</p>
            <ul className="flex justify-center gap-4">
              <Link href={"/"}><GithubLogo /></Link>
              <Link href={"/"}><TwitterLogo /></Link>
              <Link href={"/"}><FigmaLogo /></Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;