import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import NewPersonForm from './NewPersonForm'
import axios from 'axios'
import PeopleTable from './PeopleTable'


class People extends React.Component {

    state = {
        currentPerson: {
            firstName: 'firstName',
            lastName: 'lastName',
            age: '1'
        },
        people: []
    }

    topDivStyle = {
        marginTop: 60
    }

    onAddClicked = (e) => {
        console.log("add clicked!!")

        axios.post('/api/People/addperson', this.state.currentPerson).then((n) => {
            console.log(n)
        })
    }

    onTextChange = (e) => {
        const copy = { ...this.state.currentPerson }
        copy[e.target.name] = e.target.value
        this.setState({ currentPerson: copy })
    }

    //rename this
    //can't be sure if got back the list
    renderTable = () => {
        axios.get('/api/People/GetAllPeople').then(res => {
            this.setState({ people: res.data })
        })
       
    }


    render() {
        return (<>
            <div className="container" style={this.topDivStyle} >
                <NewPersonForm
                    onAddClicked={this.onAddClicked}
                    onTextChange={this.onTextChange}>
                </NewPersonForm>
            </div>
            <h5>{this.state.people}</h5>
            {this.renderTable()}
            
            <div className="container" style={this.topDivStyle} >
                <PeopleTable>
                    
                </PeopleTable>
            </div>
        </>)
    }
}
export default People
//line 56 "..."
//is "renderTable" reterning correctly?

//{this.renderTable()}
