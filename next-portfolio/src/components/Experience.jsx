import ExperienceCard from "./ExperienceCard";
import Tag from "./Tag";

const Experience = () => {
  const experiences = [
    {
      title: "Sr. Frontend Developer",
      details: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      startDate: "Nov 2021",
      endDate: "Present",
    },
    {
      title: "Team Lead",
      details: [
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      startDate: "Jul 2017",
      endDate: "Oct 2021",
    },
    {
      title: "Full Stack Developer",
      details: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      startDate: "Dec 2015",
      endDate: "May 2017",
    },
  ];
  return (
    <div
      id="experience"
      className="bg-gray-50 dark:bg-gray-900 px-4 py-16
                                      xl:px-20 xl:py-24"
    >
      <div
        className="flex flex-col gap-6
                      xl:px-8 xl:gap-12"
      >
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <Tag text="Experience" />
          </div>
          <div className="text-center text-lg">
            <h2>Here is a quick summary of my most recent experiences:</h2>
          </div>
        </div>
        {experiences.map((experience, i) => {
          return <ExperienceCard key={"experience-" + i} data={experience} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
