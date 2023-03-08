var cadForm = document.getElementById("formulario");

cadForm.addEventListener("submit", async (e) => {

    //e.preventDefault();

    var titulo = document.getElementById("titulo").value;
    var autor = document.getElementById("autor").value; 
    var capa = document.getElementById("capa").value;
    var descricao = document.getElementById("descricao").value;

    localStorage.setItem("livros", JSON.stringify({titulo, autor, capa, descricao}));
    localStorage.setItem("titulo", titulo);
    localStorage.setItem("autor", autor);
    localStorage.setItem("capa", JSON.stringify(capa));
    localStorage.setItem("descricao", descricao);

    var livrosLS = localStorage.getItem("livros");

    var dadosLivros = JSON.parse(livrosLS);

    document.getElementById("tituloLivro").innerHTML = dadosLivros.titulo;

    /*
    let livros = new Array();

    if(localStorage.hasOwnProperty("livros")) {
        livros = JSON.parse(localStorage.getItem("livros"));
    }

    livros.push({titulo, autor, capa, descricao});

    localStorage.setItem("livros", JSON.stringify(livros));
    */
    
});

document.querySelector("#capa").addEventListener("change", function(){
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("recent-image", reader.result);
    });

    reader.readAsDataURL(this.files[0]);
});

