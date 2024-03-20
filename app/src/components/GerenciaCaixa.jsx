import React from 'react';
import Style from './GerenciaCaixa.module.css';
import { Icon } from '@iconify/react';

function GerenciaCaixa(){

    return(
          
        <>
         
       <div  className={Style.caixa}>
        <div className={Style.caixatitulotema}><p className={Style.titulo}>Vocabulário Francês</p></div>
        <div className={Style.containercaixas}>
           <div className={Style.containernumeros} >
           <ul>
               <li className={Style.numero1}>2</li>
               <li className={Style.numero2}>0</li>
               <li className={Style.numero3}>0</li>
               <li className={Style.numero4}>0</li>
               <li className={Style.numero5}>0</li>
               


           </ul>

           
           
           </div>

           <div className={Style.containericones}>

           <Icon className={Style.icone} icon="majesticons:box-line" width="28" height="32" color='#511ABE'  />

            <Icon  icon="majesticons:box-line" width="28" height="32"  />
            <Icon icon="majesticons:box-line" width="28" height="32"  />
            <Icon icon="majesticons:box-line" width="28" height="32"  />
            <Icon icon="majesticons:box-line" width="28" height="32"  />

           </div>

          

         

          

           </div>

           <div className={Style.containerprin}>

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
          

          

        </div>
       



    
      
           
        </>

    )
}

export default GerenciaCaixa;