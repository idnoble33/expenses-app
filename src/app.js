import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import  getVisibleExpenses  from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



//Create a store and get its value as return as return value from configure store

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', amount: 4500 }));
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({description: 'Rent', amountt: 109500 }));


//store.dispatch(setTextFilter('water'));

// setTimeout(()=> {

//   store.dispatch(setTextFilter('bill'));

// }, 5000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


console.log(store.getState());

const jsx =  (
  <Provider store={store}>
  <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
