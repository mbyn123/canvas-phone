var canvas=document.getElementById('canvas');
//设置画板大小在显示的屏幕中自适应
  var pageWidth=document.documentElement.clientWidth//获取当前屏幕的显示宽度
  var pageheight=document.documentElement.clientHeight//获取当前屏幕的显示高度
	canvas.width=pageWidth//将画板的宽度与获取的屏幕宽度绑定
	canvas.height=pageheight//将画板的高度与获取的屏幕宽度绑定
window.onresize=function(){//将此作用作用到全局
  var pagewidth=document.documentElement.clientWidth
  var pageheight=document.documentElement.clientHeight
	canvas.width=pagewidth
	canvas.height=pageheight
}
var context=canvas.getContext('2d');
 lineWidth=5
//特性检测
if(document.body.ontouchstart!==undefined){//判定当前设备是否支持touch触摸事件
//触屏设备
var using=false
var lastPoint={x:undefined,y:undefined}//设置线的起点位置
canvas.ontouchstart=function(a){
  console.log(a)
  var x=a.touches[0].clientX
	var y=a.touches[0].clientY
    if(eraserEnabled){
      using=true
      context.clearRect(x,y,30,30)//清除
    }else{
       using=true
       lastPoint={x:x,y:y}//获取线的起点位置
	   drawCircle(x,y,0)
    }
}
canvas.ontouchmove=function(a){
  var x=a.touches[0].clientX
	var y=a.touches[0].clientY
  if(eraserEnabled){
    if(using){
      context.clearRect(x,y,30,30)
    }
    
  }else{
     if(using){
       var newPoint={x:x,y:y}//获取线的结束位置
	     drawCircle(x,y,0)
       drawline(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)//表示绘画路径 线的中起点和终点的值
       lastPoint=newPoint//将新的的起点和终点联系起来，画线
     }
  }
}
canvas.ontouchend=function(a){
  using=false
}
//绘制圆形
function drawCircle(x,y,radius){//封装绘画圆形的函数
   context.beginPath();
   context.arc(x,y,radius,0,Math.PI*2)
   context.fill()                
   }
//绘画路径 线
function drawline(x1,y1,x2,y2){//封装画线的函数
//  context.beginPath();
  context.moveTo(x1,y1)//起点
  context.lineWidth=lineWidth
  context.lineTo(x2,y2)//终点
  context.stroke()
  context.closePath()
}

//点击橡皮檫
var eraserEnabled=false 
  eraser.onclick=function(){
    eraserEnabled = true
    eraser.classList.add('active')
    pen.classList.remove('active')
}
 //点击画笔
  pen.onclick=function(){
    eraserEnabled = false
    pen.classList.add('active')
    eraser.classList.remove('active')
  }

//点击选择颜色
red.onclick=function(){
  context.strokeStyle="red"
  red.classList.add('actives')
  green.classList.remove('actives')
  blue.classList.remove('actives')
  black.classList.remove('actives')
}

green.onclick=function(){
  context.strokeStyle="green"
  green.classList.add('actives')
  red.classList.remove('actives')
  blue.classList.remove('actives')
  black.classList.remove('actives')
}

blue.onclick=function(){
  context.strokeStyle="blue"
  blue.classList.add('actives')
  red.classList.remove('actives')
  green.classList.remove('actives')
  black.classList.remove('actives')
}

black.onclick=function(){
  context.strokeStyle="black"
  black.classList.add('actives')
  red.classList.remove('actives')
  green.classList.remove('actives')
  blue.classList.remove('actives')
}
 //选择线的宽度
thin.onclick=function(){
 lineWidth=5
 thin.classList.add('activess')
 thick.classList.remove('activess')
}
thick.onclick=function(){
lineWidth=10
thick.classList.add('activess')
thin.classList.remove('activess')
}
//清除所有
clear.onclick=function(){
  clear.classList.add('activess')
  context.clearRect(0,0,canvas.width,canvas.height)
  setTimeout(() => {
    clear.classList.remove('activess')
  },200);
}
//保存图片
download.onclick=function(){
  download.classList.add('activess')
  setTimeout(() => {
    download.classList.remove('activess')
  },200);
  var url=canvas.toDataURL("image/png")
  console.log(url)
  var a=document.createElement('a')
  document.body.appendChild(a)
  a.href=url
  a.download='保存的图片'
  a.target='-blank'
  a.click()
}

}else{
  //非触屏设备
var using=false
var lastPoint={x:undefined,y:undefined}//设置线的起点位置
//鼠标点击
canvas.onmousedown=function(a){
	var x=a.clientX
	var y=a.clientY
    if(eraserEnabled){
      using=true
      context.clearRect(x,y,30,30)//清除
    }else{
       using=true
       lastPoint={x:x,y:y}//获取线的起点位置
	   drawCircle(x,y,0)
    }
}
//鼠标移动
canvas.onmousemove=function(a){
    var x=a.clientX
	var y=a.clientY
  if(eraserEnabled){
    if(using){
      context.clearRect(x,y,30,30)
    }
    
  }else{
     if(using){
       var newPoint={x:x,y:y}//获取线的结束位置
	   drawCircle(x,y,0)
       drawline(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)//表示绘画路径 线的中起点和终点的值
       lastPoint=newPoint//将新的的起点和终点联系起来，画线
     }
  }
}
//鼠标松开
canvas.onmouseup=function(a){
    using=false
}       
//绘制圆形
function drawCircle(x,y,radius){//封装绘画圆形的函数
   context.beginPath();
   context.arc(x,y,radius,0,Math.PI*2)
   context.fill()                
   }
//绘画路径 线
function drawline(x1,y1,x2,y2){//封装画线的函数
//  context.beginPath();
  context.moveTo(x1,y1)//起点
  context.lineWidth=lineWidth
  context.lineTo(x2,y2)//终点
  context.stroke()
  context.closePath()
}

//点击橡皮檫
var eraserEnabled=false 
  eraser.onclick=function(){
    eraserEnabled = true
    eraser.classList.add('active')
    pen.classList.remove('active')
}
 //点击画笔
  pen.onclick=function(){
    eraserEnabled = false
    pen.classList.add('active')
    eraser.classList.remove('active')
  }

  //点击选择颜色
red.onclick=function(){
  context.strokeStyle="red"
  red.classList.add('actives')
  green.classList.remove('actives')
  blue.classList.remove('actives')
  black.classList.remove('actives')
}

green.onclick=function(){
  context.strokeStyle="green"
  green.classList.add('actives')
  red.classList.remove('actives')
  blue.classList.remove('actives')
  black.classList.remove('actives')
}

blue.onclick=function(){
  context.strokeStyle="blue"
  blue.classList.add('actives')
  red.classList.remove('actives')
  green.classList.remove('actives')
  black.classList.remove('actives')
}

black.onclick=function(){
  context.strokeStyle="black"
  black.classList.add('actives')
  red.classList.remove('actives')
  green.classList.remove('actives')
  blue.classList.remove('actives')
}
 //选择线的宽度
 thin.onclick=function(){
 lineWidth=5
 thin.classList.add('activess')
 thick.classList.remove('activess')
}
thick.onclick=function(){
lineWidth=10
thick.classList.add('activess')
thin.classList.remove('activess')
}
//清除所有
clear.onclick=function(){
  clear.classList.add('activess')
  context.clearRect(0,0,canvas.width,canvas.height)
  setTimeout(() => {
    clear.classList.remove('activess')
  },200);
}
//保存图片
download.onclick=function(){
  download.classList.add('activess')
  setTimeout(() => {
    download.classList.remove('activess')
  },200);
  var url=canvas.toDataURL("image/png")
  console.log(url)
  var a=document.createElement('a')
  document.body.appendChild(a)
  a.href=url
  a.download='保存的图片'
  a.target='-blank'
  a.click()
}
}