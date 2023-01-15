import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon, } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";
import { SocialIcon } from 'react-social-icons';


type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
     const {
       register,
       handleSubmit,
    //    watch,
    //    formState: { errors },
     } = useForm<Inputs>();
     const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:erikfazju@gmail.com?subject=${formData.subject}%body=Hi, my name is ${formData.name}. ${formData.message}. ${formData.email}`
        console.log(formData);
    }

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-7">
        <h4 className="text-2xl font-semibold text-center lg:text-3xl">
          I&apos;ve got just what you need.
          <br />{" "}
          <span className="underline decoration-[#6d28d9]">Lets Talk.</span>
        </h4>
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="animate-pulse w-7 h-7 text-purple-700" />
            <p className="text-lg">8116829376</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <SocialIcon
              className="animate-pulse w-7 h-7 text-purple-700 cursor-pointer"
              network="whatsapp"
              fgColor="#7e22ce"
              bgColor="transparent"
            />
            <p className="text-lg">8116829376</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="animate-pulse w-7 h-7 text-purple-700" />
            <p className="text-lg">erikfazju@gmail.com</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button
            type="submit"
            className="bg-[#6d28d9]/70 py-5 px-10 rounded-md text-white font-semibold text-lg hover:bg-[#6d28d9] transition duration-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe