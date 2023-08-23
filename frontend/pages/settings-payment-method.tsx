import { NextPage } from "next";
import { useState } from "react";
import AddBankAccountModal from "../src/components/AddBankAccountModal";
import AddBankCardModal from "../src/components/AddBankCardModal";
import SettingsLayouts from "../src/layouts/dashboard/SettingsLayouts";

const SettingsPaymentMethod: NextPage = () => {
  const [bankModal, setBankModal] = useState(false);
  const [card, setCard] = useState(false);
  return (
    <SettingsLayouts name="Payment Method">
      <AddBankAccountModal show={bankModal} close={setBankModal} />
      <AddBankCardModal show={card} close={setCard} />
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <div className="card mb-0">
              <div className="card-header px-0">
                <h4 className="card-title">Add a payment method</h4>
              </div>
              <div className="card-body px-0">
                <div className="verify-content">
                  <div className="d-flex align-items-center">
                    <span className="me-3 icon-circle bg-primary text-white">
                      <i className="icofont-ui-touch-phone"></i>
                    </span>
                    <div className="primary-number">
                      <p className="mb-0">Bank of America</p>
                      <small>Bank **************5421</small>
                      <br />
                      <span className="text-success">Verified</span>
                    </div>
                  </div>
                  <button className="btn btn-outline-primary">Manage</button>
                </div>
                <hr className="dropdown-divider my-4" />
                <div className="verify-content">
                  <div className="d-flex align-items-center">
                    <span className="me-3 icon-circle bg-primary text-white">
                      <i className="icofont-email"></i>
                    </span>
                    <div className="primary-number">
                      <p className="mb-0">Master Card</p>
                      <small>Credit Card *********5478</small>
                      <br />
                      <span className="text-success">Verified</span>
                    </div>
                  </div>
                  <button className="btn btn-outline-primary">Manage</button>
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    className="btn btn-primary me-3"
                    data-toggle="modal"
                    data-target="#addBank"
                    onClick={() => setBankModal(true)}
                  >
                    Add New Bank
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#addCard"
                    onClick={() => setCard(true)}
                  >
                    Add New Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SettingsLayouts>
  );
};

export default SettingsPaymentMethod;
