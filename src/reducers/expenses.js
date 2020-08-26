  // Expenses Reducer
  const expensesReducerDefaultState = [];

  const expensesReducer = ( state = expensesReducerDefaultState, action) => { 
    switch (action.type) {
      case 'ADD_EXPENSE':
      // return state.concat(action.expense);
      //Using Spread Operator
      return [
        ...state,
        action.expense
      ];
      
      case 'REMOVE_EXPENSE':
        return state.filter(( { id }) =>  id !== action.id) 
        case 'EDIT_EXPENSE':
          return state.map((expense) =>{
             if(expense.id === action.id ){
       //Spread out the expense & Grap properties from the existing one
            return {
            ...expense,
            //then override the one we pass in
            ...action.updates
            };
             } else {
               return expense;
             };
          });
      default:
        return state;
    }
  };

  export default expensesReducer;