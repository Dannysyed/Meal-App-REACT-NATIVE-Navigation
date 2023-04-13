import { createContext } from "react";


export interface Favdata {
    ids: string[],
    addFavorite: (id: string) => void,
    removeFavorite: (id: string) => void

}
let FavouritItem = createContext<Favdata>({
    ids: [],
    addFavorite: (id: string) => { },
    removeFavorite: (id: string) => { }


})
export default FavouritItem