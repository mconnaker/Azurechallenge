module.exports = async function (context, req, data) {
    context.log('JavaScript HTTP Trigger function processed a request.');
    
    context.bindings.outputDocument = data[0];
    context.bindings.outputDocument.count += 1;

    context.res = {
        body: data[0].count
        };
}