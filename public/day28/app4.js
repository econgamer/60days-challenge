$(function() {

  //creates empty scene object and renderer
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer({antialias:true});


  renderer.setClearColor(0xdddddd);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMapEnabled = true;
  renderer.shadowMapSoft = false;

  /*adds helpers*/
  /*axis*/
  var axis = new THREE.AxisHelper(10);
  scene.add(axis);

  /*grid*/
  var color = new THREE.Color("rgb(255, 0, 0)");
  var grid = new THREE.GridHelper(50, 5, color, 0x000000);
  scene.add(grid);

  //Camera
  camera.position.x = 40;
  camera.position.y = 40;
  camera.position.z = 40;
  camera.lookAt(scene.position);

  //light
  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.castShadow = true;
  spotLight.position.set(15, 30, 50);
  scene.add(spotLight);


  //Ground
  var planeGeometry = new THREE.PlaneGeometry(30,30,30);
  var planeMaterial = new THREE.MeshPhongMaterial( {
            color: 0xa0adaf,
            shininess: 10,
            specular: 0xffffff,
            shading: THREE.SmoothShading
        } );


  var plane = new THREE.Mesh(planeGeometry, planeMaterial);

  plane.rotation.x = -.5 * Math.PI; //90 degree
  plane.receiveShadow = true;
  scene.add(plane);



  //cube
  var cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
  var cubeMaterial = new THREE.MeshPhongMaterial( {
            color: 0xff3300,
            shininess: 150,
            specular: 0x222222,
            shading: THREE.SmoothShading,
        } );


  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  cube.position.x = 2.5;
  cube.position.y = 2.5;
  cube.position.z = 2.5;
  cube.castShadow = true;
  scene.add(cube);

  renderer.render(scene, camera);
  $("#webGL-container").append(renderer.domElement);


  //Animation handling
  var guiControls = new function(){
    this.rotationX = 0.01;
  }

  var datGUI = new dat.GUI();
  datGUI.add(guiControls, 'rotationX', 0, 1);



  render();

  function render(){
    cube.rotation.x += guiControls.rotationX;

    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }





});
