
const apiURL = "https://opentdb.com/api.php?"


const domParser = new DOMParser();

function parseHtml(html) {
  const doc = domParser.parseFromString(html, "text/html");
  return doc.documentElement.textContent || "";
}

export default parseHtml


export async function apiFetchQuestions(amount, category, difficulty, type) {

    try {
        const response = await fetch(`${apiURL}` + "amount=" + amount + "&category=" + category + "&difficulty=" + difficulty + "&type=" + type)
        const questions = await response.json()
        const questionsList = questions.results
        for(let i = 0; i < questionsList.length; i++){
            const question = parseHtml(questionsList[i].question)
            questionsList[i].question = question
        }
        console.log(questionsList)
        return questionsList
        
    }
    catch (e) {
        return e.message
    }    
}