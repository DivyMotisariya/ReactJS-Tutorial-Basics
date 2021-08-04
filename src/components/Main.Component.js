import React, { Component } from "react";
import Menu from "./Menu.Component";
import SelectedDish from "./SelectedDish.Component";
import { DISHES } from "../shared/dishes.shared";
import Header from "./Header.Component";
import Footer from "./Footer.Component";

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dishes: DISHES,
			selectedDish: null,
		};
	}

	onDishSelect(dishId) {
		this.setState({
			selectedDish: dishId,
		});
	}

	render() {
		return (
			<div>
				<Header />
				<Menu
					dishes={this.state.dishes}
					onClick={(dishId) => this.onDishSelect(dishId)}
				/>
				<SelectedDish
					selectedDish={
						this.state.dishes.filter(
							(dish) => dish.id === this.state.selectedDish
						)[0]
					}
				/>
        <Footer />
			</div>
		);
	}
}

export default Main;
