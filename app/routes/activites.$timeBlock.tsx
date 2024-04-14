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
          <Card style={{textAlign: "center", color: "white" }} bg="dark" border="warning">
            <Card.Title>Choose Your Adventure</Card.Title>
          </Card>
        </Col>
      </Row>
      <br/>
      <Row>
        {activites.map((activity) => (
          <Col key={activity.name} xs={12} sm={6} md={4} lg={4}>
            <ActivityCard activity={activity} />
            <br/>
          </Col>
          
        ))}
      </Row>
    </div>
  );
}

export function ActivityCard({ activity }) {
  return (
    <Card
      style={{textAlign: "center", color: "white" }}
      bg="dark"
      border="warning"
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
          <Button variant="warning">select quest</Button>
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
