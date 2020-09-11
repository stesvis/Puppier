import { Button, Form, FormControl, FormGroup } from "react-bootstrap";

import { Link } from "react-router-dom";
import React from "react";

export default function ListingContactBox(props) {
  const { listing } = props;

  const handleSubmit = (event) => {
    event.preventDefault(); // avoids page reload
    console.log(event.target);

    // validate

    // call the POST api
  };

  return (
    <div className="agent-widget">
      <div className="agent-title">
        <div className="agent-photo">
          <img src={listing.author.avatarImage} alt="" />
        </div>
        <div className="agent-details">
          <h4>
            <Link to="author-detail.html">{listing.author.name}</Link>
          </h4>
          <span>
            <i className="ti-view-grid"></i>202 Listings
          </span>
        </div>
        <div className="clearfix"></div>
      </div>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl type="text" name="name" placeholder="Your Name" />
        </FormGroup>
        <FormGroup>
          <FormControl type="text" name="email" placeholder="Your Email" />
        </FormGroup>
        <FormGroup>
          <FormControl
            as="textarea"
            name="message"
            placeholder="Send Message to author..."
          ></FormControl>
        </FormGroup>
        <Button type="submit" className="btn btn-theme full-width">
          Send Message
        </Button>
      </Form>
    </div>
  );
}
