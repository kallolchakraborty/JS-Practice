/*---------------------------------------------------------
    author: kallol chakraborty
    program no: 014
    program description: grab web elements  
    time complexity: 
    space complexity: 
    date: 28/08/2021
----------------------------------------------------------*/
// code should be run on browser
// 1
var title = document.getElementsByTagName('h1');
// 2
var title = document.getElementsByTagName("h1");
// 3
var title = document.getElementsByTagName('h1')[0].innerText;
// 4
title
// 5
var titleByClass = document.getElementsByClassName('title');
// 6
titleByClass
// 7
var titleByClass = document.getElementsByClassName('title')[0].innerText;
// 8
titleByClass

