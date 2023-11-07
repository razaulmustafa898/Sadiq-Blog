import { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import Blogmail_Section from '../Blogmail_Section/Blogmail_Section';
import HTMLReactParser from 'html-react-parser';

const Blog_Editor = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    return (
        <>
            <div
                className="blog_editor w-full flex justify-center items-center  container gap-5 max-md:flex-col  ">
                <div
                    className="sub_blog_editor p-3 w-full bg-white mt-2 flex flex-col gap-3  ">
                    <div className='font-bold text-xl'>What going in your mind?</div>
                    <div className=' flex flex-col'>
                        <label htmlFor="title">Post title</label>
                        <input type="text" placeholder="Enter Here"
                            className="border border-gray-300 rounded-none p-2 outline-blue-300"
                        />
                    </div>
                    <div className=' flex flex-col'>
                        <label htmlFor="title">Post Content</label>
                        {/* <textarea type="textarea" placeholder="Enter Here"
                            className="border border-gray-300 rounded-none p-2 outline-blue-300"
                        /> */}
                        <JoditEditor
                            ref={editor}
                            value={content}
                            onChange={newContent => setContent(newContent)}
                        // config={config}
                        />
                    </div>
                    <div className=' flex flex-col'>
                        <label htmlFor="title">Post Category</label>
                        <select name="" id=""
                            className='border border-gray-300 rounded-none p-2 outline-blue-300'>
                            <option >Select</option>
                            <option >Select</option>
                            <option >Select</option>
                        </select>
                        {/* <input type="text"
                            className="border border-gray-300 rounded-none p-2 outline-blue-300"
                        /> */}
                    </div>
                    <div className=' flex justify-center gap-4 max-sm:flex-col'>
                        <button className=" ease-in-out duration-300 bg-blue-500 text-white px-4 py-2 rounded-none hover:bg-blue-700 focus:outline-none select-none">Create Post</button>
                        <button className="ease-in-out duration-300 bg-red-500 text-white px-4 py-2 rounded-none hover:bg-red-700 focus:outline-none select-none" >Reset Content</button>
                    </div>
                    <div className=" p-0 container">{HTMLReactParser(content)}</div>
                </div>
                <Blogmail_Section />
            </div>
        </>
    )
}

export default Blog_Editor;