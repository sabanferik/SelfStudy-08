
// const [count,setCount] = useState(0)

import { DEC, INC, RESET } from "../types/counterTypes"

const initialState = {
    count:10,
}

//! action parametresi bir obje olmak zorunda. Bu obje de bizden type ve payload propertylerini bekliyor.
export const counterReducer = (state = initialState , action) => {

    switch (action.type) {
        case INC:
            return {count: state.count + 1}
        case DEC:
            return {count: state.count - 1}
        case RESET:
            // return initialState
            return {...state,count:0}
        default:
            return state //* olmayan bir type bilgisi geldiğinde de statei olduğu gibi döndürmelidir.
    }
//! Reducer fonksiyonu muhakkak bir state objesi dondurmelidir.
}