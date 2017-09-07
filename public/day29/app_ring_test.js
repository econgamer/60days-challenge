
//RENDERER
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('webGL-container'), antialias: true,  alpha: true });
renderer.setClearColor(0x000000, 1);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//CAMERA
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
// var camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 0.1, 3000);

//SCENE
var scene = new THREE.Scene();

// LIGHTS
var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(15, 30, 50);
scene.add(spotLight);

//OBJECT
var ringGeometry = new THREE.CylinderGeometry(5, 5, 2, 64, 5, true, 6, 6.3);


// var ringMaterial = new THREE.MeshPhongMaterial({color: 0xffff00, side:THREE.DoubleSide});
// var ringMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00,  side:THREE.DoubleSide} );
//

var ringMaterial = new THREE.MeshPhongMaterial( {
          color: 0xffff00,
          side:THREE.DoubleSide,
          shininess: 10,
          specular: 0xffffff,
          flatShading: true
      } );

var ring = new THREE.Mesh( ringGeometry, ringMaterial );

ring.position.set(0, 0, -100);
ring.rotation.x = -.5 * Math.PI; //90 degree

//
// mesh.position.set(0, 0, -1000);
//
//
scene.add( ring );



// for testing



//





//RENDER LOOP
requestAnimationFrame(render);

function render() {
    ring.rotation.x += 0.01;
    ring.rotation.y += 0.01;
    ring.rotation.z += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
