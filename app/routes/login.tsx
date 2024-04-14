
import { json } from "@remix-run/node";
import {
  useLoaderData,
} from "@remix-run/react";

import { postEmail } from "~/data.ts"

import logo from "../images/toplogo.png";
import { Link } from "@remix-run/react";

// import Form from 'react-bootstrap/Form';

import { useState } from 'react';
 
import { Form } from '@remix-run/react';
import { redirect, type ActionFunctionArgs } from "@remix-run/node";

export default function Login(){
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                <Link to='/'>
                    <img src={logo} alt="SideQuestND" style={{ width: '200px', position: 'absolute', top: '15px', left: '15px' }} />
                </Link>   
                <Form className="login" method="post">
                    <label htmlFor="email" style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px', fontFamily: 'Space Grotesk, sans-serif'}}>ND email address:</label>
                    <input className="login" name="email" type="email" placeholder="netID@nd.edu"/>
                    <button className="login" type="submit" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Login</button>
                </Form>
                <br/>
            </div>
        </div>
    );
}

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const email = formData.get("email")
    console.log({email});

    if(!email.includes("nd.edu")){
        return redirect("/login");
    }

    postEmail(email);

    return redirect("/timeselect");
}