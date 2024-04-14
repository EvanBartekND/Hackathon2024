import type { LoaderFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getActivity } from "~/data.ts";
import { Row, Col, Card } from "react-bootstrap";
import logo from "../images/toplogo.png";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const act: Activity[] = await getActivity(params.name);
  if (act) {
    return json(act);
  }
  return null;
};

export default function Info() {
  const info = useLoaderData();
  return (
    <div
      style={{
        //margin: "10% 20% 10% 20%",
        margin: "24px",
        textAlign: "center",
      }}
    >
      <Row>
        <Col>
          <Card
            style={{
              textAlign: "center",
              color: "#F7F4EF",
              background: "#213E60",
              borderColor: "#F7F4EF",
              borderRadius: "60px",
            }}
          >
            <Card.Header>
              <Card.Title>
                <h1 style={{marginTop:"12px"}}>{info.name}</h1>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>{info.desc}</Card.Text>
              <Card.Text>Location: {info.location}</Card.Text>
              <Card.Text>{info.time}</Card.Text>
              <Card.Text style={{color: '#FFA859', fontSize: '1.2em'}}>Remember to arrive early to connect with fellow players!</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Link to='/'>
        <img src={logo} alt="SideQuestND" style={{position: 'relative', width: '200px', top: '20px'}} />
      </Link>  
    </div>
  );
}
