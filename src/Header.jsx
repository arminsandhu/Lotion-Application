import React from 'react';

const headerWrapper  = {
    flex: "1,100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "2px solid #f2f2f2f5"
};

const headerWrapperButton = {
    flex: "1,0,1",
    display: "flex",
    margin: "0px 0px 0px 0px",
    flexDirection: "column"
};


const headerWrapperTitle = {
    flex: "1",
    display: "flex",
    flexDirection: "column"
};


const Header = ({showSidebar, setSidebar}) => {
    
    return (
        <div style={headerWrapper}>
        <div style={headerWrapperButton}>
            <button id="menu" onClick={() => setSidebar(!showSidebar)}>&#9776;</button>
        </div>
        <div style={headerWrapperTitle}>
            <h1>
                Lotion
            </h1>
            <h6>Like Notion, but worse.</h6>
        </div>
    </div>
    )
}

export default Header;