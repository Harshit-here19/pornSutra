import { useState } from "react";

const Tag = (props) => {
  const tags = props.tags;

  const [showTags, setShowTags] = useState(false);

  return (
    <div>
      <h2
        className="flex flex-row flex-nowrap items-center mt-10"
        onClick={() => setShowTags(!showTags)}
      >
        <span className="flex-grow block border-t border-black"></span>
        <span className="flex-none block mx-4 px-4 py-2.5 text-md rounded leading-none font-medium bg-black text-white">
          Tags
        </span>
        <span className="flex-grow block border-t border-black"></span>
      </h2>

      {showTags && (
        <div className="flex justify-center flex-wrap gap-2 p-4 max-w-sm mx-auto my-4 text-sm">
          {tags.map((tag) => (
            <button
              key={tag}
              className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300"
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tag;
