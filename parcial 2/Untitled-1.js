// Importar la biblioteca Three.js
import * as THREE from 'three';
// Crear la escena, la cámara y el renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear una esfera de radio uno centrada en el origen de coordenadas
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({color: 0xffffff});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Escalar la esfera
sphere.scale.set(8, 0.5, 3);


// Aplicar transformaciones para colocar la esfera en la posición deseada
const translate = new THREE.Matrix4().makeTranslation(0, 2, 0);
const rotate = new THREE.Matrix4().makeRotationY(Math.PI/4).multiply(new THREE.Matrix4().makeRotationX(-Math.atan(2)));
const scale = new THREE.Matrix4().makeScale(0.5, 1, 1);
sphere.applyMatrix4(translate).applyMatrix4(rotate).applyMatrix4(scale);

// Mover la cámara para ver la esfera
camera.position.z = 10;

// Renderizar la escena
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();