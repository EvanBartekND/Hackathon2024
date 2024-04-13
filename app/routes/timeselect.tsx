import type { MetaFunction, LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
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
    <div style={{ textAlign: 'center'}}>
        <h1 style={{ color: '#15edc6', fontSize: '54px', fontFamily: 'Playfair Display, serif'}}>Select Availability:</h1>
            <div>
                <button className="timeslot"><span>Friday Night</span></button>
                <button className="timeslot"><span>Saturday Morning</span></button>
                <button className="timeslot"><span>Saturday Evening</span></button>
                <button className="timeslot"><span>Sunday Morning</span></button>
                <button className="timeslot"><span>Sunday Evening</span></button>
            </div>

    </div>
 );
}
