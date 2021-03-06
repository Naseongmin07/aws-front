import React,{useContext,useState} from 'react'
import Store from './Store/context'

const CommentItem = ({userid,content,date,index}) => {
    console.log('CommentItem')


    const {state,dispatch} = useContext(Store)
    const [input,setInput] = useState('')

    const handleDelete = () => {
        dispatch({type:'DELETE' , payload:index})
        setInput('')
    }

    const handleClick = () => {
        setInput(content)
    }

    const handleChange = e => {
        const {value} = {...e.target}
        setInput(value)
    }

    const handleKeydown = e => {

        if(e.key === 'Enter'){
            dispatch({
                type:'UPDATE',
                payload:{
                    index,
                    content:input
                }
            })

            setInput('')
        }
    }

    return (
        <>
            <ul className="comment-row">
                <li className="comment-id">{userid}</li>
                <li className="comment-content">
                    <span onClick={handleClick}>
                        {/* {content} */}
                        {
                            input 
                            ? <input 
                                type="text"
                                value={input}
                                onChange={handleChange}
                                onKeyDown={handleKeydown}
                                className="comment-update-input"
                              /> 
                            : content
                        }
                    </span>
                    <span className="comment-delete-btn" onClick={handleDelete}>
                        X
                    </span>
                </li>
                <li className="comment-date">{date}</li>
            </ul>
        </>
    )
}

export default CommentItem