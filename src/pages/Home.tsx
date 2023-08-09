import Header from '../components/Header/Header';
import AboutSection from '../components/Sections/AboutSection/AboutSection';
import AdvantagesSection from '../components/Sections/AdvantagesSection/AdvantagesSection';
import PopularHikesSection from '../components/Sections/PopularHikesSection/PopularHikesSection';
import BlogSection from '../components/Sections/BlogSection/BlogSection';
import { HIKES, PHOTOS, POSTS, TINY_SLIDER_SETTINGS } from '../constants';
import GallerySection from '../components/Sections/GallerySection/GallerySection';

const HomePage = () => {
    return (
        <>
            <Header />
            <AboutSection />
            <AdvantagesSection />
            <PopularHikesSection
                hikes={HIKES}
                tinySliderSettings={TINY_SLIDER_SETTINGS}
            />
            <BlogSection
                posts={POSTS}
                tinySliderSettings={TINY_SLIDER_SETTINGS}
            />
            <GallerySection
                photos={PHOTOS}
                tinySliderSettings={TINY_SLIDER_SETTINGS}
            />
        </>
    );
};

export default HomePage;
