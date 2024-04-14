import type { MetaFunction, LinksFunction, LoaderFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { json } from "@remix-run/node";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'; 
import {
  useLoaderData,
} from "@remix-run/react";

import {getActivites} from "~/data.ts"

import styles from "../styles/styles.css";
import logo from "../images/notre-dame.svg";
import { Link } from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const meta: MetaFunction = () => {
  return [
    { title: "SideQuestND" },
    { name: "description", content: "Welcome to SideQuestND!" },
  ];
};

{/* <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8"}}>
<p> heyo </p>
{things.map((activity) => (
  <div key={activity.name}>{activity.name}</div>
))} 
</div> */}

export default function Index() {
 
  return (
    <div style={{ textAlign: 'center' }}>
        <h1 className="timing" style={{ position: 'relative', top: '5px', left: '5px', color: '#213E60', fontFamily: 'Space Grotesk, serif'}}>Select Availability</h1>
        <Container style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', top: '30px' }}>
            <div class="row">
                <Link to={"/activites/0"}>
                    <button className="timeslot" style={{color: "#000000", backgroundColor: "#8ECAE6"}}>
                        <span>Sunday</span></button>
                </Link>
            </div>
            <div class="row">
                <Link to={"/activites/1"}>
                    <button className="timeslot" style={{color: "#000000", backgroundColor: "#FFA859"}}>
                        <span>Monday</span></button>
                </Link>
            </div>    
            <div class="row">
                <Link to={"/activites/2"} className="wrapper">
                    <button className="timeslot" style={{color: "#000000", backgroundColor: "#8ECAE6"}}>
                        <span>Tuesday</span></button>
                </Link>
            </div>
            <div class="row">
                <Link to={"/activites/3"}>
                    <button className="timeslot" style={{color: "#000000", backgroundColor: "#FFA859"}}>
                        <span>Wednesday</span></button>
                </Link>
            </div>
            <div class="row">
                <Link to={"/activites/4"}>
                    <button className="timeslot" style={{color: "#000000", backgroundColor: "#8ECAE6"}}>
                        <span>Thursday</span></button>
                </Link>
            </div>
            <div class="row">
                <Link to={"/activites/5"}>
                    <button className="timeslot" style={{color: "#000000", backgroundColor: "#FFA859"}}>
                        <span>Friday</span></button>
                </Link>
            </div>
            <div class="row">
                <Link to={"/activites/6"}>
                    <button className="timeslot" style={{color: "#000000", backgroundColor: "#8ECAE6"}}>
                        <span>Saturday</span></button>
                </Link>
            </div>

        </Container>
    </div>
 );
}
