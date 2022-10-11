
import { MdEngineering } from 'react-icons/md';
import { FcCustomerSupport } from 'react-icons/fc';
import { GrAnnounce } from 'react-icons/gr';
import { FiPenTool } from 'react-icons/fi';
import { TbTruckDelivery } from 'react-icons/tb';
const JobCategory = () => {

  return (
    <div className='text-center my-10 mx-10'>
      <h1 className='uppercase text-4xl font-bold'>Browse Jobs Categories</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, culpa pariatur soluta obcaecati ad odio neque fugit vero illo ut</p>

      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 '>

        <div className="card w-60  shadow-xl hover:bg-secondary">
          <figure className="px-10 pt-10">

            <div className='bg-[#37b2de] rounded-full p-2 '><MdEngineering size="3em" /></div>
             
          </figure>
          <div className="card-body items-center text-center">
          <h2 className="card-title">Engineering</h2>
          </div>
        </div>

        <div className="card w-60  shadow-xl hover:bg-secondary ">
          <figure className="px-10 pt-10">
            <div className='bg-[#37b2de] rounded-full p-2'><FcCustomerSupport size="3em" /></div>

          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">BPO</h2>
          </div>
        </div>

        <div className="card w-60  shadow-xl hover:bg-secondary">
          <figure className="px-10 pt-10">
            <div className='bg-[#37b2de] rounded-full p-2'><FiPenTool size="3em" /></div>

          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Design and Creative</h2>
          </div>
        </div>
        <div className="card w-60  shadow-xl hover:bg-secondary">
          <figure className="px-10 pt-10">
            <div className='bg-[#37b2de] rounded-full p-2'><GrAnnounce size="3em" /></div>

          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Sales / Marketing</h2>
          </div>
        </div>
        <div className="card w-60  shadow-xl hover:bg-secondary">
          <figure className="px-10 pt-10">
            <div className='bg-[#37b2de] rounded-full p-2'><TbTruckDelivery size="3em" /></div>

          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Delivery</h2>
          </div>
        </div>


      </div>
      {/* 
            <a className="btn btn-secondary text-white text-lg uppercase justify-center flex ">Browse all Categories</a> */}


    </div>
  );
};

export default JobCategory;