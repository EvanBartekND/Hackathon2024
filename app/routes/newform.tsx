import Form from 'react-bootstrap/Form';
import logo from "../images/toplogo.png";
import { Link } from "@remix-run/react";
import { redirect, type ActionFunctionArgs } from "@remix-run/node";

export default function Newform() {
    return (
        <div style={{ position: 'relative', top: '20px', textAlign: 'center'}}>
      <Form style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f7f7f7' }} method="post">
        <Form.Group style={{ marginBottom: '20px' }} controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{ color: '#213E60', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px', fontFamily: 'Space Grotesk, sans-serif'}}>Quest Name</Form.Label>
          <Form.Control as="textarea" rows={1} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} />
        </Form.Group>
        <Form.Group style={{ marginBottom: '20px' }} controlId="exampleForm.ControlTextarea2">
          <Form.Label style={{ color: '#213E60', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px', fontFamily: 'Space Grotesk, sans-serif'}}>Quest Location</Form.Label>
          <Form.Control as="textarea" rows={1} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} />
        </Form.Group>
        <Form.Group style={{ marginBottom: '20px' }}>
          <Form.Label style={{ color: '#213E60', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px', fontFamily: 'Space Grotesk, sans-serif'}}>Quest Day</Form.Label>
          <Form.Select aria-label="Default select example" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
            <option>--Select Day--</option>
            <option value="1">Sunday</option>
            <option value="2">Monday</option>
            <option value="3">Tuesday</option>
            <option value="4">Wednesday</option>
            <option value="5">Thursday</option>
            <option value="6">Friday</option>
            <option value="7">Saturday</option>
          </Form.Select>
        </Form.Group>
        <Form.Group style={{ marginBottom: '20px' }} controlId="exampleForm.ControlTextarea3">
          <Form.Label style={{ color: '#213E60', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px', fontFamily: 'Space Grotesk, sans-serif'}}>Quest Description</Form.Label>
          <Form.Control as="textarea" rows={3} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} />
        </Form.Group>
        <Form.Group style={{ marginBottom: '20px' }} controlId="exampleForm.ControlTextarea4">
          <Form.Label style={{ color: '#213E60', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px', fontFamily: 'Space Grotesk, sans-serif'}}>Quest Logistics</Form.Label>
          <Form.Control as="textarea" rows={2} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} />
        </Form.Group>
        <Link to='/'>
            <button className="login">Submit Quest Application</button>
        </Link> 
      </Form>
      <Link to='/'>
        <img src={logo} alt="SideQuestND" style={{position: 'relative', width: '200px', top: '20px'}} />
      </Link> 
      </div>
    );
  }

  export async function action({ request }: ActionFunctionArgs) {
 
    return redirect("/");
}