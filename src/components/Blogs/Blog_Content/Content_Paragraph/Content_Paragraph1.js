import React from 'react'
import Content_Paragraph from './Content_Paragraph';
import RichTextViewer from '../../RichTextViewer/RichTextViewer';

// const lorem_blog = `<!DOCTYPE html>
// <html>
// <head>
//   <title>Sample Blog Post</title>
// </head>
// <body>

// <h1>My Awesome Blog Post</h1>

// <p>This is an introductory paragraph for my blog post. I'm going to include some text, images, and quotes in this post.</p>

// <h2>Adding an Image</h2>

// <p>Here's an image of a beautiful sunset:</p>
// <img src="sunset.jpg" alt="Sunset over the ocean">

// <h2>Including a Quote</h2>

// <blockquote>
//   <p>Success is not final, failure is not fatal: It is the courage to continue that counts.</p>
//   <footer>— Winston Churchill</footer>
// </blockquote>

// <h2>Another Image</h2>

// <p>Here's another image, this time of a cute puppy:</p>
// <img src="puppy.jpg" alt="Adorable Puppy">

// <p>That's it for my blog post! I hope you enjoyed the content.</p>

// </body>
// </html>
// `;


const Content_Paragraph1 = () => {
    return (
        <>
            <RichTextViewer contentParagraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non odit nemo eaque praesentium corporis, minima harum dolore aspernatur ea libero porro quae assumenda unde. Animi temporibus id eius optio. Impedit!" />
        </>
    )
}

export default Content_Paragraph1;