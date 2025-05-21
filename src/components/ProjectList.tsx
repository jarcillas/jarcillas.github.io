import { ProjectItemType } from "./ProjectItem";
import { ProjectItem } from "./ProjectItem";

const ProjectList = ({ list }: { list: ProjectItemType[] }) => {
  return (
    <div
      className="flex flex-row gap-6 items-stretch w-full max-w-5xl mx-auto mt-8 overflow-x-auto pb-4 project-list-scrollbar font-mono"
      style={{
        WebkitOverflowScrolling: "touch",
      }}
      onWheel={(e) => {
        if (e.deltaY !== 0) {
          e.currentTarget.scrollLeft += e.deltaY;
        }
      }}
    >
      {list.map((item, idx) => (
        <ProjectItem key={item.title + idx} item={item} />
      ))}
    </div>
  );
};

export { ProjectList };
