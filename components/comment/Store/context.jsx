import {createContext} from 'react'

const initalState = {
    loadding: false,
    commentItem:[],
    error:null
}

//const store = initalState
const Store = createContext(initalState); // Component props -> initalState 


export default Store