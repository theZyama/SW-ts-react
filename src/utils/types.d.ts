
export interface SWContextValue{
    hero: string,
    changeHero:(hero:string) => void,
}

export interface HeroInfo{
    name: string,
    gender: string,
    birth_year: string,
    height: number,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string
}
export interface Item{
    title: string,
    path: string,
}
export interface Hero{
    name: string,
    image: string,
    url: string
}
export interface Characters{
    [key:string]: Hero
}