import React from "react";
import ProgressBar from "./ProgressBar";
import StatusList from "./StatusList"
import './ReferDashboard.less'



function ReferDashboard({data}) {
    
    // console.log(data)
    return(
        <div className="refer-dash-container">
            <h2>My Referrals</h2>
            <button  className="refer-button" style ={{backgroundColor: "#0078D2", color: "white"}}>Refer a Friend</button>
            <ProgressBar/>
            <img src="../../public/images/aa-logo.jfif"/>
            <p>4,000 Bonus Miles Earned</p>
            <p>2,000 Bonus Miles Pending</p>
            
            <StatusList data ={data}/>
        </div>
        
    );
}

export default ReferDashboard;