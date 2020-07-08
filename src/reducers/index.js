import * as qs from 'query-string';

const query = qs.parse(window.location.search);

const rootReducer = (state = {
  childName: query.childName,
  childId: query.childId,
  parentName: query.parentName,
  parentId: query.parentId,
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
