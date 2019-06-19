import { SET_DISCIPLINA } from "./action";
const initialState = {
    disciplinas: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_DISCIPLINA:
            return { ...state, disciplinas: [...state.disciplinas, action.payload] };

        default:
            return state
    }
};