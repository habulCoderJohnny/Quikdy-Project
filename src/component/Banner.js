import React from 'react';
import banner from '../assets/banner.png';

const Banner = () => {
    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-md rounded-lg" />
                <div>
                    <h1 className="text-5xl font-black uppercase">best hired<br />
                        now with <br /> Quikdy</h1>
                    <p className="py-6">Provident cupiditate <br /> voluptatem et in. Quaerat fugiat ut assumenda .</p>

                    {/* <form action="" className=''>
                        <label className="label p-1">
                            <span className="label-text text-xl">Enter Skill</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary max-w-xs " />
                        <label className="label p-1">
                            <span className="label-text text-xl">Enter Skill</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary max-w-xs " />
                        <button type='submit' className="btn btn-secondary text-white text-lg">Search Job</button>
                    </form> */}

                </div>

            </div>
        </div>
    );
};

export default Banner;