/*--------------

	Material references:
	This is just a basic reference of standard materials.
	TODO: Create custom materials.

-----------------*/


// INTERNAL
import SceneHolder from '../../modules/scene';
import OrbitControls from 'orbit-controls-es6';

import {
	Mesh,
	Color,
	SphereGeometry,
	PlaneGeometry,
	MeshBasicMaterial,
	MeshLambertMaterial,
	MeshNormalMaterial,
	MeshPhongMaterial,
	MeshPhysicalMaterial,
	MeshStandardMaterial,
	MeshToonMaterial,
	DirectionalLight,
	AmbientLight,
	DoubleSide,
	FlatShading,
} from 'three';

const init = () => {
	this.stage = new SceneHolder();
	this.stage.start();
	createLights();
	createFloor();
	createControls();

	const purple = new Color('#745abd');
	const blue = new Color('#293abc');

	// GEOMETRY
	const geometry = new SphereGeometry(35, 20, 20);

	// MATERIALS
	const material = new MeshBasicMaterial({ color: purple });
	const normalMaterial = new MeshNormalMaterial();
	const wireFrameMaterial = new MeshNormalMaterial();
	wireFrameMaterial.wireframe = true;

	const flatMaterial = new MeshLambertMaterial({
		color: purple,
		shading: FlatShading,
	});

	const lambertMaterial = new MeshLambertMaterial({
		color: purple,
		emissive: blue,
	});

	const promhongMaterial = new MeshPhongMaterial({
		color: purple,
		specular: blue,
		shininess: 50.5,
	});

	const physicalMaterial = new MeshPhysicalMaterial({
		color: purple,
		metalness: 1,
		roughness: 0.5,
		emissive: blue,
		emissiveIntensity: 0.2,
	});

	const standardMaterial = new MeshStandardMaterial({
		color: purple,
		metalness: 1,
		roughness: 0.3,
		emissive: blue,
		emissiveIntensity: 0.2,
	});

	const toonMaterial = new MeshToonMaterial({
		color: purple,
		metalness: 1,
		roughness: 0.3,
		emissive: blue,
		emissiveIntensity: 0.2,
	});

	// TODO: Refactor into loop
	const sphere = new Mesh(geometry, normalMaterial);
	const sphere2 = new Mesh(geometry, lambertMaterial);
	const sphere3 = new Mesh(geometry, material);
	const sphere4 = new Mesh(geometry, promhongMaterial);
	const sphere5 = new Mesh(geometry, physicalMaterial);
	const sphere6 = new Mesh(geometry, standardMaterial);
	const sphere7 = new Mesh(geometry, toonMaterial);
	const sphere8 = new Mesh(geometry, wireFrameMaterial);
	const sphere9 = new Mesh(geometry, flatMaterial);

	sphere.position.x = -80;
	sphere2.position.x = 0;
	sphere3.position.x = 80;
	sphere4.position.x = 160;
	sphere5.position.x = -80;
	sphere6.position.x = 0;
	sphere7.position.x = 80;
	sphere8.position.x = 160;
	sphere9.position.x = -80;

	sphere5.position.z = -80;
	sphere6.position.z = -80;
	sphere7.position.z = -80;
	sphere8.position.z = -80;
	sphere9.position.z = -80;

	this.stage.scene.add(sphere);
	this.stage.scene.add(sphere2);
	this.stage.scene.add(sphere3);
	this.stage.scene.add(sphere4);
	this.stage.scene.add(sphere5);
	this.stage.scene.add(sphere6);
	this.stage.scene.add(sphere7);
	this.stage.scene.add(sphere8);
	this.stage.scene.add(sphere9);
};

const createLights = () => {
	let directionalLight = new DirectionalLight(0xffffff, 0.125 );
	directionalLight.position.normalize();
	this.stage.scene.add(directionalLight);

	this.stage.scene.add(new AmbientLight(0xffffff));

	window.addEventListener('resize', onWindowResize);
};

const createControls = () => {
	const controls = new OrbitControls(this.stage.camera);
	controls.enabled = true;
	controls.maxDistance = 1500;
	controls.minDistance = 0;
	controls.enableZoom = true;
};

const createFloor = () => {
	var geometry = new PlaneGeometry( 700, 700, 10 );
	var material = new MeshBasicMaterial( {color: 0xfcfcfc, side: DoubleSide} );
	var plane = new Mesh(geometry, material);
	plane.rotation.x = Math.PI / 2;
	plane.position.y = -35;
	plane.position.z = -35;
	this.stage.scene.add(plane);
};

const onWindowResize = () => {
	this.stage.camera.aspect = window.innerWidth / window.innerHeight;
	this.stage.camera.updateProjectionMatrix();
	this.stage.renderer.setSize(window.innerWidth, window.innerHeight);
};

const animate = () => {
	requestAnimationFrame(animate);
	render();
};

const render = () => {
	this.stage.renderer.render(this.stage.scene, this.stage.camera);
};

init();
animate();
