import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(innerHeight, innerWidth);
document.body.appendChild(renderer.domElement);

// We create a sphere
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.MeshBasicMaterial({
    color: 0xFF0000
}))

console.log(sphere)

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate()