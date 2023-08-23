import { FC, Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import SuccessModal from "./SuccessModal";

const ConfirmationModal: FC<{ show?: boolean; close?: any }> = ({
  show,
  close,
}) => {
  const [successModal, setSuccessModal] = useState(false);
  return (
    <Fragment>
      <SuccessModal show={successModal} close={setSuccessModal} />
      <Modal
        className="modal fade"
        id="BuyModal"
        show={show}
        onHide={() => close(false)}
      >
        <div className="modal-content border-0">
          <div className="modal-header">
            <h5 className="modal-title">Confirmation</h5>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => close(false)}
            ></button>
          </div>
          <div className="modal-body">
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <span className="text-primary">Buyer Email</span>
                    </td>
                    <td>
                      <span className="text-primary">buyer@example.com</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="text-primary">Seller Email</span>
                    </td>
                    <td>
                      <span className="text-primary">seller@example.com</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Exchange Rate</td>
                    <td>0.00212455 BTC</td>
                  </tr>
                  <tr>
                    <td>Fee</td>
                    <td>$28.00 USD</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>$854.00 USD</td>
                  </tr>
                  <tr>
                    <td>Vat</td>
                    <td>
                      <div className="text-danger">$25.00 USD</div>
                    </td>
                  </tr>
                  <tr>
                    <td>Sub Total</td>
                    <td>$1232.00 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-right">
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
                Confirm
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default ConfirmationModal;
