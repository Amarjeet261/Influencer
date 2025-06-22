import Footer from "@/component/Footer/Footer";
import { Gallery } from "@/component/Gallery/Gallery";
import Navbar from "@/component/Navbar/Navbar";

export default function galleryus(){
    return(
        <section className="">
            <Navbar/>
            <Gallery/>
            <Footer/>
        </section>
    )
}