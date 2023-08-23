import { FC, Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import SuccessModal from "./SuccessModal";

const DomainRegistrationModal: FC<{ show?: boolean; close?: any }> = ({
  show,
  close,
}) => {
  const [successModal, setSuccessModal] = useState(false);
  return (
    <Fragment>
      <SuccessModal show={successModal} close={setSuccessModal} />
      <Modal
        className="modal fade"
        id="RegisterDomain"
        show={show}
        onHide={() => close(false)}
      >
        <div className="modal-content border-0">
          <div className="modal-header">
            <h5 className="modal-title">Register Domain</h5>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => close(false)}
            ></button>
          </div>
          <div className="modal-body">
            <div className="col-12">
              <label className="form-label">Domain Name</label>
              <input className="form-control"></input>
            </div>

            <div className="col-12 mt-4">
              <label className="form-label">Duration (Year)</label>
              <input className="form-control" type="number" defaultValue={"1"}></input>
            </div>

            <div className="col-12 mt-4">
              <label className="form-label">KYC Document</label>
              <input className="form-control" type="file"></input>
            </div>

            <div className="text-right mt-4" style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                style={{
                  color: "black",
                  marginRight: 16,
                }}
                onClick={() => {
                  close(false);
                }}
              >
                Cancel
              </button>

              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#buySuccessleModal"
                onClick={() => {
                  setSuccessModal(true);
                  close(false);
                }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default DomainRegistrationModal;
