window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'https://acgarcupdatecount.azurewebsites.net/api/HttpTrigger1?code=AxUYLXmokvsQAAmE7dEN7T87q2w1DcQsKElY1R9jveHDtYHkBghVWQ=='; 

const getVisitCount = () => {
    let count = 0;
    fetch(functionApi, {
        node: 'cors',
    })
    .then(response => {
        return response.json()
    })
    .then(res => {
        const count= res.Atributes.visitcount;
        document.getElementbyId('counter').innerText =count;
        document.getElementById()'vistorElem').style.display = 'block';   
    })
    return count;
}
