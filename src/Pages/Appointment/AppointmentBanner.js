import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import bg from '../../assets/images/bg.png';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div style={{
            background: `url(${bg})`
        }} class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm w-full rounded-lg shadow-2xl" alt='Dentist Chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>You Have Selected : {format(date, 'PP')}</p>
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;