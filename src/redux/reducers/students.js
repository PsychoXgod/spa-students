const initialState = {
  students: [],
  input: '',
  sortType: 'Имя А-Я',
};

const students = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STUDENTS':
      return {
        ...state,
        students: action.payload,
      };
    case 'SET_INPUT':
      return {
        ...state,
        input: action.payload,
      };
    case 'SET_SORT_TYPE':
      return {
        ...state,
        sortType: action.payload,
      };

    default:
      return state;
  }
};

export default students;
