import {friends} from "../utils/constants.ts";
import Friend from "./Friend.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

const DreamTeam = () => {
    const {hero} = useContext(SWContext)
    return (
        <section className={`float-right w-1/2 mx-2 border border-base-color rounded-b-2xl grid grid-cols-3 gap-1`}>
            <h2 className={`col-span-3 text-center text-[2rem]`}>Dream team</h2>
            {friends.filter(friend => friend !== hero).map((f, i) => <Friend friend={f} key={i} pos={i + 1} />)}
        </section>
    );
};

export default DreamTeam;