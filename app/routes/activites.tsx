import {
    useLoaderData,
  } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { getActivites } from "~/data.ts"
import { json } from "@remix-run/node";
import styles from "../styles/styles.css";



export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
];
export async function loader() {
    const acts:Activity[] = await getActivites();
    return json(acts);
}

export default function Activites() {
    const things = useLoaderData();
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <p> heyo </p>
        {things.map((activity) => (
            <div key={activity.name}>{activity.name}</div>
        ))}
        </div>
    );
}
