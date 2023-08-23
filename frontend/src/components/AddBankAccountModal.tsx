import { FC, Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import SuccessModal from "./SuccessModal";

const AddBankAccountModal: FC<{ show?: boolean; close?: any }> = ({
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
        text="Congratulation. Your bank account added"
      />
      <Modal
        className="modal fade"
        id="BuyModal"
        show={show}
        onHide={() => close(false)}
      >
        <div className="modal-content border-0">
          <div className="modal-header">
            <h5 className="modal-title">Add bank account</h5>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => close(false)}
            ></button>
          </div>
          <div className="modal-body">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="identity-upload"
            >
              <div className="row g-3">
                <div className="col-xl-12">
                  <label className="form-label">Routing number </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="25487"
                  />
                </div>
                <div className="col-xl-12">
                  <label className="form-label">Account number </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="36475"
                  />
                </div>
                <div className="col-xl-12">
                  <label className="form-label">Fulll name </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Jannatul Maowa"
                  />
                </div>
                <div className="col-xl-12">
                  <img src="/images/routing.png" alt="" className="img-fluid" />
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

export default AddBankAccountModal;
