import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';


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
          I&apos;ve got just what you need
          <br /> <span className="underline decoration-[#6d28d9]">LFTalk</span>
        </h4>
        <div className="flex items-center justify-center">
          <Link href="tel:+528116929376">
          <PhoneIcon className="animate-pulse w-7 h-7 text-purple-700" />
          </Link>
          <Link href="https://wa.me/528116929376">
          <SocialIcon
            className="animate-pulse w-7 h-7 text-purple-700 cursor-pointer"
            network="whatsapp"
            fgColor="#7e22ce"
            bgColor="transparent"
          />
          </Link>
          <Link href="t.me/shadowfaz16">
          <SocialIcon
            className="animate-pulse w-7 h-7 cursor-pointer"
            network="telegram"
            fgColor="#7e22ce"
            bgColor="transparent"
          />
          </Link>
          <Link href="mailto:erikfazju@gmail.com">
          <SocialIcon
            network="email"
            fgColor="#7e22ce"
            bgColor="transparent"
            className="animate-pulse w-7 h-7 cursor-pointer"
          />
          </Link>
        </div>
        {/* <form
          className="flex flex-col space-y-2 mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-x-2">
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
        </form> */}
      </div>
    </div>
  );
}

export default ContactMe