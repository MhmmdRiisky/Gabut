let container = document.getElementById("container")
let gambar = document.getElementById("gambar")

container.onclick = function(){
       if(container.classList.contains("background-color")){
              container.classList.remove("background-color");
              gambar.style.display = 'block';
       }else{
              container.classList.add("background-color");
              gambar.style.display = "none";
       }
};

function tambahGambar(){
       if(!gambar){
              gambar = document.createElement("img");
              gambar.id = "gambar";
              gambar.src = "../img/sekolah.jpg";
              gambar.alt = "Gambar Default";
              container.appendChild(gambar);
       }
}