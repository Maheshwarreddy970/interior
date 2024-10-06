"use client"

import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import Button from './Button';
import BlurFade from './blur-fade';

type Inputs = {
    email: string
    message: string
}

export default function Contact() {

    const {
        register,
        handleSubmit,
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
        <div className='w-full max-w-2xl'>
            <form className=' flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                <BlurFade
                    className="[--clr:#1f1f1f] :[--clr:#999999] relative flex flex-row items-center"
                >
                    <input
                        {...register("email", { required: true })}
                        type="email" placeholder="" {...register("email")}
                        className="  shadow-md peer text-black :text-white pl-2 h-[40px] min-h-[40px] pr-[40px] leading-normal appearance-none resize-none box-border text-base w-full text-inherit block text-left border border-solid bg-white/60 border-black/20 :bg-zinc-800 rounded-[10px] m-0 p-0 outline-0 focus-visible:outline-0 focus-visible:border-teal-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#71717a2e] :focus-visible:ring-[#14b8a61a]"
                    />
                    <label
                        className="cursor-text text-[--clr] inline-block z-0 text-sm mb-px font-normal text-start select-none absolute duration-300 transform origin-[0] translate-x-[32px] peer-focus-visible:text-teal-500 peer-focus-visible:translate-x-[8px] peer-[:not(:placeholder-shown)]:translate-x-[8px] peer-focus-visible:translate-y-[-36px] peer-[:not(:placeholder-shown)]:translate-y-[-36px] peer-[:not(:placeholder-shown)]:text-[-36px]"
                    >
                        Email
                    </label>
                    <span
                        className="pointer-events-none absolute z-[+1] left-0 top-0 bottom-0 flex items-center justify-center size-[40px] text-[--clr] peer-focus-visible:hidden peer-[:not(:placeholder-shown)]:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1rem"
                            height="1rem"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                            <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                        </svg>
                    </span>
                    <div
                        className="group w-[40px] absolute top-0 bottom-0 right-0 flex items-center justify-center text-[--clr] peer-focus-visible:text-teal-600 peer-focus-visible:[&amp;_span]:border-teal-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1rem"
                            height="1rem"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                            <path d="M12 8v4"></path>
                            <path d="M12 16h.01"></path>
                        </svg>
                        <span
                            className="text-sm absolute cursor-default select-none rounded-[4px] px-1.5 opacity-0 right-0 -z-10 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-[calc(100%+18px)]"
                        >Required!
                        </span>
                    </div>
                </BlurFade>
                <BlurFade
                    className="[--clr:#1f1f1f] mt-3 :[--clr:#999999] relative  flex flex-row items-center"
                >
                    <textarea
                        rows={20}
                        {...register("message", { required: true })}
                        placeholder=""
                        className="peer  shadow-md text-black :text-white pl-2 h-[12rem]  leading-normal appearance-none resize-none box-border text-base w-full text-inherit block text-left border border-solid bg-white/60 border-black/20 :bg-zinc-800 rounded-[10px] m-0 p-0 outline-0 focus-visible:outline-0 focus-visible:border-teal-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#71717a2e] :focus-visible:ring-[#14b8a61a]"
                    />
                    <label
                        className="cursor-text top-3 text-[--clr] inline-block z-0 text-sm mb-px font-normal text-start select-none absolute duration-300 transform origin-[0] translate-x-[32px] peer-focus-visible:text-teal-500 peer-focus-visible:translate-x-[8px] peer-[:not(:placeholder-shown)]:translate-x-[8px] peer-focus-visible:translate-y-[-36px] peer-[:not(:placeholder-shown)]:translate-y-[-36px] peer-[:not(:placeholder-shown)]:text-[-36px]"
                    >
                        Message
                    </label>
                </BlurFade>
                <Button text='Submit' ></Button>
            </form>
        </div>
    )
}