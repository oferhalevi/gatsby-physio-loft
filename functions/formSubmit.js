exports.handler = async function (evt, context) {
    console.log(JSON.stringify(evt));
    return {
        statusCode: 200,
        body: JSON.stringify({})
    }
}