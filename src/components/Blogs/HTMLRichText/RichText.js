import React from 'react'
const htmlContent = `<div>
<div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque nihil aliquid atque voluptates? Nesciunt fugiat et quas ab illum consectetur atque recusandae? Aspernatur alias sed unde! Voluptatem, cumque similique?</div>
<img src="https://picsum.photos/200/300" alt="" />
</div>`;
const RichText = () => {
    return (
        <>
            <div className="rich_text_html flex flex-col items-start  gap-5 max-md:px-4 max-sm:mt-16 ">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
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