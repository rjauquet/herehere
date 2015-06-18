module.exports = function(){
    var count = 0;
    return function(){
        console.log('here', count++);
        return count;
    };
};
