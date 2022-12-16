import React from "react";
import Navibar from "../navbar/navbar";

import {BrowserRouter as Router,Route} from "react-router-dom";


function Deleteacc(){
    return(
<div>
    <Router>    
       <Route  exact><Navibar/></Route>
    </Router>
</div>
    
    )
}
export default Deleteacc;