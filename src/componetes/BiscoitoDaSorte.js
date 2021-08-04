import React from 'react';
import biscoito from '../assets/chines-biscoito.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Image, Spinner, Container, Alert } from 'react-bootstrap';

class BiscoitoDaSorte extends React.Component{
    constructor(){
        super();

        this.state = {
            listaFrases: '',
            loading: false,
            showAlert: false,
        }
        this.seachFrases = this.seachFrases.bind(this);
    }

    seachFrases() {
        this.setState({
            loading: true
        });
        const { frases } = this.props;
        const numeroAleatorio = Math.floor(Math.random() * frases.length);
        setTimeout(() => 
          this.setState(({
            listaFrases: frases[numeroAleatorio],
            loading: false,
            showAlert: true,
          }))
        , 1000);
    }

    render(){
        return(
            <Container className="container" fluid>
                    <h2>Biscoito da sorte</h2>
                    <Image
                       roundedCircle src={biscoito}
                       alt="biscoito-sorte" className="img"
                    />
                    <Button
                      variant="outline-warning"
                      onClick={this.seachFrases}
                     >
                         Buscar Frase
                    </Button>
                    <br />
                    {
                      this.state.loading ?
                      <Spinner animation="border" variant="warning" /> :
                      <Alert variant="warning" show={this.state.showAlert} >
                        <h3 className="textoFrase">{this.state.listaFrases}</h3>
                      </Alert>
                    }
            </Container>

        )
    }
}

export default BiscoitoDaSorte;