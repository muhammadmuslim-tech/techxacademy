import Hero from "@/components/Hero/Hero.jsx";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs.jsx";
import CoursesSection from "@/components/Courses/CoursesSection.jsx";
import GetInTouch from "@/components/GetInTouch/GetInTouch.jsx";
import RegistrationModal from "@/components/Registration/RegistrationModal.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <CoursesSection />
      <GetInTouch />
    </>
  );
}