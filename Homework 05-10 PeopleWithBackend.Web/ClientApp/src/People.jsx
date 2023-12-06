import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import NewPersonForm from './NewPersonForm'
import axios from 'axios'
import PeopleTable from './PeopleTable'
import PersonRow from './PersonRow'


class People extends React.Component {

    state = {
        //loading: true,
        currentPerson: {
            firstName: '',
            lastName: '',
            age: ''
        },
        people: []

    }

    topDivStyle = {
        marginTop: 60
    }

    onAddClicked = (e) => {
        console.log("add clicked!!")
        const { currentPerson } = this.state.currentPerson
        axios.post('/api/People/addperson', this.state.currentPerson).then(
            this.getPeople(),
            this.setState({
                currentPerson: {
                    firstName: '',
                    lastName: '',
                    age: ''
                }

            }),
            console.log("added")
        )

    }


    onTextChange = (e) => {
        const copy = { ...this.state.currentPerson }
        copy[e.target.name] = e.target.value
        this.setState({ currentPerson: copy })
    }

    //rename this
    //can't be sure if got back the list
    genorateTable = () => {
        const { people } = this.state;


        return people.map(p => <PersonRow person={p} key={p.id}></PersonRow>)
        console.log("in genorate table")
    }


    deletePerson = () => {
        const id = 4
        console.log(`beginning of deletePerson: ${id}`)
        axios.post('/api/People/DeleteById', 4).then((res) => {
            console.log(`in then: ${res.data}`)
        })
        console.log(`end of deletePerson (origial): ${id}`)

    }



    getPeople = () => {
        
        axios.get('/api/People/GetAllPeople').then()
            .then(res => {
                this.setState({ people: res.data })
            })
        loading: false
        this.genorateTable()
    }
    componentDidMount = () => {
        this.getPeople();


    }

    render() {
        const { firstName, lastName, age } = this.state.currentPerson
        return (<>
            <div className="container" style={this.topDivStyle} >
                <NewPersonForm
                    firstName={firstName}
                    lastName={lastName}
                    age={age}
                    onAddClicked={this.onAddClicked}
                    onTextChange={this.onTextChange}>
                </NewPersonForm>
            </div>
            {this.deletePerson(4)
 }
            <div className="container" style={this.topDivStyle} >

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
                        {this.genorateTable()}

                    </tbody>
                </table>

            </div>
        </>)

    }
}
export default People

//is "renderTable" reterning correctly?

//{this.renderTable()}
