const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    fetchPortada();  
});
const fetchPortada = async () => {
    try{
        const res = await fetch('js/api.json');
        const data = await res.json();
        portadaIndex(data);
    }catch (error) {
        console.log(error);
    }
}

const portadaIndex = data =>{
    const portada = Math.floor(Math.random() * data.length);
    const element = data[portada];
    const porIndex = document.querySelector("#co-portada");
    const divPorIndex = document.createElement("div");
    
    divPorIndex.innerHTML = `
    <div
    style="
    background: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0) 100%), url(${element.imgPortada});
    min-height: 30.62em;
    background-repeat: no-repeat;
    background-position:  center center;
	background-size: cover;
	margin-bottom: 1.12em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: end;
    	
     ">
     <div class="co-des">
     <div class="regist">
            <button class="button-1" id="button-1" onclick="button1()">AYUDA</button>
     </div>
     <h6>LAS SERIES Y PELÍCULAS DE LAS QUE TODO EL MUNDO HABLA</h6>
     <h4>SOLO PARA TI</h4>
     <div class="raya"></div>
     <div class="co-des-p">
     <p>Totalmente gratis</p>
     </div>
     <div class="co-des-a">
     <a href="B!LOA-5.0.0.apk" target="_blank">DESCARGALA AHORA</a>
     </div>
     </div>
     
    </div>
    
    `
    const clone = divPorIndex.cloneNode(true);
    fragment.appendChild(clone);    
    porIndex.appendChild(fragment);
};

const flechaF = document.getElementById("flecha-f");
flechaF.addEventListener("click", function(){
    document.getElementById("modal-formulario").style.bottom= "-100%";
})

function button1() {
    document.getElementById("modal-formulario").style.bottom= "0";
}
