module.exports = function(){
    var count = 0;
    return function(){
        if (process.env.NODE_ENV !== "production") {
            console.log('here', count++);
        }
        return count;
    };
};
