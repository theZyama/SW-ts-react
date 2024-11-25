import {characters, navItems} from "../utils/constants.ts";
// import {useContext} from "react";
// import {SWContext} from "../utils/context.ts";
import {NavLink} from "react-router-dom";

interface Props{
    friend: string,
    pos: number
}

const Friend = ({friend, pos}:Props) => {
    let styles = '';
    if(pos === 7) {
        styles = 'rounded-bl-2xl';
    }
    if(pos === 9) {
        styles = 'rounded-br-2xl';
    }
    return (
        <NavLink to={`/${navItems[0].path}/${friend}`}>
        <img  className={`${styles}`} src={characters[friend].img} alt={characters[friend].name}/>
        </NavLink>
    );
};

export default Friend;