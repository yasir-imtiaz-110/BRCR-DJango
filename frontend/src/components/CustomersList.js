import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Table, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';


const CustomersList=({onDelete})=>{
    let SrNo = 0;
    //hook for data fetch
    const [data,setData]=useState([])
    // const navigate = useNavigate();
    //hooks and functions for dialogue box
    const [activeTab, setActiveTab] = useState('Tab1');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        console.log("Component mounted");
        Axios.get("http://localhost:8000/customers/list/", {
          headers: {
            'Accept': 'application/json',     //  Correct casing
            'Content-Type': 'application/json' //  Optional but good practice
          }
        })
        .then((res) => setData(res.data))
        .catch((err) => console.error(err)); //  Optional: handle errors
      }, []);
    
    const DeleteCustomer=(id)=>{
        alert(id);
        
        Axios.post(`http://localhost:8000/customers/delete/${id}/`)
            .then(response => {
                if (response.status === 200) {
                    // setMessage('User deleted successfully');
                    alert("Customer No"+ id +"deleted successfully");
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
            <Container className='mt-5 bg-Secondary form-header-custom'>
                <Row>
                    <Col md={12} >
                        <h1 className="form-header-custom">Customers List</h1>
                    </Col>
                </Row>
            </Container>
            {/* Tab code  */}
            <div className="tabs">
                <button onClick={() => setActiveTab('Tab1')}>B2C</button>
                <button onClick={() => setActiveTab('Tab2')}>B2B</button>
            </div>
            <div>
                {activeTab === 'Tab1' && (
                    <div>
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <Table>
                                        <thead>
                                            <tr className='table-header-custom'>
                                                <th>#</th>
                                                <th>Visa Type</th>
                                                <th>ID/Passport</th>
                                                <th>ID/Passport Issued By</th>
                                                <th>ID/Passport Expiry</th>
                                                <th>Driving License</th>
                                                <th>License Issued By</th>
                                                <th>Driving License Expiry</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Gender</th>
                                                <th>Mob</th>
                                                <th>Customer Relation</th>
                                                <th>Direct/Agent name/Rent a Car name</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>                   
                                        {data.map(customer=> 
                                            <tr className='table-definition-custom'>
                                                <td>{SrNo = SrNo + 1}</td>
                                                <td>{customer.customer_type}</td>
                                                <td>{customer.visa_type}</td>
                                                <td>{customer.id_card_no}</td>
                                                <td>{customer.license_no}</td>
                                                <td>{customer.first_name}</td>
                                                <td>{customer.phone}</td>
                                                <td>{customer.id_issued_by}</td>
                                                <td>{customer.license_issued_by}</td>
                                                <td>{customer.last_name}</td>
                                                <td>{customer.relation_type}</td>
                                                <td>{customer.id_expiry_date}</td>
                                                <td>{customer.license_expiry_date}</td>
                                                <td>{customer.gender}</td>
                                                <td>{customer.reference}</td>
                                                <td><Link to={`/customers/update/${customer.id}`}>Update</Link></td>
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
                                                        <Button variant="danger" onClick={()=>DeleteCustomer(customer.id)}>Delete</Button>
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
                )}
            {/* B2C Form code end */}

                {activeTab === 'Tab2' && (
                    <div>
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <Table>
                                        <thead>
                                            <tr className='table-header-custom'>
                                                <th>#</th>
                                                <th>Company name</th>
                                                <th>Company TRN</th>
                                                <th>Traffic Code No (optional)</th>
                                                <th>Owner name</th>
                                                <th>Describtion</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map(customer=> 
                                                <tr className='table-definition-custom'>
                                                    <td>{SrNo = SrNo + 1}</td>
                                                    <td>{customer.companyname}</td>
                                                    <td>{customer.ownername}</td>
                                                    <td>{customer.tradeLicence}</td>
                                                    <td>{customer.trafficCode}</td>
                                                    <td>{customer.description}</td>
                                                    <td><Link to={`/customers/update/${customer.id}`}>Update</Link></td>
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
                                                            <Button variant="danger" onClick={()=>DeleteCustomer(customer.id)}>Delete</Button>
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
                )}
            </div>
        </div>
    );
}

export default CustomersList;

