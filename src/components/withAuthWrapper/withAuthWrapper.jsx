import './style.css';
import React, { Component } from 'react';



function withAuthWrapper (ChildComponent)  {

    
    return class Container extends Component{
        render(){
            return (
        
       
           
                <div className="auth">
                     <div className="hipsta-title">
                       <div className="hipsta-icon"></div>
                        <h1>HIPSTAGRAM</h1>
                    
                     </div>
                    <ChildComponent/>
                 </div>
     
         );
        }
        
        
    } 
}

export default withAuthWrapper;