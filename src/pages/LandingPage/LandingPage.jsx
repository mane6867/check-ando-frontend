import SectionImage from "./Section-image/SectionImage";
import SectionSobreNosotros from "./Section-sobrenosotros/SectionSobreNosotros";
import './LandingPage.css'

export default function LandingPage() {
    return(<>
        <h1>Esta es la landing Page</h1>
        <SectionImage/>
        <SectionSobreNosotros/>
        </>)
}