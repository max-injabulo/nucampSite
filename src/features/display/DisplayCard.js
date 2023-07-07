import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DisplayCard = ({ item }) => {
    const { image, name, description } = item;
    console.log("image: "+image);
    console.log("name: "+name);
    console.log("description: "+description);
    

    return (
        <Card>
            <CardImg src={image} alt={name}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
};

export default DisplayCard;