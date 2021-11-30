/**
 * 主操作脚本
 * by vezzzing
 * 2021.11.27,28,29,30
 */
$(function(){
    {/**代码嵌入 */
        let i=0;
        $(".codeDiv .codePlace").each(function(){
            $(this).text(store[i].code);
            i+=1;
        });
        {/**先渲染一遍 */
            let textTemp=[];
            $(".codeDiv .codePlace").each(function(){
                textTemp.push($(this).text());
            });
            $(".viewDiv .viewPlace").text(draw(textTemp));
            hljs.highlightAll();
            try{
                eval(draw(textTemp));
            }catch{
                
            }
        }
    }
    {/**监听菜单点击事件 */
        $(".codeDiv .nav>li>p").click(function(){
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
    {/**按键输入渲染 */
        $(".codeDiv .codePlace").keyup(function(){
            let textTemp=[];
            $(".displayDiv").children("canvas").remove();
            $(".codeDiv .codePlace").each(function(){
                textTemp.push($(this).text());
            });
            $(".viewDiv .viewPlace").text(draw(textTemp));
            try{
                eval(draw(textTemp));
            }catch{
                console.log("error");
            }
        })
    }
    {/**允许输入Tab键 */
        //BUG
        $(".codeDiv .codePlace").keydown(function(e){
            if(e.keyCode==9){
                e.preventDefault();
                var indent="    ";
                $(this).text+=indent;
                $(this).setSelectionRange(len,len);
            }
        })
    }
});
