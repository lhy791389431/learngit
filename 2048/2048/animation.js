function ShowNumberWithAnimation(i,j,randNumber)
{//获取当前的数字格
    var numberCell=$("#number-cell-"+i+"-"+j);
    numberCell.css("background-color",getNumberBackgroundColor(randNumber));
    numberCell.css("color",getNumberColor(randNumber));
    numberCell.text(randNumber);
    //设置当前的数字格的显示动画
    numberCell.animate({
        width:"100px",
        heiht:"100px",
        top:getPosTop(i,j),
        left:getPosLeft(i,j)
    },100);
}

function showMoveAnimation(fromx,fromy,tox,toy){
//获取到当前数字格的元素
var numberCell=$("#number-cell-"+fromx+"-"+fromy);
numberCell.animate({//动画
    top:getPosTop(tox,toy),
    left:getPosLeft(tox,toy)
},200);
}