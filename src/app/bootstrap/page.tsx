import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import "./global.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Stack from "react-bootstrap/Stack";

import Button from "react-bootstrap/Button";

export default function Page() {
  return (
    <Container fluid>
      <Row>
        <Col xs={{ span: 3 }}>
          <Stack direction="vertical" gap={3}>
            <Button size="lg">Primary - Large</Button>
            <Button variant="outline-secondary">Secondary - Medium</Button>
            <Button size="sm">Primary - Small</Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
