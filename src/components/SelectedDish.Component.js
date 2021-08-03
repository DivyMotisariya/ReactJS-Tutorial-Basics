import React, { Component } from "react";
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardText,
	CardBody,
	CardTitle,
	Media,
} from "reactstrap";

class SelectedDish extends Component {
	constructor(props) {
		super(props);
	}

	renderComments(comments) {
		return comments.map((comment) => {
			return (
				<div key={comment.id}>
					<Media>
						<Media body>
							<p>{comment.comment}</p>
							<p>
								-- {comment.author} , {comment.date}
							</p>
						</Media>
					</Media>
				</div>
			);
		});
	}

	render() {
		const dish = this.props.selectedDish;
		if (dish) {
			return (
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<Card>
							<CardImg width="100%" src={dish.image} alt={dish.name} />
							<CardBody>
								<CardTitle>{dish.name}</CardTitle>
								<CardText>{dish.description}</CardText>
							</CardBody>
						</Card>
					</div>
					<Media className="col-12 col-md-5 m-1">
						<Media heading>Comments</Media>
						{this.renderComments(dish.comments)}
					</Media>
				</div>
			);
		} else return <div></div>;
	}
}

export default SelectedDish;
