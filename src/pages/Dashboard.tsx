import React from "react";
import {Link} from 'react-router-dom';

 
const Dashboard = () => {
    return (
        <><br></br><br></br><div>
            <h1 className="color-white">
                Your Current Positions + Rank
            </h1>
            <h1 className="color-white">
                Opportunities to explore
            </h1>
            <h1>
                <Link to="../Airdrop">Airdrop</Link>
            </h1>
        </div></>
       
    );
};
 
export default Dashboard;