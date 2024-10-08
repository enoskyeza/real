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
            activeCategory === category ? "bg-brand-dark text-white" : "text-gray-900 border-gray-200 bg-gray-100"
          } hover:text-white hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-orange-100 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
