import * as THREE from "../node_modules/three/build/three.module.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry( 15, 32, 32 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

camera.position.z = 40;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();