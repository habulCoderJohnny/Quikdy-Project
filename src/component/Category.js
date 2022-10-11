import React from 'react';

const Category = ({categoryJob}) => {
    const {img, position, company, jobType } = categoryJob;
    return (
        <div className="card w-60 h-auto text-center shadow-xl my-10">
          <div className="card-body items-end">
          <h2 className="card-title bg-primary uppercase text-white ">{jobType}</h2> 
        </div>
        <figure className="px-10">
        
          <img src={img} alt="" className="rounded-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{position}</h2>
          <p>{company}</p>
          <div className="card-actions">
          <button className="btn btn-secondary mb-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">Apply now</button>
          </div>
          <h1>Notes: </h1>
        </div>
     
      </div>
    );
};

export default Category;