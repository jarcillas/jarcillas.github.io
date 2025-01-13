import { ProjectItemType } from "./ProjectItem";
import { ProjectItem } from "./ProjectItem";

const ProjectList = ({ list }: { list: ProjectItemType[] }) => {
  return (
    <div className="flex flex-col items-start">
      {list.map((item) => (
        <ProjectItem item={item} />
      ))}
    </div>
  );
};

export { ProjectList };
