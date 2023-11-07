import React from 'react'
import { skfsal } from './HRT';
import App from './HTML_RICH_TEXT';
const htmlContent = skfsal;
const RichText = () => {
    return (
        <>
            <div className="rich_text_html flex flex-col items-start  gap-5 max-md:px-4 max-sm:mt-16 ">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                <App />
            </div>
        </>
    )
}

export default RichText


// import React from 'react';
// const RichText = ({ htmlContent }) => {
//   return (
//     <>
//       <div className="rich_text_html flex flex-col items-start gap-5 max-md:px-4 max-sm:mt-16">
//         <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//       </div>
//     </>
//   );
// };
// export default RichText;