import './style.css';
import React from 'react';
import Header from '../Header';




const Dashboard = ({children}) => {
    
    
    return (
        <>
        <div>
            <Header/>
            {children}
            <main></main>
        </div>
        
        </>
    );
}

export default Dashboard;