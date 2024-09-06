import Image from "next/image";
import Tag from "./Tag";
import ShareIcon from "@/icons/ShareIcon";

const WorkCard = ({ data }) => {
  return (
    <div className={`flex gap-0 ${data.reverse && 'flex-row-reverse'}
                    shadow-[0px_4px_2px] shadow-gray-300 rounded-xl`}>
      <div className="rounded-l-xl p-12 bg-gray-50
                      border-r border-gray-100
                      flex-1">
        <Image
          className="rounded-xl shadow-[0px_10px_8px] shadow-gray-300"
          src={"/" + data.picture}
          width={480}
          height={384}
          alt={data.title + " image"}
        />
      </div>
      <div className="rounded-r-xl p-12
                      flex flex-col gap-6
                      flex-1">
        <h1 className="font-semibold text-xl text-gray-900">{data.title}</h1>
        <p className="font-normal text-base text-gray-600">{data.desc}</p>
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