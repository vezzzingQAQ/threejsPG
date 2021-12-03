/**
 * 主操作脚本
 * by vezzzing
 * 2021.11.27,28,29,30
 */
$(function(){
    function renderCode(index){/**指定一个索引进行渲染 */
        /**根据store文件嵌入代码分段显示 */
        $(".codeDiv .nav").html("");
        let allCodeTemp="";//全部代码存放
        for(let i=0;i<store[index].code.length;i++){
            let container=$(".codeDiv .nav");
            let textTemp=
            `
            <li><p>${store[index].code[i].sectionName}<span></span></p>
            <div class="sub">
                <pre>
                    <code class="language-javascript codePlace" id=${store[index].code[i].sectionName} contenteditable="true" spellcheck="false">
                        
                    </code>
                </pre>
            </div>
            </li>        
            `
            container.html(container.html()+textTemp);
            $(".codeDiv .nav #"+store[index].code[i].sectionName).text(store[index].code[i].context);
            //更新全部代码
            allCodeTemp+=store[index].code[i].context;
        }
        {/**先渲染一遍 */
            $(".viewDiv .viewPlace").text(allCodeTemp);
            hljs.highlightAll();
            try{
                eval(allCodeTemp);
            }catch{
                
            }
        }
    }
    {/**代码嵌入 */
        renderCode(0);
    }
    {/**范例嵌入 */
        for(let i=0;i<store.length;i++){
            let pastHtml=$(".examplesDiv").html();
            $(".examplesDiv").html(pastHtml+`
                <ul>
                    <li>${store[i].name}</li>
                </ul>
            `)
        }
    }
    {/**监听菜单点击事件 */
        $("body").delegate(".codeDiv .nav>li>p","click",function(){
            //因为会删改所以用代理
            //展开二级菜单
            var $par=$(this).parent("li");
            var $sub=$par.children(".sub");
            if(($sub).css("display")=="none"){
                $sub.slideDown(800);
                //旋转箭头
                $par.addClass("current");
            }else{
                $sub.slideUp(800);
                //旋转箭头
                $par.removeClass("current");
            }
        });
    }
    {/**点击头部标签切换工作区 */
        $(".leftHeader .headerPin").click(function(){
            $(this).addClass("current");
            $(this).siblings().removeClass("current");
            //获取id查找相应的工作区
            let fcs=$(this).attr("id").slice(0,$(this).attr("id").length-3)+"Div";
            let currentBox=$("."+fcs);
            currentBox.addClass("currentDiv");
            currentBox.siblings().removeClass("currentDiv");
            //高亮
            hljs.highlightAll();
        })
    }
    {/**点击范例切换 */
        $(".examplesDiv>ul>li").click(function(){
            let name=$(this).text();
            for(let i=0;i<store.length;i++){
                if(name==store[i].name){
                    $(".displayDiv").empty();
                    renderCode(i);
                }
            }
        })
    }
    {/**点击运行 */
        $(".runButton").click(function(){
            let allCodeTemp="";
            $(".displayDiv").children("canvas").remove();
            $(".codeDiv .codePlace").each(function(){
                allCodeTemp+=$(this).text();
            });
            $(".viewDiv .viewPlace").text(allCodeTemp);    
            try{
                eval(allCodeTemp);
            }catch{
                
            }
        })
    }
});
