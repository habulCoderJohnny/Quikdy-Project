import React, { useEffect, useState } from 'react';
import Categories from './Category';
 
const RecentJobs = () => {
      const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('Jobs.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[]);
    
    return (
        <div className='text-center mx-10'>
            <h1 className="text-4xl font-bold uppercase">New and Random job</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis fugiat aperiam architecto, corrupti quasi saepe aspernatur quae quibusdam inventore modi</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center'>

            {
               categories.map(categoryJob =><Categories key={categoryJob._id} categoryJob={categoryJob} ></Categories>)
            }
        </div>
        </div>
    );
};

export default RecentJobs;