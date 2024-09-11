import { Cypress, Expressjs, Figma, Git, Javascript, MongoDB, Nestjs, Nextjs, Nodejs, PostgreSQL, React, Sass, Socketio, Storybook, Tailwindcss, Typescript } from "@/icons/SkillsImages";
import Tag from "./Tag";
import SkillBox from "./SkillBox";

const Skills = ({ theme } ) => {
  const skills = [
    {
      title: "Javascript",
      picture: <Javascript />
    },
    {
      title: "Typescript",
      picture: <Typescript />
    },
    {
      title: "React",
      picture: <React />
    },
    {
      title: "Next.js",
      picture: <Nextjs />
    },
    {
      title: "Node.js",
      picture: <Nodejs />
    },
    {
      title: "Express.js",
      picture: <Expressjs theme={theme}/>
    },
    {
      title: "Nest.js",
      picture: <Nestjs />
    },
    {
      title: "Socket.io",
      picture: <Socketio theme={theme}/>
    },
    {
      title: "PostgreSQL",
      picture: <PostgreSQL />
    },
    {
      title: "MongoDB",
      picture: <MongoDB />
    },
    {
      title: "Sass/Scss",
      picture: <Sass />
    },
    {
      title: "Tailwindcss",
      picture: <Tailwindcss />
    },
    {
      title: "Figma",
      picture: <Figma />
    },
    {
      title: "Cypress",
      picture: <Cypress theme={theme}/>
    },
    {
      title: "Storybook",
      picture: <Storybook />
    },
    {
      title: "Git",
      picture: <Git />
    }
  ]
  return (
    <div className="px-20 py-24">
      <div className="px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <Tag text="Skills" />
          </div>
          <div className="text-center">
            <h2 className="font-normal text-xl text-gray-600 dark:text-gray-300">The skills, tools and technologies I am really good at:</h2>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-12
                        xl:grid-cols-8">{skills.map((skill) => {
          return <SkillBox data={skill} />;
        })}</div>
      </div>
    </div>
  );
}

export default Skills;