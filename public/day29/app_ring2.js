$(function() {


//RENDERER
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('webGL-container'), antialias: true});
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


//texture
var texture = new THREE.TextureLoader().load('gold.jpg' );
// texture.wrapS = THREE.RepeatWrapping;
// texture.wrapT = THREE.RepeatWrapping;
// texture.repeat.set( 1, 5 );

//CAMERA
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3500);
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
var ringGeometry = new THREE.CylinderBufferGeometry(5, 5, 2, 64, 5, true, 6, 6.3);
// var ringGeometry = new THREE.CylinderBufferGeometry(5, 5, 2, 32, 5, true, 6, 6.3);
// var ringGeometry = new THREE.CylinderBufferGeometry(1 ,1 ,0.5 ,32 ,1 , true);

// var ringMaterial = new THREE.MeshPhongMaterial({color: 0xffff00, side:THREE.DoubleSide});
// var ringMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00,  side:THREE.DoubleSide} );
//

var ringMaterial = new THREE.MeshPhongMaterial( {
          color: 0xffff00,
          side:THREE.DoubleSide,
          shininess: 10,
          specular: 0xffffff,
          flatShading: true,
          map:texture
      } );

var ring = new THREE.Mesh( ringGeometry, ringMaterial );


ring.position.set(0, 0, -200);
// ring.rotation.x = -.25 * Math.PI; //90 degree

ring.rotation.x = 10;
ring.rotation.y = 45;
ring.rotation.z = 0;
// ring.rotation.x = -.5 * Math.PI; //90 degree
//
// mesh.position.set(0, 0, -1000);
//
//
scene.add( ring );



// canvas text
// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// ctx.font = "30px Arial";
// ctx.strokeText("Hello World",10,50);


//





//RENDER LOOP
requestAnimationFrame(render);

function render() {

    // ring.rotation.x += 0.0005;
    if(ring.rotation.y >= 85){
      ring.rotation.y -= 0.01;
    }else{
      ring.rotation.y += 0.01;
    }



      ring.rotation.z += 0.01;



      //
      // if(ring.position.z <= -800){
      //   ring.position.z -= 5;
      // }else if(ring.position.z <= -600){
      //   ring.position.z -= 1;
      // }
      // else{
      //   ring.position.z -= 0.5;
      // }



    renderer.render(scene, camera);
    requestAnimationFrame(render);
}


// $(document).ready(function () {
//
//   createTxt();
// function createTxt() {
//         var canvas = document.getElementById('webGL-container');
//         console.log(canvas);
//         var context = canvas.getContext('3d');
//         console.log(context);
//
//         canvas.width = canvas.width;
//         context.translate(canvas.width / 2, canvas.height / 2);
//         context.font = '18pt Calibri';
//         context.textAlign = 'center';
//         context.fillStyle = '#000';
//         context.fillText('hihi', 100, 100);
//     }
// });


});
