!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);const n={BallRadius:20,width:window.innerWidth,height:window.innerHeight,SmashKoef:12,PotencialRadius:200,destation:20};class o{constructor(t){this.Radius=n.BallRadius;let e=Math.random()*n.width,i=Math.random()*n.height,o=1+2*Math.random(),s=Math.random()*Math.PI*2;this.Position={X:e,Y:i},this.PreviousPosition={X:e,Y:i},this.BestFunctionValue={X:e,Y:i},this.Speed={X:Math.cos(s)*o*5,Y:Math.sin(s)*o*5},this.Velocity=o,this.Angle=s,this.BestFunctionValue={X:e,Y:i},this.ConnectRadius=600}}class s{constructor(t){this.ctx=c.getContext("2d"),this.balls=t}Smash(){for(var t=0;t<this.balls.length;++t){let i=this.balls[t];for(var e=t+1;e<this.balls.length;++e){let t=this.balls[e],o=i.Position.X-t.Position.X,s=i.Position.Y-t.Position.Y;o*o+s*s<=n.SmashKoef*(2*i.Radius)&&(this.ctx.lineWidth=i.Radius,this.ctx.beginPath(),this.ctx.moveTo(i.x,i.y),this.ctx.lineTo(t.x,t.y),this.ctx.stroke(),i.Speed.X+=o*i.Radius/80,i.Speed.Y+=s*i.Radius/80,t.Speed.X-=o*i.Radius/80,t.Speed.Y-=s*i.Radius/80)}}}Anim(){this.tick++;let t=Math.random(),e=Math.random();this.ctx.translate(t,e),this.ctx.clearRect(0,0,c.width,c.height),this.balls.forEach(t=>this.Step(t)),this.Smash(),this.ctx.translate(-t,-e)}Step(t){t.Position.X+=t.Speed.X,t.Position.Y+=t.Speed.Y,t.Velocity>t.Radius/2&&(t.Velocity-=.5,t.Speed.X=Math.cos(t.Angle)*t.Velocity,t.Speed.Y=Math.sin(t.Angle)*t.Velocity),t.Position.X<0?(t.Position.X=0,t.Speed.X*=-1,this.ChangeAngle(t)):t.Position.X>n.width&&(t.Position.X=n.width,t.Speed.X*=-1,this.ChangeAngle(t)),t.Position.Y<0?(t.Position.Y=0,t.Speed.Y*=-1,this.ChangeAngle(t)):t.Position.Y>n.height&&(t.Position.Y=n.height,t.Speed.Y*=-1,this.ChangeAngle(t)),this.ctx.lineWidth=t.Radius,void 0!==this.CurrentFigure&&this.CurrentFigure.DrawPotencial(this.ctx),this.ctx.beginPath(),this.ctx.lineCap="round",this.ctx.moveTo(t.Position.X,t.Position.Y),this.ctx.lineTo(t.Position.X,t.Position.Y),this.ctx.stroke()}ChangeAngle(t){t.Angle=Math.atan(t.Speed.Y/t.Speed.X),t.Speed.X<0&&(t.Angle+=Math.PI),0!==t.Speed.X?t.Velocity=t.Speed.X/Math.cos(t.Angle):t.Velocity=t.Speed.Y/Math.sin(t.Angle)}SetRandomSpeed(){this.balls.forEach(t=>{let e=1+2*Math.random()/10,i=Math.random()*Math.PI*2/10;this.ball.Speed={X:Math.cos(i)*e,Y:Math.sin(i)*e},this.ball.Velocity=e,this.ball.Angle=i})}}class a extends s{constructor(t,e,i,o){super(t),this.StopX=e,this.StopY=i,this.CurrentFigure=o,this.destation=n.destation}Anim(){let t=Math.random(),e=Math.random();this.ctx.translate(t,e),this.ctx.clearRect(0,0,c.width,c.height),this.balls.forEach(t=>this.Step(t)),this.Smash(),this.balls.forEach(t=>{t=this.BestFromAllInRadius(t),t=this.SetBestValue(t),t=this.CorrectSpeed(t),this.CurrentFigure.GetPotencial(t.Position.X,t.Position.Y)&&(t.Speed.X=0,t.Speed.Y=0,t.Velocity=0,t.Angle=0)});var i=this.balls.every(t=>this.CurrentFigure.GetPotencial(t.Position.X,t.Position.Y));this.balls.every(t=>this.CurrentFigure.GetPotencial(t.Position.X,t.Position.Y,this.destation));i&&this.balls.forEach(t=>{t.Speed.X=0,t.Speed.Y=0,t.Velocity=0,t.Angle=0}),this.Smash(),this.ctx.translate(-t,-e)}CorrectSpeed(t){return null!=t.BestFromAll?(t.Speed.X=.03*t.Speed.X+.2*Math.random()*(t.BestFunctionValue.X-t.Position.X)+.5*Math.random()*(t.BestFromAll.X-t.Position.X),t.Speed.Y=.03*t.Speed.Y+.2*Math.random()*(t.BestFunctionValue.Y-t.Position.Y)+.5*Math.random()*(t.BestFromAll.Y-t.Position.Y)):(t.Speed.X=.3*t.Speed.X+Math.random()*(t.BestFunctionValue.X-t.Position.X),t.Speed.Y=.3*t.Speed.Y+Math.random()*(t.BestFunctionValue.Y-t.Position.Y)),t.Speed.X/=10,t.Speed.Y/=10,t}BestFromAllInRadius(t){var e=t.BestFunctionValue;return this.balls.forEach(i=>{Math.sqrt(Math.pow(Math.abs(i.Position.X-t.Position.X),2)+Math.pow(Math.abs(i.Position.Y-t.Position.Y),2))<=t.ConnectRadius&&this.OurFunction(i.BestFunctionValue.X,i.BestFunctionValue.Y)>this.OurFunction(t.BestFunctionValue.X,t.BestFunctionValue.Y)&&(e=i.BestFunctionValue)}),t.BestFromAll=e,t}SetBestValue(t){return this.OurFunction(t.Position.X,t.Position.Y)>this.OurFunction(t.BestFunctionValue.X,t.BestFunctionValue.Y)&&(t.BestFunctionValue.X=t.Position.X,t.BestFunctionValue.Y=t.Position.Y),t}OurFunction(t,e){let i=this.StopY-Math.abs(t-this.StopX);return this.StopX-Math.abs(e-this.StopY)+i}}class h{constructor(t,e,i){this.X=t,this.Y=e,this.PotencdialRadius=i}GetPotencial(t,e,i=0){let n=!1,o=Math.abs(t-this.X),s=Math.abs(e-this.Y);return Math.sqrt(o*o+s*s)<this.PotencdialRadius+i&&(n=!0),n}DrawPotencial(t){t.beginPath(),t.arc(this.X,this.Y,this.PotencdialRadius,0,2*Math.PI,!1);var e=t.lineWidth;t.lineWidth=2,t.stroke(),t.lineWidth=e}}class l{constructor(t,e,i){this.X=t,this.Y=e,this.PotencdialRadius=i}GetPotencial(t,e,i=0){let n=!1,o=Math.abs(t-this.X),s=Math.abs(e-this.Y);return o<this.PotencdialRadius+i&&s<this.PotencdialRadius+i&&(n=!0),n}DrawPotencial(t){t.beginPath(),t.rect(this.X-this.PotencdialRadius,this.Y-this.PotencdialRadius,2*this.PotencdialRadius,2*this.PotencdialRadius);var e=t.lineWidth;t.lineWidth=2,t.stroke(),t.lineWidth=e}}for(var r,d,u,P,p=["1","0"],S=[],g=n.SmashKoef,X=0,m=0;m<170;++m)S.push(new o(20));function Y(){r=window.requestAnimationFrame(Y),new s(S,n.SmashKoef).Anim()}function f(){r=window.requestAnimationFrame(f);let t=p[X];P=function(t,e,i,n){switch(t){case"0":return new h(e,i,n-25);case"1":return new l(e,i,n-46)}}(t,d,u,n.PotencialRadius),c.getContext("2d").clearRect(0,0,c.width,c.height);var e=new a(S,d,u,P,g);if(g=e.Anim(),S.every(t=>(function(t){return 0==t.Speed.X&&0==t.Speed.Y})(t))){if(console.log(X),window.cancelAnimationFrame(r),X==p.length-1)return;setTimeout(()=>{X++,P.DrawPotencial(c.getContext("2d")),f()},2e3)}}window.onload=function(){this.document.getElementById("c").width=window.innerWidth,this.document.getElementById("c").height=window.innerHeight,document.getElementById("c").onclick=function(t){window.cancelAnimationFrame(r),d=t.pageX,u=t.pageY,c.getContext("2d").clearRect(0,0,c.width,c.height),f()},Y()}}]);