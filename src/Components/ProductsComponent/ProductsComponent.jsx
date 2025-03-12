import  React , { useState } from 'react'
import ProductComponent from '../ProductComponent/ProductComponent.jsx';
import { useProducts } from '../../hooks/useProducts';
import FadeLoader  from "react-spinners/FadeLoader";



export default function ProductsComponent({ tab }) {
    let color = "#c2b4a3";

    const { data: data, isLoading, error } = useProducts({categoryId: tab, offset: 0, limit: 6});

    if (isLoading)
      return (
        <div className='AA-spinner d-flex flex-wrap justify-content-center'>
            <FadeLoader
            color={color}
            loading={isLoading}
            size={200}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
        </div>
      );
      
    if (error) return <div>Error fetching posts</div>;


    return (
        <div className="es-products d-flex flex-wrap">
            {data?.map((product, index) => (
            <ProductComponent
                key={product.id}
                id={index}
                img={product.images[0]}
                title={product.title}
                category={product.category.name}
                fit={product.price}
                price={product.price}
            />
            ))}
        </div>
    )
}
