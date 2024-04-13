import type { LoaderFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {getActivity} from "~/data.ts"
import {  Card } from 'react-bootstrap';




export const loader = async ({ params }: LoaderFunctionArgs) => {
  const act: Activity[] = await getActivity(params.name);
  if(act){
    return json(act);
  }
  return null 
};

export default function Info() {
  const info = useLoaderData();
  return (
    <Card style={{ width: "18rem", textAlign: "center" }}>
        <Card.Body>
          <Card.Title>{info.name}</Card.Title>
          <Card.Text>
            {info.desc}
          </Card.Text>
          <Card.Text>
            Location: {info.location}
          </Card.Text>
          <Card.Text>
            Time: {info.time}
          </Card.Text>
        </Card.Body>
      </Card>
  );
}
