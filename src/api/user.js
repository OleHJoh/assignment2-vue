const apiURL = "https://rieny-noroff-api.herokuapp.com"
const apiKey = "BWx8fZ5xn0WTGWZrj4wpAw=="

export async function apiGetUser(username) {
    
    try {
        const response = await fetch(`${apiURL}/trivia?username=${username}`)
        const results = await response.json()

        return results
    }
    catch (error) {
        return error
    }
}

export async function apiRegisterNewUser(username) {
    
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
        const newUser = await response.json()

        return newUser
    }
    catch (error) {
        return error
    }    
}

export async function apiUpdateHighScore(highScore, userId) {
    
    try {
        const config = {
            method: 'PATCH', // NB: Set method to PATCH
            headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                highScore: highScore
            })
        }
        const response = await fetch(`${apiURL}/trivia/${userId}`, config)
        const updatedUser = await response.json()

        return updatedUser
    }
    catch (error) {
        return error
    }    
}