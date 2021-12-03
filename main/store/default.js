var store=[
{name:"基本场景",
code:[{sectionName:"初始化世界",context:`
var scene=new THREE.Scene();
var camera=new THREE.PerspectiveCamera(45,document.querySelector("#displayCanvas").offsetWidth/document.querySelector("#displayCanvas").offsetHeight,1,1000);
camera.position.set(-10,0,0);
camera.lookAt(scene.position);
var renderer=new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0x000000));
renderer.setSize(document.querySelector("#displayCanvas").offsetWidth,document.querySelector("#displayCanvas").offsetHeight);
container = document.querySelector("#displayCanvas"); 
container.appendChild(renderer.domElement); 
`},{sectionName:"实现窗口大小自适应",context:`
window.addEventListener("resize",function(){
    camera.aspect=document.querySelector("#displayCanvas").offsetWidth/document.querySelector("#displayCanvas").offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(document.querySelector("#displayCanvas").offsetWidth,document.querySelector("#displayCanvas").offsetHeight);
},false);
`},{sectionName:"创建坐标系",context:`
var axes=new THREE.AxesHelper(20);
scene.add(axes);
`},{sectionName:"创建立方体",context:`
var cubeGeometry=new THREE.BoxGeometry(4,4,4);
var cubeMaterial=new THREE.MeshBasicMaterial({
    color:0x00ff00,
    wireframe:true,
});
var cube=new THREE.Mesh(cubeGeometry,cubeMaterial);
cube.position.set(0,0,0);
scene.add(cube);
`},{sectionName:"渲染场景",context:`
function renderScene(){
    renderer.render(scene,camera);
    cube.rotation.x+=0.02;
    cube.rotation.y+=0.015;
    cube.rotation.z+=0.01;
    requestAnimationFrame(renderScene);
}
renderScene();
`},{sectionName:"整体操作",context:`
var controls = new THREE.OrbitControls(camera,renderer.domElement);//创建控件对象
//注意开发中不要同时使用requestAnimationFrame()或controls.addEventListener('change', render)调用同一个函数，这样会冲突
`},]}
,
{name:"显示帧率",
code:[{sectionName:"初始化世界",context:`
var scene=new THREE.Scene();
var camera=new THREE.PerspectiveCamera(45,document.querySelector("#displayCanvas").offsetWidth/document.querySelector("#displayCanvas").offsetHeight,1,1000);
camera.position.set(-10,0,0);
camera.lookAt(scene.position);
var renderer=new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0x000000));
renderer.setSize(document.querySelector("#displayCanvas").offsetWidth,document.querySelector("#displayCanvas").offsetHeight);
container = document.querySelector("#displayCanvas"); 
container.appendChild(renderer.domElement);
`},{sectionName:"显示帧率",context:`
var stats=initStats();
`},{sectionName:"实现窗口大小自适应",context:`
window.addEventListener("resize",function(){
    camera.aspect=document.querySelector("#displayCanvas").offsetWidth/document.querySelector("#displayCanvas").offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(document.querySelector("#displayCanvas").offsetWidth,document.querySelector("#displayCanvas").offsetHeight);
},false);
`},{sectionName:"创建立方体",context:`
var cubeGeometry=new THREE.BoxGeometry(4,4,4);
var cubeMaterial=new THREE.MeshBasicMaterial({
    color:0x00ff00,
    wireframe:true,
});
var cube=new THREE.Mesh(cubeGeometry,cubeMaterial);
cube.position.set(0,0,0);
scene.add(cube);
`},{sectionName:"渲染场景",context:`
function render(){
    stats.update();
    cube.rotation.x+=0.01;
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}
render();
`},{sectionName:"整体操作",context:`
var controls = new THREE.OrbitControls(camera,renderer.domElement);
`},]}
,
{name:"参数面板",
code:[{sectionName:"初始化世界",context:`
var scene=new THREE.Scene();
var camera=new THREE.PerspectiveCamera(45,document.querySelector("#displayCanvas").offsetWidth/document.querySelector("#displayCanvas").offsetHeight,1,1000);
camera.position.set(-10,0,0);
camera.lookAt(scene.position);
var renderer=new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0x000000));
renderer.setSize(document.querySelector("#displayCanvas").offsetWidth,document.querySelector("#displayCanvas").offsetHeight);
container = document.querySelector("#displayCanvas"); 
container.appendChild(renderer.domElement);
`},{sectionName:"定义dat对象属性",context:`
var controls={
    rotateXspeed:0.01,
    rotateYspeed:0.01,
    rotateZspeed:0.01,
}
`},{sectionName:"定义dat对象",context:`
var gui=new dat.GUI();
gui.add(controls,"rotateXspeed",-0.05,0.05);
gui.add(controls,"rotateYspeed",-0.05,0.05);
gui.add(controls,"rotateZspeed",-0.05,0.05);
`},{sectionName:"实现窗口大小自适应",context:`
window.addEventListener("resize",function(){
    camera.aspect=document.querySelector("#displayCanvas").offsetWidth/document.querySelector("#displayCanvas").offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(document.querySelector("#displayCanvas").offsetWidth,document.querySelector("#displayCanvas").offsetHeight);
},false);
`},{sectionName:"创建立方体",context:`
var cubeGeometry=new THREE.BoxGeometry(4,4,4);
var cubeMaterial=new THREE.MeshBasicMaterial({
    color:0xf0ff00,
    wireframe:true,
});
var cube=new THREE.Mesh(cubeGeometry,cubeMaterial);
cube.position.set(0,0,0);
scene.add(cube);
`},{sectionName:"渲染场景",context:`
function render(){
    console.log(controls.rotateZspeed);
    cube.rotation.x+=controls.rotateXspeed;
    cube.rotation.y+=controls.rotateYspeed;
    cube.rotation.z+=controls.rotateZspeed;
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}
render();
`},{sectionName:"整体操作",context:`
var activeControls=new THREE.OrbitControls(camera,renderer.domElement);
`},]}
,
]