import React from 'react';
import AjouterRecette from './AjouterRecette';
class Admin extends React.Component{
		convertirPseudo= (pseudo) => {
		return /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
	};
	render(){

		return(
			<div className="cards">
				<AjouterRecette ajouterRecette={this.props.ajouterRecette} />
				<footer>
					<button onClick={this.props.chargerExemple}>Remplir</button>
				</footer>
			</div>
		)
	}

	static propTypes  = {
		chargerExemple: React.PropTypes.func.isRequired,
		ajouterRecette: React.PropTypes.func.isRequired
	}
}

export default Admin;