import HTTP from '../http/index';
import { 
  SET_USERS,
  SET_SEARCH_TEXT,
  PLUS_PAGE,
  MINUS_PAGE,
  SET_COUNT_USERS
} from './mutations';

// actions const
export const GET_USERS = 'GET_USERS';
export const SEARCH_USER = 'SEARCH_USER';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const SELECT_COUNT_USERS = 'SELECT_COUNT_USER'

export default {
  [GET_USERS]: ({ commit }) => HTTP.get('/users').then(({ data }) => commit(SET_USERS, data.data)),
  [SEARCH_USER]: ({ commit }, searchText) => commit(SET_SEARCH_TEXT, searchText),
  [NEXT_PAGE]: ({ commit }) => commit(PLUS_PAGE),
  [PREV_PAGE]: ({ commit }) => commit(MINUS_PAGE),
  [SELECT_COUNT_USERS]: ({ commit }, count) => commit(SET_COUNT_USERS , count)
}