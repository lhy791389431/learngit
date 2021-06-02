var board=new Array();


$(function(){
    newgame();
});
function newgame(){
//初始化棋盘格和数字格子
init();
//生成两个随机位置的数字
generateOneNumber();
generateOneNumber();
}

function init(){
for(var i=0;i<4;i++){
    //定义了一个二维数组
    board[i]=new Array
    for(var j=0;j<4;j++)
    {//初始化数组为0
        board[i][j]=0;
        var gridCell=$("#grid-cell-"+i+"-"+j);
        gridCell.css("top",getPosTop(i,j));//通过getPosTop设置每个格子距顶端距离
        gridCell.css("left",getPosLeft(i,j));
    }
}

updateBoardView();

}

function updateBoardView(){
for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
        $("#grid-container").append("<div class='number-cell' id='number-cell-"+i+"-"+j+"'></div>");
    var numberCell=$("#number-cell-"+i+"-"+j);
    if(board[i][j]==0){//若棋盘格值为0，则设置数字格高宽都为100??
        numberCell.css("width","100px");
        numberCell.css("height","100px");
        numberCell.css("top",getPosTop(i,j)+50);
        numberCell.css("left",getPosLeft(i,j)+50);
    }
    else{//若数字哥不为0，设置高宽75并设置背景色和前景色和数值
        numberCell.css("width","75px");
       numberCell.css("height","75px");
        numberCell.css("top",getPosTop(i,j));
       numberCell.css("left",getPosLeft(i,j));
       numberCell.css("background-color",getnumberBackgroundColor(board[i][j]));
        numberCell.css("color",getNumberColor(board[i][j]));
       numberCell.text(board[i][j]);

    }
    }
}
}

function generateOneNumber(){
//生成随机位置的随机数字
  //1:生成一个随机的位置
var randx=parseInt(Math.floor(Math.random()*4));
var randy=parseInt(Math.floor(Math.random()*4));
//定义一个死循环，完成生成随机空格子 
while(true){
    if(board[randx][randy]==0)
    {
      break;   
    }
    //否则重新随机一个位置.
    var randx=parseInt(Math.floor(Math.random()*4));
    var randy=parseInt(Math.floor(Math.random()*4));
           }
  //2:生成一个随机ide数字,新生成的数字只能是2/4
  var randNumber=Math.random()<0.5?2:4;
  //3:实现随机数字显示的动画
  ShowNumberWithAnimation(randx,randy,randNumber);

}