import { useState } from "react";
import '../css/style.css';
import Modal from './Modal';
import MyComponent from "./components/MyComponent";

// import '../css/libs/bootstrap/bootsarp.min.css';
// import '../css/libs/bootstrap/bootstrap.bundle.min.js';

export default function MyFunction() {
    const [Modale,setModale] = useState({
        isVisible:false,
        classStatus: "",
        massage: "",
    });
    const [formInputs, setFormInputs] = useState({
        name: "", 
        age: "",
        phoneNumber: "", // Fixed property name
        isEmployed: false, // Fixed property name
        salary: "",
    });

    function handelModel() {
        if(Modale.isVisible) {
            setModale({...Modale, isVisible:false });
        }
    }
    // Function to determine if the submit button should be disabled
    function handleBtnDisabled() {
        // Check if any of the required fields are empty
        return formInputs.name === "" || 
               formInputs.age === "" || 
               formInputs.phoneNumber === "" || 
               formInputs.salary === "";
    }

    // Function to handle changes in the checkbox
    function handleCheckboxChange(event) {
        setFormInputs({ ...formInputs, isEmployed: event.target.checked });
    }
    function handleNameInputChange(value) {
        setFormInputs({ ...formInputs, name: value});
    }
    function handlePhoneNumberInputChange(value) {
        setFormInputs({ ...formInputs, phoneNumber: value});
    }
    function handleAgeInputChange(value) {
        setFormInputs({ ...formInputs, age: value});
    }
    return (
        <div onClick={handelModel}>
            <form onSubmit={(event) => {
                    event.preventDefault(); // Prevent default form submission
                    if(Number(formInputs.age) < 18 ||  Number(formInputs.age) > 100) {
                        return setModale({ classStatus: "Error", message: "age is not allowed" ,isVisible:true});    

                    }
                    if(formInputs.phoneNumber.length < 10 || formInputs.phoneNumber.length > 12) {
                        return setModale({ classStatus: "Error", message: "Phone Number Formate is incorrect" ,isVisible:true});    
                    }

                    console.log(formInputs.phoneNumber.length); // Log form data to the console

                    return setModale({ classStatus: "sucsses", message: "sucsses massage" ,isVisible:true});    
                }}>
                <MyComponent 
                    title="name:"
                    value={formInputs.name} 
                    hndelChage={handleNameInputChange} />
                <hr />
                <MyComponent 
                    title="phone numbar:"
                    value={formInputs.phoneNumber} 
                    hndelChage={handlePhoneNumberInputChange} />
                <hr />
                <MyComponent 
                    title="Age:"
                    value={formInputs.age} 
                    hndelChage={handleAgeInputChange} />
                <hr />
                
                <label>Are you employed?</label>
                <input 
                    type="checkbox" 
                    checked={formInputs.isEmployed} 
                    onChange={handleCheckboxChange} 
                />
                <hr />
                
                <label>Salary:</label>
                <select 
                    value={formInputs.salary} 
                    onChange={(event) => {
                        setFormInputs({ ...formInputs, salary: event.target.value });
                    }}
                >
                    <option value="">Select salary</option> {/* Default option */}
                    <option value="500$">Less than 500$</option>
                    <option value="250$">Less than 250$</option>
                    <option value="200$">Less than 200$</option>
                </select>
                <hr />
                
                <button 
                    type="submit" 
                    className="btn btn-primary" // Fixed class name
                    disabled={handleBtnDisabled()} // Disable button if any field is empty
                >
                    Submit
                </button>
            </form>
            <Modal isVisible={Modale.isVisible} message={Modale.message} status={Modale.classStatus}/>
        </div>
    );
}