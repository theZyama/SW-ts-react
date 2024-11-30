import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";
import {withErrorPage} from "../hoc/withErrorPage.tsx";

const Home = () => {

    return (
        <main>
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    )
}

export default withErrorPage(Home);