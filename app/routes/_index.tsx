import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Outlet,
} from "@remix-run/react";

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

export default function Index() {
  return (
    <div className="landing">
        <img className="logo" src={logo} alt="SideQuestND" />
        <br/>
        <Link to="/login" className="wrapper">
            <button className="landing"><span>⚔️Select Side Quest⚔️</span></button>
        </Link>
        <br/>     
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    </div>
    
 );
}
