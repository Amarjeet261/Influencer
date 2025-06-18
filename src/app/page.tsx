import BioSection from "@/component/Bio/Bio";
import BridalShoot from "@/component/BridalShoot/BridalShoot";
import ContactSection from "@/component/ContactSection/ContactSection";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import ModelProfile from "@/component/ModelProfile/ModelProfile";
import MoreMusicVideo from "@/component/MoreMusicVideo/MoreMusicVideo";
import MusicVideoSection from "@/component/MusicVideoSection/MusicVideoSection";
import Navbar from "@/component/Navbar/Navbar";
import OtherCollaborations from "@/component/OtherCollab/OtherCollab";
import RecentCollaboration from "@/component/RecentCollab/RecentCollab";


export default function Home() {
  return (
   <section className="">
    <Navbar/>
    <Header/>
    <BioSection/>
    <BridalShoot/>
    <RecentCollaboration/>
    <MusicVideoSection/>
    <MoreMusicVideo/>
    <OtherCollaborations/>
    <ModelProfile/>
    <ContactSection/>
    <Footer/>
   </section>
  );
}
