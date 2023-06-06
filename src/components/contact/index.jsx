import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { IoMdPaperPlane } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';

const ContactSection = () => {
  const form = useRef();
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', message: ''});

  const handleContactChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactInfo.message) {
      toast.error('Fill in the message field')
      return;
    } else {
      emailjs.sendForm('service_o8aie4u', 'template_gr668se', form.current, 'rWiNIIvg4LVTPaXxo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  };

  return (
    <section className="bg-white py-24" id='contact' >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
      <div className=" flex flex-col md:flex-row justify-center items-start text-center ">
        <div className='p-5 rounded-lg bg-blue-500 flex flex-col items-center w-72 h-28 text-white text-center mx-auto md:mt-3'>
          <AiOutlineMail className="font-bold text-5xl " />
          <h6 className='font-bold' >Email</h6>
          <p>byiringiroetienne2@gmail.com</p>
        </div>
        <form ref={form} className=" w-72 lg:w-1/2 flex flex-col text-left justify-center mx-auto" onSubmit={handleSubmit}>
          <div className="mb-6 w-full">
            <label className="block text-xl m-2" htmlFor="name">Name</label>
            <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="text" id="name" name='name' onChange={handleContactChange}/>
          </div>
          <div className="mb-6 w-full">
            <label className="block text-xl m-2" htmlFor="email">Email</label>
            <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="email" id="email" name='email' onChange={handleContactChange} />
          </div>
          <div className="mb-6 w-full">
            <label className="block text-xl m-2" htmlFor="message">Message</label>
            <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="message" name='message' rows="5" onChange={handleContactChange}></textarea>
          </div>
          <button className=" flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-full" type="submit">Send Message <IoMdPaperPlane size={20} /></button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
