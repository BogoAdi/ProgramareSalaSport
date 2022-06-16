import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


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
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }
    } = useForm({
        resolver: yupResolver(Schema)
    });

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[700],
        },
    }));

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
    function ReturnBack() {
        navigate('/show-all-sport-fields');
    }
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
            const vali = res.request.response.slice(1, -1);
            data.img = vali;
            console.log(res.request.response);
            fetchInfo(data);
            ReturnBack();
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
            <Link to={`/show-all-sport-fields`}>
                <Button  >Back
                </Button>
            </Link>
            <Container maxWidth="sm">
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <h2>
                        Create new  Sport Field
                    </h2>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ mt: '20px', mb: '25px' }}

                >

                    <form onSubmit={handleSubmit(setImageAction)}>
                        <label >FullName</label><br />
                        <TextField
                            required
                            placeholder="FullName"
                            name="name" {...register('name')}
                        />
                        {errors.name && <p> {errors.name.message}</p>}<br />

                        <label >Address</label><br />
                        <TextField
                            required
                            placeholder="str nb..."
                            name="address"{...register('address')}
                        />
                        {errors.address && <p >{errors.address.message}</p>} <br />

                        <label >City</label><br />
                        <TextField
                            required
                            placeholder="Paris"
                            name="city"{...register('city')}
                        />
                        {errors.city && <p >{errors.city.message}</p>} <br />

                        <label >pricePerHour</label><br />
                        <TextField
                            required
                            type="number"
                            name="pricePerHour" {...register('pricePerHour')}
                        />
                        {errors.pricePerHour && <p> {errors.pricePerHour.message}</p>}  <br />


                        <label >Picture</label><br />
                        <div className="content landing">
                            <input type="file" name="image" onChange={uploadPicture} />
                            <br />
                            <br />
                            <img src={photo} alt="" width={250} height={250} />
                        </div>


                        <label >Category</label><br />
                        <TextField
                            required
                            placeholder="football"
                            name="category" {...register('category')}
                        />
                        {errors.category && <p> {errors.category.message}</p>} <br />

                        <label >description</label><br />
                        <TextField
                            required
                            multiline
                            rows={3}
                            placeholder="...."
                            name="description" {...register('description')}
                        />
                        {errors.description && <p> {errors.description.message}</p>} <br />

                        <ColorButton variant="contained"
                            type="submit"
                            sx={{ mt: '20px', mb: '25px' }}>
                            Add new sportfield
                        </ColorButton>
                    </form>
                </Box>
            </Container>
        </>
    );

}

export default SportFieldForm;