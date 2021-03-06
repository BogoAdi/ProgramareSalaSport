import React from 'react';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const Schema = yup.object().shape({
    name: yup.string().required('Please fill this field'),
    password: yup.string().required('Please fill this field'),
    email: yup.string().email("Invalid Email syntax").required("Please fill this field!"),
    username: yup.string().required('Please fill this field'),
    phonenumber: yup.string().required('Please fill this field').matches(/[0-9]{10}$/,"Invalid Phone number")
  }).required();


const AddUserForm = () =>{

    const {register, handleSubmit, formState: { errors } 
    } = useForm({
         resolver: yupResolver(Schema)
        });

    const onSubmit =  data =>{
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label >FullName</label><br/>
            <input type="text" placeholder="FullName" name="name" {...register('name')} />
            {errors.name && <p> {errors.name.message}</p>}<br/>

            <label >Password</label><br/>
            <input type="password" placeholder="Password" name="password"{...register('password')}/>
            {errors.password && <p className="Form">{errors.password.message}</p>} <br/>

            <label >Email</label><br/>
            <input type="email" placeholder="Email" name="email"{...register('email')}/>
            {errors.email && <p className="Form">{errors.email.message}</p>} <br/>

            <label >Username</label><br/>
            <input type="text" placeholder="Username" name="username" {...register('username')} />
            {errors.username && <p> {errors.username.message}</p>}  <br/>

            <label >Phonenumber</label><br/>
            <input type="string" placeholder="Phonenumber" name="phonenumber" {...register('phonenumber')} />
            {errors.phonenumber && <p> {errors.phonenumber.message}</p>} <br/>

            <input type="submit"/>
        </form>
    );

}
export default AddUserForm;
