
function dabaya(e){
    document.getElementById('inp').value += e
}
function sol(){
   var a = document.getElementById('inp')
    a.value = eval(a.value)
    if(inp == ''){
        alert('error')
    }
}
function clra(){
    document.getElementById('inp').value = ''
}
function clr(){
    var b = document.getElementById('inp')
    b.value = b.value.slice(0,-1)
}