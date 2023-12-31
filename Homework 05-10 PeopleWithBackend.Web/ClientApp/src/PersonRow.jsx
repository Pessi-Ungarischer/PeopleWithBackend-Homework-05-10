﻿import react from 'React'

export default function PersonRow({ person }) {
    const { id, firstName, lastName, age } = person
    return (<>
        <tr>
            <td>{id}</td>
            <td>check box</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>
                <button className="btn btn-warning mt-2">Edit</button>
                <button className="btn btn-danger mt-2" style={{ marginLeft: 10 }}>Delete</button>
            </td>
        </tr>
    </>)
}


//<td>check box</td>
//            <td>{firstName}</td>
//            <td>{lastName}</td>
//            <td>{age}</td>
//            <td>
//                <button className="btn btn-warning mt-2">Edit</button>
//                <button className="btn btn-danger mt-2" style={{ marginLeft: 10 }}>Delete</button>
//            </td>