import React from 'react'

const NewFolder = () => {
    return (
        <>
            <div className="new_folder flex flex-col gap-5">
                <div className="column_1 flex gap-5 justify-center">
                    <img src="https://picsum.photos/300/200" className='rounded-md  cursor-pointer' />
                    <img src="https://picsum.photos/300/200/?blur" className='rounded-md cursor-pointer' />
                    <img src="https://picsum.photos/300/200/?blur=2" className='rounded-md  cursor-pointer' />
                </div>
                <div className="column_2 flex gap-5 justify-center">
                    <img src="https://picsum.photos/300/200.jpg" className='rounded-md  cursor-pointer' />
                    <img src="https://picsum.photos/300/200.webp" className='rounded-md cursor-pointer' />
                    <img src="https://picsum.photos/300/200.jpg/?blur" className='rounded-md  cursor-pointer' />
                </div>
                <div className="column_2 flex gap-5 justify-center">
                    <img src="https://picsum.photos/300/200.jpg/?blur=2" className='rounded-md  cursor-pointer' />
                    <img src="https://picsum.photos/300/200.webp/?blur" className='rounded-md cursor-pointer' />
                    <img src="https://picsum.photos/300/200.webp/?blur=2" className='rounded-md  cursor-pointer' />
                </div>

            </div>
        </>
    )
}

export default NewFolder;