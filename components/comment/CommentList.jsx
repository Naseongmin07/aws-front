import React,{useContext} from 'react'
import CommentItem from './CommentItem'
import Store from './Store/context'

const CommentList = () => {
    console.log('CommentList')
    // const list = [
    //     {userid:"web7722",content:"안녕하세요1",date:"2021-07-14"},
    //     {userid:"web7722",content:"안녕하세요2",date:"2021-07-14"},
    //     {userid:"web7722",content:"안녕하세요3",date:"2021-07-14"},
    //     {userid:"web7722",content:"안녕하세요4",date:"2021-07-14"},
    //     {userid:"web7722",content:"안녕하세요5",date:"2021-07-14"},
    //     {userid:"web7722",content:"안녕하세요6",date:"2021-07-14"},
    //     {userid:"web7722",content:"안녕하세요7",date:"2021-07-14"},
    // ]
    const {state} = useContext(Store) // {state,dispatch}
    console.log(state)
    const list = state.commentItem
    const list2 = state.comment_commentItem

    const {loadding, error} = state
    let result = []
    list.forEach((v,k)=>{
        result.push(           
        <CommentItem 
            key={k}
            userid={v.userid}
            content={v.content}
            date={v.date}
            index={v.index}
        />)
    })


    if(loadding) return <li>나 로딩중..</li>;
    if(error) return <li>error</li>;
    return ( <li>{result}</li> )
}

export default CommentList