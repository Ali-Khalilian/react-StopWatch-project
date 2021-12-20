import { createContext, useContext } from "react";

export const SavedTime = createContext({
    savedTimeArr : [],
    setSavedTimeArr : ()=>{}
});