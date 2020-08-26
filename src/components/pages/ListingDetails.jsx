import React, { Fragment, useContext, useEffect, useState } from "react";

import { Listing } from "../../models/Listing";
import ListingMainDetails from "../listings/ListingMainDetails";
import LoadingContext from "../../context/loadingContext";
import { getListing } from "../../services/dataService";

export default function ListingDetails(props) {
  const loadingContext = useContext(LoadingContext);

  const { id } = props.match.params;
  // const { listing } = props.location.state;
  const [listing, setListing] = useState(new Listing());

  useEffect(() => {
    loadingContext.onStartedLoading();
    // Fetch single listing by id
    setTimeout(function () {
      const listing = getListing(parseInt(id));
      setListing(listing);
      loadingContext.onFinishedLoading();
    }, 2000); //wait 2 seconds
  }, [id]);

  useEffect(() => {
    console.log("loadingContext changed");
  }, [loadingContext]);

  return (
    <Fragment>
      <section className="gray">
        <div className="container">
          <div className="row">
            <ListingMainDetails listing={listing} />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
