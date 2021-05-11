window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const apigateway = 'https://acgarcupdatecount.azurewebsites.net/api/HttpTrigger1?code=AxUYLXmokvsQAAmE7dEN7T87q2w1DcQsKElY1R9jveHDtYHkBghVWQ==';

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
