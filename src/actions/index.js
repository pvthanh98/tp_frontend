export const GET_USER = (user)=>{
    return {
        type: "GET_USER",
        user
    }
}

//=======================================''

export const GET_MESSAGE = (message)=>{
    return {
        type: "GET_MESSAGE",
        message
    }
}

export const UPDATE_MESSAGES = (messages)=>{
    return {
        type: "UPDATE_MESSAGES",
        messages
    }
}