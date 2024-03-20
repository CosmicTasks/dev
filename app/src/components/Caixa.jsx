import REact from 'react';
import Style from "./Caixa.module.css";
import { Icon } from '@iconify/react';


function Caixa() {

    function adicionarBorda(elemento){

        elemento.classList.toggle('bordaativa');
    }
    return(
     <>

     <div className={Style.containercaixas}>
     <div className={Style.caixas} onclick="adicionarBorda(this)">
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
     
   
     </>

     
       

    )
}

export default Caixa;
