
const apiURL = "https://opentdb.com/api.php?"


export async function apiFetchQuestions(amount, category, difficulty, type) {
    try {
        const response = await fetch(`${apiURL}` + "amount=" + amount + "&category=" + category + "&difficulty=" + difficulty + "&type=" + type)

        if(!response.ok){
            throw new Error("Could not load questions")
        }

        const { success, data, error = "Could not load questions"} = await response.json()

        if(!success) {
            throw new Error(error)
        }

        return [null, data]
    }
    catch (e) {
        return [e.message, []]
    }    
}