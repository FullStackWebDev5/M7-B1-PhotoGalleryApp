import { Container, Row, Col, Card } from "react-bootstrap";

const Photos = () => {
  let photosArray = [
    {
      id: "0",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/yC-Yzbqy7PY",
      download_url: "https://picsum.photos/id/0/5000/3333",
    },
    {
      id: "1",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/LNRyGwIJr5c",
      download_url: "https://picsum.photos/id/1/5000/3333",
    },
    {
      id: "26",
      author: "Vadim Sherbakov",
      width: 4209,
      height: 2769,
      url: "https://unsplash.com/photos/tCICLJ5ktBE",
      download_url: "https://picsum.photos/id/26/4209/2769",
    },
    {
      id: "27",
      author: "Yoni Kaplan-Nadel",
      width: 3264,
      height: 1836,
      url: "https://unsplash.com/photos/iJnZwLBOB1I",
      download_url: "https://picsum.photos/id/27/3264/1836",
    },
    {
      id: "28",
      author: "Jerry Adney",
      width: 4928,
      height: 3264,
      url: "https://unsplash.com/photos/_WiFMBRT7Aw",
      download_url: "https://picsum.photos/id/28/4928/3264",
    },
    {
      id: "29",
      author: "Go Wild",
      width: 4000,
      height: 2670,
      url: "https://unsplash.com/photos/V0yAek6BgGk",
      download_url: "https://picsum.photos/id/29/4000/2670",
    },
    {
      id: "2",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/N7XodRrbzS0",
      download_url: "https://picsum.photos/id/2/5000/3333",
    },
    {
      id: "3",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/Dl6jeyfihLk",
      download_url: "https://picsum.photos/id/3/5000/3333",
    },
  ];
  return (
    <Container>
      <Row>
        {photosArray.map((photo) => (
          <Col md={3} className="mt-2 mb-2" key={photo.id}>
            <Card style={{ width: "18rem", textAlign: "center" }}>
              <Card.Img
                variant="top"
                src={photo.download_url}
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title>{photo.author}</Card.Title>
                <a href={photo.url} className="btn btn-dark btn-sm">
                  View details
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Photos;
