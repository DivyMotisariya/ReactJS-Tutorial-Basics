import React, { Component } from "react";

import Home from "./Home.Component";
import Header from "./Header.Component";
import Footer from "./Footer.Component";
import Menu from "./Menu.Component";

import SelectedDish from "./SelectedDish.Component";

import { DISHES } from "../shared/dishes.shared";

import { Switch, Route, Redirect } from "react-router-dom";

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
		const HomePage = () => {
			return <Home />;
		};

		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route
						exact
						path="/menu"
						component={() => (
							<Menu
								dishes={this.state.dishes}
								onClick={(dishId) => this.onDishSelect(dishId)}
							/>
						)}
					/>
					<Redirect to="/home" />
				</Switch>
				{/* <Menu
					dishes={this.state.dishes}
					onClick={(dishId) => this.onDishSelect(dishId)}
				/>
				<SelectedDish
					selectedDish={
						this.state.dishes.filter(
							(dish) => dish.id === this.state.selectedDish
						)[0]
					}
				/> */}
				<Footer />
			</div>
		);
	}
}

export default Main;
