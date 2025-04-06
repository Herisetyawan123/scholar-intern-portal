import React from 'react';
import HeroSection from '../../components/internship/hero-section';
import InternshipList from '../../components/internship/intern-list-section';
import InternshipProvider from '../../state-management/internships/internships-provider';

function InternPage() {
  return <InternshipProvider>
    <HeroSection />
    <InternshipList />
  </InternshipProvider>;
}

export default InternPage;
