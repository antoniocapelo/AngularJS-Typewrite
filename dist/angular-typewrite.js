angular.module("angularTypewrite",[]),angular.module("angularTypewrite").directive("typewrite",["$timeout",function(a){function b(b,c,d){function e(){o=a(function(){f(c,0,0,k)},p)}function f(c,d,e,i){return d<=i.length?(c.html(i.substring(0,d)+t),d++,void(o=a(function(){f(c,d,e,i)},q))):void(l&&e<l.length-1?o=a(function(){h(c,d,e,k)},p):(b.callbackFn&&b.callbackFn(),g(c,d,k)))}function g(a,b){var c=a.text().substring(0,a.text().length-1);u?s?(n="-webkit-animation:blink-it steps(1) "+s+" infinite;-moz-animation:blink-it steps(1) "+s+" infinite -ms-animation:blink-it steps(1) "+s+" infinite;-o-animation:blink-it steps(1) "+s+" infinite; animation:blink-it steps(1) "+s+" infinite;",a.html(c.substring(0,b)+'<span class="blink" style="'+n+'">'+t+"</span>")):a.html(c.substring(0,b)+'<span class="blink">'+t+"</span>"):a.html(c.substring(0,b))}function h(b,c,d,e){return c>0?(e=e.slice(0,-1),b.html(e.substring(0,e.length-1)+t),c--,void(o=a(function(){h(b,c,d,e)},r))):(d++,e=l[d],o=a(function(){f(b,0,d,e)},q),void 0)}function i(a){return"string"==typeof a?"s"===a.charAt(a.length-1)?1e3*parseInt(a.substring(0,a.length-1),10):+a:!1}function j(a){return"string"==typeof a?"s"===a.charAt(a.length-1)?a:parseInt(a.substring(0,a.length-1),10)/1e3:void 0}var k,l,m,n,o=null,p=d.initialDelay?i(d.initialDelay):200,q=d.typeDelay||200,r=d.eraseDelay||q/2,s=d.blinkDelay?j(d.blinkDelay):!1,t=d.cursor||"|",u="undefined"!=typeof d.blinkCursor?"true"===d.blinkCursor:!0;b.text&&(b.text instanceof Array?(l=b.text,k=l[0]):k=b.text),("undefined"==typeof b.start||b.start)&&e(),b.$on("$destroy",function(){o&&a.cancel(o)}),b.$watch("start",function(a){!m&&a&&(m=!m,e())})}return{restrict:"A",link:b,scope:{text:"=",callbackFn:"&",start:"="}}}]);