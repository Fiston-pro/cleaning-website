import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useRef } from "react";
import { LuCalendarClock } from "react-icons/lu";
import emailjs from '@emailjs/browser';

export default function ScheduleMeeting() {
  const form = useRef();

  let [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: ''});

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleContactChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !contactInfo.name || !contactInfo.phone) {
      // Display an error message or take appropriate action
      return;
    } else {
      emailjs.sendForm('service_o8aie4u', 'template_gr668se', form.current, 'rWiNIIvg4LVTPaXxo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    // Reset form fields
    setSelectedDate('');
    setSelectedTime('');
    setContactInfo({ name: '', email: '', phone: '' });

    // Close the popup
    setIsOpen(false);
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white text-xs md:text-2xl font-bold p-3 md:p-6 md:gap-2 rounded-full flex justify-center items-center"
        onClick={() => setIsOpen(true)}
      >
        <LuCalendarClock className=" text-xl md:text-2xl " /> Book Now
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Book a Date and Time
                  </Dialog.Title>

                  <form ref={form} onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="date"
                      >
                        Date
                      </label>
                      <input
                        className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        id="date"
                        name="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="time"
                      >
                        Time
                      </label>
                      <input
                        className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="time"
                        id="time"
                        name="time"
                        value={selectedTime}
                        onChange={handleTimeChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="name"
                        name="name"
                        value={contactInfo.name}
                        onChange={handleContactChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="email"
                      >
                        Email (optional)
                      </label>
                      <input
                        className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        id="email"
                        name="email"
                        value={contactInfo.email}
                        onChange={handleContactChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <input
                        className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={contactInfo.phone}
                        onChange={handleContactChange}
                      />
                    </div>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
