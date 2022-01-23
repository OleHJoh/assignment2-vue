
const apiURL = "https://opentdb.com/api.php?"


export async function apiFetchQuestions(amount, category, difficulty, type) {

    try {
        const response = await fetch(`${apiURL}` + "amount=" + amount + "&category=" + category + "&difficulty=" + difficulty + "&type=" + type)
        const questions = await response.json()
        const questionsList = questions.results
        console.log(questionsList)
        return questionsList
        
    }
    catch (e) {
        return e.message
    }    
}