//Defined api URL
const apiURL = "https://opentdb.com/api_category.php"

//Fetch function for the catagories available
export async function apiFetchCategories() {

    try {
        const response = await fetch(apiURL)
        const categories = await response.json()
        const categoriesList = await categories.trivia_categories
        console.log(categoriesList)
        return categoriesList
        
    }
    catch (e) {
        return e.message
    }    
}