import React, { useState } from 'react';

function MyComponent() {
    const [inputValue, setInputValue] = useState('');
    const [divContent, setDivContent] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setDivContent(value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type something..."
            />

            <div>
                <p>Content entered in the input:</p>
                <div dangerouslySetInnerHTML={{ __html: divContent }} />
            </div>
        </div>
    );
}

export default MyComponent;
