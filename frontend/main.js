window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const apiGateway = 'https://acgarcupdatecount.azurewebsites.net/api/HttpTrigger1?code=AxUYLXmokvsQAAmE7dEN7T87q2w1DcQsKElY1R9jveHDtYHkBghVWQ==';

const getVisitCount = () => {
    let count = 0;
    fetch(apiGateway, {
        mode: 'cors',
    })
    .then(response => {
        return response.json()
    })
    .then(res => {
        const count= res.Attributes.visitcount;
        document.getElementbyId('counter').innerText =count; 
    })
    return count;
}
