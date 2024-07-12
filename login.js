const element = document.getElementById("login")

// function btnActivation(){
//     if(!username.length && !password.length){
//         submiBtn.disabled = true;            
//     }else{
//         submiBtn.disabled = false;
//     }           
// }   

element.addEventListener('click', async function (event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value
    const password = document.getElementById('loginPassword').value
    console.log("username", username);
    console.log("pass", password);
    if(!username.length && !password.length) return
    try {
        const response = await fetch('http://localhost:5050/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
        if (response.ok) {
            const data = await response.json();
            // console.log(typeof(data));
            console.log(data);
            localStorage.setItem('userID', data['_id'])
            window.location.href = '/userInterface.html';
            alert('Login successful');
        } else {
            const errorData = await response.json();
            alert(errorData.status);
        }
    } catch (err) {
        console.error('Error:', err)
        alert('An error occurred during login.')
    }
});

