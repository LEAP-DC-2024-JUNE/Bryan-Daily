import UpworkIcon from "@/icons/UpworkIcon";

const ExperienceCard = ({ data }) => {
  return (
    <div
      className="w-full mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl
                    shadow-[0px_2px_2px] shadow-gray-300 dark:shadow-none"
    >
      <div
        className="flex flex-col gap-4
                      xl:flex-row xl:gap-12"
      >
        <div className="xl:w-1/4">
          <UpworkIcon />
        </div>
        <div
          className="flex flex-col-reverse gap-4
                        xl:flex-row xl:justify-between xl:w-3/4"
        >
          <div
            className="flex flex-col gap-4
                          xl:w-1/2"
          >
            <h1 className="font-semibold text-xl text-gray-900 dark:text-gray-50">
              {data.title}
            </h1>
            <ul className="list-disc text-gray-600 dark:text-gray-300 w-[95%] flex flex-col gap-1">
              {data.details.map((detail, i) => {
                return (
                  <li key={"detail-" + i} className=" relative left-5">
                    {detail}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dark:text-gray-200">
            {data.startDate} - {data.endDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
