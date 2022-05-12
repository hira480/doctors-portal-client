import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover',
        }} className="p-12">
            <div className='footer lg:px-12'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='' className="link link-hover">Emergency Checkup</Link>
                    <Link to='' className="link link-hover">Monthly Checkup</Link>
                    <Link to='' className="link link-hover">Weekly Checkup</Link>
                    <Link to='' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to='' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='' className="link link-hover">Cavity Filling</Link>
                    <Link to='' className="link link-hover">Teath Whitening</Link>
                    <Link to='' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='' className="link link-hover">Terms of use</Link>
                    <Link to='' className="link link-hover">Privacy policy</Link>
                    <Link to='' className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='mt-10 text-center'>
                <p>Copyright © 2022 - All right reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;