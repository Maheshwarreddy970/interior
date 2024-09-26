"use client"

import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import Button from './Button';

type Inputs = {
    email: string
    message: string
}

export default function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        const { data, error } = await sendEmail(formData);
        if (error) {
            return;
        }
        if (data?.error) {
            return;
        }
        toast.success("Email sent successfully!");
    }


    return (
        <div className='w-full p-5'>
            <form className=' flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                <div className='relative'>
                    <div className='absolute top-0 flex w-full justify-center'>
                        <div className='h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
                    </div>
                    <input
                        {...register("email", { required: true })}
                        className='block h-12 w-full rounded-md border  px-3 py-2 focus:outline-none focus:ring-1  '
                        type="email" placeholder="exampl@email.com" {...register("email")}
                    />
                    {errors.email && <span className='ml-1 text-red-700'>email is required</span>}
                </div>
                <div className='relative'>
                    <div className='absolute top-0 flex w-full justify-center'>
                        <div className='h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
                    </div>
                    <textarea
                        {...register("message", { required: true })}
                        rows={8}
                        className=' placeholder:m-16 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-1'
                        placeholder='message...'
                    />
                    {errors.message && <span className='ml-1 text-red-700'>This field is required</span>}
                </div>
                
                <Button text='Submit' ></Button>
            </form>
        </div>
    )
}