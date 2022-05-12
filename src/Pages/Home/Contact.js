import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}>
            <div className='text-center mt-36'>
                <div className='pt-16 py-12'>
                    <h3 className='text-xl text-primary font-bold'>Contact Us</h3>
                    <h2 className='text-3xl text-white pt-4'>Stay connected with us</h2>
                </div>
                <div className='flex flex-col items-center pb-16'>
                    <input type="text" placeholder="Email Address" className="input w-full max-w-xs mb-5" />
                    <input type="text" placeholder="Subject" className="input w-full max-w-xs mb-5" />
                    <textarea type="text" placeholder="Your message" className="input w-full h-32 max-w-xs mb-5" />
                    <PrimaryButton><span className='px-5'>Submit</span></PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Contact;