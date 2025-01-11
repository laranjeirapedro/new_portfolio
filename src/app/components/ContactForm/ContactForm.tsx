"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@utils/send-email";

export type FormData = {
  fname: string;
  email: string;
  message: string;
};

export const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label
          htmlFor="fname"
          className="mb-3 block text-xl font-bold text-[#333333]"
        >
          Full Name
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-96 rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#A0D6FF] focus:shadow-md"
          {...register("fname", { required: true })}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-xl font-bold text-[#333333]"
        >
          Email Address
        </label>
        <input
          type="email"
          placeholder="example@domain.com"
          className="w-96 rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#A0D6FF] focus:shadow-md"
          {...register("email", { required: true })}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-xl font-bold text-[#333333]"
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Type your message"
          className="w-96 resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#A0D6FF] focus:shadow-md"
          {...register("message", { required: true })}
        ></textarea>
      </div>

      <button className="hover:shadow-form rounded-md bg-[#A0D6FF] py-3 px-8 text-base font-bold text-[#333333] outline-none">
        Submit
      </button>

    </form>
  );
};
