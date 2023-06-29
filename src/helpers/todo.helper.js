export async function toggleComplete(id, status) {
  const response = await fetch('http://localhost:3000/todos/'.concat(id), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      complete: !status,
    }),
  });
}
export async function handleDeleteATodoFromDatabase(id) {
  await fetch('http://localhost:3000/todos/'.concat(id), {
    method: 'DELETE',
  });
}
export async function addTodosItem(id, userInput, status) {
  const response = await fetch(`http://localhost:3000/todos/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
      task: userInput,
      complete: status,
    }),
  });
}
export async function clearTodosFromDatabase(ids) {
  ids.map(async (id) => {
    const response = await handleDeleteATodoFromDatabase(id);
  });
}
