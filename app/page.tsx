import { Testimonials } from '@/components/Testimonials/Testimonials';
import { Services } from '@/components/Services/Services';

export default function HomePage() {
  return (
    <>
      <Services />
      <div style={{ height: 200 }}>
        <Testimonials />
      </div>
    </>
  );
}
