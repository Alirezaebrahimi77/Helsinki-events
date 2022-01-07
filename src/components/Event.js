import React from 'react'

const Event = ({event}) => {
    
    return (
        <div className='w-full bg-white rounded-xl shadow-md cursor-pointer'>
            <div className='w-[280px] h-[150px] rounded-xl overflow-hidden'>
                <img src={event.description.images && event.description.images[0].url} alt={event.name.fi} />

            </div>
            <div className='px-2 py-4'>
            <p className='text-left text-md font-semibold'>{event.name.fi}</p>
            <p className='text-left text-sm text-gray-500'>{`${event.event_dates.starting_day.substring(0, 10)} - ${event.event_dates.ending_day.substring(0, 10)}`}</p>

            </div>
            
        </div>
    )
}

export default Event
