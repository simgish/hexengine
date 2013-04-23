function Prop(NAME, X, Y, H, W, FOREGROUND, ANIMATION, SPECIALTY_FUNCTION)
{
  system.log("Constructing Prop: " + NAME);
  var self = this;
  self.name = NAME;
  self.type = 'prop';
  self.x = X;
  self.y = Y;
  self.height = H;
	self.width = W;
  self.foreground = FOREGROUND;
	var animate = new Animation_Manager();
	animate.addPreMadeAnimation(ANIMATION.name, ANIMATION);
	self.specialtyFunction = SPECIALTY_FUNCTION;

  this.update = function()
  {
  	animate.updateAnimations();
  	self.specialtyFunction();
  }

  this.draw = function()
  {
  	canvas.drawImage(asset.tex[animate.currentTexture()], animate.left(), animate.top(), animate.tileSize(), animate.tileSize(), h.X(self.x - (animate.tileSize()/2)), h.Y(self.y - (animate.tileSize()/2)), animate.tileSize(), animate.tileSize());
  }
}