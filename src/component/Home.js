import React from 'react';
import Banner from './Banner';
import Describe from './Describe';
import Employer from './Employer';
import Footer from './Footer';
import Header from './Header';
import JobCategory from './JobCategory';
import RecentJobs from './RecentJobs';
import Reviews from './Reviews';


const Home = () => {
    return (
        <main>
            <Header></Header>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <RecentJobs></RecentJobs>
            <Describe></Describe>
            <Employer></Employer>
            <Reviews></Reviews>
            <Footer></Footer>
        
        </main>
    );
};

export default Home;