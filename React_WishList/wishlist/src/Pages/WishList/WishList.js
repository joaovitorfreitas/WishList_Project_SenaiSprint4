import {Component} from 'react';
import logo from '../../Image/Lâmpada_Verde_Clara_Infantil_Logotipo.png'
import '../WishList/App.css'

class WishList extends Component{
    constructor(props){
        super(props);
        this.state = {

            listaDesejo : [],
            descricaoUser : '',
            idUser : 0 
        }
    }

    buscarDesejo = () => { 

        fetch('http://localhost:5000/api/desejos')

        .then(reposta => reposta.json())  

        .then(dados => this.setState({listaDesejo : dados}))
        
        .catch(error => console.log(error))
    }


    Limpar = () => {
        this.setState({
            descricaoUser : '',
            idUser : 0 
        })
    }

    Cadastrar = (event) => { 
        event.preventDefault()
        
        let publi = {
            descricao : this.state.descricaoUser,
            idUsuario : this.state.idUser

        }
        
        console.log(this.state.idUser)
        console.log(this.state.descricaoUser)
        fetch('http://localhost:5000/api/desejos',{
            method : 'POST',
            body : JSON.stringify(publi),
            headers : {'Content-Type' : 'application/json'}            
        })
        .then(resultado => {
            if(resultado.status === 201){
                console.log("Cadastrado")
            }
        })

        .catch(error => console.log(error))

        .then(this.buscarDesejo)

        .then(this.Limpar)
    }

    atualizaDescricao = async(event) => {
        await this.setState({descricaoUser : event.target.value})

        console.log("Atualizado")
    }

    atualizarId = async(evento) => {
        await this.setState({idUser : evento.target.value})

        console.log("Id Atualizado")
    }

    componentDidMount(){
        this.buscarDesejo();

    }

    componentWillUnmount(){
        
    }
    render(){
        return(
            <body>
                <section>
                    <div className="menu">
                        <img src={logo} alt="" className="img1"></img>
                    </div>
                </section>
                <section>
                    <div className="Cadastro">
                        <form onSubmit={this.Cadastrar}>
                        <input placeholder= "Descrição" value={this.state.descricaoUser} onChange={this.atualizaDescricao} className="descricao"></input>
                        <input placeholder= "IdUsuario" value={this.state.idUser} onChange={this.atualizarId} className="descricao2"></input>
                        <button type="submit">Cadastrar</button>
                        </form>
                    </div>
                </section>
                <section>                 
                {
                     this.state.listaDesejo.map((desejo) => {
                     return(
                                <div key={desejo.idDesejo} className="desejo">
                                    <h4>Nome </h4>
                                    <p>{desejo.idUsuarioNavigation.nome}</p>

                                    <h3 style={{marginTop: 15}}>Descrição</h3>
                                    <p>{desejo.descricao}</p>
                              
                                </div>          
                            )
                     })
                }
                </section>
                <footer className="footer">
                    <img src={logo} className="img1" alt=""></img>
                </footer>
            </body>
        )
    }
}

export default WishList;