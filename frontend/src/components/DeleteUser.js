import React, { useState } from 'react';
import Axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    const handleDelete = () => {
        Axios.post(`http://localhost:8000/users/delete/${id}/`)
            .then(response => {
                if (response.status === 200) {
                    setMessage('User deleted successfully');
                    // Redirect or handle post-deletion behavior
                    navigate('/users/list'); // Example redirect to the user list page

                }
            })
            .catch(error => {
                console.error(error);
                setMessage('Error deleting user');
            });
    };

    return (
        <div>
            <h1>Delete User</h1>
            <p>Are you sure you want to delete this user?</p>
            <button onClick={handleDelete}>Yes, Delete</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteUser;