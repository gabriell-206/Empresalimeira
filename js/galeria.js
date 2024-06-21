// criar uma função com arrow function
const galeria = () => {
   
    // Selecionar todas as imagens miniaturas
   var miniaturas = document.querySelectorAll(".galeria_miniaturas img")
   //console.log(miniaturas)

   // iterar sobre miniaturas
   miniaturas.forEach(function(miniatura) {
    //console.log(miniatura);

    // EM CADA IMAGEM ADICIONAR UM OUVINTE
    miniatura.addEventListener("click",function () {
        //console.log(this.src)

        // substituir o caminho e nome da imagem em destaque
        document.getElementById("foto_grande").src = this.src
    })
    
    
})


}

galeria()