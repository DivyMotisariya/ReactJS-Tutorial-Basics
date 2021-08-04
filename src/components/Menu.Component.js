import React, { Component } from "react";
import {
	Card,
	CardImg,
	CardImgOverlay,
	// CardText,
	// CardBody,
	CardTitle,
} from "reactstrap";

/* class Menu extends Component {

	renderDish(dish) {
		if (dish) {
			return (
				<Card>
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			);
		} else {
			return <div></div>;
		}
	}

	render() {
		const menu = this.props.dishes.map((dish) => {
			return (
				<div key={dish.id} className="col-12 col-md-5 m-1">
					<Card onClick={() => this.props.onClick(dish.id)}>
						<CardImg width="100%" src={dish.image} alt={dish.name} />
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
			);
		});

		return (
			<div className="container">
				<div className="row">{menu}</div>
			</div>
		);
	}
} */

function RenderDish({ dish, onClick }) {
	return (
		<Card onClick={() => onClick(dish.id)}>
			<CardImg width="100%" src={dish.image} alt={dish.name} />
			<CardImgOverlay>
				<CardTitle>{dish.name}</CardTitle>
			</CardImgOverlay>
		</Card>
	);
}

const Menu = (props) => {
	const menu = props.dishes.map((dish) => {
		return (
			<div key={dish.id} className="col-12 col-md-5 m-1">
				<RenderDish dish={dish} onClick={props.onClick} />
			</div>
		);
	});
	return (
		<div className="container">
			<div className="row">{menu}</div>
		</div>
	);
};

export default Menu;
