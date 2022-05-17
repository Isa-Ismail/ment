import Benefits from '../components/Home/Benefits/Benefits'
import DiscoverTopMentors from '../components/Home/DiscoverTopMentors/DiscoverTopMentors'
import FAQs from '../components/Home/FAQs/FAQs'
import HeroSection from '../components/Home/HeroSection/HeroSection'
import MenteeEnrollmentSteps from '../components/Home/MenteeEnrollmentSteps/MenteeEnrollmentSteps'
import ResourcesAndBlogs from '../components/Home/ResourcesAndBlogs/ResourcesAndBlogs'
import SectorDevelopmentMentors from '../components/Home/SectorDevelopmentMentors/SectorDevelopmentMentors'
import Testimonials from '../components/Home/Testimonials/Testimonials'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <HeroSection/>
      <SectorDevelopmentMentors/>
      <DiscoverTopMentors/>
      <Benefits/>
      <MenteeEnrollmentSteps/>
      <Testimonials/>
      <FAQs/>
      <ResourcesAndBlogs/>
    </Layout>
  )
}
