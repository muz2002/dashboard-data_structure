import React from 'react';

function SectionWrapper({ children }) {
    const style = {
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'flex-start',     
        paddingTop: "100px",
        padding: '20px',
        flexWrap: 'wrap',            
        gap: '20px 20px',  
    };

    return <div style={style}>{children}</div>;
}

export default SectionWrapper;
