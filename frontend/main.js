window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const apigateway = 'https://acgarcupdatecount.azurewebsites.net/api/HttpTrigger1?code=J1uakCTqr0iEJAxbGFLzIONVyg74hUGtTpacLCdz2xdrUqXLZps1mw==';

const getVisitCount = () => {
    let count = 0;
    fetch(apigateway, {
        node: 'cors',
    })
    .then(response => {
        return response.json()
    })
    .then(res => {
        const count= res;
        document.getElementbyId('counter').innerText =count; 
    })
    return count;
}
