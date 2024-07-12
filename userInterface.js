const infoUser = document.getElementById('infoUser')
// const userName = document.getElementById('userName')
// const email = document.getElementById('email')

infoUser.addEventListener('DOMContentLoaded', () =>{
    const userID = localStorage.getItem('userID')
    console.log(userID);
    if(!userID) {
        console.error('No userID found in localStorage')
        return;
    }

    const url = `http://localhost:5050/api/getUserbyID/${userID}`;

    const getUserInfo = async () => {
        try {
            const res = await fetch(url)
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            const data = await res.json();
            console.log('data', data);
            dislayUserinfo(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
            displayError(error);
        }
    }

    const dislayUserinfo = (data) => {
        infoUser.innerHTML = 
        `
        Username: ${data.username}
        Email: ${data.email}
        `
    }

    const displayError = async () => {
        infoUser.innerHTML = `<p>Error: ${error.message}</p>`
    }

    getUserInfo();
})