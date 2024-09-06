import UpworkIcon from "@/icons/UpworkIcon";

const ExperienceCard = ({ data }) => {
  return (
    <div className="w-[896px] mx-auto bg-white p-8 rounded-xl shadow-[0px_2px_2px] shadow-gray-300">
      <div className="flex gap-12">
        <div className="flex-1">
          <UpworkIcon />
        </div>
        <div className="flex-2 flex flex-col gap-4">
          <h1 className="font-semibold text-xl text-gray-900">{data.title}</h1>
          <ul className="w-[384px] list-disc text-gray-600">
            {data.details.map((detail) => {
              return <li className=" relative left-5">{detail}</li>;
            })}
          </ul>
        </div>
        <div className="flex-1">
          {data.startDate} - {data.endDate}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;