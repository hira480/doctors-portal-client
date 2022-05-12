import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg sm:max-w-sm bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-medium text-center text-secondary">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-xs text-red-500'>No Slots Available, Try another date.</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div className="card-actions justify-center">
                    <button disabled={slots.length === 0} className="btn btn-secondary text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;