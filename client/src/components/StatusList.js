import React from "react";
import { Card } from 'antd';
import './StatusList.less';

function StatusList({data}) {
    
    return(
        
        <div className="status-container">
            <table className="user-table">  
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user =>  
                            <tr key={user.name}>
                                <td>{user.name} </td>
                                <td> {user.status}</td>
                                <td> {user.date}</td>
                            </tr>
                    )}
                </tbody>
            </table>  
        </div>
    );

}

export default StatusList;