import React from 'react';
import HeroSection from '../components/index/hero-section';
import StatsSection from '../components/index/stats-section';
import FeaturedScholarships from '../components/index/featured-scholarship-section';
import HeroScholarshipSection from '../components/index/hero-scholarship-section';
import FeaturedInternshipsSection from '../components/index/featured-internship-section';
import HeroInternshipSection from '../components/index/hero-internship-section';

function IndexPage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <FeaturedScholarships />
      <HeroScholarshipSection />
      <FeaturedInternshipsSection />
      <HeroInternshipSection />
    </div>
  );
}

export default IndexPage;
