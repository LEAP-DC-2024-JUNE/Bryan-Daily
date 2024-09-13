import Tag from "./Tag";
import WorkCard from "./WorkCard";

const Work = () => {
  const workArr = [
    {
      title: "UBCab",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      tags: [
        "React",
        "Next.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
      picture: "work-card-1.png",
      reverse: false,
    },
    {
      title: "Mentorhub",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      tags: [
        "React",
        "Next.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
      picture: "work-card-2.png",
      reverse: true,
    },
    {
      title: "iToim",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      tags: [
        "React",
        "Next.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
      picture: "work-card-3.png",
      reverse: false,
    },
  ];

  return (
    <div
      id="work"
      className="px-4 py-16
                              xl:px-20 xl:py-24"
    >
      <div
        className="flex flex-col gap-4
                      xl:px-8 xl:gap-12"
      >
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <Tag text="Work" />
          </div>
          <div className="text-center text-lg xl:text-xl">
            <p>Some of the noteworthy projects I have built:</p>
          </div>
        </div>
        {workArr.map((card, i) => {
          return <WorkCard key={"card-" + i} data={card} />;
        })}
      </div>
    </div>
  );
};

export default Work;
