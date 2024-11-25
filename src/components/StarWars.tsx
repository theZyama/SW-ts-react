import {characters, defaultHero, starWarsInfo} from "../utils/constants.ts";
import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "./ErrorPage.tsx";

const StarWars = () => {
    const {heroId= defaultHero} = useParams();
    const {changeHero}= useContext(SWContext);

    useEffect(() => {
        if(!characters[heroId]){
            return;
        }
        changeHero(heroId);
    }, [heroId]);

    return characters[heroId] ? (
        <div className={'text-[2em] text-justify tracking-[.2em] leading-normal'}>
            {starWarsInfo}
        </div>
    )
        :<ErrorPage/>
};

export default StarWars;