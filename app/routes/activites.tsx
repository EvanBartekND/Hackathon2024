import { useLoaderData, Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { getActivites } from "~/data.ts";
import { json } from "@remix-run/node";
import styles from "../styles/styles.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'; 



export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
export async function loader() {
  const acts: Activity[] = await getActivites();
  return json(acts);
}

export default function Activites() {
  const activites: Activity[] = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" ,textAlign: "center"}}>
      <h1 style={{ textAlign: "center" }}> Choose Your Adventure </h1>
      <Container fluid>
        <Row>
          {activites.map((activity) => (
            <Col key={activity.name} xs={12} sm={6} md={4} lg={4}>
                <ActivityCard activity={activity} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export function ActivityCard({ activity }) {
    return (
      <Card style={{ width: "18rem", textAlign: "center" }}>
        <Card.Body>
          <Card.Title>{activity.name}</Card.Title>
          <Card.Text>
            {activity.desc}
          </Card.Text>
          <Card.Text>
            Location: {activity.location}
          </Card.Text>
          <Card.Text>
            Time: {activity.time}
          </Card.Text>
            <Link to={activity.name} className="wrapper">
                <Button variant="primary">select quest</Button>
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
  