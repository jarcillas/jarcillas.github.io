type ProjectItemType = {
  title: string;
  description?: string;
  url?: string;
  screenshot?: string; // URL or path to screenshot image
};

const ProjectItem = ({ item }: { item: ProjectItemType }) => {
  return (
    <div className="min-w-[260px] max-w-full lg:max-w-xs flex-shrink-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-md p-4 lg:p-6 group hover:shadow-lg border border-gray-700 flex flex-col justify-between">
      <div className="group-hover:scale-[103%] transition-transform flex flex-row lg:flex-col items-center lg:items-start gap-4">
        <div className="flex-shrink-0 flex flex-row items-center">
          <img
            src={item.screenshot}
            alt={`Screenshot of ${item.title}`}
            className="w-[200px] lg:w-full h-36 object-cover rounded-md mb-0 lg:mb-4 border border-gray-600 bg-gray-900"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <a
            href={item?.url || "/"}
            className="text-lg font-semibold text-white hover:text-primary transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
          {item.description && (
            <p className="mt-2 text-gray-300 text-xs">{item.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProjectItem };
export type { ProjectItemType };
