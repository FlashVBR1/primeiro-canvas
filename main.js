cananvas = document.getElementById("meuCananvas")
formato = cananvas.getContext("2d");
color = "black";
cananvas.addEventListener("mousedown", desenhar)
function desenhar(e)
{
    color = document.getElementById("color").value;
    mauseX = e.clientX - cananvas.offsetLeft;
    mauseY = e.clientY - cananvas.offsetTop;
    circulo(mauseX,mauseY); 
}
function circulo(mauseX, mauseY){
    formato.beginPath();
    formato.strokeStyle = color;
    formato.lineWidth = 2;
    formato.arc(mauseX, mauseY, 40, 0, 2*Math.PI);
    formato.stroke();
}
function limpar(){
    formato.clearRect(0, 0, cananvas.width, cananvas.height);
}