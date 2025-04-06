import React from 'react';
import HeroSection from '../components/index/hero-section';
import StatsSection from '../components/index/stats-section';
import FeaturedScholarships from '../components/index/featured-scholarship-section';
import HeroScholarshipSection from '../components/index/hero-scholarship-section';
import FeaturedInternshipsSection from '../components/index/featured-internship-section';
import HeroInternshipSection from '../components/index/hero-internship-section';
import HomeProvider from '../state-management/home/home-provider';
// import useHomeData from '../hooks/use-fetch-home-data';
// import LoadingSpinner from '../components/loading';

function IndexPage() {

  return (
    <HomeProvider>
      <HeroSection />
      <StatsSection />
      <FeaturedScholarships />
      <HeroScholarshipSection />
      <FeaturedInternshipsSection />
      <HeroInternshipSection />
    </HomeProvider>
  );
}

export default IndexPage;
