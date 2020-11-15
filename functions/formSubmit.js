exports.handler = async function (event, context) {
    console.log(JSON.stringify(context));
    return {
        statusCode: 200,
        body: JSON.stringify({})
    }
}