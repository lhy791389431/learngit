var divs= document.querySelectorAll("#box>div");
var arr = [[],[],[],[]];
var num=0;
for(var i = 0;i <arr.length;i++){
    for(var j = 0;j <arr.length;j++){
        arr[i][j] = divs[num];
        num++;
    }
}


console.log(arr);





//游戏开始产生2个随机数
rand();
rand();
bgcolor();
//上下左右的监听事件

window.onkeydown = function(e){
   
    switch(e.keyCode){
        case 37 :  end(); downleft();bgcolor();     break;//左
        case 38 :  end(); downup();bgcolor();     break;//上
        case 39 :  end(); downright();bgcolor();     break;//右
        case 40 :  end(); downfoot(); bgcolor();     break;//下
    } 


}



//产生一个数字
function rand(){
    var x=Math.floor(Math.random()*4);
    var y=Math.floor(Math.random()*4);
    if(arr[x][y].innerHTML == ""){
        arr[x][y].innerHTML = Math.random() > 0.5 ? 2 : 2;
    }else{
        rand();
    }
}



//判断是否游戏结束函数
function end(){
    var bool=true;
    for(var i = 0;i <arr.length;i++){
        for(var j = 0;j <arr.length;j++){
            if(arr[i][j].innerHTML == "" ){
            bool = false;
            }
        }
    }
    if(bool){
       chonghe();
    }else{
        rand();
    }
}
function  chonghe(){
    var bool = true;
    for(var i = 0;i < arr.length-1 ;i++){
        for(var j = 0;j< arr.length-1;j++){
            if(arr[i][j].innerHTML == arr[i][j+1].innerHTML || arr[i][j].innerHTML == arr[i+1][j].innerHTML || arr[i+1][j].innerHTML == arr[i+1][j+1].innerHTML || arr[i][j+1].innerHTML == arr[i+1][j+1].innerHTML  ){
                bool = false;
            }
        }
    }
    if(bool){
        alert("游戏结束！")
    }
}


//游戏重新开始的函数
function restart(){
    for(var i = 0;i <arr.length;i++){
        for(var j = 0;j <arr.length;j++){
            arr[i][j].innerHTML = ""; 
        }
    }
    rand();
    rand();
}


//不同的数字添加不同的背景颜色

function bgcolor(){
    for(var i = 0;i <arr.length;i++){
        for(var j = 0;j <arr.length;j++){
          
          switch(arr[i][j].innerHTML){
            case '2': arr[i][j].style.backgroundColor = "#EEE4DA" ;break;
            case '4': arr[i][j].style.backgroundColor = "#EDE0C8" ;break;
            case '8': arr[i][j].style.backgroundColor = "#F2B179" ;break;
            case '16': arr[i][j].style.backgroundColor = "#F59563" ;break;
            case '32': arr[i][j].style.backgroundColor = "#F67C5F" ;break;
            case '64': arr[i][j].style.backgroundColor = "#F65E3B" ;break;
            case '128': arr[i][j].style.backgroundColor = "#EDCF72" ;break;
            case '256': arr[i][j].style.backgroundColor = "#EDCC61" ;break;
            case '512': arr[i][j].style.backgroundColor = "#EDC850" ;break;
            case '1024': arr[i][j].style.backgroundColor = "yellowgreen" ;break;
            case '2048': arr[i][j].style.backgroundColor = "perple" ;break;
            default:  arr[i][j].style.backgroundColor = "#CDC1B4" ;break;     

          }
        }
    }

}



//上下左右按下执行的函数
         
function downright(){
    for(var i = 0;i <4;i++){
        for(var j = 0;j <4;j++){
            if( j<3&&arr[i][j].innerHTML !=""&& arr[i][j+1].innerHTML==""){
                arr[i][j+1].innerHTML = arr[i][j].innerHTML;
                arr[i][j].innerHTML="";
                downright();
            }else if(j<3&&arr[i][j].innerHTML !=""&& arr[i][j].innerHTML == arr[i][j+1].innerHTML){
                arr[i][j+1].innerHTML *=2;
                arr[i][j].innerHTML ="";
            } 
        
        }
    }
}

function downleft(){
    for(var i = 0;i <4;i++){
        for(var j = 0;j <4;j++){
            if( j>0&&arr[i][j].innerHTML !=""&& arr[i][j-1].innerHTML==""){
                arr[i][j-1].innerHTML = arr[i][j].innerHTML;
                arr[i][j].innerHTML="";
                downleft();
            }else if(j>0&&arr[i][j].innerHTML !=""&& arr[i][j].innerHTML == arr[i][j-1].innerHTML){
                arr[i][j-1].innerHTML *=2;
                arr[i][j].innerHTML ="";
            } 
        
        }
    }
}

function downfoot(){
    for(var i = 0;i <4;i++){
        for(var j = 0;j <4;j++){
            if( i<3&&arr[i][j].innerHTML !=""&& arr[i+1][j].innerHTML==""){
                arr[i+1][j].innerHTML = arr[i][j].innerHTML;
                arr[i][j].innerHTML="";
                downfoot();
            }else if(i<3&&arr[i][j].innerHTML !=""&& arr[i][j].innerHTML == arr[i+1][j].innerHTML){
                arr[i+1][j].innerHTML *=2;
                arr[i][j].innerHTML ="";
            } 
        
        }
    }
}

function downup(){
    for(var i = 0;i <4;i++){
        for(var j = 0;j <4;j++){
            if( i>0&&arr[i][j].innerHTML !=""&& arr[i-1][j].innerHTML==""){
                arr[i-1][j].innerHTML = arr[i][j].innerHTML;
                arr[i][j].innerHTML="";
                downup();
            }else if(i>0&&arr[i][j].innerHTML !=""&& arr[i][j].innerHTML == arr[i-1][j].innerHTML){
                arr[i-1][j].innerHTML *=2;
                arr[i][j].innerHTML ="";
            } 
        
        }
    }
}
