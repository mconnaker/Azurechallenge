window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'https://acgarcupdatecount.azurewebsites.net/api/HttpTrigger1?code=J1uakCTqr0iEJAxbGFLzIONVyg74hUGtTpacLCdz2xdrUqXLZps1mw=='; 

const getVisitCount = () => {
    let count = 0;
    fetch(functionApi, {
        node: 'cors',
    })
    .then(response => {
        return response.json()
    })
    .then(res => {
        const count= res;
        document.getElementbyId('counter').innerText =count;
        document.getElementById()'vistorElem').style.display = 'block';   
    })
    return count;
}
