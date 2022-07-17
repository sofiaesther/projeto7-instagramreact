import logopng from "./assets/img/logo.png"

export default function Top() {
    const icons = ["paper-plane-outline", "compass-outline", "heart-outline","person-outline"];
	const icon= icons.map(icons => <ion-icon name={icons}></ion-icon>);
    return (
        
<div class="navbar">
        
    <div class="container">
        <div class="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="separador"></div>
          <img src={logopng} />
        </div>

        <div class="logo-mobile">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>

        <div class="instagram-mobile">
          <img src={logopng}/>
        </div>

        <div class="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div class="icones">
          {icon}
        </div>

        <div class="icones-mobile">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    </div>
    </div>
    );
}

