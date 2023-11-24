import React from 'react';
import { FontWeight } from '../../../../constants/Fonts';
import { Colors } from '../../../../constants/Color';

const BlogIndex_Content1 = (props) => {


  const BlogIndexContent1 = {
    fontWeight: FontWeight['Paragraph 3 Semi Bold'],
    color: Colors['Dark Grey 2'],
  }

  return (
    <>
      <div className=" blog_index_content1  flex  items-center gap-2  "  >
        <input name='' type='text'  className=' py-1 px-2 outline-none text-base not-italic leading-6'  style={BlogIndexContent1}  value={props.blogindex_content1} />
      </div>
    </>
  )
}

export default BlogIndex_Content1;