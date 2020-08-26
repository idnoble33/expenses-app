import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = ({ resetBy = 1 } = {}) => ({
  type: 'RESET',
  resetBy
})
const setCount = ( { setBy = 1 } = {}) => ({
  type: 'SET',
  setBy
})
//Reducer
//1. Reducers are pure functions
//2. Never change state or action
const countReducer = (state = { count: 0 }, action ) => {
  switch(action.type){
    case 'INCREMENT' :
    return {
    count: state.count + action.incrementBy
    }
     case 'DECREMENT' :
      return {
      count: state.count - action.decrementBy
      }
    case 'RESET':
    return {
      count: 0
    }
    case 'SET':
      return {
        count: 101
      }
    default:
    return state;
    }
};
const store = createStore(countReducer)

store.subscribe(()=> {
  console.log(store.getState());
})

//Increment Count
store.dispatch(incrementCount({ incrementBy: 5}))
store.dispatch( incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({count: 101}))

