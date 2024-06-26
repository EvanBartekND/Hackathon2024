import { useLoaderData, Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { getActivities } from "~/data.ts";
import { json } from "@remix-run/node";
import styles from "../styles/styles.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const acts: Activity[] = await getActivities(params.timeBlock as int);
  return json(acts);
};

export default function Activites() {
  const activites: Activity[] = useLoaderData();
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        margin: "24px",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Row>
        <Col>
          <Card
            style={{ textAlign: "center", color: "#F7F4EB", background: "#213E60",borderColor:"#F7F4EB", borderRadius: "60px"}}
            // bg="dark"
            // border="warning"
          >
            <Card.Title style={{marginTop:"10px"}}>Choose Your Adventure</Card.Title>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        {activites.map((activity) => (
          <Col key={activity.name} xs={12} sm={6} md={4} lg={4}>
            <ActivityCard activity={activity} />
            <br />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export function ActivityCard({ activity }) {
  return (
    <Card
      style={{ textAlign: "center", color: "#213E60", background: "#F7F4EF",borderColor:"#213E60"}}
      // bg="dark"
      // border="warning"
    >
      <Card.Header>
        <Card.Title>{activity.name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{activity.time}</Card.Text>
        <Card.Text>{activity.location}</Card.Text>
        <Link
          to={"/Info/" + activity.name.replace(/\s/g, "")}
          className="wrapper"
        >
          <Button className="activity" style={{color: "#F7F4EB", background: "#213E60", border: '2px solid black'}}>Select Quest</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

ActivityCard.propTypes = {
  activity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    // Define other properties as needed
  }).isRequired,
};
