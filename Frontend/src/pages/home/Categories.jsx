import React from 'react'
import category1 from "../../assets/category-1.jpg";
import category2 from "../../assets/category-2.jpg";
import category3 from "../../assets/category-3.jpg";
import category4 from "../../assets/category-4.jpg";
import { Link } from 'react-router-dom';

const categories=[
  {name:"Accessories",path:'accessories',image:category1},
  {name:"Dress Collection",path:'dress',image:category2},
  {name:"jewellery",path:'jewellery',image:category3},
  {name:"Cosmetics",path:'cosmetics',image:category4},
]

export default function Categories() {
  return (
    <div>
<div className="product__grid">

{
  categories.map((categorie,index)=>(
<Link to={`/categories/${categorie.path}`} className='categories__card' key={index}>
<img src={categorie.image} alt={categorie.name} />
<h4>{categorie.name}</h4>
</Link>
  )

  )
}
</div>
    </div>
  )
}
