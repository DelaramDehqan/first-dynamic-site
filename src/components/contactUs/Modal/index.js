import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


function Modal({ onClose, DeleteCard, id }) {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modalBox">
        <button className="closeModal"  onClick={onClose} />
        <p>آیا تمایل به مشاوره مکتب شریف دارید؟</p>
        <div className="btnContainer">
          <button className="ModalBtn noBtn" onClick={onClose}>
            خیر
          </button>
          <button className="ModalBtn yesBtn" onClick={() => DeleteCard(id)}>
            بله
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;