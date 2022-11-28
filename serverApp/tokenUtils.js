function generateToken(){
    var rand = function() {
        return Math.random().toString(36).substr(2); // remove `0.`
    };
    var token = function() {
        return rand() + rand() + rand() + rand(); // to make it longer
    };
    return token()
}

module.exports = generateToken;