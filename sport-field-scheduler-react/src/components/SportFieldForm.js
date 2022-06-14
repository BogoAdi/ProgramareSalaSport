import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Schema = yup.object().shape({
    name: yup.string().required('Please fill this field'),
    address: yup.string().required('Please fill this field'),
    city: yup.string().required("Please fill this field!"),
    pricePerHour: yup.number().required('Please fill this field'),
    category: yup.string().required('Please fill this field'),
    description: yup.string().required('Please fill this field'),
    img: yup.string(),
})

const SportFieldForm = () => {
    const { register, handleSubmit, formState: { errors }
    } = useForm({
        resolver: yupResolver(Schema)
    });

    const [picture, setPicture] = useState({});
    const [photo, setPhoto] = useState({});
    const uploadPicture = (e) => {
        setPicture({
            /* contains the preview, if you want to show the picture to the user
                 you can access it with this.state.currentPicture
             */
            picturePreview: URL.createObjectURL(e.target.files[0]),
            /* this contains the file we want to send */
            pictureAsFile: e.target.files[0],
        });



    };
    useEffect(() => {
        setPhoto(picture.picturePreview);
    }, [picture]);

    const setImageAction = async (data) => {

        const formData = new FormData();
        formData.append("file", picture.pictureAsFile);
        console.log(picture.pictureAsFile);

        await axios(
            {
                url: "https://localhost:44360/api/UploadPicture",
                method: "POST",
                data: formData
            }
        ).then(res => { 
            const vali = res.request.response.slice(1,-1);
            data.img=vali;
            console.log(res.request.response);
            fetchInfo(data);
        })

            .catch(err => {
                alert("Error uploading the file");
            });
       
    }

    const fetchInfo = async (data) => {
        console.log(data);
        const res = await axios.post('https://localhost:44360/api/SportFields', data);
        console.log(res);
    };



    return (
        <>
            <form onSubmit={handleSubmit(setImageAction)}>
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

                
                <label >Picture</label><br />
                <div className="content landing">
                    <input type="file" name="image" onChange={uploadPicture} />
                    <br />
                    <br />
                    <img src={photo} alt="0" />
                </div>


                <label >Category</label><br />
                <input type="text" placeholder="...." name="category" {...register('category')} />
                {errors.category && <p> {errors.category.message}</p>} <br />


                <label >description</label><br />
                <textarea type="text" placeholder="...." name="description" {...register('description')} />
                {errors.description && <p> {errors.description.message}</p>} <br />

                <Button type="submit"> Add new sportfield
                </Button>
            </form>

        </>
    );

}

export default SportFieldForm;