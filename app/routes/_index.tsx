import type { MetaFunction, LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  useLoaderData,
} from "@remix-run/react";

import { getActivites, getEmail } from "~/data.ts"

import logo from "../images/notre-dame.svg";
import { Link } from "@remix-run/react";


export async function loader() {
  const email:string = await getEmail();
  return json(email);
}


export default function Index() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
          <img className="logo" src={logo} alt="SideQuestND" style={{ position: "relative", top: "-20px"}}/>
          <Link to="/login" className="wrapper">
              <button className="landing"><span>⚔️Select Side Quest⚔️</span></button>
          </Link>
          <br/>
          <p>{things}</p>
      </div>
    </div>
    
 );
}
