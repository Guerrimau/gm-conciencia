import { ContactSection, LandingSection, ServicesSection, TeamSection, TestimoniesSection, UbicationSection } from '@/components';


export default function Home() {
  return (
    <main className="h-fit max-w-7xl py-[100px] mx-auto text-primary-900">
      <LandingSection />
      <TeamSection />
      <ServicesSection />
      <TestimoniesSection />
      <UbicationSection />
      <ContactSection />
    </main>
  )
}
