/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  };
  this.moveRight = function(){
    this.left += 10;
  };
  this.moveDown = function () {
    this.top +=10;
  };
  this.moveLeft = function () {
    this.left -= 10;
  };
  this.moveTop = function () {
    this.top -= 10;
  };
}
var hero = new Hero('pikachu.png', 20, 30, 200);
function start(){
  if((hero.left < window.innerWidth - hero.size)&&(hero.top===20))
    hero.moveRight();
 else if((hero.top < window.innerHeight - hero.size) && (hero.left===1170))
       hero.moveDown();
 else if(hero.left >0 )
   hero.moveLeft();
 else  if((hero.top > 0)&& (hero.left===0))
   hero.moveTop();
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start,0);
}
start();