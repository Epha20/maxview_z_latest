import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";


export default class MemberTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
  }  

  deleteStudent() {
    axios
      .delete(
        "http://localhost:4000/students/delete-student/" + this.props.student._id
      )
      .then((res) => {
        console.log("Member successfully deleted!");
        alert("Member successfully deleted!")
        window.location.reload(true);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.student.name}</td>
        <td>{this.props.student.email}</td>
        <td>{this.props.student.age}</td>
        <td>{this.props.student.mobile}</td>
        <td>{this.props.student.sex}</td>
       
        <td>{this.props.student.duration}</td>
        <td>{this.props.student.membership}</td>
        <td>{this.props.student.amount}</td>
        <td>{this.props.student.date}</td>
        <td>{this.props.student.cname}</td>
 
        <td>
          <Link
            className="edit-link"
            path={"product/:id"}
            to={"/edit-student/" + this.props.student._id}
            style={{ textDecoration: 'none' }}
            
          >
            Edit
          </Link>
          <br />
          <br />
          

          <Button
           className="delete-link"
            onClick={this.deleteStudent}
            size="md"
            
            
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
