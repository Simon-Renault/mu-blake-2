import anime from 'animejs'

export default class Path {
	constructor(el) {
		this.DOM = {};
		this.DOM.el = el;
		this.paths = {};
		this.paths.start = this.DOM.el.getAttribute('d');
		this.paths.end = this.DOM.el.dataset.morphPath;

		this.transforms = {};
		this.transforms.start = this.DOM.el.getAttribute('transform');
		this.transforms.end = this.DOM.el.dataset.morphTransform;

		this.CONFIG = {
			animation: {
				path: {
					duration: this.DOM.el.dataset.animationPathDuration || 1500,
					delay: this.DOM.el.dataset.animationPathDelay || 0,
					easing: this.DOM.el.dataset.animationPathEasing || 'easeOutElastic',
					elasticity: this.DOM.el.dataset.pathElasticity || 400,
					scaleX: this.DOM.el.dataset.pathScalex || 1,
					scaleY: this.DOM.el.dataset.pathScaley || 1,
					translateX: this.DOM.el.dataset.pathTranslatex || 0,
					translateY: this.DOM.el.dataset.pathTranslatey || 0,
					rotate: this.DOM.el.dataset.pathRotate || 0
				}
			}
		};
		this.initEvents();
	}
	initEvents() {
		this.mouseenterFn = () => {
			this.mouseTimeout = setTimeout(() => {
				this.isActive = true;
				this.animate();
			}, 75);
		}
		this.mouseleaveFn = () => {
			clearTimeout(this.mouseTimeout);
			if( this.isActive ) {
				this.isActive = false;
				this.animate();
			}
		}
	}
	hoverIn(){
		this.mouseenterFn()
	}
	hoverOut(){
		this.mouseleaveFn()
	}
	getAnimeObj(targetStr,el) {
		const target = el;
		let animeOpts = {
			targets: target,
			duration: this.CONFIG.animation[targetStr].duration,
			delay: this.CONFIG.animation[targetStr].delay,
			easing: this.CONFIG.animation[targetStr].easing,
			elasticity: this.CONFIG.animation[targetStr].elasticity,	
			scaleX: this.isActive ? this.CONFIG.animation[targetStr].scaleX : 1,
			scaleY: this.isActive ? this.CONFIG.animation[targetStr].scaleY : 1,
			translateX: this.isActive ? this.CONFIG.animation[targetStr].translateX : 0,
			translateY: this.isActive ? this.CONFIG.animation[targetStr].translateY : 0,
			rotate: this.isActive ? this.CONFIG.animation[targetStr].rotate : 0
		};
		animeOpts.d = this.isActive ? this.paths.end : this.paths.start;
		anime.remove(target);
		return animeOpts;
	}
	animate() {
		anime(this.getAnimeObj('path',this.DOM.el));
	}
}




