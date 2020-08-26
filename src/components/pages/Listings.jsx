import React, { useContext, useEffect } from "react";

import LoadingContext from "../../context/loadingContext";
import PageTitle from "../PageTitle";

export default function Listings(props) {
  // static contextType = LoadingContext;
  const loadingContext = useContext(LoadingContext);
  console.log("isLoading", loadingContext);

  return (
    <LoadingContext.Consumer>
      {(LoadingContext) => (
        <PageTitle title="Explore" subtitle="Find your new best friend" />
      )}
    </LoadingContext.Consumer>
  );
}
