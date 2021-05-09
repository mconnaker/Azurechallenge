window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const localApi = 'http://localhost:7071/api/apiacgarc';
const functionApi = 'https://updatecount.azurewebsites.net/api/updatecount'; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}
