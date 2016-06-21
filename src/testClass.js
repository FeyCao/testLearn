// JavaScript Document
var TestClass = (function() { 
// Private static attributes.
var constants = {//定义了两个常量
TEST_FLAG: false,
TEST_DATA: -100
}
var Test={};
// 定义了一个静态方法
Test.getConstant=function(name){//获取常量的方法
return constants[name];
}
return Test
})();
//TEST

