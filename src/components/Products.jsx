/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Card from './Card';
import Filter from './Filter';
import Loading from './Loading';


const Products = () => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showHideFilter, SetShowHideFilter] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            console.log(data);
            setProductsData(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='products-container'>
            <div className="top">
                <div className="border"></div>
                <div className='tag'>
                    <div className='filter-name'>
                        <p>3425 ITEMS</p>
                        <p onClick={() => SetShowHideFilter(!showHideFilter)} style={{ cursor: 'pointer', borderBottom: '1px solid gray' }}>
                            {showHideFilter ? "HIDE FILTER" : "SHOW FILTER"}</p>
                    </div>
                    <select style={{ cursor: 'pointer' }}>
                        <option value="">RECOMMENDED</option>
                    </select>
                </div>
                <div className="border"></div>
            </div>
            <div className="mobile-top">
                <div className="border"></div>
                <div className='filters'>
                    <p>FILTER</p>
                    <select>
                        <option value="">RECOMMENDED</option>
                    </select>
                </div>
                <div className="border"></div>
            </div>
            <div className="bottom">
                {
                    showHideFilter
                        ? <div className={`filter ${showHideFilter ? "" : "full-width"}`}>
                            <Filter />
                        </div>

                        : (<></>)
                }
                <div className={`product-item ${showHideFilter ? "" : "full-width"}`}>
                    {
                        loading
                            ? <Loading />
                            : (
                                productsData.map((product) => (
                                    <div key={product.id} className='card'>
                                        <Card data={product} />
                                    </div>
                                ))
                            )
                    }
                </div>
            </div>

        </div>
    )
}

export default Products
