import React from "react";

interface CategoryButtonsProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`${
            activeCategory === category ? "text-blue-700 border-blue-600 bg-white" : "text-gray-900 border-gray-200 bg-white"
          } hover:text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
