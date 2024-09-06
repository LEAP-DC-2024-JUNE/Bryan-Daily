const SkillBox = ({ data }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      {data.picture}
      <h2>{data.title}</h2>
    </div>
  );
}

export default SkillBox;