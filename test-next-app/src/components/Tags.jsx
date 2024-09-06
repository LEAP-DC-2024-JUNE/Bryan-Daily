import Tag from "@/components/Tag";

const Tags = () => {
  let tags = ["Mountain", "Beaches", "Birds", "Food"];

  return (
    <div className="flex gap-6">
      {tags.map( (tag) => <Tag text={tag}/> )}
    </div>
  );
}

export default Tags;