import Footer from "./components/Footer/Footer";
import LevelOfPrivacy from "./components/LevelOfPrivacy/LevelOfPrivacy";
import BuildByExpert from "./homePage/BuildByExpert";
import PassportFlag from "./homePage/Flags/PassportFlag";
import Hero from "./homePage/Hero/Hero";
import WhyChoose from "./homePage/WhyChoose/WhyChoose";
import WhyUse from "./homePage/WhyUse/WhyUse";
import PrivacyTable from "./PrivacyTable/PrivacyTable";
import ResearchAndQuestion from "./ResearchAndQuestions/ResearchAndQuestions";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Hero />
        <BuildByExpert />
        <WhyUse />
        <WhyChoose />
        <PrivacyTable />
        <PassportFlag />
        <LevelOfPrivacy />
        <ResearchAndQuestion />
      </div>
    </>
  );
}
