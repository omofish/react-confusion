import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);

    this.state;
  }

  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' }

    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            const date = new Date(comment.date)
            const commentDate = date.toLocaleDateString("en-US", dateOptions);
            return (
              <div key={comment.id}>
                <li className="mb-3">{comment.comment}</li>

                <li className="mb-3">--{comment.author} , {commentDate}</li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  render() {
    if (this.props.dish != null)
      return (
        <div className="row text-left">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      );
    else return <div></div>;
  }
}

export default Dishdetail;
