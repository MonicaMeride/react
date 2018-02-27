import React from 'react'; // normalement j'ai pas besoin d'importer Component vu que j'importe React

class ApiItemLister extends React.Component {
    constructor() {
        super();
        this.state = {
            seriesName: '',
            result: []
        };
    }

    componentDidMount() {

    }

    // la en fait on feinte, en utilisant une fct flechee on conserve le bon 'this', celui de la classe :)
    handleChange = (event) => {
        this.setState({
            seriesName: event.target.value
        });
        let url= 'http://212.47.242.80/loosers5/php/app/rest.php?name='+this.state.seriesName;
        fetch(url,
            {
            })
            .then(response => response.json())
            .then(res => {
                this.setState({result: res});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="listeseriestyle">
                <h1>Trouve ta série, connard.</h1>
                <iframe src="https://giphy.com/embed/muGYyrWwxOOMo" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <input type="text" name="title" placeholder="Voici le champs de recherche XD lol" value={this.state.seriesName}
                       onChange={this.handleChange}/>
                <ul>
                    {this.state.seriesName.length && this.state.result.length ?
                        this.state.result.map(item => (
                            <li>{item.seriesname} / {item.translation}
                                <img src={'https://www.thetvdb.com/banners/_cache/'+item.banner}/>
                                <ol>
                                    { item.episodes.map(episode => (
                                    <li>{episode}</li>

                                    ))}
                                </ol>
                            </li>

                            )
                        )
                        :<li>...</li>
                    }


                </ul>

            </div>
        )
    }
}

export default ApiItemLister;