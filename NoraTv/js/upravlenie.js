;(function(){
    var video = document.getElementById('video');
    var mod = document.getElementById('modal'); 
    // функция переключения отображения блоков
    function display(mod){
        var mod = document.getElementById('modal'); 
        console.log(mod);
        //читаем стили элемента
        var dspl = getComputedStyle(mod);
        console.log(dspl.display);
        //
        if(dspl.display == 'none'){
            mod.style.display='block';
        } else{
            mod.style.display = '';
        }
        //
       
    }
    //функция проверки ширины экрана для запуска
    function media_func(mod){
        var media = document.getElementsByClassName('container');
        var width = getComputedStyle(media[1]).width
        console.log(getComputedStyle(media[1]).width);
        if(width<'720px'){
            display(mod);
        }
    }
    
    
    
    
    
    video.addEventListener("click", media_func, false);
    mod.addEventListener("click", display, false);
})();