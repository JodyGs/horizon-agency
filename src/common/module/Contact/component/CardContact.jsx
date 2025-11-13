import React from "react";
import ContactForm from "./ContactForm";
import ComponentTransition from "@/common/component/element/ComponentTransition";

const CardContact = () => {
  return (
    <>
      <div className="py-10 mt-10 w-full h-auto flex gap-10 justify-center flex-row flex-wrap relative">
        <ComponentTransition delay={0.1} className="w-full md:px-10 py-5 md:basis-[40%] ">
          <h1 className="text-xl py-2 font-bold uppercase">
            We&rsquo;re Ready!
          </h1>
          <h1 className="text-4xl py2 font-bold ">Get In Touch</h1>

          <h1 className="mt-10 text-lg">Head-quarters:</h1>
          <h2 className="text-neutral-500">Indonesia, Jakarta</h2>
          <h2 className="text-neutral-500">Email: mfahlevi740@gmail.com</h2>
        </ComponentTransition>
        <div className="w-full h-auto md:h-[300px] md:basis-[55%] ">
          <ContactForm />
        </div>

      </div>
    </>
  );
};

export default CardContact;
