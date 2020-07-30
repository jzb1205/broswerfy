 module.exports = function(){     
    var $ = require('jquery')
     $(function(){
         $("body").html("Hello world, jquery version: " + $.fn.jquery);
     })
 };