import sendRequest from './send-request';

const BASE_URL = '/api/notes';

export function createNote(notesData) {
  return sendRequest(`${BASE_URL}/create`, 'POST', notesData);
}
export function getNotes() {
  return sendRequest(`${BASE_URL}`);
}

export function deleteNote(id) {
  return sendRequest(`${BASE_URL}/delete/${id}`, 'DELETE');
}