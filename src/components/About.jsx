// import React from 'react';

// const About = () => {
//     return (
//         <section className="py-4 pt-20">
//             <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-2 md:px-0">
//                 <div className="md:w-1/2 h-[300px] flex justify-center items-center">
//                     <img
//                         src="https://media.giphy.com/media/2C6v4QD5d3YOO4YhID/giphy.gif?cid=790b7611as26ym4r2bv7zxgqlqf8pnbkf6h5lgz6fyd33i78&ep=v1_gifs_search&rid=giphy.gif&ct=g"
//                         alt="About-Us"
//                         className="max-w-full max-h-[310px] rounded-full"
//                     />
//                 </div>


//                 <div className="md:w-1/2 mb-6 md:mb-0 ml-5">
//                     <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//                         About Us
//                     </h1>
//                     <p className="text-lg text-gray-700 mb-6 ">
//                     Welcome to Emitech Infosystems Private Limited (EIPL) a leading IT geospatial company at the forefront of innovation in spatial data analysis and visualization. Our team has the expertise of more than 500+ man month experience in IT and geospatial industry. Emitech Infosystems Private Limited is the leading technology startup company with most innovative ideas with the huge variety of product line and services. We are DPIIT certified Start-Up Company from Ministry of Commerce & Industry, Govt. of India, MSME Certified, Govt. of India and ISO 9001: 2015 Certified GIS and Software Development & Services Company. Emitech Infosystems Private Limited headquartered is located in Kolkata with pan India operation and has served business solutions to Government and large corporates in India. We being the leading associate and business partner of ESRI, Trimble, IBM, Indrones, Sophos, Microsoft, Dell, Oracle, Idea Forge & many more propounds principal solutions for Geographical Information System (GIS), Remote Sensing (RS) and all the IT related support to the clients across India.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     )
// }


// export default About;

// import React from 'react';
// import { FaCertificate, FaRocket, FaUsers } from 'react-icons/fa';

// const About = () => {
//     return (
//         <section className="py-16 bg-neutral-50 relative overflow-hidden">
//             {/* Decorative background elements */}
//             <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
//             <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

//             <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
//                 {/* Image Section */}
//                 <div className="lg:w-1/2 relative">
//                     <div className="relative group">
//                         <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl transform rotate-2 scale-105"></div>
//                         <img
//                             src="https://media.giphy.com/media/2C6v4QD5d3YOO4YhID/giphy.gif"
//                             alt="About Us"
//                             className="relative z-10 rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-300"
//                         />
//                     </div>
                    
//                     {/* Achievement Badges */}
//                     <div className="absolute -bottom-8 right-0 flex space-x-4">
//                         <div className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-2">
//                             <FaCertificate className="text-secondary text-2xl" />
//                             <span className="font-semibold text-primary">500+ Projects</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="lg:w-1/2 space-y-8">
//                     <h2 className="text-4xl font-bold text-primary mb-6 relative">
//                         <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
//                             About Emitech
//                         </span>
//                     </h2>

//                     <p className="text-lg text-gray-700 leading-relaxed mb-8">
//                         Welcome to Emitech Infosystems Private Limited (EIPL), a leader in IT geospatial innovation 
//                         specializing in spatial data analysis and visualization. With over <span className="font-semibold text-primary">500+ man-months</span> of 
//                         industry experience, we deliver cutting-edge solutions across government and corporate sectors.
//                     </p>

//                     {/* Key Highlights Grid */}
//                     <div className="grid md:grid-cols-2 gap-6">
//                         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//                             <FaRocket className="text-secondary text-2xl mb-4" />
//                             <h3 className="text-xl font-semibold text-primary mb-2">Certifications</h3>
//                             <p className="text-gray-600">ISO 9001:2015 | DPIIT Certified | MSME Registered</p>
//                         </div>
                        
//                         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//                             <FaUsers className="text-secondary text-2xl mb-4" />
//                             <h3 className="text-xl font-semibold text-primary mb-2">Partnerships</h3>
//                             <p className="text-gray-600">ESRI | Trimble | IBM | Microsoft | Oracle</p>
//                         </div>
//                     </div>

//                     {/* CTA Button */}
//                     <button className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-primary transition-all duration-300 transform hover:scale-105">
//                         View Certifications
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;


import React from 'react';
import { FaCertificate, FaRocket, FaUsers } from 'react-icons/fa';

const About = () => {
    return (
        <section className="py-16 bg-neutral-50 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
                {/* Image Section */}
                <div className="lg:w-1/2 relative">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl transform rotate-2 scale-105"></div>
                        <img
                            src="https://media.giphy.com/media/2C6v4QD5d3YOO4YhID/giphy.gif"
                            alt="About Us"
                            className="relative rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 space-y-8">
                    {/* Invisible heading for accessibility */}
                    <h2 className="sr-only">
                        About Emitech
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Welcome to Emitech Infosystems Private Limited (EIPL), a leader in IT geospatial innovation 
                        specializing in spatial data analysis and visualization. With over <span className="font-semibold text-primary">500+ man-months</span> of 
                        industry experience, we deliver cutting-edge solutions across government and corporate sectors.
                    </p>

                    {/* Key Highlights Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <FaRocket className="text-secondary text-2xl mb-4" />
                            <h3 className="text-xl font-semibold text-primary mb-2">Certifications</h3>
                            <p className="text-gray-600">ISO 9001:2015 | DPIIT Certified | MSME Registered</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <FaUsers className="text-secondary text-2xl mb-4" />
                            <h3 className="text-xl font-semibold text-primary mb-2">Partnerships</h3>
                            <p className="text-gray-600">ESRI | Trimble | IBM | Microsoft | Oracle</p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-primary transition-all duration-300 transform hover:scale-105">
                        View Certifications
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;