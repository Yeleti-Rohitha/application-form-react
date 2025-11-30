import { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const FormValidation = ({ setSubmittedData }) => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [countryCode] = useState("+91");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [pan, setPan] = useState("");
    const [adhar, setAdhar] = useState("");

    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    // VALIDATION LOGIC
    useEffect(() => {
        const temp = {};

        if (!firstName) temp.firstName = "Required";
        if (!lastName) temp.lastName = "Required";
        if (!userName) temp.userName = "Required";

        if (!/\S+@\S+\.\S+/.test(email)) temp.email = "Invalid Email";

        if (!password) temp.password = "Required";

        if (!/^\d{10}$/.test(phoneNumber))
            temp.phoneNumber = "10 digits required";

        if (!country) temp.country = "Required";
        if (!city) temp.city = "Required";

        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan))
            temp.pan = "Invalid PAN format";

        if (!/^\d{12}$/.test(adhar))
            temp.adhar = "Aadhaar must be 12 digits";

        setErrors(temp);
        setIsValid(Object.keys(temp).length === 0);
    }, [firstName, lastName, userName, email, password, phoneNumber, country, city, pan, adhar]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            firstName,
            lastName,
            userName,
            email,
            password,
            phoneNumber,
            countryCode,
            country,
            city,
            pan,
            adhar
        };

        setSubmittedData(formData);
        navigate("/details");
    };


    return (
        <div className="form-container">
            <h2>Registration Form</h2>

            {/* FIRST NAME */}
            <div className='input-group'>
                <label>First Name</label>
                <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>

            {/* LAST NAME */}
            <div className='input-group'>
                <label>Last Name</label>
                <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>

            {/* USERNAME */}
            <div className='input-group'>
                <label>User Name</label>
                <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} />
                {errors.userName && <p className="error">{errors.userName}</p>}
            </div>

            {/* EMAIL */}
            <div className='input-group'>
                <label>Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            {/* PASSWORD + SHOW/HIDE */}
            <div className='input-group'>
                <label>Password</label>
                <input 
                    type={showPassword ? "text" : "password"} 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} 
                />
                {errors.password && <p className="error">{errors.password}</p>}
                <label>
                    <input 
                        type="checkbox" 
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                    />
                    Show Password
                </label>
            </div>

            {/* PHONE */}
            <div className='input-group'>
                <label>Phone Number (+91)</label>
                <input type="tel" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
                {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
            </div>

            {/* COUNTRY */}
            <div className='input-group'>
                <label>Country</label>
                <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)} />
                {errors.country && <p className="error">{errors.country}</p>}
            </div>

            {/* CITY */}
            <div className='input-group'>
                <label>City</label>
                <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} />
                {errors.city && <p className="error">{errors.city}</p>}
            </div>

            {/* PAN */}
            <div className='input-group'>
                <label>PAN</label>
                <input type="text" value={pan} onChange={(e)=>setPan(e.target.value)} />
                {errors.pan && <p className="error">{errors.pan}</p>}
            </div>

            {/* AADHAAR */}
            <div className='input-group'>
                <label>Aadhaar</label>
                <input type="number" value={adhar} onChange={(e)=>setAdhar(e.target.value)} />
                {errors.adhar && <p className="error">{errors.adhar}</p>}
            </div>

            <button onClick={handleSubmit} disabled={!isValid}>
                Submit
            </button>
        </div>
    );
};

export default FormValidation;
