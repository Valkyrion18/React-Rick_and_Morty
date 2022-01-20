import React, { Component } from "react"
import { Container } from "react-bootstrap"
import Cards from "./Cards";
import "../styles/style.css"

export default class List extends Component {

    constructor() {
        super();
        this.state = {
            characters: []
        }
    }

    async componentDidMount() {
        const url = 'https://rickandmortyapi.com/api/character/'
        const resp = await fetch(url)
        const data = await resp.json()
        const { results } = data
        this.setState({
            characters: results
        })
    }


    render() {
        return (

            <Container>
                <h1 className="titulo">Personajes de Rick And Morty</h1>
                <hr />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {    
                        this.state.characters.map((item, index) => (
                        <Cards
                            key={index}
                            feature={item}
                        />
                    ))
                    }
                </div>
            </Container>
        )
    }
}

