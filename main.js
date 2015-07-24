var c = document.getElementById('canvas'),
	ctx = c.getContext('2d');
	chars = '田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑',
	// c.width = window.outerWidth,
	// c.height = window.outerHeight,
	c.width = window.innerWidth,
	c.height = window.innerHeight,
	drops = [],
	fontSize = 12;

chars = chars.split('');

var columns = c.width / fontSize;
for(var x = 0; x < columns; x++){
	drops[x] = 1;
}

function draw(){
	ctx.fillStyle = 'rgba(0,0,0,0.05)';
	ctx.fillRect(0, 0, c.width, c.height);
	ctx.fillStyle = '#0f0';
	ctx.font = fontSize + 'px arial';

	for(var i = 0; i < drops.length; i++){
		var text = chars[Math.floor(Math.random() * chars.length)];
		ctx.fillText(text, i * fontSize, drops[i] * fontSize);

		if(drops[i]*fontSize > c.height && Math.random() > 0.95){
			drops[i] = 0;
		}
		drops[i]++;
	}
}

setInterval(draw, 40);