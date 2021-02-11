import React, {  useRef } from 'react'
import {Form ,Container,Button ,Card} from 'react-bootstrap';



export default function ForgetPassword() {
    const  emaiRef=useRef()
    return (
        <Card>
        <Card.Body>
            <Container className="d-flex align-center justify-content-center w-100"
            style={{ minHeight: "100vh",maxWidth: "400PX"}}
             >
            <Form>
                <h1>Forget Password</h1>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emaiRef}  placeholder="Enter your email"
                    required/>
                </Form.Group>
                
                <Button className="w-100" type="Submit" >Continue</Button>
                
            </Form>
            </Container>
        </Card.Body>
    </Card>
    )
}
