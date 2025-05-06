type ProjectItemType = {
  title: string;
  description?: string;
  url?: string;
};

const ProjectItem = ({ item }: { item: ProjectItemType }) => {
  return (
    <div className="w-full">
      <a href={item?.url || "/"}>{item.title}</a>
    </div>
  );
};

export { ProjectItem };
export type { ProjectItemType };
