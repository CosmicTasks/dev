import React from 'react';
import Style from './GerenciaCaixa.module.css';
import { Icon } from '@iconify/react';

function GerenciaCaixa(){

    return(
          
        <>
         
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
       



    
      
           
        </>

    )
}

export default GerenciaCaixa;