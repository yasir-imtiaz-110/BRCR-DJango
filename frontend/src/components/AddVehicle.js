import '../App.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React, { useState } from 'react';
import Axios from "axios";

const AddVehicleForm = () =>{
        const [formData, setFormData] = useState({
                vehicleName: '',
                noPlate: '',
                purchasedFrom: '',
                purchasingDate: '',
                ownershipStatus: '',
                vehicleColor: '',
                engineNo: '',
                lastServiceDate: '',
                totalServiceKM: '',
                nextServiceKM: '',
                nextCarPassingDate: '',
                sellingPrice: '',
                kmRangePerDay: '',
                companyName: '',
                vehicleCondition: '',
                vehcileModel: '',
                sellingDate: '',
                rentStatus: '',
                chasesNo: '',
                ownerName: '',
                nextServiceDate: '',
                lastServiceKM: '',
                lastCarPassingDate: '',
                purchasingPrice: '',
                vehicleStatus: '',
                extraChargesPerKM: '',
                image1: '',
                image2: '',
                image3: '',
                image4: '',
                image5: '',
        });

        const handleChange = (e) => {
                const { name, value } = e.target;
                setFormData(prevState=>({
                        ...prevState,
                        [name] : value
                }));
        };

        const handleFileChange = (e) =>{
                const { name, files } = e.target;
                setFormData(prevState=>({
                        ...prevState,
                        [name] : files[0]
                }));
        };

        // const handleSubmit = (e) => {
        //         // const objectString = JSON.stringify(e, null, 2);
        //         alert(e);
        //         e.preventDefault();
        //         Axios.post("http://localhost:8000/vehicles/add/", formData,{
        //                         headers: {
        //                         'Content-Type': 'multipart/form-data',
        //                         },
        //                 })
        //                 .then(res => {
        //                         console.log(res.data);
        //                         if(res.data.email[0]){
        //                                 alert("Unable to add vehicle because "+ res.data.email[0])
        //                         }
        //                         if(res.data === "200"){
        //                                 alert("User Added Successfully");
        //                         }
        //                 })
        //                 .catch(err => {
        //                         console.error(err.res);
        //                 });
                
        // };
        const handleSubmit = (e)=> {
                e.preventDefault();
                debugger
                const myData = new FormData();

                //Append files to FormData
                if(formData.image1) myData.append('image1', formData.image1);
                if(formData.image2) myData.append('image2', formData.image2);
                if(formData.image3) myData.append('image3', formData.image3);
                if(formData.image4) myData.append('image4', formData.image4);
                if(formData.image5) myData.append('image5', formData.image5);

                //Append other form data
                
                myData.append('vehicleName', formData.vehicleName);
                myData.append('noPlate', formData.noPlate);
                myData.append('purchasedFrom', formData.purchasedFrom);
                myData.append('purchasingDate', formData.purchasingDate);
                myData.append('ownershipStatus', formData.ownershipStatus);
                myData.append('vehicleColor', formData.vehicleColor);
                myData.append('engineNo', formData.engineNo);
                myData.append('lastServiceDate', formData.lastServiceDate);
                myData.append('totalServiceKM', formData.totalServiceKM);
                myData.append('nextServiceKM', formData.nextServiceKM);
                myData.append('nextCarPassingDate', formData.nextCarPassingDate);
                myData.append('sellingPrice', formData.sellingPrice);
                myData.append('kmRangePerDay', formData.kmRangePerDay);
                myData.append('companyName', formData.companyName);
                myData.append('vehicleCondition', formData.vehicleCondition);
                myData.append('vehcileModel', formData.vehcileModel);
                myData.append('sellingDate', formData.sellingDate);
                myData.append('rentStatus', formData.rentStatus);
                myData.append('chasesNo', formData.chasesNo);
                myData.append('ownerName', formData.ownerName);
                myData.append('nextServiceDate', formData.nextServiceDate);
                myData.append('lastServiceKM', formData.lastServiceKM);
                myData.append('lastCarPassingDate', formData.lastCarPassingDate);
                myData.append('purchasingPrice', formData.purchasingPrice);
                myData.append('vehicleStatus', formData.vehicleStatus);
                myData.append('extraChargesPerKM', formData.extraChargesPerKM);

                Axios.post("http://localhost:8000/vehicles/add/", myData, { headers: { 'Content-Type': 'multipart/form-data' }})
                .then(res=>{console.log(res.data);
                        if(res.data == "200"){
                                alert("Vehicle Added Successfully");
                        }})
                        .catch(err=>{ console.error(err.res); });
        };
                        return(
        <>
            <Container className='mt-5 bg-Secondary form-header-custom'>
                <Row>
                    <Col md={12}>
                    <   h1 className="form-header-custom">Add Vehicle</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={6}>
                        <Form onSubmit={handleSubmit} encType="multipart/form-data">

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Vehicle Name</Form.Label>
                                        <Form.Control type='text' placeholder='Vehicle Name' className='form-input-field-custom' name="vehicleName" value={formData.vehicleName} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Plate No</Form.Label>
                                        <Form.Control type='text' placeholder='e.g) T-77777' name="noPlate" value={formData.noPlate} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Purchased From</Form.Label>
                                        <Form.Control type='text' placeholder='' name="purchasedFrom" value={formData.purchasedFrom} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Purchasing Date</Form.Label>
                                        <Form.Control type='date' placeholder='' name="purchasingDate" value={formData.purchasingDate} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group controlId='FormDesignation'>
                                        <Form.Label className="form-label-custom">Ownership Status</Form.Label>
                                        <select className="form-dropdown-custom" name="ownershipStatus" value={formData.ownershipStatus} onChange={handleChange}>
                                        <option value=""></option>
                                        <option value="CEO">Purchased</option>
                                        <option value="Manager">Sold</option>
                                        <option value="Accountant">Other</option>
                                        </select>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Vehicle Color</Form.Label>
                                        <Form.Control type='text' placeholder='' name="vehicleColor" value={formData.vehicleColor} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Engine No</Form.Label>
                                        <Form.Control type='text' placeholder='' name="engineNo" value={formData.engineNo} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Last Service Date</Form.Label>
                                        <Form.Control type='date' placeholder='' name="lastServiceDate" value={formData.lastServiceDate} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Total Service KM</Form.Label>
                                        <Form.Control type='text' placeholder='777777' name="totalServiceKM" value={formData.totalServiceKM} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Next Service KM</Form.Label>
                                        <Form.Control type='text' placeholder='777777' name="nextServiceKM" value={formData.nextServiceKM} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Next Car Passing Date</Form.Label>
                                        <Form.Control type='date' placeholder='' name="nextCarPassingDate" value={formData.nextCarPassingDate} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Selling Price</Form.Label>
                                        <Form.Control type='text' placeholder='' name="sellingPrice" value={formData.sellingPrice} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">KM Range Per Day</Form.Label>
                                        <Form.Control type='text' placeholder='' name="kmRangePerDay" value={formData.kmRangePerDay} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Image 1</Form.Label>
                                        <Form.Control type='file' placeholder='' name="image1" onChange={handleFileChange}/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Image 3</Form.Label>
                                        <Form.Control type='file' placeholder='' name="image3" onChange={handleFileChange}/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Image 5</Form.Label>
                                        <Form.Control type='file' placeholder='' name="image5" onChange={handleFileChange}/>
                                </Form.Group> 
                            </Form>
                        </Col>
                        <Col md={6}>
                            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                                <Form.Group >
                                        <Form.Label className="form-label-custom">Company Name</Form.Label>
                                        <Form.Control type='text' placeholder='' name="companyName" value={formData.companyName} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>


                                <Form.Group controlId='FormDesignation'>
                                        <Form.Label className="form-label-custom">Vehicle Fitness Percentage</Form.Label>
                                        <select className="form-dropdown-custom" name="vehicleCondition" value={formData.vehicleCondition} onChange={handleChange}>
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
                                        <Form.Control type='text' placeholder='First Name' name="vehcileModel" value={formData.vehcileModel} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Selling Date</Form.Label>
                                        <Form.Control type='date' placeholder='First Name' name="sellingDate" value={formData.sellingDate} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group controlId='FormDesignation'>
                                        <Form.Label className="form-label-custom">Rent Status</Form.Label>
                                        <select className="form-dropdown-custom" name="rentStatus" value={formData.rentStatus} onChange={handleChange}>
                                        <option value=""></option>
                                        <option value="CEO">Available</option>
                                        <option value="Manager">Rented out</option>
                                        <option value="Accountant">Borrowed Out</option>
                                        <option value="Manager">Out of Service</option>
                                        </select>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Chases No</Form.Label>
                                        <Form.Control type='text' placeholder='' name="chasesNo" value={formData.chasesNo} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Owner Name</Form.Label>
                                        <Form.Control type='text' placeholder='' name="ownerName" value={formData.ownerName} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Next Service Date</Form.Label>
                                        <Form.Control type='date' placeholder='' name="nextServiceDate" value={formData.nextServiceDate} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Last Service KM</Form.Label>
                                        <Form.Control type='text' placeholder='' name="lastServiceKM" value={formData.lastServiceKM} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Last Car Passing Date</Form.Label>
                                        <Form.Control type='date' placeholder='First Name' name="lastCarPassingDate" value={formData.lastCarPassingDate} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Purchasing Price</Form.Label>
                                        <Form.Control type='text' placeholder='' name="purchasingPrice" value={formData.purchasingPrice} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Vehicle Status</Form.Label>
                                        <Form.Control type='text' placeholder='' name="vehicleStatus" value={formData.vehicleStatus} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Extra Charges Per KM</Form.Label>
                                        <Form.Control type='text' placeholder='' name="extraChargesPerKM" value={formData.extraChargesPerKM} onChange={handleChange} autoComplete="on"/>
                                </Form.Group>

                              
                                <Form.Group >
                                        <Form.Label className="form-label-custom">Image 2</Form.Label>
                                        <Form.Control type='file' placeholder='' name="image2" onChange={handleFileChange} autoComplete="on"/>
                                </Form.Group>

                                <Form.Group >
                                        <Form.Label className="form-label-custom">Image 4</Form.Label>
                                        <Form.Control type='file' placeholder='' name="image4" onChange={handleFileChange} autoComplete="on"/>
                                </Form.Group> 
                                
                            </Form>
                        </Col>
                </Row>
                <Row className='mb-5 mt-3'>
                        <Col md={12} className=' d-flex justify-content-end'>
                            <Form onSubmit={handleSubmit}>
                                <Button type="submit" className='form-submit-btn-custom' size="lg">Add Vehicle</Button>
                            </Form>
                        </Col>
                </Row>
            </Container>
        </>
    );
}
export default AddVehicleForm;


