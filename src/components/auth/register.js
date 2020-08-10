import React, {useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
function Register (props) {
    let [email, setEmail] = useState("") 
    let [password, setPassword] = useState("") 
    let [phone, setPhone] = useState("") 
    let [name, setName] = useState("") 
    let [success, setSuccess] = useState(false) 
    const onSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8080/user/register",{
                email,
                password,
                name ,
                phone
        }).then((res) => {
			if (res.status === 200) {
                setSuccess(true)
			}
		}).catch((err) => {
            alert("err")
		});;
    }
    const onHandleChage = (e) =>{
        if(e.target.name === "email") setEmail(e.target.value)
        if(e.target.name === "password") setPassword(e.target.value)
        if(e.target.name === "phone") setPhone(e.target.value)
        if(e.target.name === "name") setName(e.target.value)
    }
    if(success) return <Redirect to="/login" />
    return (
        <div className="container">
				<div className="row">
                    <div className="col-md-4"></div>
					<div className="col-md-4">
						<form onSubmit={onSubmit} className="mt-3">
                            <h3>Register</h3>
							<div class="form-group">
								<label for="exampleInputEmail1">
									Email address
								</label>
								<input
									onChange={onHandleChage}
									value={email}
									name="email"
									class="form-control"
									placeholder="Enter email"
								/>
								<small
									id="emailHelp"
									class="form-text text-muted"
								>
									We'll never share your email with anyone
									else.
								</small>
							</div>
							<div class="form-group">
								<label for="exampleInputPassword1">
									Password
								</label>
								<input
									type="password"
									class="form-control"
									onChange={onHandleChage}
									value={password}
									name="password"
									placeholder="Password"
								/>
							</div>
                            <div class="form-group">
								<label for="exampleInputEmail1">
									Name
								</label>
								<input
									onChange={onHandleChage}
									value={name}
                                    type="text"
                                    name="name"
									class="form-control"
									placeholder="Enter name"
								/>
							</div>
                            <div class="form-group">
								<label for="exampleInputEmail1">
									Phone
								</label>
								<input
									onChange={onHandleChage}
                                    value={phone}
                                    type="number"
									name="phone"
									class="form-control"
									placeholder="Enter phone number"
								/>
							</div>
							<button type="submit" class="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
                    <div className="col-md-4"></div>
				</div>
			</div>
    );
}

export default Register