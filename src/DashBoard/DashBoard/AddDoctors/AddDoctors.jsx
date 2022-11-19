import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';

const AddDoctors = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageStored = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }

    })

    const handleAddDoctors = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStored}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(Imagedata => {
                if (Imagedata.success) {
                    console.log(Imagedata.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: Imagedata.data.url
                    }
                    /* Save doctors information to the database */
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfull`)
                            navigate('/dashboard/managedoctor')
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className='text-3xl'>Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctors)}>
                <div className="form-control w-full">
                    <label htmlFor='' className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type='name'{...register('name', {
                        required: "Name is required"
                    })} className="input input-bordered w-full " placeholder="enter name" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label htmlFor='' className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='email' {...register('email', {
                        required: true
                    })} className="input input-bordered w-full " placeholder="enter email" />
                </div>
                <div className="form-control w-full">
                    <label htmlFor='' className="label">
                        <span className="label-text">Speacialty</span>
                    </label>
                    <select {...register('specialty')} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Please select a Speacialty</option>
                        {
                            specialties.map(specialty => <option key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full  mb-5">
                    <label htmlFor='' className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type='file'{...register('image', {
                        required: "Photo is required"
                    })} className="input input-bordered w-full " placeholder="enter name" />
                    {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                </div>
                <input className='btn btn-accent w-full' value='Add Doctors' type="submit" />
            </form>
        </div>
    );
};

/* 
Three places to store image
1.image hosting server
2.File system for your server
3.mongodb (database) 
*/


export default AddDoctors;