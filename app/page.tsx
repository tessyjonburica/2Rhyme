import { Hero } from "@/components/Hero"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { Projects } from "@/components/Projects"
import { Expertise } from "@/components/Expertise"
import { Testimonials } from "@/components/Testimonials"
import { FAQ } from "@/components/FAQ"
import { ContactForm } from "@/components/ContactForm"

export default function Home() {
  return (
    <div className="bg-[#111113]">
      <Hero />
      <WhyChooseUs />
      <Expertise />
      <Projects />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </div>
  )
}
