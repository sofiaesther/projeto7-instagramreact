import gag from "./assets/img/9gag.svg" 
import meowed from "./assets/img/meowed.svg" 
import barked from "./assets/img/barked.svg" 
import nathanwpylestrangeplanet from "./assets/img/nathanwpylestrangeplanet.svg" 
import wawawicomics from "./assets/img/wawawicomics.svg" 
import respondeai from "./assets/img/respondeai.svg" 
import filomoderna from "./assets/img/filomoderna.svg" 
import memeriagourmet from "./assets/img/memeriagourmet.svg"

import gatotelefone from "./assets/img/gato-telefone.svg"
import dog from "./assets/img/dog.svg"


import adorable_animals from "./assets/img/adorable_animals.svg"

import imgprofile from "./assets/img/catanacomics.svg"


import badvibes from "./assets/img/bad.vibes.memes.svg"
import chibirdart from"./assets/img/chibirdart.svg"
import razoesparaacreditar from "./assets/img/razoesparaacreditar.svg"
import smallcutecats from"./assets/img/smallcutecats.svg"



export default function Content(){
    const storyimg = [gag,meowed,barked,nathanwpylestrangeplanet,wawawicomics,respondeai,filomoderna, memeriagourmet];
	const storyuser =["9gag","meowed","barked","nathanwpylestrangeplanet","wawawicomics","respondeai","filomoderna", "memeriagourmet"]
    
    const postimg = [gatotelefone, dog];
    const postuser =["meowed","barked"];
    const postuserimg = [meowed,barked];
    const postlikeimg = [respondeai, adorable_animals];
    const postlikeuser =["respondeai","adorable_animals"];
    const postlikenumber =["outras 101.523 pessoas","outras 99.159 pessoas"];

    const sugestaoimg =[ badvibes, chibirdart , razoesparaacreditar,adorable_animals,smallcutecats ]
    const sugestaonome=['bad.vibes.memes','chibirdart','razoesparaacreditar','adorable_animals','smallcutecats']
    const sugestaorazao =['segue você','segue você','Novo no Instagram','segue você','segue você']

    const img= storyimg.map(storyimg => 
    <div className="imagem">
        <img src={storyimg} />
    </div>
    );

    const user= storyuser.map(storyuser => 
    <div className="usuario">
        {storyuser}
    </div>);
    
    return (
                <div className="corpo">
                    <div className="esquerda">
                        <div className="stories">
			                    {img.map((img,index)=> 
                                <div className="story">
                                    {img}
                                    {user[index]}
                                    </div>)}
                        </div>  
                        <div className="posts">
                        {postimg.map((postimg,index)=> 
                        <div className="post">
                            <div className="topo">
                                            <div className="usuario">
                                            <img src={postuserimg[index]} />
                                            <div class="texto">
                                                {postuser[index]}
                                            </div>
                                                
                                            </div>
                                            <div class="acoes">
                                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                                            </div>
                            </div>
                            <div className="conteudo">
                                        <img src={postimg} />
                            </div>

                            <div className="fundo">
                                <div className="acoes">
                                    <div>
                                            <ion-icon name="heart-outline"></ion-icon>
                                            <ion-icon name="chatbubble-outline"></ion-icon>
                                            <ion-icon name="paper-plane-outline"></ion-icon>
                                        </div>
                                        <div>
                                            <ion-icon name="bookmark-outline"></ion-icon>
                                        </div>
                                    </div>

                                    <div className="curtidas">
                                        <img src={postlikeimg[index]} />
                                        <div className="texto">
                                            Curtido por <strong>{postlikeuser[index]}</strong> e <strong>{postlikenumber[index]}</strong>
                                            </div>
                                    </div>                                     
                            </div>
                        </div>
                    )}</div>
                </div>
                <div className="sidebar">
                    <div class="usuario">
                        <img src={imgprofile} />
                        <div class="texto">
                            <strong>catanacomics</strong>
                            Catana
                        </div>
                    </div>

                    <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

            {sugestaoimg.map((sugestaoimg,index)=> 
            <div class="sugestao">
              <div class="usuario">
                <img src={sugestaoimg} />
                <div class="texto">
                  <div class="nome">{sugestaonome[index]}</div>
                  <div class="razao">{sugestaorazao[index]}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
            )}
              
        </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
     </div>
            
)} 
