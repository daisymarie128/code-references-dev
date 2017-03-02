/*--------------

	Material references:
	This is just a basic reference of standard materials.
	TODO: Create custom materials.

-----------------*/


// INTERNAL
import SceneHolder from '../../modules/scene';
import OrbitControls from 'three-orbitcontrols';

import {
	Mesh,
	Color,
	PlaneBufferGeometry,
	ShaderMaterial,
	MeshBasicMaterial,
	DirectionalLight,
	AmbientLight,
	DoubleSide,
	// Vector2,
	TextureLoader,
	REPEAT_WRAPPING,
} from 'three';

const init = () => {
	this.stage = new SceneHolder();
	this.stage.start();
	this.stage.camera.position.x = 100;
	this.stage.camera.position.y = 400;
	this.stage.camera.position.z = 200;
	this.stage.renderer.gammaInput = true;
	this.stage.renderer.gammaOutput = true;
	this.time = 0;
	createLights();
	createFloor();
	createControls();

	// const purple = new Color('#745abd');
	// const blue = new Color('#293abc');

};

const createLights = () => {
	let directionalLight = new DirectionalLight(0xffffff, 0.125 );
	directionalLight.position.normalize();
	this.stage.scene.add(directionalLight);

	this.stage.scene.add(new AmbientLight(0xffffff));

	window.addEventListener('resize', onWindowResize);
};

const createControls = () => {
	this.controls = new OrbitControls(this.stage.camera);
	this.controls.enabled = true;
	this.controls.maxDistance = 1500;
	this.controls.minDistance = 0;
	// controls.enableZoom = true;
};

const createFloor = () => {
	const geometry = new PlaneBufferGeometry(450, 450, 400, 400);
	geometry.verticesNeedUpdate = true;
	this.uniforms = {
		uMap: {type: 't', value: null},
		uTime: {type: 'f', value: 0},
	};

	const material = new ShaderMaterial( {
		uniforms: this.uniforms,
		vertexShader: document.getElementById('vertexshader').textContent,
		fragmentShader: document.getElementById('fragmentshader').textContent,
		side: DoubleSide,
	});

	var textureLoader = new TextureLoader();
	textureLoader.load('../../assets/textures/tileable.jpg', function (texture) {
		material.uniforms.uMap.value = texture;
		texture.wrapS = texture.wrapT = REPEAT_WRAPPING;
	});

	this.plane = new Mesh(geometry, material);
	this.plane.rotation.x = Math.PI / 2;
	this.plane.position.y = 35;
	this.plane.position.z = 35;
	this.stage.scene.add(this.plane);
};

const onWindowResize = () => {
	this.stage.camera.aspect = window.innerWidth / window.innerHeight;
	this.stage.camera.updateProjectionMatrix();
	this.stage.renderer.setSize(window.innerWidth, window.innerHeight);
};

const animate = (e) => {
	this.time++;
	// this.uniforms.time.value = this.time;
	// this.sphere12.material.alphaMap.offset.y = this.time * 0.002;
	this.uniforms.uTime.value = e * 0.001;
	requestAnimationFrame(animate);
	render();
};

const render = () => {
	if (this.controls) this.controls.update();
	this.stage.renderer.render(this.stage.scene, this.stage.camera);
};

init();
animate();
