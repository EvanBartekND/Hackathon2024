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

export async function loader() {
  const acts:Activity[] = await getActivites();
  
  return json(acts);
}

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
  const things = useLoaderData();
  return (

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>

          <img className="logo" src={logo} alt="SideQuestND" style={{ position: "relative", top: "-20px"}}/>

          <Link to="/login" className="wrapper">
              <button className="landing"><span>⚔️Select Side Quest⚔️</span></button>
          </Link>
    
      </div>

    </div>
    
 );
}
