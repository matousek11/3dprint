import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


let width = 500;
let height = 500;

const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(width, height);
renderer.setClearColor(0x000000, 0);
renderer.setPixelRatio(window.devicePixelRatio);

let container = document.getElementById('model-container');
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
camera.position.set(1, 2, 5);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDumping = true;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = true;
controls.target = new THREE.Vector3(0, 0, 0);
controls.update();

const spotLight = new THREE.SpotLight(0xffffff, 300, 0, 0.2, 0.5);
spotLight.position.set(20, 25, 20);
scene.add(spotLight);

const loader = new GLTFLoader();
loader.load('3dModels/bricks.gltf', (gltf) => {
    const mesh = gltf.scene;
    mesh.position.set(0, 0, 0);
    scene.add(mesh);
});

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();