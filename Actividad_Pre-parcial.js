var dimX=4;
var dimY=4;
var dimZ=4;
var delta=10;

// create a scene, that will hold all our elements such as objects, cameras and lights.
    
var scene = new THREE.Scene();

 
function cubo(x, y, z, color, material, alambre){
// create a cube
    
var cubeGeometry = new THREE.BoxGeometry(x, y, z);

var cubeMaterial
switch(material){
 case 'Basic': cubeMaterial = new THREE.MeshBasicMaterial({
        color: color,
        wireframe: alambre    });
 break;
case 'Standard': cubeMaterial = new THREE.MeshStandardMaterial({
        color: color,
        wireframe: alambre    });
 break;
case 'Physical': cubeMaterial = new THREE.MeshPhysicalMaterial({
        color: color,
        wireframe: alambre    });
 break;
case 'Phong': cubeMaterial = new THREE.MeshPhongMaterial({
        color: color,
        wireframe: alambre    });
 break;
case 'Lambert': cubeMaterial = new THREE.MeshLambertMaterial({
        color: color,
        wireframe: alambre    });
 break;
}       
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    

 // add the cube to the scene
    
 scene.add(cube);
 return cube;
}
function init() {
    
   
// create a camera, which defines where we're looking at.
    
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    
// create a render and set the size
    
var renderer = new THREE.WebGLRenderer();
    
renderer.setClearColor(new THREE.Color(0x000000));
    
renderer.setSize(window.innerWidth, window.innerHeight);

    

// show axes in the screen
    
var axes = new THREE.AxesHelper(20);

scene.add(axes);

 
   
// create the ground plane
    
var planeGeometry = new THREE.PlaneGeometry(60, 20);

var planeMaterial = new THREE.MeshBasicMaterial({
        color: 0xAAAAAA
    });
    
var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    
// rotate and position the plane
    
plane.rotation.x = -0.5 * Math.PI;
    
plane.position.set(15, 0, 0);

    
// add the plane to the scene
    
//scene.add(plane);

    

// create a cube
cuboA = []; //Definir un array Unidimensional
colorA=[0xF30C0C, 0xBEF30C, 0x00FFFF]; //Para diferenciar los colores


//VALIDACIÓN DEL ANGULO INGRESADO
angulo = prompt("Angulo en grados:"); // Se pide en angulo al usuario.
angulo_rad = (angulo)*((2*Math.PI)/(360)); //Conversión de grados a radianes.
if(angulo != null){
    alert("Su angulo es: " + angulo);
    }   
else {
    alert("Escriba un angulo por favor");
    }

//INSERTAR LOS CUBOS
for(var i=0; i<3; i++){
cuboA.push(cubo(dimX, dimY, dimZ, colorA[i], 'Lambert', false));
}

//TRANSLATE   
cuboA[0].translateX(delta);
cuboA[1].translateY(delta);
cuboA[2].translateZ(delta);

//ELEGIR EL EJE
eje = Math.round(Math.random() * (2 - 0) + 0); //elegir el eje aleatoriamente 
//EJEGIR EL CUBO
alea=Math.round(Math.random() * (2 - 0) + 0); //numero aleatorio entre 0 y 2.


if (eje=0){
    cuboA[alea].rotateX(angulo_rad);  
    }else if (eje=1){
    cuboA[alea].rotateY(angulo_rad);   
    }else if (eje=2){
    cuboA[alea].rotateZ(angulo_rad);   
    }


//Luz (requerida para el material MeshLambertMaterial)
 light = new THREE.PointLight(0xFFFF00); //  Luz proveniente de un punto en el espacio, 
		                                //  semejante al sol.
 light.position.set( -10, 5, 10 );             //  Localización de la luz. (x, y, z).
 scene.add( light );


// position and point the camera to the center of the scene
    
camera.position.set(-30, 40, 30);
   
 camera.lookAt(scene.position);

    
// add the output of the renderer to the html element
    
document.getElementById("webgl-output").appendChild(renderer.domElement);

    
// render the scene
   
 renderer.render(scene, camera);
}