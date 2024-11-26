import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import mockImage from "assets/mock.png";
import {Link} from "react-router-dom";
import {T_Code} from "modules/types.ts";

interface CodeCardProps {
    code: T_Code,
    isMock: boolean
}

const CodeCard = ({code, isMock}: CodeCardProps) => {
    return (
        <Card key={code.id} style={{width: '18rem', margin: "0 auto 50px" }}>
            <CardImg
                src={isMock ? mockImage as string : code.image}
                style={{"height": "200px"}}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {code.name}
                </CardTitle>
                <CardText>
                    Расшифровка: {code.decryption}.
                </CardText>
                <Link to={`/codes/${code.id}`}>
                    <Button color="primary">
                        Открыть
                    </Button>
                </Link>
            </CardBody>
        </Card>
    );
};

export default CodeCard