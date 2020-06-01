export function searchFunc(a, searchParam) {
  return a.first_name.toLowerCase().includes(searchParam) || a.last_name.toLowerCase().includes(searchParam);
}