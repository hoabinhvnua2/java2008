'use strict';

// var userName = 'Xin chào các bạn lớp JAVA. Các bạn sẽ học JAVA trong 15 buổi';

// ví dụ tìm chữ reactjs
// var searchStr = userName.indexOf('react');
// console.log(searchStr);
// console.log(typeof searchStr);
// if (searchStr > -1) {
//     console.log('đã tìm được chuỗi');
// } else {
//     console.log('chuối ko tồn tại');
// }

// var lastStr = userName.lastIndexOf('JAVA');
// console.log(lastStr);
// if (lastStr > -1) {
//     console.log('Đã tìm được chuỗi cuối cùng');
// } else {
//     console.log('Không tìm được chuỗi');
// }

// ví dụ về cắt chuỗi
    // var sliceStr = userName.slice(21, 25);
    // var sliceStr = userName.substring(21, 28);
    // var sliceStr = userName.substr(21, 7);
    // console.log(sliceStr);

// thay thế chuỗi
    // var replaceStr = userName.replace('JAVA', 'reactjs');
    // console.log(replaceStr);
// chuyển đổi chữ hoa và chữ thường
    // console.log('In thường', userName.toLowerCase());
    // console.log('In hoa', userName.toUpperCase());

//ví dụ về parseInt()
// var a = '1';
// var c = 5;
// console.log(a);
// console.log(typeof a);
// var b = parseInt(a);

// console.log(b); 
// console.log(typeof b); 
// console.log(c.toString());
// console.log(typeof c.toString());

var inputValue;
// function myFocusName(e) {
    // inputValue = document.getElementById('firstName');
    // document.getElementById('result').innerHTML = inputValue;
//     console.log(e);
// }

// function myClick(so) {
//     if (inputValue) {
//         inputValue.value = so;
//     } else {
//         console.log('lối rồi');
//     }
// }

// thêm phần tử
// var arrayName = [1, 2, 'Kien'];
// console.log(arrayName);
// arrayName.push('Huan');
// xóa phần tử
// console.log('arr đa thêm', arrayName);
// arrayName.pop();
// console.log('arr đã xóa', arrayName);

// cách khởi tọa đối tượng thứ nhất
// var date = new Date();
// console.log(moment().format('MM-DD-YYYY, h:mm:ss a'));

// cách khởi tạo đối tượng
// var SinhVien = {
//     name: 'Huan',
//     gender: 'Nam',
//     age: 32,
//     diThi: function() {
//         // có bạn nào hiểu "this"
//         console.log(SinhVien.name);
//         // this là đại diện cho đối tượng mà chúng ta đang làm việc
//         this.diLam(this.name);
//     },
//     diLam: function(firstName) {
//         console.log('hello '+ firstName)
//         console.log(this.age);
//     }
// };
// SinhVien.diThi();
// console.log(this);
// prototype: nó là 1 cái nguyên thủy của đối tượng
// khi sinh ra thì con người đã có 2 mắt

// var ageHuan = new String();
// tất cả static method của Number
// ageHuan.tuoiMu = 33;
// console.log(ageHuan);

// Number.prototype.sinhNhat = function(tuoi) {
//     return tuoi;
// }

// var myPrototype = new Number();
// console.log(myPrototype);
// SinhVien.prototype.toThi = function() {
//     console.log('aaa');
// };
// console.log(SinhVien);
// function Person() {
//     var name;
//     var age;
// }

// Person.prototype.gender = 'nữ'

// var thu = new Person();
// console.log(thu);

// // obj trong mảng
// var reesultData = [
//     {
//         name: 'Thư',
//         age: 23,
//         gender: 'nam'
//     },
//     {
//         name: 'THịnh',
//         age: 23,
//         gender: 'nam'
//     },
//     {
//         name: 'Huan',
//         age: 23,
//         gender: 'nam'
//     },
//     {
//         name: 'Kien',
//         age: 23,
//         gender: 'nam'
//     },
//     {
//         name: 'Tai',
//         age: 23,
//         gender: 'nam'
//     }
// ];

// var reesultDataLength = reesultData.length;
// for (let index = 0; index < reesultDataLength; index++) {
//     console.log(reesultData[index].name);
// }

// // obj trong obj
// var objName =  {
//     nam: {
//         da: 'đen',
//         cao: '1,75'
//     }
// }
// // mảng trong obj
// var baoCao = {
//     quy_mot: [1, 2, 3]
// };
// var quy = baoCao.quy_mot;
// var quyLength = quy.length;
// for (let index = 0; index < quyLength; index++) {
//     console.log(quy[index]);
// }


// var array = [];
var array = [1, 2, 3];
// array.push(1);
// array.push(2);
// var arrLength = array.length;
// for (let index = 0; index < arrLength; index++) {
//     console.log(array[index]);
    
// }

// var day = new Date();
// console.log(day);
// console.log(day.getMinutes());
// console.log(day.getSeconds());
// setTimeout(function () {
//     console.log(day);
// }, 1000)




// var obj = new Number();
// function SinhVien() {
//     var name;
//     var age;
//     function onInit() {
//         console.log('xin chào');
//     }
// } 

// SinhVien.prototype.showName = function(name) {
//     console.log(name);
// }

// var obj = new SinhVien();
// console.log(obj.onInit());



// var obj = {
//     firstName: 'HB',
//     age: 13,
//     showName: function() {
//         console.log(this);
//     }
// };

// obj.showName();


// document.cookie = "email:tranhoabinh@gmail.com";


// var getCookie = document.cookie;

// console.log(getCookie);

// document.getElementById('clickMe').addEventListener('click', function() {
    
// })

// function clickMe() {
//     alert('bạn vừa click vào tôi!');
// }

firstName = 'JAVA';
console.log(firstName);
var firstName;
