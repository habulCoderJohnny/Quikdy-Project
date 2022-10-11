import React from 'react';
import employer from '../assets/employer.png';

const Employer = () => {
    return (
        <div className="hero min-h-screen mx-10 my-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src={employer} className="max-w-lg rounded-lg " />
                <div>
                    <h1 className="text-4xl font-bold uppercase">Top Employers</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-secondary text-white">View More</button>
                </div>
            </div>
        </div>
    );
};

export default Employer;