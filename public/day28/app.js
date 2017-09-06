$(function() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();

  renderer.setClearColor(0xdddddd);
  renderer.setSize(window.innerWidth, window.innerHeight);

  var axis = new THREE.AxisHelper(10);
  scene.add(axis);

  var cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
  var cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xdddddd,
    wireframe: true
  });
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  cube.position.x = 0;
  cube.position.y = 0;
  cube.position.z = 0;

  scene.add(cube);

  camera.position.x = 40;
  camera.position.y = 40;
  camera.position.z = 40;

  camera.lookAt(scene.position);

  renderer.render(scene, camera);
  $("#webGL-container").append(renderer.domElement);

});
