import React, { useReducer } from 'react';
import moment from 'moment';
// import db from '../firebase/firebase';

// setPlans([...plans, { goal, specificators, deadline, prices, dailyTasks }]);
// db.ref('plans').once('value').then((snapshot) => {
//   const plans = [];
//   snapshot.forEach(childSnapshot => {
//     plans.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
// })
const plansReducer = (state, action) => {
  // const deadline = moment(action.deadline)
  // console.log('state goal: ', action.goal);
  // console.log('state deadline: ', action.deadline);
  // console.log('state prices: ', action.prices);
  // console.log('state dailyTasks: ', action.dailyTasks);
  // console.log('state specs: ', action.specificators);
  switch (action.type) {
    case 'ADD_PLAN':
      return [
        ...action.plans,
        {
          goal: action.goal,
          specificators: action.specificators,
          deadline: action.deadline,
          prices: action.prices,
          dailyTasks: action.dailyTasks
        }
      ];

    case 'LOAD_DB_PLANS':
      return [...action.plansDb];

    default:
      return state;
  }
};

export default plansReducer;