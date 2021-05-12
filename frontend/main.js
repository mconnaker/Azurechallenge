window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const ApiGateway = 'https://acgarcupdatecount.azurewebsites.net/api/HttpTrigger1?code=AxUYLXmokvsQAAmE7dEN7T87q2w1DcQsKElY1R9jveHDtYHkBghVWQ=='; 

const getVisitCount = () => {
    let count = 0;
    fetch(ApiGateway)
    
    .then(response => {
        return response.json()
    })

    .then(response => {
        console.log("Website called function API.");
        const count = res;
        document.getElementById('counter').innerText = count;
    })

    return count;
}