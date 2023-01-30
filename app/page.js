import Image from 'next/image';
import HeroPage from './hero/page';
import Services from './service/page';
import Price from './price/page';
export default function Home() {
  return (
    <main>
      <HeroPage />
      <Services />
      <Price />
    </main>
  );
}
