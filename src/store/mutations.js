// const mutatio 
export const SET_USERS = 'SET_USERS';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const PLUS_PAGE = 'PLUS_PAGE';
export const MINUS_PAGE = 'MINUS_PAGE';
export const SET_COUNT_USERS = 'SET_COUNT_USERS';

export default {
  [SET_USERS]: (state, payload) => state.users = payload,
  [SET_SEARCH_TEXT]: (state, payload) => state.search = payload,
  [PLUS_PAGE]: state => state.page += 1,
  [MINUS_PAGE]: state => state.page -= 1,
  [SET_COUNT_USERS]: (state, payload) => state.countUsers = payload
}