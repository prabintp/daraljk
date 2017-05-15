jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){return(t/=d/2)<1?c/2*t*t+b:-c/2*(--t*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){return(t/=d/2)<1?c/2*t*t*t+b:c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){return(t/=d/2)<1?c/2*t*t*t*t+b:-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){return(t/=d/2)<1?c/2*t*t*t*t*t+b:c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return 0==t?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return t==d?b+c:c*(1-Math.pow(2,-10*t/d))+b},easeInOutExpo:function(x,t,b,c,d){return 0==t?b:t==d?b+c:(t/=d/2)<1?c/2*Math.pow(2,10*(t-1))+b:c/2*(2-Math.pow(2,-10*--t))+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){return(t/=d/2)<1?-c/2*(Math.sqrt(1-t*t)-1)+b:c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158,p=0,a=c;if(0==t)return b;if(1==(t/=d))return b+c;if(p||(p=.3*d),a<Math.abs(c)){a=c;s=p/4}else s=p/(2*Math.PI)*Math.asin(c/a);return-a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158,p=0,a=c;if(0==t)return b;if(1==(t/=d))return b+c;if(p||(p=.3*d),a<Math.abs(c)){a=c;s=p/4}else s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158,p=0,a=c;if(0==t)return b;if(2==(t/=d/2))return b+c;if(p||(p=d*(.3*1.5)),a<Math.abs(c)){a=c;s=p/4}else s=p/(2*Math.PI)*Math.asin(c/a);return t<1?a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*-.5+b:a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){return void 0==s&&(s=1.70158),c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){return void 0==s&&(s=1.70158),c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){return void 0==s&&(s=1.70158),(t/=d/2)<1?c/2*(t*t*((1+(s*=1.525))*t-s))+b:c/2*((t-=2)*t*((1+(s*=1.525))*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){return(t/=d)<1/2.75?c*(7.5625*t*t)+b:t<2/2.75?c*(7.5625*(t-=1.5/2.75)*t+.75)+b:t<2.5/2.75?c*(7.5625*(t-=2.25/2.75)*t+.9375)+b:c*(7.5625*(t-=2.625/2.75)*t+.984375)+b},easeInOutBounce:function(x,t,b,c,d){return t<d/2?.5*jQuery.easing.easeInBounce(x,2*t,0,c,d)+b:.5*jQuery.easing.easeOutBounce(x,2*t-d,0,c,d)+.5*c+b}});