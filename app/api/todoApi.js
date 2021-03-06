import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getAllTodos() {
  return get('todos');
}

export function saveTodo(todo) {
  if (todo.id) {
    console.log('we are patching ' + todo.id);
    return patch(`todos/${todo.id}`, todo);
  } else {
    console.log('we are posting ');
    return post('todos', todo);
  }
}

export function deleteTodo(id) {
  return del(`todos/${id}`);
}

function get(url) {
  return fetch(baseUrl + url); //.then(onSuccess, onError);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });
  return fetch(request); //then(onSuccess, onError);
}

function post(url, data) {
  const request = new Request(baseUrl + url, {
    method: 'POST',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json'
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data)
  });
  return fetch(request); //then(onSuccess, onError);
}

function patch(url, data) {
  const request = new Request(baseUrl + url, {
    method: 'PATCH',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json'
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data)
  });
  return fetch(request); //then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.warn(error);
}
