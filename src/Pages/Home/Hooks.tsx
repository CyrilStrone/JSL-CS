import { createEvent, createStore } from "effector";

export const $itemsListArray= createStore<string[]>([])  
export const setitemsListArray = createEvent<string[]>()
$itemsListArray.on(setitemsListArray, (_,val)=> val);

export const $searchGlob= createStore<string>("")  
export const setsearchGlob = createEvent<string>()
$searchGlob.on(setsearchGlob, (_,val)=> val);

export const $resetList= createStore<boolean>(false)  
export const setresetList = createEvent<boolean>()
$resetList.on(setresetList, (_,val)=> val);

export const $GlobalSearchList= createStore<any>({ ListCategory: [], Text: "" })  
export const setGlobalSearchList = createEvent<any>()
$GlobalSearchList.on(setGlobalSearchList, (_,val)=> val);