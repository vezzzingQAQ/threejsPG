$(function(){
    {/**代码嵌入 */
        let i=0;
        $(".codeDiv .codePlace").each(function(){
            $(this).val(store[i].code);
            i+=1;
        });
        {/**先渲染一遍 */
            let textTemp=[];
            $(".codeDiv .codePlace").each(function(){
                textTemp.push($(this).val());
            });
            try{
                eval(draw(textTemp));
            }catch{
                
            }
        }
    }
    /*
    {
        document.querySelectorAll(".codeDiv .codePlace").forEach(function(el){
            CodeMirror.fromTextArea(el,{
                mode: "text/javascript",
                theme: "darcula",
            });
        });
    }
    */
    {/**监听菜单点击事件 */
        $(".codeDiv .nav>li").click(function(){
            //展开二级菜单
            var $sub=$(this).children(".sub");
            $sub.slideDown(800);
            //焦点
            $sub.children(".CodeMirror").focus();
            //收起所有非当前二级菜单
            var $siblingSub=$(this).siblings().children(".sub");
            $siblingSub.slideUp(800);
            //旋转箭头
            $(this).addClass("current");
            $(this).siblings().removeClass("current");
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
        })
    }
    {/**渲染 */
        $(".codeDiv .codePlace").keyup(function(){
            let textTemp=[];
            $(".displayDiv").children("canvas").remove();
            $(".codeDiv .codePlace").each(function(){
                textTemp.push($(this).val());
            });
            try{
                eval(draw(textTemp));
            }catch{

            }
        })
    }
});
