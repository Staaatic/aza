(function(){
var c=document.createElement('div');
c.style.position='fixed';
c.style.top=c.style.left='0';
c.style.width='100%';
c.style.height='100%';
c.style.pointerEvents='none';
c.style.zIndex='10';
document.body.appendChild(c);

var s=120;

function f(){
var d=document.createElement('div');
var z=Math.random()*5+2;
d.style.position='absolute';
d.style.width=d.style.height=z+'px';
d.style.background='#fff';
d.style.borderRadius='50%';
d.style.opacity=Math.random()*0.5+0.5;
d.style.left=Math.random()*100+'vw';
d.style.top='-10px';
d.style.setProperty('--x',(Math.random()*200-100)+'px');
c.appendChild(d);

d.animate([
{transform:'translateY(-10px) translateX(0)'},
{transform:'translateY(100vh) translateX(var(--x))'}
],{
duration:Math.random()*20000+15000,
easing:'linear',
iterations:Infinity
});

if(--s>0)setTimeout(f,80);
else s=120,setTimeout(f,80);
}
f();

var k=document.createElement('style');
k.textContent='@keyframes f{to{transform:translateY(100vh) translateX(var(--x));}}';
document.head.appendChild(k);
})();
