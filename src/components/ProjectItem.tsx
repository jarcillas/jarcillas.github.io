type ProjectItemType = {
  title: string;
  description?: string;
  url?: string;
  screenshot?: string; // URL or path to screenshot image
};

const ProjectItem = ({ item }: { item: ProjectItemType }) => {
  return (
    <div className="min-w-[260px] max-w-xs flex-shrink-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-md p-6 transition-transform hover:scale-105 hover:shadow-lg border border-gray-700 flex flex-col justify-between">
      {item.screenshot && (
        <img
          src={item.screenshot}
          alt={`Screenshot of ${item.title}`}
          className="w-full h-36 object-cover rounded-md mb-4 border border-gray-600 bg-gray-900"
        />
      )}
      <a
        href={item?.url || "/"}
        className="text-lg font-semibold text-white hover:text-blue-400 transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.title}
      </a>
      {item.description && (
        <p className="mt-2 text-gray-300 text-sm">{item.description}</p>
      )}
    </div>
  );
};

export { ProjectItem };
export type { ProjectItemType };
