import React from 'react'

const Blog_Title = ( {heading, subHeading, headingStyle }) => {
    return (
        <>
            <div className={`blog_title ${headingStyle} `}>
                <h2 className="text-3xl font-semibold mb-4  max-md:text-xl">{heading}</h2>
                <div className=' text-gray-600 max-md:text-xs'>{subHeading}</div>
            </div>
        </>
    )
}

export default Blog_Title;