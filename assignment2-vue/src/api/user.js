const apiURL = "https://rieny-noroff-api.herokuapp.com"
const apiKey = "BWx8fZ5xn0WTGWZrj4wpAw=="


export async function apiUserLogin(username) {
    try {
        fetch(`${apiURL}/trivia`, {
            method: 'POST',
            headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: 'the-trivia-master', 
                highScore: 0 
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not create new user')
            }
            return response.json()
        })
        .then(newUser => {
            // newUser is the new user with an id
            console.log("user returns newUser")
            console.log(newUser)
            return newUser
        })
        .catch(error => {
            return error.message
        })
    }
    catch (e) {
        return e.message
    }
}
/*
export async function apiUserLogin(username) {
    try { 
        const config = {
            method: 'POST',
            headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: username, 
                highScore: 0 
            })
        }
        const response = await fetch(`${apiURL}/trivia`, config)
        const { success, newUser, error = "An error occurred while logging in" } = await response.json()
         
        if (!success) {
            throw new Error(error)
        }
        return [ null, newUser ]

    }
    catch (error) {
        return [ error.message, null ]
    }
}
*/