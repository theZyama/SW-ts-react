import { useContext, useEffect} from "react";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router-dom";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "../components/ErrorPage.tsx";
import * as React from "react";

export const withErrorPage = (Component: React.FC) => (props: object)=>{
    const { heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if(!characters[heroId]){
            changeHero(heroId);
        }
    },[heroId])
    return characters[heroId] ? <Component {...props}/> : <ErrorPage/>
}