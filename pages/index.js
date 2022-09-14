import CustomLayout from '../layout/CustomLayout'
import SliderSection from '../components/SliderSection'
import PostsSection from '../components/PostsSection'
import MostPopular from '../components/MostPopular'

export default function Home() {
  return (
    <CustomLayout>
      <SliderSection/>
      <PostsSection/>
      <MostPopular/>
    </CustomLayout>
  )
}

