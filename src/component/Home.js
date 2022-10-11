import React from 'react';
import Banner from './Banner';
import Header from './Header';
import JobCategory from './JobCategory';
import RecentJobs from './RecentJobs';

const Home = () => {
    return (
        <main>
            <Header></Header>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <RecentJobs></RecentJobs>
        </main>
    );
};

export default Home;