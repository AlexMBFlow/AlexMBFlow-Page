import React from 'react'
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid"

type Props = {}

export default function ContactMe({ }: Props) {
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Мои контакты</h3>

            <div className="flex flex-col space-y-10">
                <h4 className='text-4xl font-semibold text-center px-6'>
                    У меня есть как раз то, что тебе нужно. {" "}
                    <span className='decoration-[#F7AB0A1]/50 underline'>Lets Talk.</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center px-6'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <a className='text-2xl'>+79518734067</a>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>Воронеж</p>
                    </div>
                </div>

{/*                 <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register("name")} placeholder='Имя' className='contactInput' type="text" />
                        <input {...register("email")} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register("subject")} placeholder='Заголовок' className='contactInput' type="text" />
                    <textarea placeholder='Сообщение' className='contactInput' />
                    <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Отправить</button>
                </form> */}
            </div>
        </div>
    )
}