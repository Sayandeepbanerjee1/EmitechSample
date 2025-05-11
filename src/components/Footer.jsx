import { faFacebook, faInstagram, faLinkedin, faSkype, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from 'react-router-dom';
import React from "react";

const Footer = () => {
    const navigate = useNavigate();

    // Function to scroll to the top and navigate
    const handleNavigation = (path) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scroll animation
        });
        navigate(path); // Navigate to the target route
    };

    return (
        <footer className="bg-gray-50 text-gray-750 pt-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
                {/* About and Social */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Why Us?</h3>
                    <p className="text-gray-600">
                        Welcome to Emitech Infosystems Private Limited (EIPL) a leading IT geospatial company at the forefront of innovation in spatial data analysis and visualization...
                        <span
                            className="text-blue-500 hover:text-blue-700 transition-colors cursor-pointer"
                            onClick={() => handleNavigation('/about')}
                        >
                            Read More
                        </span>
                    </p>
                    <div className="flex gap-8 mt-4">
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <FontAwesomeIcon icon={faSkype} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Quick Links</h3>
                    <ul className="text-gray-600 space-y-2">
                        <li onClick={() => handleNavigation('/')} className="hover:text-blue-500 cursor-pointer">
                            Home
                        </li>
                        <li onClick={() => handleNavigation('/contact')} className="hover:text-blue-500 cursor-pointer">
                            Enquire Us
                        </li>
                        <li onClick={() => handleNavigation('/client')} className="hover:text-blue-500 cursor-pointer">
                            Our Clients
                        </li>
                        <li onClick={() => handleNavigation('/about')} className="hover:text-blue-500 cursor-pointer">
                            Our Portfolio
                        </li>
                    </ul>
                </div>

                {/* Our Service */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Our Services</h3>
                    <ul className="text-gray-600 space-y-2">
                        <li onClick={() => handleNavigation('/services')} className="hover:text-blue-500 cursor-pointer">
                            Website Development
                        </li>
                        <li onClick={() => handleNavigation('/services')} className="hover:text-blue-500 cursor-pointer">
                            Android Development
                        </li>
                        <li onClick={() => handleNavigation('/services')} className="hover:text-blue-500 cursor-pointer">
                            Software Development
                        </li>
                        <li onClick={() => handleNavigation('/services')} className="hover:text-blue-500 cursor-pointer">
                            Web GIS
                        </li>
                        <li onClick={() => handleNavigation('/services')} className="hover:text-blue-500 cursor-pointer">
                            Aerial & DGPS Survey
                        </li>
                        <li onClick={() => handleNavigation('/services')} className="hover:text-blue-500 cursor-pointer">
                            Vehicle Tracking Solution
                        </li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Contact Us</h3>
                    <div className="space-y-2">
                        <p>
                            <FontAwesomeIcon icon={faGlobe} className="mr-2 text-gray-600" />
                            P 185, Suren Sarkar Road, KOLKATA-700010. INDIA
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-600" />
                            +91-9681191828/ 9830187605
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-600" />
                            admin@emitech-infosystems.com; emitechinfosystems@gmail.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-cyan-900 text-center text-white mt-2 py-2">
                <p>© Copyright 2019-25 emitech-infosystems.com. All rights reserved.</p>
                <p>Designed & Developed by <a href="https://www.linkedin.com/in/soumitra-das-737670247/">Soumitra</a> & <a href="https://www.linkedin.com/in/sayandeep-banerjee-24307a203/">Sayandeep</a></p>
            </div>
        </footer>
    );
};

export default Footer;
