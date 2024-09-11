import Image from "next/image";
import Tag from "./Tag";
import ShareIcon from "@/icons/ShareIcon";

const WorkCard = ({ data }) => {
  return (
    <div className={`flex gap-0 flex-col
                    shadow-[0px_4px_2px] shadow-gray-300 dark:shadow-none rounded-xl
                    xl:flex-row ${data.reverse && 'xl:flex-row-reverse'}`}>
      <div className={`rounded-${data.reverse ? 'r' : 'l'}-xl p-12 bg-gray-50 dark:bg-gray-700
                      border-r border-gray-100 dark:border-gray-800
                      flex-1 flex justify-center`}>
        <Image
          className="rounded-xl shadow-[0px_10px_8px] shadow-gray-300 dark:shadow-none"
          src={"/" + data.picture}
          width={480}
          height={384}
          alt={data.title + " image"}
        />
      </div>
      <div className={`rounded-${data.reverse ? 'l' : 'r'}-xl p-12
                      flex flex-col gap-6
                      flex-1
                      dark:bg-gray-800`}>
        <h1 className="font-semibold text-xl text-gray-900 dark:text-gray-50">{data.title}</h1>
        <p className="font-normal text-base">{data.desc}</p>
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag) => {
            return <Tag text={tag} />;
          })}
        </div>
        <button>
          <ShareIcon />
        </button>
      </div>
    </div>
  );
}

export default WorkCard;