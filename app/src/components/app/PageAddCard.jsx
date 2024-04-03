import React from "react";
import style from "./PageAddCard.module.css"
import SideBar from './Sidebar'
import { Icon } from '@iconify/react';
import logo from './images/logo.png'
import ModalNewcard from "./modal/ModalNewCard";


function PageAddCard(){
    
   
    
     return(
        <>
         <SideBar/>
         

         <div className={style.divAddCaixa}>

                <div className={style.divLogo}>
                  < img src = {logo}></img>
                </div>

              <span className={style.divTextAdd}>Você não possui caixas, crie uma nova para começar</span>
                  <ModalNewcard/>
               

         </div>
        
        </>
       


    )
}

export default PageAddCard;