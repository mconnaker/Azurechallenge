window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const localApi = 'http://localhost:7071/api/apiacgarc';
const functionApi = 'https://apiacgarc.azurewebsites.net/api/HttpTrigger1?code=4W/fBqTxqeleng5qxgd0a9Kuh/RuFrQl5v/N6x6SPYy8wXvGNa3xFA=='; 

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