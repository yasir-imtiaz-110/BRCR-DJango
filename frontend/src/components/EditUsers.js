import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Row, Col, Form, Button, Container } from 'react-bootstrap'; 

// const EditUsers = ({ match }) => {
//     const { id } = useParams();
//     const [loading, setLoading] = useState(true);
//     const [user, setUser] = useState({
//         id: '',
//         firstname: '',
//         lastname: '',
//         username: '',
//         email: '',
//         password: '',
//         mobile: '',
//         id_card_number: '',
//         joining_date: '',
//         designation: '',
//         user_roles: '',
//     });

//     useEffect(() => {
//         Axios.get(`http://localhost:8000/users/${id}/`)
//             .then(res => setUser(res.data))
//             .catch(err => console.error(err));
//     }, [id]);


    const EditUsers = ({ match }) => {
        const { id } = useParams();
        
        const [user, setUser] = useState({
            id: '',
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            mobile: '',
            id_card_number: '',
            joining_date: '',
            designation: '',
            user_roles: '',
            is_active_user: '',
        });
        useEffect(() => {
            Axios.get(`http://localhost:8000/users/${id}/`)
                .then(res => setUser(res.data))
                .catch(err => console.error(err))
                debugger
                ;
        }, [id]);
    
    
    


    // useEffect(() => {
    //     Axios.get(`http://localhost:8000/users/${id}/`)
    //         .then(res => {
    //             setUser(res.data);
    //             setLoading(false);
    //         })
    //         .catch(err => {
    //             console.error(err);
    //             setLoading(false);
    //         });
    // }, [id]);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
        alert( `${name} Selling prince is ${value}` );
    };

    const handleSubmit = e => {
        e.preventDefault();
        Axios.post(`http://localhost:8000/users/update/${id}/`, user)
            .then(res => {
                console.log(res.data);
                // Optionally, handle successful update here
                alert("User Updated Sucessfully")
            })
            .catch(err => console.error(err));
    };

    return (
        <>
            <Container className='mt-5 bg-Secondary form-header-custom'>
                <Row>
                    <Col md={12} >
                    <h1 className="form-header-custom">Update User</h1>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-3'>
                <Row>
                    <Col md={6} className=''>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId='FormFirstName'>
                                <Form.Label className="form-label-custom">First Name</Form.Label>
                                <Form.Control type='text' placeholder='First Name' name="firstname" value={user.firstname} onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group controlId='FormUserName'>
                                <Form.Label className="form-label-custom">Username</Form.Label>
                                <Form.Control type='text' placeholder='Username' name="username" value={user.username} onChange={handleChange}/>
                            </Form.Group>

                            {/* <Form.Group controlId='FormRePassword'>
                                <Form.Label className="form-label-custom">Re-Password</Form.Label>
                                <Form.Control type='password' placeholder='**********' name="repassword" value={user.repassword} onChange={handleChange}/>
                            </Form.Group> */}

                            <Form.Group controlId='FormEmail'>
                                <Form.Label className="form-label-custom">Email</Form.Label>
                                <Form.Control type='email' placeholder='Email@email.co'  name="email" value={user.email} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group controlId='FormIDNumber'>
                                <Form.Label className="form-label-custom">ID Number</Form.Label>
                                <Form.Control type='text' placeholder='2222-22222-2222' name="id_card_number" value={user.id_card_number} onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group controlId='FormHomeAddress'>
                                <Form.Label className="form-label-custom">Home Address</Form.Label>
                                <Form.Control type='text' placeholder='Home address' name="home_address" value={user.home_address} onChange={handleChange}/>
                            </Form.Group>

                            {/* <Form.Group controlId='FormDesignation'>
                                <Form.Label className="form-label-custom">Designation</Form.Label>
                                <Form.Control type='text' placeholder='Designation' name="designation" value={user.designation} onChange={handleChange}/>
                            </Form.Group> */}
                            
                            {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/a
                                ction-3">Something else</Dropdown.Item>
                            </DropdownButton> */}
                            <Form.Group controlId='FormDesignation'>
                                <Form.Label className="form-label-custom">Designation</Form.Label>
                                <select className="form-dropdown-custom" name="designation" value={user.designation} onChange={handleChange}>
                                    <option value="CEO">CEO</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Accountant">Accountant</option>
                                    <option value="Employee">Employee</option>
                                    <option value="Others">Others</option>
                                </select>
                            </Form.Group>
                            <Form.Group controlId='FormDesignation'>
                                <Form.Label className="form-label-custom">Is Active User</Form.Label>
                                <select className="form-dropdown-custom" name="is_active_user" value={user.is_active_user} onChange={handleChange}>
                                    <option value="1">Active</option>
                                    <option value="0">Not Active</option>
                                </select>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={6} className=''>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId='FormLastName'>
                                <Form.Label className="form-label-custom">Last Name</Form.Label>
                                <Form.Control type='text' placeholder='Last Name' name="lastname" value={user.lastname} onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group controlId='FormPassword'>
                                <Form.Label className="form-label-custom">Password</Form.Label>
                                <Form.Control type='password' placeholder='***********' name="password" value={user.password} onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group controlId='FormMobile'>
                                <Form.Label className="form-label-custom">Mobile</Form.Label>
                                <Form.Control type='text' placeholder='05XXXXXXXX' name="mobile" value={user.mobile} onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group controlId='FormDOB'>
                                <Form.Label className="form-label-custom">Date of Birth</Form.Label>
                                <Form.Control type='date' placeholder='00-00-0000' name="date_of_birth" value={user.date_of_birth} onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group controlId='FormJoiningDate'>
                                <Form.Label className="form-label-custom">Joining Date</Form.Label>
                                <Form.Control type='date' placeholder='00-00-0000' name="joining_date" value={user.joining_date} onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group controlId='FormDesignation'>
                                <Form.Label className="form-label-custom">User Role</Form.Label>
                                <select className="form-dropdown-custom" name="user_roles" value={user.user_roles} onChange={handleChange}>
                                    <option value="SuperAdmin">Super Admin</option>
                                    <option value="Admin">Admin</option>
                                    <option value="SubAdmin">Sub Admin</option>
                                </select>
                            </Form.Group>
                            <Form.Group controlId='FormIsSuperUser'>
                                <Form.Label className="form-label-custom">Is Super User</Form.Label>
                                <Form.Control type='text' placeholder='IsSuperUser'  name="is_superuser" value={user.is_superuser} onChange={handleChange}/>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className='mb-5 mt-3'>
                    <Col md={12} className=' d-flex justify-content-end'>
                        <Form onSubmit={handleSubmit}>
                            <Button type="submit" className='form-submit-btn-custom' size="lg">Edit User</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default EditUsers;