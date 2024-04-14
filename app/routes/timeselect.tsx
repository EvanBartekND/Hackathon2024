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
        <h1 style={{ color: '#000000'}}>Select Availability:</h1>
        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div class="row">
                <Link to={"/activites/0"}>
                    <button className="timeslot" style={{color: "aquamarine", backgroundColor: "#fcad03"}}>
                        <span>🌙   Friday Evening (4:00pm - 1:00am)</span></button>
                </Link>
            </div>
            <div class="row">
                <Link to={"/activites/1"}>
                    <button className="timeslot" style={{color: "#0099cc", backgroundColor: "#7bff00"}}>
                        <span>☀️   Saturday Morning (8:00am - 4:00pm)</span></button>
                </Link>
            </div>    
            <div class="row">
                <Link to={"/activites/2"}>
                    <button className="timeslot" style={{color: "aquamarine", backgroundColor: "#fcad03"}}>
                        <span>🌙   Saturday Evening (4:00pm - 1:00am)</span></button>
                </Link>
            </div>
            <div class="row">
                <Link to={"/activites/3"}>
                    <button className="timeslot" style={{color: "#0099cc", backgroundColor: "#7bff00"}}>
                        <span>☀️   Sunday Morning (8:00am - 4:00pm)</span></button>
                </Link>
            </div>
            <div class="row">
                <Link to={"/activites/4"}>
                    <button className="timeslot" style={{color: "aquamarine", backgroundColor: "#fcad03"}}>
                        <span>🌙   Sunday Evening (4:00pm - 1:00am)</span></button>
                </Link>
            </div>

        </Container>
    </div>
 );
}
