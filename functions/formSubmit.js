exports.handler = async function (event, context) {
    console.log(JSON.stinfigy(context));
    return {
        statusCode: 200,
        body: JSON.stringify({})
    }
}