
import type { LinksFunction } from "@remix-run/node";

import styles from "../styles/styles.css";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];


export default function Landing() {
    return (
    <div >
        <img alt="a logo"/>
        <br/>
        <button> hi </button>
        <br />
        <p> Meeting New People </p>
        <p> Doing New Things </p>
        
    </div>
 );
}
