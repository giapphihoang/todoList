const element = document.getElementById("sign-up");
element.addEventListener('click', async function (event) {
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    try {
        const response = await fetch('http://localhost:5050/api/registerUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, email })
        });
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            alert('Registration successful');
        } else {
            const errorData = await response.json();
            alert(errorData.status);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during registration.');
    }
});
