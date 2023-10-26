import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Hero from "@/components/Hero";



export default function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${'imgBackground.png'})`,
  };

  return (
    <main className="bg-center bg-repeat" /* style={backgroundStyle} */>
      <Hero />
      <FeatureSection />
    </main>
  )
}
