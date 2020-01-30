export const SET_DISCIPLINA = 'SET_DISCIPLINA';
export const REMOVE_DISCIPLINA = 'REMOVE_DISCIPLINA';

export const setDisciplina = (disciplina) => ({
  type: SET_DISCIPLINA,
  payload: disciplina
})

export const removeDisciplina = index => ({
  type: REMOVE_DISCIPLINA,
  payload: index
});
