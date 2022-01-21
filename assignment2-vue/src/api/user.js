const apiURL = "https://rieny-noroff-api.herokuapp.com"
const apiKey = "BWx8fZ5xn0WTGWZrj4wpAw=="


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
        const newUser = await response.json()

        return newUser
    }
    catch (error) {
        return error
    }    
}