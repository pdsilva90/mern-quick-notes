import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export function createNoteRequest(noteData) {
    return sendRequest(BASE_URL, 'POST', noteData);
}

export function getNotesRequest() {
  console.log('hello')
  return sendRequest(BASE_URL, 'GET');
}
