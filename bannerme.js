(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"bannerme_atlas_1", frames: [[0,117,102,102],[0,0,242,52],[0,54,203,61]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["bannerme_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.initialize(ss["bannerme_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.initialize(ss["bannerme_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Ooo, aaa, where will the mystical eyes take you today?", "15px 'Javanese Text'", "#FFFF00");
	this.text.lineHeight = 36;
	this.text.lineWidth = 426;
	this.text.parent = this;
	this.text.setTransform(-212.85,-17);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214.8,-19,429.70000000000005,38.1);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Ooo, aaa, where will the mystical eyes take you today", "15px 'Javanese Text'", "#FFFF00");
	this.text.lineHeight = 36;
	this.text.lineWidth = 426;
	this.text.parent = this;
	this.text.setTransform(-212.85,-17.05);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214.8,-19,429.70000000000005,38);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-25.55,-25.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-25.5,51,51);


(lib.safe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(-102,-30);

	this.text = new cjs.Text("Somewhere safe", "25px 'Javanese Text'", "#FFFFFF");
	this.text.lineHeight = 59;
	this.text.lineWidth = 199;
	this.text.parent = this;
	this.text.setTransform(-99.5,-16.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.text,p:{x:-99.5,y:-16.35,color:"#FFFFFF"}}]},1).to({state:[{t:this.text,p:{x:-103.5,y:-15.35,color:"#FF0000"}}]},1).to({state:[]},1).wait(1));

	// skin
	this.instance_1 = new lib.Bitmap10();
	this.instance_1.setTransform(-121,-32);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("Ayvj5MAlfAAAIAAHzMglfAAAg");
	this.shape.setTransform(-0.45,-5.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AyvD6IAAnzMAlfAAAIAAHzg");
	this.shape_1.setTransform(-0.45,-5.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.4,-32,242.4,75.4);


(lib.danger = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("Somewhere dangerous", "23px 'Javanese Text'");
	this.text.lineHeight = 54;
	this.text.lineWidth = 258;
	this.text.parent = this;
	this.text.setTransform(-112,-20.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({y:-19.3,color:"#FFFFFF"},0).wait(1).to({y:-18.3,color:"#00FF00"},0).to({_off:true},1).wait(1));

	// skin
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("Ayvj5MAlfAAAIAAHzMglfAAAg");
	this.shape.setTransform(-0.5,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AyvD6IAAnzMAlfAAAIAAHzg");
	this.shape_1.setTransform(-0.5,-5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-31.5,269.5,74.3);


// stage content:
(lib.bannerme = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [59];
	// timeline functions:
	this.frame_59 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.danger.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://www.youtube.com/watch?v=8eHyQR4odlY', '_blank');
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.safebutton.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://youtu.be/EE-xtCF3T94', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// danger_button
	this.danger = new lib.danger();
	this.danger.name = "danger";
	this.danger.setTransform(321.4,45.35,0.5127,0.5171,0,0,0,0.2,0.2);
	this.danger._off = true;
	new cjs.ButtonHelper(this.danger, 0, 1, 2, false, new lib.danger(), 3);

	this.timeline.addTween(cjs.Tween.get(this.danger).wait(59).to({_off:false},0).wait(1));

	// safe_button
	this.safebutton = new lib.safe();
	this.safebutton.name = "safebutton";
	this.safebutton.setTransform(166.05,43.15,0.5305,0.5305,0,0,0,0.2,0.1);
	this.safebutton._off = true;
	new cjs.ButtonHelper(this.safebutton, 0, 1, 2, false, new lib.safe(), 3);

	this.timeline.addTween(cjs.Tween.get(this.safebutton).wait(59).to({_off:false},0).wait(1));

	// logo
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(501.55,30.1,0.9999,0.9999,139.7747,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:30,y:30},29).wait(31));

	// logo_copy
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(-30.2,30.05,0.9999,0.9999,-115.2256,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:59.9996,x:440,y:30},29).wait(31));

	// text
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(276,-31.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(280,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},37).to({state:[{t:this.instance_3}]},7).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37).to({_off:false},0).to({_off:true,x:280,y:19},7).wait(16));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("EgktgErMBJbAAAIAAJXMhJbAAAg");
	this.shape.setTransform(234.5,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D3D3D3","#000000"],[0,1],-235,0,235,0).s().p("EgktAEsIAApXMBJbAAAIAAJXg");
	this.shape_1.setTransform(234.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(170,-20.6,367.70000000000005,87.9);
// library properties:
lib.properties = {
	id: '8AE5B88A24259448BF89F78628766762',
	width: 468,
	height: 60,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/bannerme_atlas_1.png", id:"bannerme_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8AE5B88A24259448BF89F78628766762'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;