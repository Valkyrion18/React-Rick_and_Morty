import React, { Component } from 'react';
import { Card } from "react-bootstrap";
// import  { StatusBlock, StatusText }  from "../styleds/CardContainer";

export default class Cards extends Component {
    render () {
        const {name, status, species, gender, image } = this.props.feature

        return(
            <div>
                <Card>
                    <Card.Img variant="top" src={image}/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {species}<br></br>
                            {gender}<br></br>
                            {status}
                            {/* <StatusBlock>
                                {gender}
                                <StatusText>{status}</StatusText>
                            </StatusBlock> */}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}