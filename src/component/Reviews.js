import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('Review.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[]);
    return (
        <div className='mx-10'>
             <h1 className="text-4xl font-bold uppercase text-center">Success Stories</h1>
             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                  reviews.map(review => <ReviewCard key={review._id}review={review}></ReviewCard>
                  )
                }

            </div>
        </div>
    );
};

export default Reviews;