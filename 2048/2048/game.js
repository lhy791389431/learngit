//keydown事件表示键盘被按下

window.onkeydown = function(e){
   
    switch(e.keyCode){
    case 37://left
    //moveleft方法完成向左完成移动逻辑，返回值是bollen,
    if(moveLeft()){
        //重新的随机生成一个数字
        generateOneNumber();
      
        //判断当这次的移动之后 游戏是否结束
        isgameover();
    }
    break;
    case 38://up
    break;
    case 39://right
    break;
    case 40://down
    break;
    default:
        break;
}
};
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Should do nothing if the default action has been cancelled
    }
  
    var handled = false;
    if (event.key !== undefined) {
      // Handle the event with KeyboardEvent.key and set handled true.
    } else if (event.keyIdentifier !== undefined) {
      // Handle the event with KeyboardEvent.keyIdentifier and set handled true.
    } else if (event.keyCode !== undefined) {
      // Handle the event with KeyboardEvent.keyCode and set handled true.
    }
  
    if (handled) {
      // Suppress "double action" if event handled
      event.preventDefault();
    }
  }, true);
function moveLeft(){
    if(!canMoveLeft(board)){
        //当前格子无法移动
        return false;
    }
 ///完成向左移动逻辑
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            //如果是第一列就向左无法移动
            if(board[i][j]!=0){
                //判断有值
                for(var k=0;k<j;k++){
                    //判断当前值不为0的数字格左边的数字格必须为零且中间数字格也0
                    if(board[i][k]==0 && noBlokHorizontalCol(i,k,j,board) )
                    {//才能向左移动
                        showMoveAnimation(i,j,i,k)//移动动画
                        board[i][k]=board[i][j];
                        board[i][j]=0;

                    }
                    else if(board[i][k]==board[i][j]&&noBlokHorizontalCol(i,k,j,board))
                    {

                    }
                }
            }
            
        }
    }
    return true;
}

function noBlockHorizontalCol(row,col1,col2,board){
    for(var i=col1+1;i<col2;i++){
        if(board[row][i]!=0)
        {
            return false;
        }
    }
    return  true;

}