import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Email from "../components/Email";
import PortfolioHome from "../components/PortfolioHome";
import AboutHero from "../components/AboutHero";
import AboutLitenBilde from "../components/AboutLitenBilde";
import AboutStorBilde from "../components/AboutStorBilde";
import AboutMinReise from "../components/AboutMinReise";
import AboutMySkill from "../components/AboutMySkill";

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.hero":
      return <Hero key={index} data={section} />;
    case "sections.portfolio-home":
      return <PortfolioHome key={index} data={section} />;
    case "sections.features":
      return <Features key={index} data={section} />;
    case "sections.testimonials-group":
      return <Testimonials key={index} data={section} />;
    case "sections.pricing":
      return <Pricing key={index} data={section} />;
    case "sections.lead-form":
      return <Email key={index} data={section} />;
    case "sections.about-hero":
      return <AboutHero key={index} data={section} />;
    case "sections.about-liten-bilde":
      return <AboutLitenBilde key={index} data={section} />;
    case "sections.about-stor-bilde":
      return <AboutStorBilde key={index} data={section} />;
    case "sections.about-min-reise":
      return <AboutMinReise key={index} data={section} />;
    case "sections.about-my-skill":
      return <AboutMySkill key={index} data={section} />;
    default:
      return null;
  }
}
