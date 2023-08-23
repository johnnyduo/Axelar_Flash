import { FC, Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import SuccessModal from "./SuccessModal";

const AddBankCardModal: FC<{ show?: boolean; close?: any }> = ({
  show,
  close,
}) => {
  const [successModal, setSuccessModal] = useState(false);
  return (
    <Fragment>
      <SuccessModal
        show={successModal}
        close={setSuccessModal}
        footerOff
        text="Congratulation. Your Card added"
      />
      <Modal
        className="modal fade"
        id="BuyModal"
        show={show}
        onHide={() => close(false)}
      >
        <div className="modal-content border-0">
          <div className="modal-header">
            <h5 className="modal-title">Add card</h5>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => close(false)}
            ></button>
          </div>
          <div className="modal-body">
            <form className="identity-upload">
              <div className="row g-3">
                <div className="col-xl-12">
                  <label className="form-label">Name on card </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Jannatul Maowa"
                  />
                </div>
                <div className="col-xl-12">
                  <label className="form-label">Card number </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="5658 4258 6358 4756"
                  />
                </div>
                <div className="col-xl-4">
                  <label className="form-label">Expiration </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="10/22"
                  />
                </div>
                <div className="col-xl-4">
                  <label className="form-label">CVC </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="125"
                  />
                </div>
                <div className="col-xl-4">
                  <label className="form-label">Postal code </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="2368"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#successBankAccount"
              onClick={() => {
                close(false);
                setSuccessModal(true);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default AddBankCardModal;
