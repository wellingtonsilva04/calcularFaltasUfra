import { SET_DISCIPLINA, REMOVE_DISCIPLINA } from "./action";
const initialState = {
  disciplinas: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_DISCIPLINA:
      return { ...state, disciplinas: [...state.disciplinas, action.payload] };

    case REMOVE_DISCIPLINA:
      return { disciplinas: state.disciplinas.filter((disciplina, idx) => idx !== action.payload) };


    default:
      return state
  }
};
