import React, { useState, useEffect } from 'react';
import { Insert, Update, DeleteById, DeleteByCondition, getItemByID, getItemByFilter, getAllItems, UploadFile } from '../database/Connection'

export default function LeftNav() {
    const [data, setLeftNavData] = useState([]);
    let detail = JSON.parse(localStorage.getItem('adminStamp'));
    useEffect(() => {
        if(detail == null || (detail && Object.keys(detail).length == 0)){
            window.location.href ="/adminLogin"
        }
        loadData();

    }, []);

    const logout = ()=>{
        localStorage.setItem('adminStamp',null);
        window.location.href ="/adminLogin"
    }

    const loadData = async () => {



        const result = await getAllItems("Setting");
        await setLeftNavData(result)


    }
    return (
        <>


            <div className="border-end bg-white" id="sidebar-wrapper" style={{ width: '15%' }}>
                <div className="sidebar-heading border-bottom bg-light" style={{ height: '50px' }}></div>
                <div className="list-group list-group-flush">
                    {data.map((val, id) => {
                        return (
                            <a className="list-group-item list-group-item-action list-group-item-light p-3" href={"/admin?id="+val.id}>{val.Collection}</a>
                        )
                    })}
                            <a className="list-group-item list-group-item-action list-group-item-light p-3" onClick={()=>{logout()}}>Logout</a>

                    
                </div>
            </div>



        </>
    )
}