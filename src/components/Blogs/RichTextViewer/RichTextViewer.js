import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

class RichTextViewer extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.contentParagraph}</p>
            </div>
            // <ReactQuill
            //     value={this.props.contentParagraph} // Pass content as a prop
            //     readOnly={true} // Set the editor to read-only mode
            //     theme="snow" // You can change the theme if needed
            // />
        );
    }
}

export default RichTextViewer;