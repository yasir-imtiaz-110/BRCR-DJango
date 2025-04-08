import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Table, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';


const UsersList=({onDelete})=>{
    let SrNo = 0;
    //hook for data fetch
    const [data,setData]=useState([])
    // const navigate = useNavigate();
    //hooks and functions for dialogue box
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(()=>{
        Axios.get("http://localhost:8000/users/list/").then((res)=> setData(res.data));
    },[])
    
    const DeleteUser=(id)=>{
        alert(id);
        
        Axios.post(`http://localhost:8000/users/delete/${id}/`)
            .then(response => {
                if (response.status === 200) {
                    // setMessage('User deleted successfully');
                    alert("User No"+ id +"deleted successfully");
                    // Redirect or handle post-deletion behavior
                    handleClose();
                    window.location.reload();
                    // navigate('/users/list'); // Example redirect to the user list page
                    

                }
            })
            .catch(error => {
                console.error(error);
                // setMessage('Error deleting user');
                alert("Found" + error + "Deleting User No"+ id );
            });
    }


    return(
        
        <div>

            {/* <Table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>DOB</th>
                        <th>ID</th>
                        <th>Joining Date</th>
                        <th>Designation</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user=> 
          
                        <tr  key={user.id}>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>{user.date_of_birth}</td>
                            <td>{user.id_card_number}</td>
                            <td>{user.joining_date}</td>
                            <td>{user.designation}</td>
                            <td>{user.home_address}</td>
                        </tr>
          
                    )}
                </tbody>
            </Table> */}
            <Container className='mt-5 bg-Secondary form-header-custom'>
                <Row>
                    <Col md={12} >
                        <h1 className="form-header-custom">Users List</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
              <Row>
                
                <Col md={12}>
                    <Table>
                    <thead>
                        <tr className='table-header-custom'>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Mob</th>
                        <th>Home</th>
                        <th>Date Of Birth</th>
                        <th>ID</th>
                        <th>Job Title</th>
                        <th>Is Working?</th>
                        <th>Joining Date</th>
                        <th>User Role</th>
                        <th>Update</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                   
                    {data.map(user=> 
                    <tr className='table-definition-custom'>
                        <td>{SrNo = SrNo + 1}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>Username</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td>{user.home_address}</td>
                        <td>{user.date_of_birth}</td>
                        <td>{user.id_card_number}</td>
                        <td>{user.designation}</td>
                        <td>Is Working?</td>
                        <td>{user.joining_date}</td>
                        <td>User Role</td>
                        <td><Link to={`/users/update/${user.id}`}>Update</Link></td>
                        {/* <td><Button variant="success" type='submit' className='' value={user.id}>Update</Button></td> */}
                        <td>
                        <Button variant="danger" onClick={handleShow}>Delete</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Confirm Deletion</Modal.Title>
                            </Modal.Header>
                            <Modal.Body >Are you sure you want to delete this item?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                                <Button variant="danger" onClick={()=>DeleteUser(user.id)}>Delete</Button>
                            </Modal.Footer>
                        </Modal>

                        </td>
                        </tr>
                    )}
          
                    </tbody>
                    </Table>
                </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UsersList;

