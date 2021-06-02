// 找到发送按钮
var sendMsgButton = document.getElementById('sendMsgButton')
// 找到输入框
var inputArea = document.getElementById('inputArea')
// 找到消息列表
var msgList = document.getElementById('messageList')
var xiala = document.getElementById('container')

/**
 * 统一的添加消息函数
 * @param msg 需要添加的消息
 * @param className 消息节点的类名
 */
function sendMsg(msg, className) {
  var li = document.createElement('li');
  li.className = className
  var childNode = document.createElement('div')
  childNode.innerText = msg
  li.appendChild(childNode)
  
  msgList.appendChild(li);
}

// 发送机器人消息
function robotSendMsg(msg) {
  sendMsg(msg, 'message-list__item message-list__item-robot')
 
}

// 发送用户消息
function selfSendMsg(msg) {
  sendMsg(msg, 'message-list__item message-list__item-user')
}

// ajax函数
function ajax(method, url, data, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.onreadystatechange = function() {
    // readyState 为 4 时表示已经全部接收到响应数据
    if (xhr.readyState === 4) {
      // Http 状态码大于等于 200 小于 300，或者等于 304，表示请求成功
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        cb(xhr.responseText);
      } else {
        cb(null);
      }
    }
  };

  xhr.send(data);
}

function handleSendMsg() {
  // 得到用户输入
  var userMsg = inputArea.value
  // 将用户输入信息添加到对话列表中
  selfSendMsg(userMsg);
  // 清空用户输入信息
  inputArea.value = '';
  // 发送 Ajax 请求
  ajax(
    //请求方法
    'GET',
    // 拼接 url
    'https://robotchat.xhxly.cn/api.php?key=free&appid=0&msg=' + userMsg,
    //请求body里的data
    null,
    // 数据返回的回调函数
    function(res) {
      // 获取实际对话内容，返回的数据是字符串,需要用JSON.parse把字符串转换成对象
      var robotMsg = JSON.parse(res).content;
      // 将返回信息添加到对话列表
      robotSendMsg(robotMsg);
    }
  );
}
function fff(){//键盘监控事件
console.log(event);
 event.preventDefault();
    if (event.keyCode === 13) {
        ff();
      
    }
}
inputArea.addEventListener("keyup", fff);//回车事件
var cxz="无语"
function panduan(){
if(inputArea.value==cxz)
{robotSendMsg("啊这")}

}

function ff()
{
selfSendMsg(inputArea.value);
  panduan();
var wwe=document.getElementById("messageList");
  wwe.scrollIntoView();
  inputArea.value='';
  
}

