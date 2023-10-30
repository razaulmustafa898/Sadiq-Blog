import React, { Component } from 'react';


class Scroll_Down extends Component {

    handleScrollDown = () => {
        window.scrollBy(0, 150);
    };

    render() {
        return (
            <>
                <div className="scroll_down container flex justify-center h-5 w-36 xl:w-96 " onClick={this.handleScrollDown}>
                    <button className="sub_scroll_down w-2 h-2 origin-center rotate-45  border-b-2 border-r-2 border-black	border-solid  max-sm:w-1.5 max-sm:h-1.5 max-sm:border-b-1 max-sm:border-r-1  "
                        onClick={this.handleScrollDown}   ></button>
                </div>
            </>
        )
    }
}

export default Scroll_Down
