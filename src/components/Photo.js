import { Container } from 'react-bootstrap'

const Photo = () => {
	return (
    <Container>
      <img
        src="https://picsum.photos/id/15/2500/1667"
        alt="enlarged-img"
        style={{ 
					width: "100%", 
					height: "90vh", 
					margin: "10px" ,
					padding: "10px",
					borderRadius: "5px",
					boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
				}}
      />
    </Container>
  );
}

export default Photo