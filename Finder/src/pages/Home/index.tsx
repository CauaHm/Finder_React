import { SectionAbout } from "../../components/SectionAbout";
import { SectionAboutDoWeDo } from "../../components/SectionAboutDoWeDo";
import { MainTamplates } from "../../Templates/MainTampletes";

export function Home() {
    return( 
           <>
            <MainTamplates>
                <SectionAbout/>
                <SectionAboutDoWeDo/>
            </MainTamplates>
           </>
    )
}