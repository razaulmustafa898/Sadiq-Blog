import React from 'react';

const RenderedContent = ({ content }) => {
  return (
    <div className="p-0 container" dangerouslySetInnerHTML={{ __html: content }}></div>
  );
};

export default RenderedContent;
