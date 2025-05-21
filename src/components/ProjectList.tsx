import { ProjectItemType } from "./ProjectItem";
import { ProjectItem } from "./ProjectItem";

const ProjectList = ({ list }: { list: ProjectItemType[] }) => {
  return (
    <div className="flex flex-row gap-6 items-stretch w-full max-w-5xl mx-auto mt-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
      {list.map((item, idx) => (
        <ProjectItem key={item.title + idx} item={item} />
      ))}
    </div>
  );
};

export { ProjectList };
