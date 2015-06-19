# herehere
Simple JavaScript debug function

#### Using herehere

To install, run `npm install herehere --save`

Then do something like this:

``` javascript
//get the library
var herehere = require('herehere');

//make a new herehere
var here = herehere();

function iNeedDebugging(){
  //call here whenever you want to know if this function ran. Its basically a counter.
  here();
  //really bad code goes here
  ...
}

for(var i=0; i<1234; i++){
  iNeedDebugging();
}

//now here has been console.logging the whole time, and it also returns the current count
//so you could do something stupid like this
if(here() === 1234){
  //then it ran all those times. pretty great.
}
```

#### Contributing

Fork or clone the repository. Assuming node is installed, just run `npm install` from the main directory

To test once, run `gulp test`
To test continuously, run `gulp tdd`




License - MIT
