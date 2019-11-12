export function changeSearchField(data) {
  return {
    type: 'CHANGE_SEARCH_FIELD',
    payload: data
  }
}

export function startSkillsRequest(data) {
  return {
    type: 'START_SKILLS_REQUEST',
    payload: data
  }
}

export function setSkills(data) {
  return {
    type: 'SET_SKILLS',
    payload: data
  }
}

export function setError(error) {
  return {
    type: 'SET_ERROR',
    payload: error
  }
}

export function setInitState() {
  return {
    type:'RETURN_INIT_STATE'
  }
}


export const searchSkillsRequest = async (search) => {
  const params = new URLSearchParams({ q: search });
  const response = await fetch(`http://localhost:7070/api/search?${params}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}