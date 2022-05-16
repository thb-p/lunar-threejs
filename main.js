import * as THREE from "../node_modules/three/build/three.module.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const texture = new THREE.TextureLoader().load('../texture/dem_16_uint.png');

const moonGeometry = new THREE.SphereGeometry( 15, 32, 32 );
const moonMaterial = new THREE.MeshBasicMaterial({map: texture});
const moon = new THREE.Mesh( moonGeometry, moonMaterial );
scene.add( moon );

camera.position.z = 40;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();