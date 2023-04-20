


// Definir variables globales para los parámetros de la esfera y las transformaciones
const R = 1; // Radio inicial de la esfera
const Sx = 8; // Factor de escala en x
const Sy = 0.5; // Factor de escala en y
const Sz = 3; // Factor de escala en z
const Rx = Math.PI/4; // Ángulo de rotación en x en radianes
const Ry = -Math.atan(2); // Ángulo de rotación en y en radianes
const Rz = 0; // Ángulo de rotación en z en radianes
const Tx = 0; // Dimensión de traslación en x
const Ty = 2; // Dimensión de traslación en y
const Tz = 0; // Dimensión de traslación en z

// Crear la escena, la cámara y el renderizador
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 10);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Agregar ejes y rejilla al escenario
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);

// Crear la esfera con el radio y material definidos
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const geometry = new THREE.SphereGeometry(R, 32, 32);
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Escalar la esfera según los factores de escala definidos
sphere.scale.set(Sx, Sy, Sz);

// Definir las matrices de transformación para rotar, trasladar y escalar la esfera
const translate = new THREE.Matrix4().makeTranslation(Tx, Ty, Tz);
const rotate = new THREE.Matrix4().makeRotationX(Rx).multiply(new THREE.Matrix4().makeRotationY(Ry)).multiply(new THREE.Matrix4().makeRotationZ(Rz));
const scale = new THREE.Matrix4().makeScale(1, 1, 1); // Se aplicará la escala anteriormente definida en el objeto 'sphere'
const matrix = new THREE.Matrix4().multiplyMatrices(translate, rotate).multiply(scale);

// Aplicar la matriz de transformación a la esfera
sphere.applyMatrix4(matrix);

// Renderizar la escena
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();