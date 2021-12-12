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
{name:"scene对象",
code:[{sectionName:"绑定事件",context:`
document.querySelector("#displayCanvas").innerHTML+=\`
<div class="pan">
<button id="ac">增加立方体</button>
<button id="rc">减少立方体</button>
</div>
\`
document.querySelector("#displayCanvas").onclick=function(e){
    if(e.target.id=="ac"){
        addCube();
    }else if(e.target.id=="rc"){
        removeCube();
    }
}
`},{sectionName:"增加方块",context:`
function addCube(){
    var cubeSize=Math.random()*3;
    var cubeGeometry=new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize);
    var cubeMaterial=new THREE.MeshBasicMaterial({
        color:0xffffff,
        wireframe:true,
    });
    var cube=new THREE.Mesh(cubeGeometry,cubeMaterial);
    cube.name="cube-"+scene.children.length;
    cube.position.x=-30+Math.random()*60;
    cube.position.z=-30+Math.random()*60;
    cube.position.y=-30+Math.random()*60;
    cube.rotation.x=Math.random()*Math.PI;
    cube.rotation.y=Math.random()*Math.PI;
    cube.rotation.z=Math.random()*Math.PI;
    scene.add(cube);
}
`},{sectionName:"减少方块",context:`
function removeCube(){
    var allChildren=scene.children;
    var lastObject=allChildren[allChildren.length-1];
    if(lastObject instanceof THREE.Mesh){
        scene.remove(lastObject);
    }
}
`},{sectionName:"初始化世界",context:`
var scene=new THREE.Scene();
var camera=new THREE.PerspectiveCamera(45,document.querySelector("#displayCanvas").offsetWidth/document.querySelector("#displayCanvas").offsetHeight,0.1,100);
camera.position.set(0,-1,1);
camera.lookAt(scene.position);
scene.add(camera);
var renderer=new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0x000000));
renderer.setSize(document.querySelector("#displayCanvas").offsetWidth,document.querySelector("#displayCanvas").offsetHeight);
container=document.querySelector("#displayCanvas"); 
container.appendChild(renderer.domElement);
`},{sectionName:"实现窗口大小自适应",context:`
window.addEventListener("resize",function(){
    camera.aspect=document.querySelector("#displayCanvas").offsetWidth/document.querySelector("#displayCanvas").offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(document.querySelector("#displayCanvas").offsetWidth,document.querySelector("#displayCanvas").offsetHeight);
},false);
`},{sectionName:"先增加几个立方体",context:`
for(let i=0;i<611;i++){
    addCube();
}
`},{sectionName:"渲染场景scene_traverse遍历",context:`
function render(){
    scene.traverse(function(tbj){
        if(tbj instanceof THREE.Mesh){
            tbj.rotation.x+=0.01;
        }
    })
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}
render();
`},{sectionName:"整体操作",context:`
var activeControls=new THREE.OrbitControls(camera,renderer.domElement);
`},]}
,
{name:"scene雾",
code:[{sectionName:"增加方块",context:`
function addCube(){
    var cubeSize=Math.random()*3;
    var cubeGeometry=new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize);
    var cubeMaterial=new THREE.MeshLambertMaterial({
        color:0xffffff,
    });
    var cube=new THREE.Mesh(cubeGeometry,cubeMaterial);
    cube.name="cube-"+scene.children.length;
    cube.position.x=-80+Math.random()*160;
    cube.position.z=-80+Math.random()*160;
    cube.position.y=Math.random()*5;
    cube.rotation.x=Math.random()*Math.PI;
    cube.rotation.y=Math.random()*Math.PI;
    cube.rotation.z=Math.random()*Math.PI;
    scene.add(cube);
}
`},{sectionName:"减少方块",context:`
function removeCube(){
    var allChildren=scene.children;
    var lastObject=allChildren[allChildren.length-1];
    if(lastObject instanceof THREE.Mesh){
        scene.remove(lastObject);
    }
}
`},{sectionName:"初始化世界",context:`
var scene=new THREE.Scene();
var camera=new THREE.PerspectiveCamera(45,document.querySelector("#displayCanvas").offsetWidth/document.querySelector("#displayCanvas").offsetHeight,0.1,100);
camera.position.set(0,50,1);
camera.lookAt(scene.position);
scene.add(camera);
var renderer=new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0x000000));
renderer.setSize(document.querySelector("#displayCanvas").offsetWidth,document.querySelector("#displayCanvas").offsetHeight);
container=document.querySelector("#displayCanvas"); 
container.appendChild(renderer.domElement);
`},{sectionName:"添加雾",context:`
scene.fog=new THREE.FogExp2(0x222222,0.05);
`},{sectionName:"实现窗口大小自适应",context:`
window.addEventListener("resize",function(){
    camera.aspect=document.querySelector("#displayCanvas").offsetWidth/document.querySelector("#displayCanvas").offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(document.querySelector("#displayCanvas").offsetWidth,document.querySelector("#displayCanvas").offsetHeight);
},false);
`},{sectionName:"增加光源",context:`
var dist=80;
var hst=150;
var spotLight1=new THREE.SpotLight(0xff0000,dist,hst,dist);
var spotLight2=new THREE.SpotLight(0x00ff00,dist,hst,-dist);
var spotLight3=new THREE.SpotLight(0x0000ff,-dist,hst,dist);
var spotLight4=new THREE.SpotLight(0x0ff000,-dist,hst,-dist);
scene.add(spotLight1);
scene.add(spotLight2);
scene.add(spotLight3);
scene.add(spotLight4);
`},{sectionName:"先增加几个立方体",context:`
for(let i=0;i<611;i++){
    addCube();
}
`},{sectionName:"渲染场景scene_traverse遍历",context:`
function render(){
    scene.traverse(function(tbj){
        if(tbj instanceof THREE.Mesh){
            tbj.rotation.x+=0.01;
        }
    })
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}
render();
`},{sectionName:"整体操作",context:`
var activeControls=new THREE.OrbitControls(camera,renderer.domElement);
`},]}
,
{name:"自定义几何体",
code:[{sectionName:"初始化世界",context:`
var scene=new THREE.Scene();
var camera=new THREE.PerspectiveCamera(45,document.querySelector("#displayCanvas").offsetWidth/document.querySelector("#displayCanvas").offsetHeight,0.1,100);
camera.position.set(0,-10,10);
camera.lookAt(scene.position);
scene.add(camera);
var renderer=new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0x000000));
renderer.setSize(document.querySelector("#displayCanvas").offsetWidth,document.querySelector("#displayCanvas").offsetHeight);
container=document.querySelector("#displayCanvas"); 
container.appendChild(renderer.domElement);
`},{sectionName:"添加几何体",context:`
var vertices=[
    new THREE.Vector3(1,3,1),
    new THREE.Vector3(1,3,-1),
    new THREE.Vector3(1,-1,1),
    new THREE.Vector3(1,-1,-1),
    new THREE.Vector3(-1,3,-1),
    new THREE.Vector3(-1,3,1),
    new THREE.Vector3(-1,-1,-1),
    new THREE.Vector3(-1,-1,1),
];
var faces=[
    new THREE.Face3(0,2,1),
    new THREE.Face3(2,3,1),
    new THREE.Face3(4,6,5),
    new THREE.Face3(6,7,5),
    new THREE.Face3(4,5,1),
    new THREE.Face3(5,0,1),
    new THREE.Face3(7,6,2),
    new THREE.Face3(6,3,2),
    new THREE.Face3(5,7,0),
    new THREE.Face3(7,2,0),
    new THREE.Face3(1,3,4),
    new THREE.Face3(3,6,4),
];
var geomGeometry=new THREE.Geometry();
geomGeometry.vertices=vertices;
geomGeometry.faces=faces;
geomGeometry.computeFaceNormals();
var geomMaterial=new THREE.MeshBasicMaterial({
    color:0xffffff,
    wireframe:true,
});
var geom=new THREE.Mesh(geomGeometry,geomMaterial);
scene.add(geom);
`},{sectionName:"实现窗口大小自适应",context:`
window.addEventListener("resize",function(){
    camera.aspect=document.querySelector("#displayCanvas").offsetWidth/document.querySelector("#displayCanvas").offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(document.querySelector("#displayCanvas").offsetWidth,document.querySelector("#displayCanvas").offsetHeight);
},false);
`},{sectionName:"渲染场景",context:`
function render(){
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}
render();
`},{sectionName:"整体操作",context:`
var activeControls=new THREE.OrbitControls(camera,renderer.domElement);
`},]}
,
{name:"改变几何体顶点",
code:[{sectionName:"初始化世界",context:`
var frameCount=0;
var scene=new THREE.Scene();
var camera=new THREE.PerspectiveCamera(45,document.querySelector("#displayCanvas").offsetWidth/document.querySelector("#displayCanvas").offsetHeight,0.1,100);
camera.position.set(0,-10,10);
camera.lookAt(scene.position);
scene.add(camera);
var renderer=new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0x000000));
renderer.setSize(document.querySelector("#displayCanvas").offsetWidth,document.querySelector("#displayCanvas").offsetHeight);
container=document.querySelector("#displayCanvas"); 
container.appendChild(renderer.domElement);
`},{sectionName:"添加几何体",context:`
var vertices=[
    new THREE.Vector3(1,1,1),
    new THREE.Vector3(1,1,-1),
    new THREE.Vector3(1,-1,1),
    new THREE.Vector3(1,-1,-1),
    new THREE.Vector3(-1,1,-1),
    new THREE.Vector3(-1,1,1),
    new THREE.Vector3(-1,-1,-1),
    new THREE.Vector3(-1,-1,1),
];
var faces=[
    new THREE.Face3(0,2,1),
    new THREE.Face3(2,3,1),
    new THREE.Face3(4,6,5),
    new THREE.Face3(6,7,5),
    new THREE.Face3(4,5,1),
    new THREE.Face3(5,0,1),
    new THREE.Face3(7,6,2),
    new THREE.Face3(6,3,2),
    new THREE.Face3(5,7,0),
    new THREE.Face3(7,2,0),
    new THREE.Face3(1,3,4),
    new THREE.Face3(3,6,4),
];
var geomGeometry=new THREE.Geometry();
geomGeometry.vertices=vertices;
geomGeometry.faces=faces;
geomGeometry.computeFaceNormals();
var geomMaterial=new THREE.MeshBasicMaterial({
    color:0xffffff,
    wireframe:true,
});
var geom=new THREE.Mesh(geomGeometry,geomMaterial);
geom.name="geom";
scene.add(geom);
`},{sectionName:"实现窗口大小自适应",context:`
window.addEventListener("resize",function(){
    camera.aspect=document.querySelector("#displayCanvas").offsetWidth/document.querySelector("#displayCanvas").offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(document.querySelector("#displayCanvas").offsetWidth,document.querySelector("#displayCanvas").offsetHeight);
},false);
`},{sectionName:"渲染场景并实现顶点变换",context:`
function render(){
    frameCount++;
    //变换顶点数组
    let cgeom=scene.getObjectByName("geom");
    //大坑:只有写在这个循环里才有用
    cgeom.geometry.vertices.forEach(function(vert){
        vert.x+=-0.025+Math.random()*0.05;
        vert.y+=-0.025+Math.random()*0.05;
        vert.z+=-0.025+Math.random()*0.05;
    });
    //cgeom.rotation.x+=0.01;
    cgeom.geometry.vertices=vertices;
    cgeom.geometry.verticesNeedUpdate=true;
    cgeom.geometry.computeFaceNormals();
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}
render();
`},{sectionName:"整体操作",context:`
var activeControls=new THREE.OrbitControls(camera,renderer.domElement);
`},]}
,
]