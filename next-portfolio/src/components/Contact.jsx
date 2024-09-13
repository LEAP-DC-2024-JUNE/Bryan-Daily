import EmailIcon from "@/icons/EmailIcon";
import Tag from "./Tag";
import CopyIcon from "@/icons/CopyIcon";
import PhoneIcon from "@/icons/PhoneIcon";
import Link from "next/link";
import GithubLogo from "@/icons/GithubLogo";
import TwitterLogo from "@/icons/TwitterLogo";
import FigmaLogo from "@/icons/FigmaLogo";

const Contact = ({ theme }) => {
  return (
    <div id="contact" className="px-4 py-16 xl:px-20 xl:py-24">
      <div className="flex flex-col items-center gap-6 xl:gap-12 xl:px-8">
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <Tag text="Get in touch" />
          </div>
          <div>
            <h2 className="text-xl max-w-[576px] mx-auto text-center">
              What&apos;s next? Feel free to reach out to me if you're looking
              for a developer, have a query, or simply want to connect.
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-5 items-center">
            <EmailIcon theme={theme} />
            <h2 className="font-semibold text-lg xl:text-4xl text-gray-900 dark:text-gray-50">
              tom@pinecone.mn
            </h2>
            <CopyIcon text="tom@pinecone.mn" theme={theme} />
          </div>
          <div className="flex gap-5 items-center">
            <PhoneIcon theme={theme} />
            <h2 className="font-semibold text-lg xl:text-4xl text-gray-900 dark:text-gray-50">
              +976 88112233
            </h2>
            <CopyIcon text="+976 88112233" theme={theme} />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col gap-2">
            <p>You may also find me on these platforms!</p>
            <ul className="flex justify-center gap-4">
              <Link href={"/"}>
                <GithubLogo theme={theme} />
              </Link>
              <Link href={"/"}>
                <TwitterLogo theme={theme} />
              </Link>
              <Link href={"/"}>
                <FigmaLogo theme={theme} />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
