import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1DwyJAH8q8uEVYs1gJMDYrFovUV3aBm6L9C0drCV12ILnYk8MMrpWWuZaSTLf9koM1xQAFngWiQ3mgEs8B7BCl00Zhc8MRxP');

const Payment = () => {
    const { id } = useParams();
    const url = `https://desolate-springs-91390.herokuapp.com/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=''>

            <div className="card w-50 max-w-lg bg-base-100 shadow-xl my-12 ">
                <div className="card-body">
                    <p className='text-success font-bold'>Hello, {appointment.patientName}</p>
                    <h2 className="card-title">Please Pay for {appointment.treatment}</h2>
                    <p>Your Appointment <span className='text-orange-700 font-medium'>{appointment.date}</span> at <span className='text-orange-700 font-medium'>{appointment.slot}</span> is Confirmed!!</p>
                    <p>Please Pay : ${appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-lg shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;