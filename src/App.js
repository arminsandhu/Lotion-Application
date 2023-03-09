
import React, { useState } from "react";

import Header from './Header'
import Body from './Body'


function App() {

  const [showSidebar, setSidebar] = useState(true);

  return (
  <div style={{height: "100%"}} >
    <Header setSidebar={setSidebar} showSidebar={showSidebar}/>
    <Body showSidebar={showSidebar}/>
  </div>
)}

export default App;
