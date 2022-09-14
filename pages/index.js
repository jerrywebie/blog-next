import CustomLayout from '../layout/CustomLayout'
import SliderSection from '../components/SliderSection'
import PostsSection from '../components/PostsSection'
import MostPopular from '../components/MostPopular'
import BusinessAndTravelSection from '../components/BusinessAndTravelSection'

export default function Home() {
  return (
    <CustomLayout>
      <SliderSection/>
      <PostsSection/>
      <MostPopular/>
      <BusinessAndTravelSection/>
    </CustomLayout>
  )
}

