import styles from "./styles";
import RightLeaf from "@/assets/RightLeaf";
import RightBigLeaf from "@/assets/RightBigLeaf";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <AboutSection />
        </>
    );
}
