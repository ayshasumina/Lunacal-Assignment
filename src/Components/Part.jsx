import React from 'react'
import TabWidget from './TabWidget';
import Hr from './Hr'
import GalleryWidget from './GalleryWidget';

const Part = () => {
    return (
        <div
            className="flex-col w-[680px] h-[520px] lg:ml-[50px] mt-[50px] lg:mt-0 mb-[90px] lg:mb-[37px]"
        >
            <TabWidget />
            <Hr />
            <GalleryWidget />
            <Hr />
        </div>
    )
}

export default Part
