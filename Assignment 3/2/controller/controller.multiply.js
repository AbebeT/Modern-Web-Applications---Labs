module.exports.multiply = function(req, res){
    console.log("Get request to multiply")
    
    let number1 = 1;
    let number2 = 1; 

    if(req.params && req.params.number1){
        number1 = parseInt(req.params.number1);

    }
    if(req.query && req.query.number2){
        number2 = parseInt(req.query.number2);
    }

    console.log("req.params.number1 " + req.params.number1);
    console.log("req.query.number2 " + req.query.number2);

    console.log("number1 " +  number1);
    console.log("number2 " +  number2);

    const result = (number1 * number2).toString();
    res.status(200).send(result);
}