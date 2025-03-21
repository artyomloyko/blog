import Contact from '@/components/contact';
import Hero from '@/components/hero/hero';
import Intro from '@/components/intro';
import { ScrollProvider } from '@/components/providers/ScrollProvider';
// import Works from '@/components/work/works';

export default function Page() {
  return (
    <ScrollProvider>
      <Hero />
      <Intro />
      {/* <Works /> */}
      <Contact />
    </ScrollProvider>
  );
}
