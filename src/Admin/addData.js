import React, { useState, useEffect } from 'react';
import { Insert, Update, DeleteById, DeleteByCondition, getItemByID, getItemByFilter, getAllItems, UploadFile } from '../database/Connection'
export default function AddData(prop) {
    const [formData, setColumns] = useState({});
    const [refresh, setRefresh] = useState(0);
    useEffect(() => {
        let temp = {};
        prop.columns.forEach(element => {
            temp[element.colName] = "";
        });
        setColumns(temp);
        if (prop.docID) {
            fillUpdateData(prop.docID)
        }
    }, []);


    const fillUpdateData = async (docID) => {
        const result = await getItemByID(prop.collection, docID);
        setColumns(result);
    }
    const onSave = async () => {
        if (prop.docID) {
            await Update(prop.collection, prop.docID, formData);

        }
        else {
            await Insert(prop.collection, formData);

        }
        prop.onClose();
    }


    return (
        <>
            <div className="modal fade show" style={{ display: 'block' }} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ maxWidth: '1000px' }} role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{prop.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { prop.onClose(); }}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <div className='row'>
                                {prop.columns.map((val, id) => {
                                    return (
                                        <div className='col-lg-4 col-md-4 col-sm-4' style={{ marginBottom: '15px' }}>
                                            <label>{val.displayName}</label>
                                            {val.type == "text" ? <>
                                                <input className="form-control" type="text" placeholder={val.displayName} defaultValue={formData[val.colName]} onChange={(e) => {
                                                    let temp = formData;
                                                    temp[val.colName] = e.target.value
                                                    setColumns(temp)
                                                }} />
                                            </> : <></>}

                                            {val.type == "multi" ? <>

                                                <textarea className="form-control" rows={3} placeholder={val.displayName} defaultValue={formData[val.colName]} onChange={(e) => {
                                                    let temp = formData;
                                                    temp[val.colName] = e.target.value
                                                    setColumns(temp)
                                                }} ></textarea>
                                            </> : <></>}


                                            {val.type == "number" ? <>
                                                <input className="form-control" type="number" placeholder={val.displayName} defaultValue={formData[val.colName]} onChange={(e) => {
                                                    let temp = formData;
                                                    temp[val.colName] = e.target.value
                                                    setColumns(temp)
                                                }} />
                                            </> : <></>}

                                            {val.type == "file" ? <>
                                                <input className="form-control" type="file" placeholder={val.displayName} accept="image/*" onChange={async (e) => {

                                                    let url = await UploadFile(new Date().toISOString() + e.target.files[0].name, e.target.files[0]);

                                                    let temp = formData;
                                                    temp[val.colName] = url
                                                    setColumns(temp);
                                                    setRefresh(refresh + 1)
                                                }} />
                                                {formData[val.colName] ? <>
                                                    <img style={{ width: '50px', height: '50px' }} src={"" + formData[val.colName]} />
                                                </> : <></>}

                                            </> : <></>}


                                            {val.type == "dropdown" ? <>

                                                <select className="form-control" name={val.displayName} id={val.displayName} onChange={(e) => {
                                                    let temp = formData;
                                                    temp[val.colName] = e.target.value
                                                    setColumns(temp)
                                                }}>
                                                    {val.Items.map((itm, drp) => {
                                                        return (
                                                            <option selected={formData[val.colName] == itm ? true : false} value={itm}>{itm}</option>
                                                        )
                                                    })}
                                                </select>
                                            </> : <></>}

                                            {val.type == "Checkbox" ? <>
                                                <input style={{display:'block'}} class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e) => {
                                                    
                                                    let temp = formData;
                                                    temp[val.colName] = e.target.checked
                                                    setColumns(temp)
                                                }} />
                                                

                                            </> : <></>}
                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => { prop.onClose(); }}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => { onSave() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}