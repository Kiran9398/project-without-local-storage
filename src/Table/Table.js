import React from "react";
import '../App.css';

function Table({deleteHandler,data,editHandler}){
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>number</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e,index)=>{
                        return(
                            <tr key={index}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.number}</td>
                                <td>
                                    <button onClick={()=>editHandler(e)}>Edit</button>
                                    <button onClick={()=>deleteHandler(index)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;