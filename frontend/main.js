window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const functionApi = 'https://updatecount.azurewebsites.net/api/updatecount?code=tL1Ovq3m8GAJ1abXTYeC/NtLbelG39Zyj3C8yphJ5mUCcnya5v2t5A=='; 

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
