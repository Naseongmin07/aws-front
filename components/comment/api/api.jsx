/*
    비동기통신에 대한 내용을 넣는공간
*/







const getComment = (dispatch) => {
    dispatch({type:'GET_COMMENT'})
    try{
        // const response = await fetch('http://18.117.151.106/api/comment')
        // const data = await response.json()
        const data = [{userid:"web7722",content:"안녕하세요1",date:"2021-07-14", index:'1'},{userid:"web7722",content:"안녕하세요1",date:"2021-07-14", index:'2'},
        {userid:"web7722",content:"안녕하세요1",date:"2021-07-14", index:'3'},{userid:"web7722",content:"안녕하세요1",date:"2021-07-14", index:'4'},
        {userid:"web7722",content:"안녕하세요1",date:"2021-07-14", index:'5'},{userid:"web7722",content:"안녕하세요1",date:"2021-07-14", index:'6'},]

        // const data2 = [{userid:"web7722",content:"안녕하세요1",date:"2021-07-14", index:'1', parent:'1'},{userid:"web7722",content:"안녕하세요1",date:"2021-07-14", index:'2',parent:'1'},
        // {userid:"web7722",content:"안녕하세요1",date:"2021-07-14", index:'1',  parent:'2'},{userid:"web7722",content:"안녕하세요1",date:"2021-07-14", index:'2',  parent:'2'},
        // {userid:"web7722",content:"안녕하세요1",date:"2021-07-14", index:'1',  parent:'3'},{userid:"web7722",content:"안녕하세요1",date:"2021-07-14", index:'1',  parent:'4'},]
        
        dispatch({type:'GET_COMMENT_SUCCESS',payload: data})

    } catch (e) {
        dispatch({ type:'GET_COMMENT_ERROR',payload:e })
    }
}





const postComment = async (data) => {
    try{
        let url = 'http://18.117.151.106/api/comment'
        let options = {
            method : "POST",
            headers :{"Content-Type": "application/json"},
            body : JSON.stringify(data)
        }
        const response = await fetch(url,options)
    }catch(e){
        console.log(e)
    }
}

const patchComment = async (dispatch) => {
    dispatch({type:'POST_COMMENT'})
    try{
        const url = 'localhost'
        const options = {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body:JSON.stringify({userid:'web7722', content:'abcd'})  
        }
        const response = await fetch(url, options)
        const data = await response.json()

        dispatch({type:'POST_COMMENT_SUCCESS'})
    }catch(e){
        dispatch({type:"POST_COMMENT_ERROR"})
    }
}


const deleteComment = async (dispatch) => {

}




module.exports = {
    getComment: getComment,
    sendComment: postComment,
    patchComment: patchComment,
    deleteComment: deleteComment,
}