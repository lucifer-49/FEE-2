
const users = [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Brown' },
    { id: 4, name: 'Diana Prince' },
    { id: 5, name: 'Ethan Hunt' }
];

function displayUsers() {
    const userList = document.getElementById('user-list');

    userList.innerHTML = '';

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.className = 'user-item';
        listItem.textContent = `${user.id}: ${user.name}`;
        userList.appendChild(listItem);
    });
}

displayUsers();