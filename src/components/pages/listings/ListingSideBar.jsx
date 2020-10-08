import { Fragment } from "react";
import IconBox from "../../common/IconBox";
import ListingContactBox from "./ListingContactBox";
import ListingInfoBox from "./ListingInfoBox";
import ListingTagsBox from "./ListingTagsBox";
import React from "react";
import { useEffect } from "react";

// https://developers.google.com/places/web-service/autocomplete?utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_433476780172-ADGP_Hybrid+%7C+AW+SEM+%7C+BKWS+~+Google+Maps+Autocomplete-KWID_43700042618799102-kwd-470220502530-userloc_9001289&utm_term=KW_google%20places%20autocomplete-ST_google+places+autocomplete&gclid=CjwKCAjwzIH7BRAbEiwAoDxxTuduRBJgcNgh6JMzCunw_TeiGmwSS9sB0ftR2oOUBjuh21yvQvpa9RoCmegQAvD_BwE
export default function ListingSideBar(props) {
  const { listing } = props;

  useEffect(() => {
    // console.log(searchContext);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      <div className="verified-list mb-4">
        <i className="ti-check"></i>Verified Listing
      </div>

      <div className="page-sidebar">
        {/* Lister Details */}
        <ListingContactBox listing={listing} />
        {/* Listing Info */}
        <ListingInfoBox
          listing={listing}
          title="Listing Info"
          icon="ti-direction"
        >
          <IconBox icon="lni-map-marker" text={listing.address} />
          <IconBox icon="lni-phone-handset" text={listing.user.phone} />
          <IconBox icon="lni-envelope" text={listing.user.email} />
        </ListingInfoBox>
        {/* Listing Stats */}
        <ListingInfoBox listing={listing} title="Stats" icon="ti-bar-chart">
          <IconBox icon="ti-eye" text={listing.views_count + " views"} />
          <IconBox
            icon="ti-comment-alt"
            text={listing.comments.length + " comments"}
          />
        </ListingInfoBox>
        {/* Tags */}
        <ListingTagsBox tags={listing.tags} />
      </div>
    </Fragment>
  );
}
