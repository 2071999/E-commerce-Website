import AddData from "./addData"
import React, { useState, useEffect } from 'react';
import { Insert, Update, DeleteById, DeleteByCondition, getItemByID, getItemByFilter, getAllItems, UploadFile } from '../database/Connection'
// import Pagination from 'office-ui-fabric-react-pagination';
import "../assets/css/admin.css";
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import LeftNav from "./LeftNav";

const viewCount = 20;
export default function DataList() {
    const [showPopUp, setPopup] = useState(false);
    const [columns, setColumns] = useState([]);
    const [collection, setCollection] = useState('');
    const [collectionTitle, setCollectionTitle] = useState('');
    const [docID, setDocID] = useState(null);
    const [data, setCollectionData] = useState([]);


    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPage] = useState(1);
    const [pageItem, setPageItem] = useState([]);

    useEffect(() => {
        loadData();

    }, []);

    const loadData = async () => {


        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('id');
        const result = await getItemByID("Setting", myParam);
        await setColumns(JSON.parse(result.Fields))
        await setCollection(result.CollectionName);
        await setCollectionTitle(result.Collection);

        await getCollectionData(result.CollectionName);

    }


    const getCollectionData = async (col) => {
        const data = await getAllItems(col);
        let pagi = pagination(1, data, true);
        setPageItem(pagi);
        setCollectionData(data)
    }

    const deleteItem = async (id) => {
        if (window.confirm("Are you sure want to delete?")) {
            await DeleteById(collection, id);
            getCollectionData(collection)
        }
    }

    const pagination = (crntPage, items, isBind) => {
        var startCount = (crntPage - 1) * viewCount;
        var endCount = crntPage * viewCount;
        var pagedArr = items.slice(startCount, endCount);
        if (isBind) {
            setTotalPage(Math.ceil(items.length / viewCount));
            setCurrentPage(1)
        }
        return pagedArr;

    }

    const exportExcel = (csvData, fileName) => {


        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';

        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }


    return (

        <div className="d-flex" id="wrapper">
            <LeftNav/>
            <div id="page-content-wrapper" style={{width:'85%'}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        <h3>{collectionTitle}</h3>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <a style={{ cursor: 'pointer' }} onClick={() => { setPopup(true); setDocID(null) }}>Add Item</a>

<i className="fa fa-download" style={{ marginLeft: '15px' }} onClick={() => { exportExcel(data, collectionTitle) }} aria-hidden="true"></i>

                            </ul>
                        </div>
                    </div>
                </nav>
                {showPopUp ? <>
                    <AddData docID={docID} title={collectionTitle} collection={collection} columns={columns} onClose={() => { setPopup(false); getCollectionData(collection) }} />

                </> : <></>}
                
                    <div className="container-fluid">
                <table id="example" className="table table-striped" style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            {columns.map((val, id) => {
                                return (
                                    <th>{val.displayName}</th>
                                )
                            })}
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {pageItem.map((val, id) => {
                            return (
                                <tr>
                                    {columns.map((val1, id1) => {
                                        return (
                                            <>
                                                {val1.type == "file" ? <>
                                                    <td><a href={val[val1.colName]} target="_blank">Click</a></td>
                                                </> : <>
                                                    {val1.type == "Checkbox" ? <>
                                                        <td>{val[val1.colName] ? "True" : "False"}</td>
                                                    </> : <>
                                                        <td>{val[val1.colName]}</td>
                                                    </>}

                                                </>}

                                            </>
                                        )
                                    })}
                                    <td>
                                        <i className="fas fa-edit" onClick={() => { setPopup(true); setDocID(val.id) }}></i>
                                        <i style={{ marginLeft: '10px' }} className="fa fa-trash" aria-hidden="true" onClick={() => { deleteItem(val.id) }}></i>
                                    </td>
                                </tr>
                            )
                        })}



                    </tbody>

                </table>
                
                <div id="customPagination">
                    {pageItem.length > 0 ? <>
                        {/* <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            hideEllipsis={true}
                            hideFirstAndLastPageLinks={true}

                            siblingPagesRange={2}
                            onChange={(page) => {
                                setPageItem(pagination(page, data));
                                setCurrentPage(page);


                            }}
                        /> */}
                    </> : <></>}
                </div>
                </div>
            </div>
        </div>

    )
}