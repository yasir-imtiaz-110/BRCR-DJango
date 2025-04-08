// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';
import config from '../confg';

const UdateVehicle=()=>{
        const base_url = config.BASE_URL;
        const { id } = useParams();
        const [vehicle, setVehicle] = useState(
                {
                        vehicleName: '',
                        companyName : '',
                        noPlate : '',
                        vehicleCondition : '',
                        purchasedFrom : '',
                        vehcileModel : '',
                        purchasingDate : '',
                        sellingDate : '',
                        ownershipStatus : '',
                        rentStatus : '',
                        vehicleColor : '',
                        chasesNo : '',
                        engineNo : '',
                        ownerName : '',
                        lastServiceDate : '',
                        nextServiceDate : '',
                        totalServiceKM : '',
                        lastServiceKM : '',
                        nextServiceKM : '',
                        lastCarPassingDate : '',
                        nextCarPassingDate : '',
                        purchasingPrice : '',
                        sellingPrice : '',
                        vehicleStatus : '',
                        kmRangePerDay : '',
                        extraChargesPerKM : '',
                        image1 : '',
                        image2 : '',
                        image3 : '',
                        image4 : '',
                        image5 : '',
                }
        );
        useEffect(()=>{
                Axios(`http://localhost:8000/vehicles/get/${id}/`)
                .then(res => { setVehicle({
                      

                        vehicleName : res.data.vehicleName,
                        companyName : res.data.companyName,
                        noPlate : res.data.noPlate,
                        vehicleCondition : res.data.vehicleCondition,
                        purchasedFrom : res.data.purchasedFrom,
                        vehcileModel : res.data.vehcileModel,
                        purchasingDate : res.data.purchasingDate,
                        sellingDate : res.data.sellingDate,
                        ownershipStatus : res.data.ownershipStatus,
                        rentStatus : res.data.rentStatus,
                        vehicleColor : res.data.vehicleColor,
                        chasesNo : res.data.chasesNo,
                        engineNo : res.data.engineNo,
                        ownerName : res.data.ownerName,
                        lastServiceDate : res.data.lastServiceDate,
                        nextServiceDate : res.data.nextServiceDate,
                        totalServiceKM : res.data.totalServiceKM,
                        lastServiceKM : res.data.lastServiceKM,
                        nextServiceKM : res.data.nextServiceKM,
                        lastCarPassingDate : res.data.lastCarPassingDate,
                        nextCarPassingDate : res.data.nextCarPassingDate,
                        purchasingPrice : res.data.purchasingPrice,
                        sellingPrice : res.data.sellingPrice,
                        vehicleStatus : res.data.vehicleStatus,
                        kmRangePerDay : res.data.kmRangePerDay,
                        extraChargesPerKM : res.data.extraChargesPerKM,

                        image1 : res.data.image1,
                        image2 : res.data.image2,
                        image3 : res.data.image3,
                        image4 : res.data.image4,
                        image5 : res.data.image5,
                        
                }) 
                        alert("the code is " + res.data.image1);
                })
                .catch(err=> console.error(err));
                
        },[id]);
        // useEffect(()=>{
        //         Axios(`http://localhost:8000/vehicles/get/${id}/`)
        //         .then(res => setVehicle(res.data))
        //         .catch(err=> console.error(err));
                
        // },[id]);
        
        const handleChange=e=>{
                const { name, value } = e.target;
                setVehicle(prevState =>({
                        ...prevState,
                        [name] : value
                        
                }));
                alert( `${name} Selling prince is ${value}` );
        };

        const handleFileChange = (e) =>{
                const { name, files } = e.target;
                setVehicle(prevState=>({
                        ...prevState,
                        [name] : files[0],
                        // image1 : res.data.image1,
                        // image2 : res.data.image2,
                        // image3 : res.data.image3,
                        // image4 : res.data.image4,
                        // image5 : res.data.image5,
                        
                }));
                // alert("File is : " + files[0]);
        };
        
        function handleSubmit(e){
                e.preventDefault();
                const formData = new FormData();
               
                alert("What is vehicle.Image1" + vehicle.image1);
                alert("What is vehicle.Image5" + vehicle.image5);
                if(vehicle.image1 instanceof File){
                        if(vehicle.image1) {formData.append('image1', vehicle.image1)};
                }
                if(vehicle.image2 instanceof File){
                        if(vehicle.image2) formData.append('image2', vehicle.image2);
                }
                if(vehicle.image3 instanceof File){
                        if(vehicle.image3) formData.append('image3', vehicle.image3);                        
                }                
                if(vehicle.image4 instanceof File){
                        if(vehicle.image4) formData.append('image4', vehicle.image4);              
                }
                if(vehicle.image5 instanceof File){
                        if(vehicle.image5) formData.append('image5', vehicle.image5);                
                }

                formData.append('vehicleName', vehicle.vehicleName);
                formData.append('companyName', vehicle.companyName);
                formData.append('noPlate', vehicle.noPlate);
                formData.append('vehicleCondition', vehicle.vehicleCondition);
                formData.append('purchasedFrom', vehicle.purchasedFrom);
                formData.append('vehcileModel', vehicle.vehcileModel);
                formData.append('purchasingDate', vehicle.purchasingDate);
                formData.append('sellingDate', vehicle.sellingDate);
                formData.append('ownershipStatus', vehicle.ownershipStatus);
                formData.append('rentStatus', vehicle.rentStatus);
                formData.append('vehicleColor', vehicle.vehicleColor);
                formData.append('chasesNo', vehicle.chasesNo);
                formData.append('engineNo', vehicle.engineNo);
                formData.append('ownerName', vehicle.ownerName);
                formData.append('lastServiceDate', vehicle.lastServiceDate);
                formData.append('nextServiceDate', vehicle.nextServiceDate);
                formData.append('totalServiceKM', vehicle.totalServiceKM);
                formData.append('lastServiceKM', vehicle.lastServiceKM);
                formData.append('nextServiceKM', vehicle.nextServiceKM);
                formData.append('lastCarPassingDate', vehicle.lastCarPassingDate);
                formData.append('nextCarPassingDate', vehicle.nextCarPassingDate);
                formData.append('purchasingPrice', vehicle.purchasingPrice);
                formData.append('sellingPrice', vehicle.sellingPrice);
                formData.append('vehicleStatus', vehicle.vehicleStatus);
                formData.append('kmRangePerDay', vehicle.kmRangePerDay);
                formData.append('extraChargesPerKM', vehicle.extraChargesPerKM);

                alert("Submit pressed");
                Axios.post(`http://localhost:8000/vehicles/update/${id}/`, formData, { headers : {'Content-Type' : 'multipart/form-data'} })
                .then(res=>{
                        console.log(res.data); 
                        // window.
                        // alert("I am the response" + res.data);
                        // alert("I am the second response" + JSON.stringify(res.data));
                        // alert("Data Updated Sucessfully");
                })
                .catch(err=>{console.error(err.res);
                        alert("I am error data" + err.res);
                });
        }
        
        return(
        <>
            <Container className='mt-5 bg-Secondary form-header-custom'>
                <Row>
                    <Col md={12}>
                    <h1 className="form-header-custom">Update Vehicle</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={6}>
                        <Form onSubmit={handleSubmit} encType="multipart/form-data" >

                                <Form.Group >
                                        <Form.Label className="form-label-custom">My Vehicle Name</Form.Label>
                                        <Form.Control type='text' placeholder='Vehicle Name' className='form-input-field-custom' name="vehicleName" value={vehicle.vehicleName} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Plate No</Form.Label>
                                        <Form.Control type='text' placeholder='e.g) T-77777' name="noPlate" value={vehicle.noPlate} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Purchased From</Form.Label>
                                        <Form.Control type='text' placeholder='' name="purchasedFrom" value={vehicle.purchasedFrom} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Purchasing Date</Form.Label>
                                        <Form.Control type='date' placeholder='' name="purchasingDate" value={vehicle.purchasingDate} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group controlId='FormDesignation'>
                                        <Form.Label className="form-label-custom">Ownership Status</Form.Label>
                                        <select className="form-dropdown-custom" name="ownershipStatus" value={vehicle.ownershipStatus} onChange={handleChange}>
                                        <option value=""></option>
                                        <option value="CEO">Purchased</option>
                                        <option value="Manager">Sold</option>
                                        <option value="Accountant">Other</option>
                                        </select>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Vehicle Color</Form.Label>
                                        <Form.Control type='text' placeholder='' name="vehicleColor" value={vehicle.vehicleColor} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Engine No</Form.Label>
                                        <Form.Control type='text' placeholder='' name="engineNo" value={vehicle.engineNo} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Last Service Date</Form.Label>
                                        <Form.Control type='date' placeholder='' name="lastServiceDate" value={vehicle.lastServiceDate} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Total Service KM</Form.Label>
                                        <Form.Control type='text' placeholder='777777' name="totalServiceKM" value={vehicle.totalServiceKM} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Next Service KM</Form.Label>
                                        <Form.Control type='text' placeholder='777777' name="nextServiceKM" value={vehicle.nextServiceKM} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Next Car Passing Date</Form.Label>
                                        <Form.Control type='date' placeholder='' name="nextCarPassingDate" value={vehicle.nextCarPassingDate} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Selling Price</Form.Label>
                                        <Form.Control type='text' placeholder='' name="sellingPrice" value={vehicle.sellingPrice} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">KM Range Per Day</Form.Label>
                                        <Form.Control type='text' placeholder='' name="kmRangePerDay" value={vehicle.kmRangePerDay} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Image 1</Form.Label>
                                        <img src={base_url + vehicle.image1} alt="vehicle image1" height={66} width={110} />
                                        <Form.Control type='file' placeholder='' name="image1" onChange={handleFileChange} />
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Image 3</Form.Label>
                                        <img src={base_url + vehicle.image3} alt="vehicle image1" height={66} width={110} />
                                        <Form.Control type='file' placeholder='' name="image3" onChange={handleFileChange} />
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Image 5</Form.Label>
                                        <img src={base_url + vehicle.image5} alt="vehicle image1" height={66} width={110} />
                                        <Form.Control type='file' placeholder='' name="image5" onChange={handleFileChange} />
                                </Form.Group> 
                            </Form>
                        </Col>
                        <Col md={6}>
                            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                                <Form.Group >
                                        <Form.Label className="form-label-custom">Company Name</Form.Label>
                                        <Form.Control type='text' placeholder='' name="companyName" value={vehicle.companyName} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>


                                <Form.Group controlId='FormDesignation'>
                                        <Form.Label className="form-label-custom">Vehicle Fitness Percentage</Form.Label>
                                        <select className="form-dropdown-custom" name="vehicleCondition" value={vehicle.vehicleCondition} onChange={handleChange}>
                                        <option value=""></option>
                                        <option value="100">100</option>
                                        <option value="90">90</option>
                                        <option value="80">80</option>
                                        <option value="70">70</option>
                                        <option value="60">60</option>
                                        <option value="50">50</option>
                                        <option value="40">40</option>
                                        <option value="30">30</option>
                                        <option value="20">20</option>
                                        <option value="10">10</option>

                                        </select>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Vehicle Model</Form.Label>
                                        <Form.Control type='text' placeholder='First Name' name="vehcileModel" value={vehicle.vehcileModel} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Selling Date</Form.Label>
                                        <Form.Control type='date' placeholder='First Name' name="sellingDate" value={vehicle.sellingDate} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group controlId='FormDesignation'>
                                        <Form.Label className="form-label-custom">Rent Status</Form.Label>
                                        <select className="form-dropdown-custom" name="rentStatus" value={vehicle.rentStatus} onChange={handleChange}>
                                        <option value=""></option>
                                        <option value="CEO">Available</option>
                                        <option value="Manager">Rented out</option>
                                        <option value="Accountant">Borrowed Out</option>
                                        <option value="Manager">Out of Service</option>
                                        </select>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Chases No</Form.Label>
                                        <Form.Control type='text' placeholder='' name="chasesNo" value={vehicle.chasesNo} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Owner Name</Form.Label>
                                        <Form.Control type='text' placeholder='' name="ownerName" value={vehicle.ownerName} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Next Service Date</Form.Label>
                                        <Form.Control type='date' placeholder='' name="nextServiceDate" value={vehicle.nextServiceDate} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Last Service KM</Form.Label>
                                        <Form.Control type='text' placeholder='' name="lastServiceKM" value={vehicle.lastServiceKM} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Last Car Passing Date</Form.Label>
                                        <Form.Control type='date' placeholder='First Name' name="lastCarPassingDate" value={vehicle.lastCarPassingDate} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Purchasing Price</Form.Label>
                                        <Form.Control type='text' placeholder='' name="purchasingPrice" value={vehicle.purchasingPrice} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Vehicle Status</Form.Label>
                                        <Form.Control type='text' placeholder='' name="vehicleStatus" value={vehicle.vehicleStatus} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Extra Charges Per KM</Form.Label>
                                        <Form.Control type='text' placeholder='' name="extraChargesPerKM" value={vehicle.extraChargesPerKM} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                              
                                <Form.Group >
                                        <Form.Label className="form-label-custom">Image 2</Form.Label>
                                        <img src={base_url + vehicle.image2} alt="vehicle image1" height={66} width={110} />
                                        <Form.Control type='file' placeholder='' name="image2" onChange={handleFileChange}  />
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Image 4</Form.Label>
                                        <img src={base_url + vehicle.image4} alt="vehicle image1" height={66} width={110} />
                                        <Form.Control type='file' placeholder='' name="image4" onChange={handleFileChange} autoComplete="on" />
                                </Form.Group> 
                            </Form>
                        </Col>
                </Row>
                <Row className='mb-5 mt-3'>
                        <Col md={12} className=' d-flex justify-content-end'>
                            <Form onSubmit={handleSubmit}>
                                <Button type="submit" className='form-submit-btn-custom' size="lg">Update Vehicle</Button>
                            </Form>
                        </Col>
                        <Link to={`/vehicles/list`}>Vehicles List</Link>
                </Row>
            </Container>
        </>

    );

}
export default UdateVehicle;


