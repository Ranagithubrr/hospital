import React, { useState } from 'react';
// import dayjs from 'dayjs';
// import { CheckOut } from './Checkout';
import StripeCheckout from 'react-stripe-checkout';
import DatePicker from "react-datepicker";
import { addDays, subDays, format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
// import Logo from '../../img/logo.png';
import { MdPayment } from 'react-icons/md';
import { BsCalendarDate } from 'react-icons/bs';
import { AiOutlineDownload } from 'react-icons/ai';
// import { useEffect } from 'react';
import Paid from '../../img/paid.png';
import html2canvas from 'html2canvas';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';



const Getappointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [appointmentdetail, setAppointmentdetail] = useState({
        doctor_name: "",
        degree: "",
        specialist: "",
        choosencategory: "",
        appointment_date: "",
        description: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'appointment_date') {
            const formattedDate = format(new Date(value), 'dd/MM/yyyy');
            setAppointmentdetail(prevAppointmentDetail => ({
                ...prevAppointmentDetail,
                [name]: formattedDate,
            }));
        } else {
            setAppointmentdetail(prevAppointmentDetail => ({
                ...prevAppointmentDetail,
                [name]: value,
            }));
        }
    };

    const [step, setstep] = useState(1);

    const nextClicked = () => {
        console.log(appointmentdetail);
        if (step === 2) {
            if (appointmentdetail.choosencategory !== "" && appointmentdetail.appointment_date !== "" && appointmentdetail.description !== "") {
                step < 4 && setstep(step + 1)
            } else {
                console.log('please fill all the field');
                return;
            }
        } else {
            step < 5 && setstep(step + 1)
        }
    }
    const prevClicked = () => {
        step > 1 && setstep(step - 1)
    }

    // for stripe
    const onToken = (token) => {
        console.log(token);
        nextClicked()
    }


    // download receippt
    const captureScreenshot = () => {
        const elementToCapture = document.getElementById('element-id-to-capture');

        if (elementToCapture) {
            html2canvas(elementToCapture).then(canvas => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png'); // Change to 'image/jpeg' for JPEG format
                link.download = 'screenshot.png'; // Change the filename as needed
                link.click();
            });
        }
    };


    const steps = [
        'Doctor Details',
        'Appointment Details',
        'Confirm Details',
        'Pay Fees',
        'Done'
      ];

    return (
        <div className='pt-10'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={step-1} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            {
                step !== 4 ? step !== 5 ? <h4 className='font-semibold m-3'>Please fill out this steps bellow to continue</h4> : null : null
            }
            {/* step 1 start */}
            {step === 1 && <div className='w-1/3 ml-3 mt-10 bg-gray-200 p-5'>
                <div className='flex'>
                    <div className='w-1/3'>
                        <span className='text-sm font-semibold'>Doctor's name</span>
                    </div>
                    <div className='w-2/3'>
                        <span className='text-xl font-semibold'>: Dr. Abraham Ehsan</span>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/3'>
                        <span className='text-sm font-semibold'>Degree</span>
                    </div>
                    <div className='w-2/3'>
                        <span className='text-sm font-semibold'>: MBBS</span>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/3'>
                        <span className='text-sm font-semibold'>Specialist</span>
                    </div>
                    <div className='w-2/3'>
                        <span className='text-sm font-semibold'>: Heart Surgeon</span>
                    </div>
                </div>
            </div>
            }
            {/* step 1 end */}
            {/* step 2 start */}
            {
                step === 2 &&

                <div className='ml-3 my-5'>
                    <span className='font-semibold text-sm my-2 block'>Choose your category</span>
                    <select name="choosencategory" id="" className='bg-gray-200 p-2 outline-none rounded w-1/3 block' onChange={handleInputChange} value={appointmentdetail.choosencategory}>
                        <option value="dermatology">Dermatology</option>
                        <option value="neurology">Neurology</option>
                        <option value="dentistry">Dentistry</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="nephrology">Nephrology</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="pulmonology">Pulmonology</option>
                    </select>
                    <span className='font-semibold text-sm my-2 block'>Select a Date</span>
                    <span className='block text-xs font-semibold'>You can choose up to next 3 days</span>
                    <label htmlFor="date-picker" className='text-blue-800 text-4xl mt-2 line-clamp-1 inline-block'><BsCalendarDate /></label>
                    <input
                        type="text"
                        name="appointment_date"
                        value={appointmentdetail.appointment_date}
                        onChange={() => { }}
                        className='bg-gray-200 outline-none rounded hidden'

                    />
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                            handleInputChange({ target: { name: 'appointment_date', value: date } });
                            setStartDate(date);
                        }}
                        minDate={subDays(new Date(), 0)}
                        maxDate={addDays(new Date(), 3)}
                        id="date-picker"
                        className='hidden'
                    />

                    <textarea type="text" name="description" placeholder='Describe Your Problem in detail' className='outline-none border p-3 w-1/2 block' rows={10} cols={5} onChange={handleInputChange} value={appointmentdetail.description} />
                </div>
            }
            {/* step 2 end */}


            {/* step 3 start */}
            {
                step === 3 &&

                <div className='w-1/2 ml-3 mt-10 bg-gray-200 p-5'>
                    <div className='flex'>
                        <div className='w-1/3'>
                            <span className='text-sm font-semibold'>Doctor's name</span>
                        </div>
                        <div className='w-2/3'>
                            <span className='text-xl font-semibold'>: Dr. Abraham Ehsan</span>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/3'>
                            <span className='text-sm font-semibold'>Degree</span>
                        </div>
                        <div className='w-2/3'>
                            <span className='text-sm font-semibold'>: MBBS</span>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/3'>
                            <span className='text-sm font-semibold'>Specialist</span>
                        </div>
                        <div className='w-2/3'>
                            <span className='text-sm font-semibold'>: Heart Surgeon</span>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/3'>
                            <span className='text-sm font-semibold'>Choosen Category</span>
                        </div>
                        <div className='w-2/3'>
                            <span className='text-sm font-semibold'>: {appointmentdetail.choosencategory}</span>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/3'>
                            <span className='text-sm font-semibold'>Appointment Date</span>
                        </div>
                        <div className='w-2/3'>
                            <span className='text-sm font-semibold'>: {appointmentdetail.appointment_date}</span>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/3'>
                            <span className='text-sm font-semibold'>Description</span>
                        </div>
                        <div className='w-2/3'>
                            <span className='text-sm font-semibold'>: {appointmentdetail.description}</span>
                        </div>
                    </div>
                </div>
            }
            {/* step 3 end */}

            {/* step 4 start */}
            {
                step === 4 &&
                <div className='w-1/3 m-auto mt-5'>
                    {/* <CheckOut /> */}
                    <h4 className='font-semibold my-3'>Please Complete Payment</h4>
                    <div className='bg-gray-100 p-5 rounded'>
                        <div className='flex'>
                            <div className='w-1/2'>Doctor's Fee</div>
                            <div className='w-1/2'>: $20</div>
                        </div>
                        <div className='flex'>
                            <div className='w-1/2'>Tax</div>
                            <div className='w-1/2'>: $0</div>
                        </div>
                        <div className='flex'>
                            <div className='w-1/2'>Vat</div>
                            <div className='w-1/2'>: $0</div>
                        </div>
                        <div className='flex'>
                            <div className='w-1/2'>Service Charge</div>
                            <div className='w-1/2'>: $0</div>
                        </div>
                        <div className='flex border-t-2'>
                            <div className='w-1/2 font-semibold'>Total</div>
                            <div className='w-1/2 font-semibold text-xl'>: $20</div>
                        </div>
                    </div>
                    <div className='text-center my-5'>

                        <StripeCheckout
                            token={onToken}
                            stripeKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh"
                            name="MeDoc"
                            description="Your Personal Doctor Service"
                            image="https://firebasestorage.googleapis.com/v0/b/images-7a0ee.appspot.com/o/logo.png?alt=media&token=1d1ea850-980f-47cf-a289-d9e07a03f0c4"
                        >

                            <button className="bg-blue-700 text-gray-100 font-bold rounded-md px-5 py-1">
                                <span className='flex items-center'><span className='mr-2'>Pay Now</span> <MdPayment /></span>
                            </button>
                        </StripeCheckout>
                    </div>
                </div>
            }
            {/* step 4 end */}
            {/* stpe 5 start */}
            {
                step === 5 && <div className='w-2/3 m-auto'>
                    <h2 className='font-bold text-center my-2 w-1/2 bg-green-200 m-auto text-green-800 py-1 rounded mt-3'>Your Appointment Confirmed</h2>
                    <div className='w-full bg-gray-100 rounded' id="element-id-to-capture">
                        <span class="text-3xl font-bold dark:text-gray-300 block text-center mt-3 pt-2">Me<span class="text-blue-900 dark:text-blue-500 ">Doc</span></span>
                        <span className='block text-center text-sm text-gray-500'>Your Personal Doctor Service</span>
                        <h3 className='font-semibold text-center text-gray-600 mt-3 pb-2'>Appointment Receipt</h3>
                        <span className='font-semibold flex justify-end pr-3'>Receipt No: #2948293892399</span>
                        <div className='flex p-5'>
                            <div className='w-1/4'>
                                <span className='font-semibold block text-sm'>Your Name</span>
                                <span className='font-semibold block text-sm'>Placed On</span>
                                <span className='font-semibold block text-sm'>Appointment Date</span>
                                <span className='font-semibold block text-sm'>Doctor's Name</span>
                                <span className='font-semibold block text-sm'>Choosen Category</span>
                            </div>
                            <div className='w-3/4'>
                                <span className='font-semibold block text-sm'>Tony Stark</span>
                                <span className='font-semibold block text-sm'>29/08/2023</span>
                                <span className='font-semibold block text-sm'>30/08/2023</span>
                                <span className='font-semibold block text-sm'>Bruce Banner</span>
                                <span className='font-semibold block text-sm'>Dentistry</span>
                            </div>
                        </div>
                        <div className='flex p-5'>
                            <div className='w-1/4'>
                                <span className='font-semibold block text-sm'>Description</span>
                            </div>
                            <div className='w-3/4'>
                                <span className='font-semibold block text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad sequi eveniet dolorum voluptates numquam quo vel magnam, at dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam a assumenda modi blanditiis voluptatum id repudiandae, commodi rerum suscipit.</span>
                            </div>
                        </div>
                        <div className='p-2 m-2'>
                            <div className='w-1/2 m-auto flex flex-col'>
                                <div className='w-full border px-2 flex justify-between'>
                                    <span className='font-semibold text-gray-600 text-sm block'>Doctor's Fee</span>
                                    <span className='font-semibold text-gray-600 text-sm block'>$20</span>
                                </div>
                                <div className='w-full border px-2 flex justify-between'>
                                    <span className='font-semibold text-gray-600 text-sm block'>Vat</span>
                                    <span className='font-semibold text-gray-600 text-sm block'>$00</span>
                                </div>
                                <div className='w-full border px-2 flex justify-between'>
                                    <span className='font-semibold text-gray-600 text-sm block'>Tax</span>
                                    <span className='font-semibold text-gray-600 text-sm block'>$00</span>
                                </div>
                                <div className='w-full border px-2 flex justify-between'>
                                    <span className='font-semibold text-gray-600 text-sm block'>Service Charge</span>
                                    <span className='font-semibold text-gray-600 text-sm block'>$00</span>
                                </div>
                                <div className='w-full border px-2 flex justify-between'>
                                    <span className='font-semibold text-gray-600 text-lg block'>Total</span>
                                    <span className='font-bold text-gray-600 text-lg block'>$20</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={Paid} alt="paid" className='m-auto h-40' />
                        </div>
                        <div className='py-5'>
                            <span className='font-semibold text-gray-600 block m-auto text-center'>Thanks for using MeDoc</span>
                        </div>
                    </div>
                    <button onClick={captureScreenshot} className='bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 block m-auto my-3'><span className='flex items-center'><AiOutlineDownload className='text-2xl mr-4' /> Download Receipt</span> </button>
                </div>
            }
            {/* stpe 5 end */}


            {
                step !== 5 &&

                <div className='flex justify-between w-1/3'>
                    {
                        step !== 1 &&
                        <button className='text-sm font-bold bg-gradient-to-tl from-red-500 to-red-800 text-gray-100 px-4 py-1 rounded-md ml-3 my-5' onClick={() => prevClicked()}>Go Back</button>
                    }
                    {
                        step !== 4 &&
                        <button className='text-sm font-bold bg-gradient-to-tl from-green-500 to-green-800 text-gray-100 px-4 py-1 rounded-md my-5 ml-auto' onClick={() => nextClicked()}>
                            {
                                step === 1 ? "Next" : step === 2 ? "Next" : "Confirm"
                            }
                        </button>
                    }
                </div>
            }
        </div>
    )
}

export default Getappointment