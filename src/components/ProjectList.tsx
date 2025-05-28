import { ProjectItemType } from "./ProjectItem";
import { ProjectItem } from "./ProjectItem";

const ProjectList = ({ list }: { list: ProjectItemType[] }) => {
  return (
    <div className="h-full w-full">
      <h2 className="text-xl text-primary font-mono">projects</h2>
      <div
        className="flex flex-col lg:flex-row gap-6 items-stretch w-full max-w-5xl mx-auto mt-8 overflow-x-auto pb-4 project-list-scrollbar font-mono"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
        onWheel={(e) => {
          if (e.deltaY !== 0) {
            e.currentTarget.scrollLeft += e.deltaY / 2;
          }
        }}
      >
        {list.map((item, idx) => (
          <ProjectItem key={item.title + idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export { ProjectList };
