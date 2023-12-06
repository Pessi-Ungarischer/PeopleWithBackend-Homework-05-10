import React from 'react'


export default function NewPersonForm({ firstName, lastName, age, onAddClicked, onTextChange }) {
    return (<>
        <div className="row" >
            <div className="col-md-3">
                <input onChange={onTextChange} value={firstName} type="text" className="form-control" placeholder="First Name" name="firstName" />
            </div>
            <div className="col-md-3">
                <input onChange={onTextChange} value={lastName} type="text" className="form-control" placeholder="Last Name" name="lastName" />
            </div>
            <div className="col-md-3">
                <input onChange={onTextChange} value={age} type="text" className="form-control" placeholder="Age" name="age" />
            </div>
            <div className="col-md-3">
                <button onClick={onAddClicked} className="btn btn-primary w-100">Add</button>
            </div>
        </div>
    </>)
}


  //  \\ || //
  //   \\||//
  //    \||/
  //     ||
  //    /||\
  //   //||\\
  //  // || \\
  // //  ||  \\
  ////   ||   \\