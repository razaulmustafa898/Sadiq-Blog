import React from 'react';

const BlogContainer_image = () => {
    return (
        <>
            {/* <div className="container_image  flex  justify-center items-center pt-3 pb-3 pr-4 pl-4  emax-sm:absolute max-sm:m-0 max-sm:p-0 max-sm:h-auto ">
                <img src="https://picsum.photos/500/350" className="image_learn_coding max-sm:w-full   max-sm:h-auto  " />
            </div> */}
            <div className="container_image  flex  justify-center items-center pt-3 pb-3 pr-4 pl-4  emax-sm:absolute max-sm:m-0 max-sm:p-0 max-sm:h-auto sm:w-1/2 ">
                <div className="bg-blog-banner bg-cover bg-center w-111 h-111  max-sm:hidden " />
                <img src="./images/blog_banner_img.png" className="max-sm:w-full max-sm:h-auto sm:hidden  " />
            </div>
        </>
    )
}

export default BlogContainer_image;