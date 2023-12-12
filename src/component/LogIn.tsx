import { useFormik } from "formik"
import styled from "styled-components";
import { useEffect, useRef } from "react";
import useAuth from "../hooks/useAuthHook";
import { instAxio } from "../api/mainApi"
import { useLocation, useNavigate } from "react-router-dom";

const Form = styled.form`
display:flex;
flex-direction:column;
width:400px;
height:400px;
justify-content: center;
background-color:black;
margin:0 auto;
border-radius: 30% 10%  ;
margin-top:50px
`;
const Text = styled.p`
color:white;
text-align:center
`
const Input = styled.input`
width:300px;
margin:0 auto;
border-radius: 30px;
padding-left:5px;
padding-top:1px
`
const Button = styled.button`
width:100px;
margin:0 auto;
border-radius: 30px;
margin-top:10px
`


const LogIn = () => {
    const { setAuth } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement>(null);
    const from = location.state?.from.pathname;
    const formik = useFormik({
        initialValues: {
            name: '',
            password: ""
        },
        onSubmit: values => {

            const callData = async () => {
                try {
                    const data = await instAxio.post("auth/login",
                        {
                            username: values.name,
                            password: values.password
                        }
                    )
                    setAuth(data.data.token);
                    console.log("location" + from);
                    navigate(from, { replace: true })
                   


                } catch (err) {
                    console.log("Data :" + err);
                }


            }
            callData();
        },
    });

    useEffect(() => {
        emailRef.current!.focus();
    }, []);


    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <label htmlFor="email"><Text>email </Text></label>
                <Input type="text"
                    id="name"
                    name="name"
                    ref={emailRef}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder="name"
                />
                <label htmlFor="password"><Text>password </Text></label>
                <Input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="password"
                />
                <Button type="submit">Submit</Button>
            </Form>
        </>
    )
}

export default LogIn;