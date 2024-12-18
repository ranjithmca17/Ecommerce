import React, { useEffect, useState } from 'react';
import productsData from "../../data/products.json";
import ProductsCards from './ProductsCards';
import ShopFiltering from './ShopFiltering';

const filters = {
    categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
    colors: ["all", "black", "red", "gold", "blue", "silver", "beige", "green"],
    priceRanges: [
        { label: 'under $50', value: 'under50', min: 0, max: 50 },
        { label: '$50 - $100', value: '50-100', min: 50, max: 100 },
        { label: '$100 - $2000', value: '100-2000', min: 100, max: 2000 },
        { label: '$200 and above', value: '200above', min: 200, max: Infinity },
    ]
};

const ShopPage = () => {
    const [products, setProducts] = useState(productsData);
    const [filterState, setFilterState] = useState({
        category: "all",
        color: "all",
        priceRange: "all"
    });

    // // Filter products based on selected filters
    // const applyFilters = () => {
    //     let filteredProducts = productsData;

    //     // Filter by category
    //     if (filterState.category && filterState.category !== "all") {
    //         filteredProducts = filteredProducts.filter(product => product.category === filterState.category);
    //     }

    //     // Filter by color
    //     if (filterState.color && filterState.color !== "all") {
    //         filteredProducts = filteredProducts.filter(product => product.color === filterState.color);
    //     }

    //     // Filter by price range
    //     if (filterState.priceRange && filterState.priceRange !== "all") {
    //         const selectedPriceRange = filters.priceRanges.find(range => range.value === filterState.priceRange);
    //         if (selectedPriceRange) {
    //             filteredProducts = filteredProducts.filter(product => product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max);
    //         }
    //     }

    //     setProducts(filteredProducts);
    // };

    const applyFilters = () => {
        let filteredProducts = productsData;
    
        // Filter by category
        if (filterState.category && filterState.category !== "all") {
            filteredProducts = filteredProducts.filter(product => product.category === filterState.category);
        }
    
        // Filter by color
        if (filterState.color && filterState.color !== "all") {
            filteredProducts = filteredProducts.filter(product => product.color === filterState.color);
        }
    
        // Filter by price range
        if (filterState.priceRange && filterState.priceRange !== "all") {
            const selectedPriceRange = filters.priceRanges.find(range => range.value === filterState.priceRange);
            if (selectedPriceRange) {
                filteredProducts = filteredProducts.filter(product => {
                    // Ensure the price falls within the selected range
                    return product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max;
                });
            }
        }
    
        setProducts(filteredProducts);
    };
    

    useEffect(() => {
        applyFilters();
    }, [filterState]); // Re-run the filter whenever filterState changes

    // Clear all filters
    const clearFilters = () => {
        setFilterState({
            category: "all",
            color: "all",
            priceRange: "all"
        });
    };

    return (
        <>
            <section className="section__container bg-primary-light">
                <h2 className="section__header capitalize">Shop Page</h2>
                <p className="section__subheader">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, omnis!
                </p>
            </section>

            <section className="section__container">
                <div className="flex flex-col md:flex-row md:gap-12 gap-8">
                    {/* Left side: Filters */}
                    <div className="w-full md:w-1/4">
                     <ShopFiltering
                     filter={filters}
                     filterState={filterState}
                     setFilterState={setFilterState}
                     clearFilters={clearFilters}
                     />
                    </div>

                    {/* Right side: Products */}
                    <div className="w-full md:w-3/4">
                        <h3 className="text-xl font-medium mb-4">Products Available</h3>
                        <ProductsCards products={products} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopPage;
