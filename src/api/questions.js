//Defined api URL
const apiURL = "https://opentdb.com/api.php?"

//Creates a DOMParser
const domParser = new DOMParser();
//Sets a parser fot text/html
function parseHtml(html) {
  const doc = domParser.parseFromString(html, "text/html");
  return doc.documentElement.textContent || "";
}
export default parseHtml

//Fetch function for the questions the user choose
export async function apiFetchQuestions(amount, category, difficulty, type) {

    try {
        const response = await fetch(`${apiURL}` + "amount=" + amount + "&category=" + category + "&difficulty=" + difficulty + "&type=" + type)
        const questions = await response.json()
        const questionsList = questions.results
        //For loops to parse the html to clean text
        for(let i = 0; i < questionsList.length; i++){
            const question = parseHtml(questionsList[i].question)
            questionsList[i].question = question
            const answer = parseHtml(questionsList[i].correct_answer)
            questionsList[i].correct_answer = answer
            for(let j = 0; j < questionsList[i].incorrect_answers.length; j++){
                const answers = parseHtml(questionsList[i].incorrect_answers[j])
                questionsList[i].incorrect_answers[j] = answers
            }
        }
        
        console.log(questionsList)
        return questionsList
        
    }
    catch (e) {
        return e.message
    }    
}