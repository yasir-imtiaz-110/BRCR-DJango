import Axios from 'axios'
import React, { useEffect, useState } from "react";
import { Container, Table, Col, Row, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import config from '../confg';

const VehiclesList=()=>{
    let SrNo = 0;
    const [data, setData] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const base_url = config.BASE_URL
    useEffect(()=>{
        
        Axios.get("http://localhost:8000/vehicles/list/").then((res)=> setData(res.data));
    },[])
    
    const DeleteVehicle=(id)=>{
        var vehicleID = parseInt(id, 10);
        // alert("Delete Button Clicked id: "+vehicleID);
        Axios.post(base_url+'/vehicles/delete/'+vehicleID)
            .then(response=> {
                if(response.status == "200"){
                    alert("Vehicle Deleted Successfully !");
                    handleClose();
                    //refresh the page
                    window.location.reload()
                }
            })
            .catch(err => {
                console.error(err);
                alert("Found " + err + "Deleting Vehicle No"+ vehicleID);
            });
        
    }

    return(
        <>
            <Container className='mt-5 bg-Secondary form-header-custom'>
                <Row>
                    <Col md={12}>
                    <h1 className="form-header-custom">Vehicles List</h1>
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
                                <th>Vehicle name</th>
                                <th>Company Name</th>
                                <th>No Plate</th>
                                <th>Vehicle Condition</th>
                                <th>Purchased From</th>
                                <th>Vehicle Model</th>
                                <th>Date Of Purchase</th>
                                <th>Selling Date</th>
                                <th>Ownership Status</th>
                                <th>Rental Status</th>
                                <th>Color</th>
                                <th>Chases No</th>
                                <th>Engine No</th>
                                <th>Owner Name</th>
                                <th>Last Service Date</th>
                                <th>Next Service Date</th>
                                <th>Total Service KM</th>
                                <th>Last Service KM</th>
                                <th>Next Service KM</th>
                                <th>Last Passing Date</th>
                                <th>Next Passing Date</th>
                                <th>Purchasing Price</th>
                                <th>Selling Price</th>
                                <th>VEhicle Status</th>
                                <th>KM Range Per Day</th>
                                <th>Extra Charges Per KM</th>
                                <th>Image1</th>
                                <th>Image2</th>
                                <th>Image3</th>
                                <th>Image4</th>
                                <th>Image5</th>
                                <th>Update</th>
                                <th>Delete</th>


                            </tr>
                        </thead>
                        <tbody>
                    
                        {data.map(vehicle=> 
                        <tr className='table-definition-custom'>
                            <td>{SrNo = SrNo + 1}</td>
                            <td>{vehicle.vehicleName}</td>
                            <td>{vehicle.companyName}</td>
                            <td>{vehicle.noPlate}</td>
                            <td>{vehicle.vehicleCondition}</td>
                            <td>{vehicle.purchasedFrom}</td>
                            <td>{vehicle.vehcileModel}</td>
                            <td>{vehicle.purchasingDate}</td>
                            <td>{vehicle.sellingDate}</td>
                            <td>{vehicle.ownershipStatus}</td>
                            <td>{vehicle.rentStatus}</td>                            
                            <td>{vehicle.vehicleColor}</td>
                            <td>{vehicle.chasesNo}</td>
                            <td>{vehicle.engineNo}</td>
                            <td>{vehicle.ownerName}</td>
                            <td>{vehicle.lastServiceDate}</td>
                            <td>{vehicle.nextServiceDate}</td>
                            <td>{vehicle.totalServiceKM}</td>
                            <td>{vehicle.lastServiceKM}</td>
                            <td>{vehicle.nextServiceKM}</td>
                            <td>{vehicle.lastCarPassingDate}</td>
                            <td>{vehicle.nextCarPassingDate}</td>
                            <td>{vehicle.purchasingPrice}</td>
                            <td>{vehicle.sellingPrice}</td>
                            <td>{vehicle.vehicleStatus}</td>
                            <td>{vehicle.kmRangePerDay}</td>
                            <td>{vehicle.extraChargesPerKM}</td>                            
                            <td><img src={base_url + vehicle.image1} alt="vehicle image1" height={66} width={110} /></td>      
                            <td><img src={base_url + vehicle.image2} alt="vehicle image2" height={66} width={110} /></td>
                            <td><img src={base_url + vehicle.image3} alt="vehicle image3" height={66} width={110} /></td>
                            <td><img src={base_url + vehicle.image4} alt="vehicle image4" height={66} width={110} /></td>
                            <td><img src={base_url + vehicle.image5} alt="vehicle image5" height={66} width={110} /></td>
                            <td><Link to={`/vehicles/update/${vehicle.id}`}>Update</Link></td>
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
                                        <Button variant="danger" onClick={()=>DeleteVehicle(vehicle.id)}>Delete</Button>
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
        </>
    );

}   
export default VehiclesList;

