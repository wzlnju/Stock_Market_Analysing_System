requirejs.config({paths:{jquery:"jquery.min"}}),requirejs(["jquery","validate","backtop"],function(e,o){e("#backTop").backtop({mode:"go",dest:30,pos:60}),console.log(o.isEqual(1,2))});