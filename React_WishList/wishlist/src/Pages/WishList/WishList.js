import {Component} from 'react';

class WishList extends Component{
    constructor(props){
        super(props);
        this.state = {
            //Nome do estado e valor inicial          
            listaDesejo : [],
            descricaoUser : '',
            idUser : 0 
        }
    }

    buscarDesejo = () => { 

        //FAZ A CHAMADA DA API
        fetch('http://localhost:5000/api/desejos')

        //DEFINE O TIPO DE DADO DO RETORNO DA REQUISIÇÃO EM JSON
        .then(reposta => reposta.json())  

        //ATUALIZA A LISTADESEJO COM OS DADOS DA API
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
            <div>
                <main>
                    <section>
                        <h2>WishList</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID Desejo</th>
                                    <th>ID Usuario</th>
                                    <th>Descrição</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.listaDesejo.map((desejo) => {
                                        return(
                                            <tr key={desejo.idDesejo}>
                                                <td>{desejo.idDesejo}</td>
                                                <td>{desejo.idUsuario}</td>
                                                <td>{desejo.descricao}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <h2>Cadastrar</h2>
                        <form onSubmit={this.Cadastrar}>
                            <div>
                                <input
                                placeholder = "Descrição"
                                value = {this.state.descricaoUser}
                                onChange = {this.atualizaDescricao}
                                ></input>
                                <input className="UserId"
                                placeholder = "Usuario" 
                                value = {this.state.idUser}
                                onChange = {this.atualizarId}
                                type="number"></input>
                                <button type="submit">Cadastrar</button>
                            </div>
                        </form>
                    </section>
                </main>
            </div>
        )
    }
}

export default WishList;