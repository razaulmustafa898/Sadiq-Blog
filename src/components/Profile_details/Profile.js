import React from 'react';
import { Colors } from '../../components/constants/Color';
import { FontWeight } from '../../components/constants/Fonts';

const Profile = () => {

    const profile_details = {
        color: Colors.Black
    }

    const profile_name = {
        fontWeight: FontWeight['Paragraph 3 Semi Bold'],
    }

    const profile_date = {
        fontWeight: FontWeight['Paragraph 4'],
    }

    return (
        <>
            <div className="profile flex gap-3     h-full    items-end">
                <img className="profile_image w-14  max-xl:w-12   max-md:w-10" src="./images/profile_img.svg" />
                <div style={profile_details} className="profile_details mb-1.5 max-sm:m-0 ">
                    <div style={profile_name} className="profile_name leading-normal not-italic text-base">Sadiq</div>
                    <div style={profile_date} className="profile_date leading-normal not-italic capitalize flex   text-sm   gap-2      max-xl:text-ry           "  >
                        Jan 10, 2022
                        <div className='profile_point'>•</div>
                        <div className='profile_time'> 3 min read</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;