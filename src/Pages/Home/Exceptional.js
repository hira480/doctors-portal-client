import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Exceptional = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                    <img src={treatment} className="max-w-sm w-full lg:ml-44 rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='lg:pr-32'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;