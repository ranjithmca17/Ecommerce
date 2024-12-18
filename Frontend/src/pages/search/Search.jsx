
import React, { useState } from 'react';
import products from "../../data/products.json";
import ProductsCards from '../shop/ProductsCards';

const Search = () => {
  console.log(products);
  
  const [searchQuery, setSearchQuery] = useState(''); // State for the search input
  const [filteredProducts, setFilteredProducts] = useState(products); // State for filtered products

  const handleSearch = () => {
    const query = searchQuery.toLowerCase(); // Normalize search query

    // Filter products based on name or description match
    const filtered = products.filter((product) => {
      // Check if description exists before filtering
      return (
        product.name.toLowerCase().includes(query) ||
        (product.description && product.description.toLowerCase().includes(query))
      );
    });

    console.log(filtered); // Debugging to check the filtered results
    setFilteredProducts(filtered);
  };

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Search Page</h2>
        <p className="section__subheader">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, omnis!
        </p>
      </section>

      <section className="section__container">
        <div className="w-full mb-12 flex flex-col md:flex-row justify-center gap-4 items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar w-full max-w-4xl p-2 border rounded"
            placeholder="Search for products..."
          />
          <button
            onClick={handleSearch}
            className="search-button w-full md:w-auto py-2 px-8 bg-primary text-white rounded"
          >
            Search
          </button>
        </div>

        {/* Display filtered products */}
        <ProductsCards products={filteredProducts} />
      </section>
    </>
  );
};

export default Search;
