function PieChart( option ) {
	this._init( option );
}

PieChart.prototype = {
	_init: function( option ) {
		this.x = option.x || 0;
        this.y = option.y || 0;
		this.radius = option.radius || 0;
		this.data = option.data || [];

		this.wedgeGroup = new Konva.Group({
			x: this.x,
			y: this.y
		});

		this.textGroup = new Konva.Group({
			x: this.x,
			y: this.y
		});

		var radius = this.radius;
		var tempAngle = -90;
		var data = this.data;
		var self = this;
		data.forEach(function(item ,i ) {
			var angle =  data[i].value * 360;
			var wedge = new Konva.Wedge({
				x: 0,
				y: 0,
				radius: radius,
				fill: data[i].color,
				angle: 360 * data[i].value,
				rotation: tempAngle
			});

			var textX = (radius+20) * Math.cos(Math.PI * ( tempAngle + 1/2 * angle)/180);
			var textY = (radius+20) * Math.sin(Math.PI * (tempAngle + 1/2 * angle)/180);

			var text = new Konva.Text({
				x: (radius+20) * Math.cos(Math.PI * ( tempAngle + 1/2 * angle)/180),
				y: (radius+20) * Math.sin(Math.PI * (tempAngle + 1/2 * angle)/180),
				text: data[i].name,
				fill: data[i].color
			});
			if( tempAngle + 1/2* angle > 90 && tempAngle+ 1/2*angle< 270) {
				 text.x(textX - text.width());
			}

			self.textGroup.add( text);

			tempAngle += angle;
			self.wedgeGroup.add( wedge );
		});

		var outerCircle = new Konva.Circle({
			x: 0,
			y: 0,
			radius: radius + 10,
			stroke: 'lightgreen',
			strokeWidth: 1,
		});
		this.wedgeGroup.add( outerCircle );

		this._animateIndex = 0;
	},
	addToGroupOrLayer: function( arg ) {

		arg.add(this.wedgeGroup);
		arg.add(this.textGroup);
	},
	playAnimate: function() {	
		if( this._animateIndex >= this.data.length ) {
			this._animateIndex = 0;
			return;
		}

		if( this._animateIndex == 0 ) {
			this.wedgeGroup.find('Wedge').each(function(item){
				item.angle( 0 );
			});
		}

		var self = this;
		var wedges = this.wedgeGroup.find('Wedge');
		wedges[this._animateIndex].to({
			duration: 2 * this.data[this._animateIndex].value,
			angle: 360 * this.data[this._animateIndex].value,
			onFinish: function() {
				self._animateIndex++;
				self.playAnimate();
			}
		});

	}
}