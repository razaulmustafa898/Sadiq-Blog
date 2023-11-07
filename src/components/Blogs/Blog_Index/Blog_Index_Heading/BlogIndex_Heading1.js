import React from 'react';
import { FontWeight } from '../../../constants/Fonts';
import { Colors } from '../../../constants/Color';

const BlogIndex_Heading1 = (prop) => {

    const BlogIndexHeading1 = {
        fontWeight: FontWeight['Paragraph 3 Semi Bold'],
        color: Colors.Blue,
    }

    return (
        <>
            <div className="blog_index_heading1 ">
                <input type='text' className="py-1 px-2 outline-none text-base not-italic leading-6 "
                    style={BlogIndexHeading1} value={prop.blog_index_heading1} />
            </div>
        </>
    )
}

export default BlogIndex_Heading1;