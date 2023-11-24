import react from 'React'
import PersonRow from './PersonRow'

export default function PeopleTable() {
    return (<>
        <h4>This is from peopleTable!! b"H</h4>

        <table className="table table-hover table-striped table-bordered">
            <thead>
                <tr>
                    <th style={{ width: 1 }}>
                        <button className="btn btn-danger" style={{ width: 100 }}>Delete All</button>
                        <button className="btn btn-outline-danger mt-2" style={{ width: 100 }}>Check All</button>
                        <button className="btn btn-outline-danger mt-2" style={{ width: 100 }}>Uncheck All</button>

                    </th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Edit/Delete</th>
                </tr>
            </thead>
            <tbody>

                <PersonRow></PersonRow>

            </tbody>
        </table>

    </>)
}

// style="width: 15%;"
//style={{ width: 100}}
//style={{ width: 50}}