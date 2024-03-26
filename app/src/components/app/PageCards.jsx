import React from "react";

import Style from "./PageCard.module.css";
import { Icon } from '@iconify/react';
import Sidebar from "./Sidebar";



function PageCard(){

    return(

        <>

        <div className={Style.contprincipal}>

            <Sidebar/>

        <div className={Style.containertelacaixas}>

<div className={Style.containercaixas}>
     <div className={Style.caixas}>
        <div className={Style.conteudocaixa}>
        <p className={Style.titulocaixa}>Vocabulário Francês</p>
        <p className={Style.desctitulo}>2 cartões,2 para hoje</p>
             <ul>
              <li><Icon icon="majesticons:box-line" width="20" height="32"  color='#8B888F' /></li>  
              <li><Icon icon="majesticons:box-line" width="20" height="32"  color='#8B888F' /></li>  
              <li><Icon icon="majesticons:box-line" width="20" height="32"  color='#8B888F' /></li>  
              <li><Icon icon="majesticons:box-line" width="20" height="32"  color='#8B888F' /></li> 
              <li><Icon icon="majesticons:box-line" width="20" height="32"  color='#8B888F' /></li>  

                
            </ul>
        </div>
        


     </div>

     <div className={Style.caixas}>
        <div className={Style.conteudocaixa}>
        <p className={Style.titulocaixa}>Anatomia</p>
        <p className={Style.desctitulo}>2 cartões,1 para hoje</p>
             <ul>
              <li><Icon icon="majesticons:box-line" width="20" height="32"  color='#8B888F' /></li>  
              <li><Icon icon="majesticons:box-line" width="20" height="32"  color='#8B888F' /></li>  
              <li><Icon icon="majesticons:box-line" width="20" height="32"  color='#8B888F' /></li>  
              <li><Icon icon="majesticons:box-line" width="20" height="32"  color='#8B888F' /></li> 
              <li><Icon icon="majesticons:box-line" width="20" height="32"  color='#8B888F' /></li>  

                
            </ul>
        </div>
        


     </div>

     

     
    
     </div>
     



</div>



<div  className={Style.caixa}>
        <div className={Style.caixatitulotema}><p className={Style.titulo}>Vocabulário Francês</p></div>
      

           <div className={Style.containerprin}>

               <div className={Style.containercont}>
                  <div className={Style.containernum}><p>2</p></div>
                 <div className={Style.containerbox}><Icon  icon="majesticons:box-line" width="28" height="32"  /></div>

              </div>


              <div className={Style.containercont}>
                  <div className={Style.containernum}><p>0</p></div>
                 <div className={Style.containerbox}><Icon  icon="majesticons:box-line" width="28" height="32"  /></div>

              </div>

              <div className={Style.containercont}>
                  <div className={Style.containernum}><p>0</p></div>
                 <div className={Style.containerbox}><Icon  icon="majesticons:box-line" width="28" height="32"  /></div>

              </div>

              <div className={Style.containercont}>
                  <div className={Style.containernum}><p>0</p></div>
                 <div className={Style.containerbox}><Icon  icon="majesticons:box-line" width="28" height="32"  /></div>

              </div>

              <div className={Style.containercont}>
                  <div className={Style.containernum}><p>0</p></div>
                 <div className={Style.containerbox}><Icon  icon="majesticons:box-line" width="28" height="32"  /></div>

              </div>

           </div>

           <div className={Style.containerdetcaixas}>

            <div className={Style.detcartoes}><p className={Style.textcartoes}>Cartões na caixa: <b className={Style.numcartoes}>2</b> </p></div>

            <div className={Style.containernewcard}>

                <button id={Style.btnnewcard}>Novo cartão</button>
            </div>
           </div>

           <div className={Style.containercontcards}> <b className={Style.numcont}>0/2</b> </div>

           <div className={Style.estudarcard}>

            <button id={Style.btnestudar}>Estudar cartões</button>
           </div>

           <div className={Style.containercalendcards}>

            <div className={Style.calendcards}>
                      <div className={Style.conthoje }> <p className={Style.letracalend}>Hoje</p> </div>
                      <div className={Style.contatuais }> <p className={Style.letracalendalt}>Atuais</p> </div>
                      <div className={Style.contconcluidas }> <p className={Style.letracalendalt}>Concluídas</p> </div>
            </div>

            <div className={Style.conttemacard}>
                <div className={Style.letratemacard}>Vouloir</div>
                
            </div>

            <div className={Style.conttemacard}>
                <div className={Style.letratemacard}>Pouvoir</div>
                
            </div>
           </div>
    

          

        </div>
       



        </div>



    
       
        </>
         
        



    )
}

export default PageCard;