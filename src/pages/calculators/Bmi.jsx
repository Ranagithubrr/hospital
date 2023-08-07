import React, { useState } from 'react'

const Bmi = () => {
    const [resultBox,showResultBox] = useState(false);
    const [feet,setFeet] = useState(0);
    const [inches,setInches] = useState(0);
    const [weight,setWeight] = useState(0); 
    const [BMI,setBMI] = useState(0);

    const CalculateBmi = () =>{      
        if(feet === 0 || weight === 0)     {
            window.alert("please fill all the input field");
            return;
        }
        let totalInches = (parseInt(feet) * 12 +  parseInt(inches));     
        let meeter = totalInches / 39.37;        
        let bmi = parseInt(weight) / (meeter * meeter)
        setBMI(bmi.toFixed(2))
        console.log('bmi is: ', bmi);
        showResultBox(true);
        // console.log(totalInches, parseInt(weight));     
    }
    const ResetClicked = () =>{
        showResultBox(false);
        setFeet(0);
        setInches(0);
        setWeight(0);
        setBMI(0);
    }
    return (
        <div className='border p-3 shadow'>
            <h5 className='text-center font-bold text-gray-600'>Check Your BMI</h5>
            <div className='w-3/5 m-auto'>
                <span className='font-semibold text-sm text-gray-600 block'>Your Height</span>
                <div className=' flex items-center my-3'>
                    <input type="number" className='border w-1/2 mr-2 appearance-none outline-none' style={{ WebkitAppearance: 'none' }} placeholder='Feet' onChange={(e)=>setFeet(e.target.value)} value={feet !== 0 && feet}/>
                    <input type="number" className='border w-1/2 appearance-none outline-none' style={{ WebkitAppearance: 'none' }} placeholder='Inches' onChange={(e)=>setInches(e.target.value)} value={inches !== 0 && inches}/>
                </div>
                <span className='font-semibold text-sm text-gray-600 block'>Your Weight</span>
                <input type="number" className='w-full border outline-none' placeholder='kG' onChange={(e)=>setWeight(e.target.value)} value={weight !== 0 && weight}/>
                <button className='bg-gradient-to-r from-blue-400 to-blue-800 text-gray-100 font-semibold text-md px-5 py-1 rounded my-3 hover:from-blue-500 hover:to-blue-800 hover:bg-gradient-to-r' onClick={()=>CalculateBmi()}>Check BMI</button>
                <button onClick={ResetClicked} className='bg-red-600 text-white font-semibold px-3 py-1 rounded mx-2'>Reset</button>
               {resultBox &&  <div className='text-center'>
                    <span className='text-md font-semibold text-gray-600'>Your BMI is</span>
                    <br />
                    <span className='text-5xl font-bold'>{BMI}</span>
                    <br />
                    {
                        BMI > 25 ? <span className='text-sm font-semibold text-red-500'>Opps You are overweight </span> : BMI > 18.4 ? <span className='text-sm font-semibold text-green-500'>Congratulations You are in Perfect Shape </span> : <span className='text-sm font-semibold text-red-400'>Oops Your're underweight</span>
                    }
                    {/* <span className='text-sm font-semibold text-green-500'>Congratulations You are in Perfect Shape </span> */}
                </div>
                }

            </div>
        </div>
    )
}

export default Bmi