import React,{useContext,useReducer,useEffect} from 'react'

import Store from './Store/context'
import reducer from './Store/reducer'
import {getComment} from './api/api'

const CommentLayout = ({children}) => {
    console.log('CommentLayout')
    const globalStore = useContext(Store)

    const [state,dispatch] = useReducer(reducer,globalStore)


    useEffect(async ()=>{
        //console.log('최소 실행 render')
        getComment(dispatch)
    },[])

    return (
        //Store = {state,dispatch}
        <Store.Provider value={ {state:state,dispatch:dispatch} }>
            <ul className="comment">
                {children}
            </ul>
        </Store.Provider>
    );
}

//ReactDOM
export default CommentLayout