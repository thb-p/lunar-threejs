import * as THREE from "../node_modules/three/build/three.module.js";
//import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls"
import OrbitControls from 'https://cdn.skypack.dev/threejs-orbit-controls';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls( camera, renderer.domElement );
const texture = new THREE.TextureLoader().load('../texture/lroc_color_poles_8k.png');

const moonGeometry = new THREE.SphereGeometry( 15, 32, 32 );
const moonMaterial = new THREE.MeshBasicMaterial({map: texture});
const moon = new THREE.Mesh( moonGeometry, moonMaterial );
scene.add( moon );

camera.position.z = 40;

function animate() {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );
}
animate();