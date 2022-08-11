import React from "react";
import "./index.css";
import Modal from "../Modal";

class ContactCard extends React.Component {
  render() {
    const {  fname, familyName, message } = this.props.contact;
    const { showModal, OpenModal, CloseModal } =
      this.props;
    return (
      <>
        <div className="card">
          <div className="cardInfo">
            <div className="card-titles">
              <div className="card__icons">
                <div className="icon__link" onClick={() => OpenModal()}>
                </div>
              </div>
              <p className="card__title">
                {fname} {familyName}
              </p>
            </div>
            <h4 className="card__title">{message} </h4>
            {showModal && (
              <Modal
                onClose={() => CloseModal()}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}
export default ContactCard;