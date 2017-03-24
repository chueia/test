var btn = document.getElementById('btn');
var n = 1;

btn.onclick = function () {
    
    console.log(btn);
    document.getElementsByClassName('aaa')[0].style.display = "block"
    //document.getElementById('aaa').style.display = "block"
}

// var btn = $('#btn');
// btn.click(function () {
//     $('.aaa').toggle()
// })