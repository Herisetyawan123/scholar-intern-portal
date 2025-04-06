import React from 'react';
import HeroSection from '../../components/scholarship/hero-section';
import ScholarshipList from '../../components/scholarship/scholar-list-section';
import ScholarshipProvider from '../../state-management/scholarships/scholarships-provider';

function ScholarPage() {
  return <ScholarshipProvider>
    <HeroSection />
    <ScholarshipList />
  </ScholarshipProvider>;
}

export default ScholarPage;
