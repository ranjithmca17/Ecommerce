import React from 'react'
import blogData from "../../data/blogs.json";

const Blogs = () => {
  return (
<section className='section__continer blog__container'>
<h2 className='section__header'>Latest From Blogs</h2>
<p className='section__subheader'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis optio reiciendis sunt! 
    Culpa obcaecati amet similique autem natus assumenda officiis.</p>
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {
            blogData.map((blog,index)=>(
                <div className="blog__card cursor-pointer hover:scale-105 transition-all duration-300" key={index}>
                    <img src={blog.imageUrl} alt="blogimage" />
                    <div className="blog__card__content">
                        <h6>{blog.subtitle}</h6>
                        <h4>{blog.title}</h4>
                        <p>{blog.date}</p>
                    </div>
                </div>
            ))
        }
    </div>
</section>
  )
}

export default Blogs
