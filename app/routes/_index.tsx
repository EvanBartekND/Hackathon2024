import type { MetaFunction, LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { getActivites, getEmail, populateActivities } from "~/data.ts"

import logo from "../images/mainLogo.png";
import { Link,useLoaderData} from "@remix-run/react";
import { Card } from "react-bootstrap";

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
          
          <Card
            style={{
              margin: "0 20px",
              textAlign: "center",
              color: "#F7F4EF",
              background: "#213E60",
              borderColor: "#F7F4EF",
              borderRadius: "10px", 
              top: '20px',
            }}
          >
            <Card.Body>
              <Card.Text>Meet New People</Card.Text>
              <Card.Text>Try New Activities</Card.Text>
              <Card.Text>Level-Up your College Experience</Card.Text>
            </Card.Body>
          </Card>
      </div>
    </div>
    
 );
}
