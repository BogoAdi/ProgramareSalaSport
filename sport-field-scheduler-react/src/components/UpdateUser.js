import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const Schema = yup.object().shape({
    name: yup.string().required('Please fill this field'),
    password: yup.string().required('Please fill this field'),
    email: yup.string().email("Invalid Email syntax").required("Please fill this field!"),
    username: yup.string().required('Please fill this field'),
    phoneNumber: yup.string().required('Please fill this field').matches(/[0-9]{10}$/, "Invalid Phone number"),
    role: yup.number()
})


const UpdateUser = () => {
    let { id } = useParams();
    const { register, handleSubmit, formState: { errors }
    } = useForm({
        resolver: yupResolver(Schema)
    });
    const navigate = useNavigate();

    function ReturnBack() {
        navigate('/show-all-users');
    }
    const onSubmit = data => {
        console.log(data);
        data.role = 0;
        const fetchInfo = async () => {
            const res = await axios.put(`https://localhost:44345/api/Users/${id}`, data);
            console.log(res);
        };
        fetchInfo();
        ReturnBack();
        /*, {config: { headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        }}
      }*/
    }

    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`https://localhost:44345/api/Users/${id}`);
            setUser(res.data);
        };
        console.log();
        fetchPosts();
    }, []);

    const inputChange=(event)=>{
        console.log("HERE   ");
        console.log(user);
        setUser({name:event.target.value,...user});
        console.log(user);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label >FullName</label><br />
            <input type="text" defaultValue={user.name} name="name"  onChange={inputChange} {...register('name')} />
            {errors.name && <p> {errors.name.message}</p>}<br />

            <label >Password</label><br />
            <input type="password" defaultValue={user.password} name="password"{...register('password')} />
            {errors.password && <p className="Form">{errors.password.message}</p>} <br />

            <label >Email</label><br />
            <input type="email" defaultValue={user.email} name="email"{...register('email')} />
            {errors.email && <p className="Form">{errors.email.message}</p>} <br />

            <label >Username</label><br />
            <input type="text" defaultValue={user.username} name="username" {...register('username')} />
            {errors.username && <p> {errors.username.message}</p>}  <br />

            <label >Phonenumber</label><br />
            <input type="text" defaultValue={user.phoneNumber} name="phoneNumber" {...register('phoneNumber')} />
            {errors.phoneNumber && <p> {errors.phoneNumber.message}</p>} <br />


            <Button type="submit"> Save Changes
            </Button>
        </form>
    );

}
export default UpdateUser;
