var store=[
    {
        id:1,
        code:
`
//整体模型对象
var allMeshes=[];
//模型间距
const padding=30;
const num=2;
//模型偏移量
const randValue=1;
//返回随机值
function rand(randValue){
    return(Math.random()*randValue-randValue/2);
}
`
    },
    {
        id:2,
        code:
`
var scene = new THREE.Scene();
`
    },
    {
        id:3,
        code:
`
for(let x=-num;x<=num;x++){
    for (let y=-num;y<=num;y++){
        for (let z=-num;z<=num;z++){
            const geometry = new THREE.SphereGeometry(9,16,8);
            var material = new THREE.MeshPhongMaterial({
                color:"#ffffff",  
                specular:0xffffff,
                shininess:120
            });

            let mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(x*padding+rand(randValue),y*padding+rand(randValue),z*padding+rand(randValue));
            scene.add(mesh);
            //添加到整体模型对象
            allMeshes.push(mesh);
        }
    }
}
`
    },
    {
        id:4,
        code:
`
var spotLight = new THREE.SpotLight(0xff0000);
// 设置聚光光源位置
spotLight.position.set(150, 290, 150);
// 设置聚光光源发散角度
spotLight.angle = Math.PI /3
scene.add(spotLight); //光对象添加到scene场景中

// 聚光光源
var spotLight = new THREE.SpotLight(0x0000ff);
// 设置聚光光源位置
spotLight.position.set(250, 190, 150);
// 设置聚光光源发散角度
spotLight.angle = Math.PI /3
scene.add(spotLight); //光对象添加到scene场景中

// 聚光光源
var spotLight = new THREE.SpotLight(0x00ff00);
// 设置聚光光源位置
spotLight.position.set(-250, 290, 150);
// 设置聚光光源发散角度
spotLight.angle = Math.PI /3
scene.add(spotLight); //光对象添加到scene场景中
`
    },
    {
        id:5,
        code:
`
var width = window.innerWidth*0.7; //窗口宽度
var height = window.innerHeight; //窗口高度
var k = width / height; //窗口宽高比
var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
//创建相机对象
var camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
camera.position.set(200, 300, 200); //设置相机位置
camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
`
    },
    {
        id:6,
        code:
`
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);//设置渲染区域尺寸
renderer.setClearColor("#222222", 1); //设置背景颜色
renderer.shadowMap.enabled = true;
container = document.querySelector(".displayDiv"); 
container.appendChild(renderer.domElement); 
//执行渲染操作   指定场景、相机作为参数
`
    },
    {
        id:7,
        code:
`
function render(){
    renderer.render(scene,camera);
    for(let i=0;i<allMeshes.length;i++){
        allMeshes[i].position.set(allMeshes[i].position.x+rand(randValue),allMeshes[i].position.y+rand(randValue),allMeshes[i].position.z+rand(randValue));
    }
    requestAnimationFrame(render);//请求再次执行渲染函数render
}
render();
`
    },
    {
        id:8,
        code:
`
var controls = new THREE.OrbitControls(camera,renderer.domElement);//创建控件对象
//注意开发中不要同时使用requestAnimationFrame()或controls.addEventListener('change', render)调用同一个函数，这样会冲突
`
    },

]