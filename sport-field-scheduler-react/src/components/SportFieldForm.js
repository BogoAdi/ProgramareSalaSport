import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from '@mui/material/Button';
import axios from 'axios';

const Schema = yup.object().shape({
    name: yup.string().required('Please fill this field'),
    address: yup.string().required('Please fill this field'),
    city: yup.string().required("Please fill this field!"),
    pricePerHour: yup.number().required('Please fill this field'),
    category: yup.string().required('Please fill this field'),
    description: yup.string(),
    img: yup.string().required('Please fill this field')
})

const SportFieldForm = () => {
    const { register, handleSubmit, formState: { errors }
    } = useForm({
        resolver: yupResolver(Schema)
    });

    const onSubmit = data => {
        console.log(data);

        const fetchInfo = async () => {
            const res = await axios.post('https://localhost:44345/api/SportFields', data);
            console.log(res);
        };
        fetchInfo();
        /*, {config: { headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        }}
      }*/
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label >FullName</label><br />
            <input type="text" placeholder="FullName" name="name" {...register('name')} />
            {errors.name && <p> {errors.name.message}</p>}<br />

            <label >Address</label><br />
            <input type="text" placeholder="str nb..." name="address"{...register('address')} />
            {errors.address && <p >{errors.address.message}</p>} <br />

            <label >City</label><br />
            <input type="text" placeholder="Paris" name="city"{...register('city')} />
            {errors.city && <p >{errors.city.message}</p>} <br />

            <label >pricePerHour</label><br />
            <input type="number" placeholder="200" name="pricePerHour" {...register('pricePerHour')} />
            {errors.pricePerHour && <p> {errors.pricePerHour.message}</p>}  <br />

            <label >Photo</label><br />
            <input type="text" placeholder="...." name="img" {...register('img')} />
            {errors.img && <p> {errors.img.message}</p>} <br />

            <label >Category</label><br />
            <input type="text" placeholder="...." name="category" {...register('category')} />
            {errors.category && <p> {errors.category.message}</p>} <br />


            <label >description</label><br />
            <textarea type="text" placeholder="...." name="description" {...register('description')} />
            {errors.description && <p> {errors.description.message}</p>} <br />

            <input  type="submit"/> 
        </form>
    );

}

export default SportFieldForm;