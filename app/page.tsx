import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Hero from "@/components/Hero";

import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] });


export default function Home() {

  const backgroundStyle = {
    backgroundImage: `url(${'imgBackground.png'})`,
  };

  return (
    <main className={`bg-center bg-repeat ${roboto.className}`} /* style={backgroundStyle} */>
      <Hero />
      <FeatureSection />
    </main>
  )
}
