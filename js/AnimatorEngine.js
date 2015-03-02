var AnimatorEngine = function() {
	this.animators = {};
	this.playList = {};
};

// default parameter for AnimatorEngine
AnimatorEngine.prototype.defaults = {
	fps: 30
};

// start animator engine
AnimatorEngine.prototype.start = function() {
	if(typeof this.fps !== 'number' || this.fps <= 0){
		this.fps = this.defaults.fps;
	}

	
	var that = this;
	setInterval(function(){

		var playList = that.playList;
		// console.log(that.playList);
		for (var key in playList) {
			if(playList[key].frameIndex < playList[key].frames.length) {
				that.singleFrameIntervalEvent(playList[key], playList[key].frameIndex);
				playList[key].frameIndex += 1;
			}
		}
		
		// if animator is finished playing, remove it from that.playList
		for (var key in playList) {
			if(playList[key].frameIndex >= playList[key].frames.length){
				delete playList[key];
			}
		};

	}, 1000/that.fps);
};

// override this method for other library, such as reactJS and AngularJS
AnimatorEngine.prototype.singleFrameIntervalEvent = function(animator, index) {
	var _a = animator;
	_a.element.src = _a.frames[index];
};

AnimatorEngine.prototype.registerAnimator = function(objectId, params) {
	console.log("Animator is registered : "+objectId);
	// initial animators
	this.animators[objectId] = {};
	this.animators[objectId].element = params.element;
	this.animators[objectId].frames = params.frames;
	this.animators[objectId].frameIndex = 0;

};

AnimatorEngine.prototype.playAnimator = function(objectId) {
	this.animators[objectId].frameIndex = 0;
	console.log(this.animators[objectId]);
	this.playList[objectId] = this.animators[objectId];
}