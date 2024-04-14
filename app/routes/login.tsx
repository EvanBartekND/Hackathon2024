import type { MetaFunction, LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  useLoaderData,
} from "@remix-run/react";

import {getActivites} from "~/data.ts"

import logo from "../images/notre-dame.svg";
import { Link } from "@remix-run/react";

// import Form from 'react-bootstrap/Form';

import { useState } from 'react';
 
import { Form } from '@remix-run/react';


export default function Login(){
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                <Link to='/'>
                    <img src={logo} alt="SideQuestND" style={{ width: '75px', position: 'absolute', top: '15px', left: '15px' }} />
                </Link>   
                <Form action="/timeselect" method="post">
                    <input name="emailID" type="email"/>
                </Form>
                <br/>
            </div>
        </div>
    );
}
