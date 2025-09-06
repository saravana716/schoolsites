import { SchoolImageSwiper } from './SchoolImageSwiper';
import { AboutUsHomeSection } from './AboutUsHomeSection';
import { WhyChooseSection } from './WhyChooseSection';
import { RecentClicksSection } from './RecentClicksSection';

export function HomePage() {
  return (
    <div>
      {/* Fullscreen Image Swiper */}
      <SchoolImageSwiper />
      
      {/* About Us Section */}
      <AboutUsHomeSection />
      
      {/* Why Choose Section */}
      <WhyChooseSection />
      
      {/* Recent Clicks Section */}
      <RecentClicksSection />
    </div>
  );
}