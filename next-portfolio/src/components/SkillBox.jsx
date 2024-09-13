import SkillsImages from "@/icons/SkillsImages";

const SkillBox = (props) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <SkillsImages img={props.data} theme={props.theme} />
      <h2 className="dark:text-gray-300">{props.data}</h2>
    </div>
  );
};

export default SkillBox;
