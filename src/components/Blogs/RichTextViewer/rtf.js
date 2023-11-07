import React from 'react';
import { RTFDocument } from 'rtf.js';

const rtf = () => {
  const rtfDocument = new RTFDocument();
  // Add content to the RTF document
  rtfDocument.text('Hello, RTF!');

  // Export the RTF content as a string
  const rtfString = rtfDocument.build();
  return (
    <>
      <div>
        <pre>{rtfString}</pre>
      </div>
    </>
  );
}

export default rtf;