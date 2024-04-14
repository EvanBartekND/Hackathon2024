import type { LoaderFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {getActivity} from "~/data.ts"
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'; 




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
    <div style={{
      //margin: "10% 20% 10% 20%", 
      margin: "24px",
      textAlign: "center",
      
    }}
    >
      <Row>
        <Col>
          <Card>
              <Card.Body>
                <Card.Title style={{fontSize: "72px", margin: "50px"}}>{info.name}</Card.Title>
                  <div style={{fontSize: "36px", margin: "25px"}}>
                  <Card.Text>
                    {info.desc}
                  </Card.Text >
                  <Card.Text >
                    Location: {info.location}
                  </Card.Text>
                  <Card.Text style={{fontSize: "36px", margin: "25px"}}>
                    Time: {info.time}
                  </Card.Text>
                  </div>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </div>
  );
}
