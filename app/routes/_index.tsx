import type { MetaFunction, LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  useLoaderData,
} from "@remix-run/react";

import {getActivites} from "~/data.ts"

import styles from "../styles/styles.css";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export async function loader() {
  const acts:Activity[] = await getActivites();
  
  return json(acts);
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  const things = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8"}}>
      <p> heyo </p>
      {things.map((activity) => (
        <div key={activity.name}>{activity.name}</div>
      ))}
    </div>
  );
}
