const users = [
    { username: 'zjaeemrog', password: 'zzr14012003' },
    { username: 'gebruiker2', password: 'wachtwoord2' },
    { username: 'gebruiker3', password: 'wachtwoord3' }
];


function validateLogin(username, password) {
    return users.some(user => user.username === username && user.password === password);
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('naam').value;
    const password = document.getElementById('pass').value;

document.getElementById('error-message').style.display = 'none';

    if (validateLogin(username, password)) {
        window.location.href = '../BAnav.html'; 
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
