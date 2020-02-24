import { 
    ApiCallInProgress, 
    ApiCallSuccessful, 
    ApiCallFailed 
} from "./constants";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export default function ProgressReducer (state = initialState, action = null) {
    switch(action.type) {
        case ApiCallInProgress: {
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                message:''
            }
        }
        case ApiCallSuccessful: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                message: ''
            }
        }
        case ApiCallFailed: {
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                message: action.message
            }
        }
        default: 
            return state
    }
}
