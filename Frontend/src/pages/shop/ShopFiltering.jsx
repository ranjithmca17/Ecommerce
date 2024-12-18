import React from 'react';

const ShopFiltering = ({ filter, filterState, setFilterState, clearFilters }) => {
  return (
    <div className="space-y-5 flex-shrink-0">
      <h3 className="text-xl font-semibold">Filters</h3>

      {/* Categories Filter */}
      <div>
        <h4 className="font-medium text-lg">Categories</h4>
        <hr className="my-2" />
        {filter.categories.map((category, i) => (
          <label key={i} className="capitalize cursor-pointer flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              id={`category-${category}`}
              value={category}
              checked={filterState.category === category}
              onChange={(e) => setFilterState({ ...filterState, category: e.target.value })}
              className="form-radio text-blue-500"
            />
            <span>{category}</span>
          </label>
        ))}
      </div>

      {/* Colors Filter */}
      <div>
        <h4 className="font-medium text-lg">Colors</h4>
        <hr className="my-2" />
        {filter.colors.map((color, i) => (
          <label key={i} className="capitalize cursor-pointer flex items-center space-x-2">
            <input
              type="radio"
              name="color"
              id={`color-${color}`}
              value={color}
              checked={filterState.color === color}
              onChange={(e) => setFilterState({ ...filterState, color: e.target.value })}
              className="form-radio text-blue-500"
            />
            <span>{color}</span>
          </label>
        ))}
      </div>

      {/* Pricing Filter */}
      <div>
        <h4 className="font-medium text-lg">Price</h4>
        <hr className="my-2" />
        {filter.priceRanges.map((range, i) => (
          <label key={i} className="capitalize cursor-pointer flex items-center space-x-2">
            <input
              type="radio"
              name="priceRange"
              id={`priceRange-${range.value}`}
              value={range.value} // Set the value here to be 'under50', '50-100', etc.
              checked={filterState.priceRange === range.value}
              onChange={(e) => setFilterState({ ...filterState, priceRange: e.target.value })}
              className="form-radio text-blue-500"
            />
            <span>{range.label}</span>
          </label>
        ))}
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={clearFilters}
        className="bg-primary py-1 px-4 text-white rounded"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default ShopFiltering;
