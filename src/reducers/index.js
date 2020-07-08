const rootReducer = (state = {
  childName: '',
  childId: '',
  parentName: '',
  parentId: '',
}, action) => {
  switch (action.type) {
    case 'UPDATE_CHILD_NAME':
      return {
        ...state,
        childName: action.text,
      };
    case 'UPDATE_CHILD_ID':
      return {
        ...state,
        childId: action.text,
      };
    case 'UPDATE_PARENT_NAME':
      return {
        ...state,
        parentName: action.text,
      };
    case 'UPDATE_PARENT_ID':
      return {
        ...state,
        parentId: action.text,
      };
    default:
      return state;
  }
};

export default rootReducer;
