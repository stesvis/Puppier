import { Link } from "react-router-dom";
import React from "react";

export default function ListingBanner(props) {
  const { listing } = props;

  return (
    <section
      className="page-title-banner"
      style={{ backgroundImage: `url(${listing.image})` }}
    >
      <div className="container">
        <div className="row m-0 align-items-end detail-swap">
          <div className="tr-list-wrap">
            <div className="tr-list-detail">
              <div className="tr-list-thumb">
                <img
                  src={listing.author.avatarImage}
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="tr-list-info">
                <h4 className="veryfied-list">{listing.title}</h4>
                <p>{listing.location}</p>
              </div>
            </div>
            <div className="listing-detail_right">
              <div className="listing-detail-item">
                <Link to="#" className="btn btn-list">
                  <i className="ti-heart"></i>Favorite{" "}
                </Link>
              </div>
              <div className="listing-detail-item">
                <div className="share-opt-wrap">
                  <button
                    type="button"
                    className="btn btn-list"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="ti-share"></i>Share
                  </button>
                  <div className="dropdown-menu animated flipInX">
                    <Link to="#" className="cl-facebook">
                      <i className="lni-facebook"></i>
                    </Link>
                    <Link to="#" className="cl-twitter">
                      <i className="lni-twitter"></i>
                    </Link>
                    <Link to="#" className="cl-gplus">
                      <i className="lni-google-plus"></i>
                    </Link>
                    <Link to="#" className="cl-instagram">
                      <i className="lni-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="listing-detail-item">
                <Link to="javascript:void(0)" className="btn btn-list snd-msg">
                  <i className="ti-write"></i>Message{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
