import React, { useState } from 'react'
import { useCategories } from '../../hooks/useCategories';
import './CategorySelectComponent.css'

export default function CategorySelectComponent({ onCategoryChange , tab}) {
    const [activeTab, setActiveTab] = useState(tab);
    const { data: dataCategories, isLoadingCategories, errorCategories } = useCategories();
    
    if (isLoadingCategories) return <div>Loading category...</div>;
    if (errorCategories) return <div>Error fetching category</div>;

    return (
        <ul className="es-tabs d-flex align-items-center">
            {dataCategories?.map((category, index) => (
                <li className={`es-tab border1 text-18 ${activeTab == category.id ? 'es-active-tab' : ""}`}  key={category.id}
                    onClick={() =>  { onCategoryChange(category.id); setActiveTab(category.id); }}>
                    <span>{category.name}</span> 
                </li>
            ))}
        </ul>
  )
}
