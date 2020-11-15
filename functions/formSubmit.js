exports.handler = async function (event, context) {
    console.log(JSON.stringify(context));
    console.log(JSON.stringify(event));
    return {
        statusCode: 200,
        body: JSON.stringify({})
    }
}