import "./style.css";
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// scence

const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(3, 64, 64);

const material = new THREE.MeshStandardMaterial({
  color: "gold",
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// mesh.position.x = 4;
mesh.position.set( 5, 0, 0 );
// light

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// camera

const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 20;
scene.add(camera);

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.updateProjectionMatrix();
  camera.aspect = sizes.width / sizes.height;
  renderer.setSize(sizes.width, sizes.height);
});

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 1;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 3;
renderer.setPixelRatio = 5;

const loop = () => {
  // mesh.rotation.x += 0.2
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
loop();
