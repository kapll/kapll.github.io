document.body.onkeyup = function(e){
    console.log(e)
    if (e.code == "Space"){
        document.body.classList.toggle("dark");
    }
}