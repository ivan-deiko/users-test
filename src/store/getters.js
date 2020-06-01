import { searchFunc } from '../utils/index'

// const getters
export const USERS = 'USERS';
export const PREV = 'PREV';
export const NEXT = 'NEXT';

export default {
  [USERS]: state => {
    if (state.users) {
      if (state.search) {
        return state.users.filter(user => searchFunc(user, state.search))
      }
      return [...state.users].splice(state.page * state.countUsers, state.countUsers)
    }
  },
  [PREV]: state => state.page === 0,
  [NEXT]: state => {
    if (!state.users) return;
    return state.users[(state.page + 1) * state.countUsers] ? false : true;
  } 
  
}