import React from 'react';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    const handelContact = event => {
        event.preventDefault();
    }
    return (
        <section style={{
            background: `url(${appointment})`
        }}>
            <div className='text-center mt-36'>
                <div className='pt-16 py-12'>
                    <h3 className='text-xl text-primary font-bold'>Contact Us</h3>
                    <h2 className='text-3xl text-white pt-4'>Stay connected with us</h2>
                </div>
                <div className=' pb-16'>
                    <form onSubmit={handelContact} className='flex flex-col items-center'>
                        <input type="text" placeholder="Email Address" className="input w-full max-w-xs mb-5" />
                        <input type="text" placeholder="Subject" className="input w-full max-w-xs mb-5" />
                        <textarea type="text" placeholder="Your message" className="input w-full h-32 max-w-xs mb-5" />
                        <input type="submit" value="Submit" className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-28" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;