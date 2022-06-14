import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const UpdateSportField = () => {
    let { id } = useParams();
    const Schema = yup.object().shape({
        name: yup.string().required('Please fill this field'),
        address: yup.string().required('Please fill this field'),
        city: yup.string().required("Please fill this field!"),
        pricePerHour: yup.number().required('Please fill this field'),
        category: yup.string().required('Please fill this field'),
        description: yup.string().required('Please fill this field'),
        img: yup.string(),
    })

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

        console.log(picture);

    };

    useEffect(() => {
        setPhoto(picture.picturePreview);
        console.log(picture);
    }, [picture]);

    const setImageAction = async (data) => {
        // console.log(data);
        // console.log(picture.pictureAsFile);

        if (picture.pictureAsFile !== undefined) {
            console.log(picture.pictureAsFile);
            const formData = new FormData();
            formData.append("file", picture.pictureAsFile);
            
            await axios(
                {
                    url: "https://localhost:44360/api/UploadPicture",
                    method: "POST",
                    data: formData
                }
            ).then(res => {
                const url = res.request.response.slice(1, -1);
                data.img = url;
                console.log(res.request.response);
                onSubmit(data);
            })

                .catch(err => {
                    alert("Error uploading the file");
                });

        }
        else {
            data.img = sportfield.img;
            console.log(data);
            onSubmit(data);
        }
    }

    const [sportfield, setSportfield] = useState();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`https://localhost:44360/api/SportFields/${id}`);
            setSportfield(res.data);

        };

        fetchPosts();


    }, []);
    const [useSwitch, setUseSwitch] = useState(false);
    useEffect(() => {
        if (sportfield !== undefined && useSwitch !== true) {
            setPhoto(sportfield.img);
            setUseSwitch(true);
            console.log(picture);
        }
        //uploadPicture();
        console.log(sportfield);
    }, [sportfield])

    const navigate = useNavigate();

    function ReturnBack() {
        navigate('/show-all-sport-fields');
    }
    const onSubmit = data => {

        const fetchInfo = async () => {
            const res = await axios.put(`https://localhost:44360/api/SportFields/${id}`, data);
            console.log(res);
        };
        fetchInfo();
        //ReturnBack();
    }
    return (
        <>
            {sportfield !== undefined &&
                <Container maxWidth="sm">
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center">
                        <h2>
                            Update Sport Field
                        </h2>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <form onSubmit={handleSubmit(setImageAction)}>
                            <label >FullName</label><br />
                            <TextField
                                required
                                defaultValue={sportfield.name}
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                name="name"
                                {...register('name')}
                            />
                            {errors.name && <p> {errors.name.message}</p>}<br />

                            <label >Address</label><br />
                            <TextField
                                required
                                defaultValue={sportfield.address}
                                name="address"{...register('address')}
                            />
                            {errors.address && <p >{errors.address.message}</p>} <br />

                            <label >City</label><br />
                            <TextField
                                required
                                defaultValue={sportfield.city}
                                name="city"{...register('city')}
                            />
                            {errors.city && <p >{errors.city.message}</p>} <br />

                            <label >pricePerHour</label><br />
                            <TextField
                                required
                                type="number"
                                defaultValue={sportfield.pricePerHour}
                                name="pricePerHour" {...register('pricePerHour')}
                            />
                            {errors.pricePerHour && <p> {errors.pricePerHour.message}</p>}  <br />


                            <label >Picture</label><br />
                            <div className="content landing">
                                <input type="file" name="image" onChange={uploadPicture} />
                                <br />
                                <br />
                                <img src={photo} alt=""
                                    width={250} height={250}
                                />
                            </div>


                            <label >Category</label><br />
                            <TextField
                                required
                                defaultValue={sportfield.category}
                                name="category" {...register('category')}
                            />
                            {errors.category && <p> {errors.category.message}</p>} <br />


                            <label >description</label><br />
                            <TextField
                                required

                                defaultValue={sportfield.description}
                                name="description" {...register('description')}
                            />
                            {errors.description && <p> {errors.description.message}</p>} <br />

                            <Button type="submit"> Add new sportfield
                            </Button>
                        </form>
                    </Box>
                </Container>
            }
        </>
    );

}

export default UpdateSportField;