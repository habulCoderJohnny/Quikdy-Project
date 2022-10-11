import React from 'react';
import Rating from './Rating';
import { FaQuoteLeft } from 'react-icons/fa';


// import img2 from '../../assets/images/profile.png';
// import { faQuoteLeft, faQuoteRightAlt } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ReviewCard = ({review}) => {
    
    const {name, body, img, role,} = review;
    return (
        <div className="card lg:max-w-lg bordered">
            <div className="card-body items-center text-justify">


                <p> <FaQuoteLeft size="4rem" color='skyblue'/> {body}  
                
                </p> 

                <div className="avatar mt-4 ">
                    <div className="w-32 rounded-full">
                        {img ? <img src={img} alt=""/>:
                        <img src="" alt=""/>}
                    </div>
                </div>
                <div className='text-center'>
                    <h4 className="text-xl">{name}</h4>
                    <p className='text-lg font-bold'>{role}</p>
                    <Rating/> 
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
