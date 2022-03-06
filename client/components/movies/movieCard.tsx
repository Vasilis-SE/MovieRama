import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { IMovieProperties } from "../../interfaces/movies";
import LocalStorage from "../../service/storage";

const convertTimestampToData = (timestamp = 0) => {
  return new Date(timestamp * 1000).toLocaleTimeString("el-GR");
};

export default function MovieCard({
  id,
  title,
  description,
  username,
  likes,
  hates,
  created_at,
}: IMovieProperties) {
  const [canRate, setCanRate] = React.useState(false);

  React.useEffect(() => {
    setCanRate(LocalStorage.getUserToken() ? true : false);
  }, []);

  return (
    <Card className="movie-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="movie-card-discription">{description}</Card.Text>
        <Row xs={6} className="social-button-area justify-content-between">
          <Col xs="auto">
            <Button variant="outline-success" className="">
              {likes ? likes : 0}
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="outline-danger" className="">
              {hates ? hates : 0}
            </Button>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Row xs={6} className="social-button-area justify-content-between">
          <Col xs="auto">Created by: {username}</Col>
          <Col xs="auto">{convertTimestampToData(created_at)}</Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
