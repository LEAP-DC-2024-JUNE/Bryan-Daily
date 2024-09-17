import Tag from "./Tag";
import SkillBox from "./SkillBox";
import useHasMounted from "./useHasMounted";

const Skills = ({ theme }) => {
  let hasMounted = useHasMounted();
  const skills = [
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Nest.js",
    "Socket.io",
    "PostgreSQL",
    "MongoDB",
    "Sass/Scss",
    "Tailwindcss",
    "Figma",
    "Cypress",
    "Storybook",
    "Git",
  ];
  return (
    <div
      className="px-4 py-16
                    xl:px-20 xl:py-24"
    >
      <div
        className="flex flex-col gap-6
                      xl:gap-12 xl:px-8"
      >
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <Tag text="Skills" />
          </div>
          <div className="text-center">
            <h2 className="font-normal text-lg xl:text-xl text-gray-600 dark:text-gray-300">
              The skills, tools and technologies I am really good at:
            </h2>
          </div>
        </div>
        <div
          className="grid grid-cols-3 gap-12
                        xl:grid-cols-8"
        >
          {skills.map((skill, i) => {
            return (
              <div key={i}>
                {hasMounted && <SkillBox data={skill} theme={theme} />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
