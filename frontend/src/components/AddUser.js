// import React from 'react';

// const AddUser=()=>{
//     return(
//         <div>
//             <h1>I am add user</h1>
//         </div>
//     );
// }

// export default AddUser;


import '../App.css';
import React, { useState } from 'react';
import Axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const AddUserForm = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        repassword:'',
        mobile: '',
        id_card_number: '',
        joining_date: '',
        designation: '',
        user_roles: '',
        home_address: '',
        date_of_birth: '',
        is_superuser: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
        
    //     if(formData.password !== formData.repassword ){
    //         alert("Passwords do not match");
    //         return;
    //     }
    //     if (!formData.firstname) {
    //         alert("First name is required");
    //         return;
    //     }
    //     if (!formData.lastname) {
    //         alert("Last name is required");
    //         return ;
    //     }
    //     if (!formData.username) {
    //         alert("Username is required");
    //         return ;
    //     }
    //     if (!formData.email) {
    //         alert("Email is required");
    //         return ;
    //     }
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailRegex.test(formData.email)) {
    //         alert("Invalid email format");
    //         return ;
    //     }
    //     if (!formData.password) {
    //         alert("Password is required");
    //         return ;
    //     }
    //     if (!formData.mobile) {
    //         alert("Mobile number is required");
    //         return ;
    //     }
    //     if ( (!formData.mobile|| isNaN(formData.mobile)) || formData.mobile.toString().length > 13 || formData.mobile.toString().length < 10 )  {
    //         alert("Mobile number is not valid");
    //         return ;
    //     }
        
    //     // if (!Number.isInteger(formData.mobile) ) {
    //     //     alert("Mobile number is not valid");
    //     //     alert(typeof(formData.mobile));
    //     //     return;
    //     // }
  

    //     Axios.post("http://localhost:8000/users/add/", formData)
    //         .then(res => {
    //             console.log(res.data);
    //             // Optionally, you can add code here to handle successful user creation
    //             if(res.data === "200"){
    //                 alert("User Added Successfully");
    //             }
    //         })
    //         // .catch(err => {
    //         //         console.error(err);
    //         //         alert("Error occured while adding new user");
    //         //         if(err.)
    //         //     }
    //         // );
    //         .catch(err => {
    //             console.error(err);
    //             alert(err.response.email[0]);
    //             alert(err.response.data);
    //             if (err.response && err.response.data) {
    //                 const errors = err.response.data;
    //                 if (errors.email) {
    //                     alert(errors.email[0]);  // Display the first email error message
    //                 } else {
    //                     alert("Error occurred while adding new user");
    //                 }
    //             } else {
    //                 alert("Error occurred while adding new user");
    //             }
    //         });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        // const isValidDate = (dateString) => {
        //     // Create a new Date object from the dateString
        //     const date = new Date(dateString);
        
        //     // Check if the date object is valid
        //     return date instanceof Date && !isNaN(date);
        // };

        if (formData.password !== formData.repassword) {
            alert("Passwords do not match");
            return;
        }
        if (!formData.firstname) {
            alert("First name is required");
            return;
        }
        if (!formData.lastname) {
            alert("Last name is required");
            return;
        }
        if (!formData.username) {
            alert("Username is required");
            return;
        }
        if (!formData.email) {
            alert("Email is required");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Invalid email format");
            return;
        }
        if (!formData.password) {
            alert("Password is required");
            return;
        }
        if (!formData.mobile) {
            alert("Mobile number is required");
            return;
        }
        if (isNaN(formData.mobile) || formData.mobile.toString().length > 13 || formData.mobile.toString().length < 10) {
            alert("Mobile number is not valid");
            return;
        }
        
        var dateOfBirth = new Date(formData.date_of_birth.toString());
        if(dateOfBirth instanceof Date && !isNaN(dateOfBirth)){
            // alert("Valid Date");
        }
        else{
            alert("Birth Date is Not valid");
            return;
        }
 
        var joiningDate = new Date(formData.joining_date.toString());
        if(joiningDate instanceof Date && !isNaN(joiningDate)){
            // alert("Valid Date");
        }
        else{
            alert("Joining Date is Not valid");
        }
        
        Axios.post("http://localhost:8000/users/add/", formData)
            .then(res => {
                console.log(res.data);
                if(res.data.email[0]){
                    alert("Unable to add user because " + res.data.email[0] + " please change email and try again!");
                }
                if (res.data === "200") {
                    alert("User Added Successfully");
                }
            })
            // .catch(err => {
            //     debugger
            //     console.error(err);
            //     alert(err.res.data.email[0])
                
            // });
            .catch(err => {
           
                console.error(err.res);
                
                // if (err.response && err.response.data) {
                //     const errors = err.response.data;
                //     if (errors.email) {
                //         alert(errors.email[0]);  // Display the first email error message
                //     } else {
                //         alert("Error occurred while adding new user");
                //     }
                // } else {
                // }
            });
    };
    return (
        <>
        {/* <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
            </div>
            <div>
                <label>Username:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <label>Mobile:</label>
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
            </div>
            <div>
                <label>ID Number:</label>
                <input type="text" name="id_card_number" value={formData.id_card_number} onChange={handleChange} />
            </div>
            <div>
                <label>Joining Date:</label>
                <input type="date" name="joining_date" value={formData.joining_date} onChange={handleChange} />
            </div>
            <div>
                <label>Designation:</label>
                <input type="text" name="designation" value={formData.designation} onChange={handleChange} />
            </div>
            <div>
                <label>User Role:</label>
                <input type="text" name="user_roles" value={formData.user_roles} onChange={handleChange} />
            </div>

            <button type="submit">Add Users</button>
        </form> */}

          <Container className='mt-5 bg-Secondary form-header-custom'>
          <Row>
            <Col md={12} >
              <h1 className="form-header-custom">Add User</h1>
            </Col>
          </Row>
        </Container>
        <Container className='mt-3'>
          <Row>
            <Col md={6} className=''>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='FormFirstName'>
                        <Form.Label className="form-label-custom">First Name</Form.Label>
                        <Form.Control type='text' placeholder='First Name' name="firstname" value={formData.firstname} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId='FormUserName'>
                        <Form.Label className="form-label-custom">Username</Form.Label>
                        <Form.Control type='text' placeholder='Username' name="username" value={formData.username} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId='FormRePassword'>
                        <Form.Label className="form-label-custom">Re-Password</Form.Label>
                        <Form.Control type='password' placeholder='**********' name="repassword" value={formData.repassword} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId='FormEmail'>
                        <Form.Label className="form-label-custom">Email</Form.Label>
                        <Form.Control type='email' placeholder='Email@email.co'  name="email" value={formData.email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId='FormIDNumber'>
                        <Form.Label className="form-label-custom">ID Number</Form.Label>
                        <Form.Control type='text' placeholder='2222-22222-2222' name="id_card_number" value={formData.id_card_number} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId='FormHomeAddress'>
                        <Form.Label className="form-label-custom">Home Address</Form.Label>
                        <Form.Control type='text' placeholder='Home address' name="home_address" value={formData.home_address} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId='FormDesignation'>
                        <Form.Label className="form-label-custom">Designation</Form.Label>
                        <Form.Control type='text' placeholder='Designation' name="designation" value={formData.designation} onChange={handleChange}/>
                    </Form.Group>
                </Form>
            </Col>
            <Col md={6} className=''>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='FormLastName'>
                        <Form.Label className="form-label-custom">Last Name</Form.Label>
                        <Form.Control type='text' placeholder='Last Name' name="lastname" value={formData.lastname} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId='FormPassword'>
                    <Form.Label className="form-label-custom">Password</Form.Label>
                        <Form.Control type='password' placeholder='***********' name="password" value={formData.password} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId='FormMobile'>
                     <Form.Label className="form-label-custom">Mobile</Form.Label>
                     <Form.Control type='text' placeholder='05XXXXXXXX' name="mobile" value={formData.mobile} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId='FormDOB'>
                      <Form.Label className="form-label-custom">Date of Birth</Form.Label>
                      <Form.Control type='date' placeholder='00-00-0000' name="date_of_birth" value={formData.date_of_birth} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId='FormJoiningDate'>
                      <Form.Label className="form-label-custom">Joining Date</Form.Label>
                     <Form.Control type='date' placeholder='00-00-0000' name="joining_date" value={formData.joining_date} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId='FormUserRole'>
                     <Form.Label className="form-label-custom">User Role</Form.Label>
                     <Form.Control type='text' placeholder='Role' name="user_roles" value={formData.user_roles} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId='FormIsSuperUser'>
                     <Form.Label className="form-label-custom">Is Super User</Form.Label>
                     <Form.Control type='text' placeholder='IsSuperUser'  name="is_superuser" value={formData.is_superuser} onChange={handleChange}/>
                    </Form.Group>
                </Form>
            </Col>
          </Row>
          <Row className='mb-5 mt-3'>
            <Col md={12} className=' d-flex justify-content-end'>
                <Form onSubmit={handleSubmit}>
                    <Button type="submit" className='form-submit-btn-custom' size="lg">Add User</Button>
                </Form>
            </Col>
          </Row>
        </Container>
        </>
    );
};

export default AddUserForm;