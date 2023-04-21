import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

type Props = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const NewsFilter = ({ categories, selectedCategory, onSelect }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const transitions = useTransition(isOpen, {
    from: { opacity: 0, transform: "translateY(-10px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(-10px)" },
  });

  return (
    <div className="relative mb-8">
      <div
        className="w-[25%] border-2 border-red rounded-md shadow-md py-2 px-3 cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-3">
          <span className="text-gray-600 font-medium">Filter by category:</span>
          <span className="text-gray-800 font-medium capitalize">
            {selectedCategory || "All"}
          </span>
        </div>
        <span className="ml-1 text-gray-500">
          <svg
            className={`h-4 w-4 transform transition-transform duration-300 ${
              isOpen ? "rotate-[-90deg]" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 1 0 1.414-1.414L4.414 11H16a1 1 0 0 0 0-2H4.414l1.293-1.293a1 1 0 0 0 0-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      {transitions(
        (style, item) =>
          item && (
            <animated.div
              className="w-full md:w-fit bg-red rounded-md shadow-md py-2 absolute z-10 top-14 left-0"
              style={style}
            >
              <ul>
                {categories.map((category) => (
                  <li
                    key={category}
                    className={`py-1 px-3 cursor-pointer capitalize ${
                      selectedCategory === category
                        ? "font-bold bg-gray-200"
                        : ""
                    }`}
                    onClick={() => {
                      setIsOpen(false);
                      onSelect(category);
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </animated.div>
          )
      )}
    </div>
  );
};

export default NewsFilter;
