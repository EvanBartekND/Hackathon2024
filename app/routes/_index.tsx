import type { MetaFunction, LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { getActivites, getEmail, populateActivities } from "~/data.ts"

import logo from "../images/mainLogo.png";
import { Link,useLoaderData} from "@remix-run/react";


export async function loader() {
  const email:string = await getEmail();
  populateActivities();
  return json(email);
}


export default function Index() {
  const things = useLoaderData();

  const emailExists = things && things !== '';


  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
          <img className="logo" src={logo} alt="SideQuestND" style={{ width:"80%",position: "relative", top: "-20px"}}/>
          <br/>
          {emailExists ? (
            <Link to="/timeselect" className="wrapper">
            <button className="landing"><span>⚔️Select Side Quest⚔️</span></button>
            </Link>
          ) : (
            <Link to="/login" className="wrapper">
              <button className="landing"><span>⚔️Select Side Quest⚔️</span></button>
          </Link>
          )}
          
          <br/>
          <p style={{fontFamily: 'Space Grotesk, serif'}}>{things}</p>
      </div>
    </div>
    
 );
}
