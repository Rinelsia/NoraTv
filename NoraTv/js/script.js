;(function(){
    // вешаем слушателей на элементы управлени
    var clic_img = document.getElementById('click-img');
    var clic_b = document.getElementById('click-b');
    var clic_h = document.getElementById('click-h');
    var submit = document.getElementById('submit');
    
    console.log(clic_img);
    console.log(form.value);
//    console.log(textar);
    
    function img(){
        var textar = document.getElementById('val');
        var txt = textar.value;
        textar.value = txt+'<img src="" alt="">'
        console.log(txt);
        
    }
    function b(){
        var textar = document.getElementById('val');
        var txt = textar.value;
        textar.value = txt+'<b></b>';
    }
    function h(){
        var textar = document.getElementById('val');
        var txt = textar.value;
        textar.value = txt+'<h2></h2>';
    }
    function form(){
        var form = document.getElementById('form');
        console.log(form.value);
    }
    
    // вешаем событие на взаимодействие с мышью
    clic_img.addEventListener("click", img, false);
    clic_b.addEventListener("click", b, false);
    clic_h.addEventListener("click", h, false);
    
    submit.addEventListener("click", form, false);
}
());