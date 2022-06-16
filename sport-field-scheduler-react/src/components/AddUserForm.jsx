import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from '@mui/material/Button';
import axios from 'axios';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const AddUserForm = () => {
    const navigate = useNavigate();

    const Schema = yup.object().shape({
        name: yup.string().required('Please fill this field'),
        password: yup.string().required('Please fill this field'),
        email: yup.string().email("Invalid Email syntax").required("Please fill this field!"),
        username: yup.string().required('Please fill this field'),
        phonenumber: yup.string().required('Please fill this field').matches(/[0-9]{10}$/, "Invalid Phone number"),
        role: yup.number()
    })
    const { register, handleSubmit, formState: { errors }
    } = useForm({
        resolver: yupResolver(Schema)
    });
    function ReturnBack() {
        navigate('/show-all-users');
    }
    const onSubmit = (data) => {
        console.log(data);
        data.role = 0;
        const fetchInfo = async () => {
            const res = await axios.post('https://localhost:44360/api/Users', data);
            console.log(res);

        };
        fetchInfo();
        ReturnBack();

    }
    return (
        <>
            <Link to={`/show-all-users`}>
                <Button  >Back
                </Button>
            </Link>
            <Container maxWidth="sm">
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <h2>
                        Create new  User
                    </h2>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ height: '65vh' }}
                >

                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label >FullName</label><br />
                        <TextField
                            required
                            name="name"
                            {...register('name')}
                        />
                        {errors.name && <p className="Form">{errors.name.message}</p>} <br />
                        <label >Password</label><br />
                        <TextField
                            required
                            type="password"
                            name="password"
                            {...register('password')}
                        />
                        {errors.password && <p className="Form">{errors.password.message}</p>} <br />

                        <label >Email</label><br />
                        <TextField
                            required
                            type="email"
                            name="email"
                            {...register('email')}
                        />
                        {errors.email && <p className="Form">{errors.email.message}</p>} <br />

                        <label >Username</label><br />
                        <TextField
                            required
                            type="text"
                            name="username"
                            {...register('username')}
                        />
                        {errors.username && <p> {errors.username.message}</p>}  <br />

                        <label >Phonenumber</label><br />
                        <TextField
                            required
                            type="text"
                            name="phoneNumber"
                            {...register('phoneNumber')}
                        />
                        {errors.phoneNumber && <p> {errors.phoneNumber.message}</p>} <br />


                        <Button type="submit" sx={{ mt: '20px', mb: '25px' }}>
                             Save Changes
                        </Button>
                    </form>
                </Box>
            </Container>

        </>
    );


}
export default AddUserForm;
