import {
	PerspectiveCamera,
	Scene,
	WebGLRenderer,
} from 'three';

export default class SceneHolder {
	init() {
		const container = document.getElementById('container');
		this.camera = new PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
		// this.camera.position.z = 400;
		this.scene = new Scene();
		this.renderer = new WebGLRenderer();
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		// this.renderer.setClearColor(0xffffff);

		container.appendChild(this.renderer.domElement);
	}

	static camera() {
		return this.camera;
	}

	static scene() {
		return this.scene;
	}

	static renderer() {
		return this.renderer;
	}

	start() {
		return this.init();
	}
}
