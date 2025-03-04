// THREE.js setup for infinite grid
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 10, 30);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('.grid-background').appendChild(renderer.domElement);

const gridCount = 30;
const gridSize = 2;
const material = new THREE.LineBasicMaterial({ color: 0xffffff });
const geometry = new THREE.BufferGeometry();
const positions = [];

// Create the grid lines
for (let i = -gridCount; i < gridCount; i++) {
    for (let j = -gridCount; j < gridCount; j++) {
        positions.push(i * gridSize, 0, j * gridSize);
        positions.push((i + 1) * gridSize, 0, j * gridSize);
        positions.push(i * gridSize, 0, j * gridSize);
        positions.push(i * gridSize, 0, (j + 1) * gridSize);
    }
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
const line = new THREE.LineSegments(geometry, material);
scene.add(line);

// Animation loop for infinite grid movement
let angle = 0;
const radius = 20;
const speed = 0.002;

function animate() {
    requestAnimationFrame(animate);

    // Rotate the grid for dynamic movement
    line.rotation.x += speed;
    line.rotation.y += speed;

    // Move camera in circular motion
    camera.position.x = radius * Math.cos(angle);
    camera.position.z = radius * Math.sin(angle);
    camera.lookAt(0, 0, 0);

    angle += speed;

    renderer.render(scene, camera);
}

animate();

// Responsive handling for window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Toggle menu display
const menuIcon = document.getElementById('menu-icon');
const ctaSection = document.querySelector('.cta-section');

// Handler for switching menu
menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('open');  // Toggle 'open' class for the icon
    ctaSection.classList.toggle('open');  // Toggle 'open' class for the section
});

