import { FC, useState } from "react";
import { useSigner } from "../hooks/useSigner";
import { claimInsurance, invest, mintNft, signMessage } from "../utils/nft";
import ConfirmationModal from "./ConfirmationModal";
import SuccessModal from "./SuccessModal";

const BuySellForm: FC<{ name?: string; color?: string }> = ({
  name,
  color,
}) => {
  const signer = useSigner();
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState("");
  const [txHash, setTxHash] = useState("");

  return (
    <div className="card">
      {/* <ConfirmationModal show={show} close={setShow} /> */}
      <SuccessModal show={show} close={setShow} txHash={txHash} />
      
      <div className="card-header">
        <h4 className="card-title">{name}</h4>
      </div>
      <div className="card-body">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // setShow(true);
          }}
          className="currency_validate trade-form row g-3"
        >
          {name == "Allow" ? (
            <>
              <div className="col-12">
                <label className="form-label">Claim</label>
                <div className="input-group">
                  <select className="form-control" name="method">
                    <option value="choose-one">Please Choose One</option>
                    <option value="1">#1 Eye Injury</option>
                    <option value="2">#2 Eye Sensitive to light</option>
                    <option value="3">#3 Silicone Quality</option>
                    <option value="4">#4 Teeth Scaling</option>
                    <option value="5">#5 Pet Accident</option>
                  </select>
                  {/* <input
                    type="text"
                    name="currency_amount"
                    className="form-control"
                    placeholder="0.0214 BTC"
                  /> */}
                </div>
              </div>

              <div className="col-12">
                <label className="form-label">Entity</label>
                <div className="input-group">
                  <select className="form-control" name="method">
                    <option value="choose-one">Please Choose One</option>
                    <option value="veryinsure">Very.Insure Broker</option>
                    <option value="bangpakok">Bangpakok Hospital</option>
                    <option value="siriraj">Siriraj Hospital</option>
                  </select>
                  {/* <input
                    type="text"
                    name="currency_amount"
                    className="form-control"
                    placeholder="0.0214 BTC"
                  /> */}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-12">
                <label className="form-label">Insurance</label>
                <div className="input-group">
                  <select className="form-control" name="method">
                    <option value="choose-one">Please Choose One</option>
                    <option value="eye">Health Insurance</option>
                    <option value="beauty">Fire Insurance</option>
                    <option value="dentist">Car Insurance</option>
                    <option value="dentist">Travel Insurance</option>
                    <option value="dentist">Pet Insurance</option>

                  </select>
                  {/* <input
                    type="text"
                    name="currency_amount"
                    className="form-control"
                    placeholder="0.0214 BTC"
                  /> */}
                </div>
              </div>

              {name != "Buy" &&
                <div className="col-12">
                  <label className="form-label">Amount</label>
                  <div className="input-group">
                    {/* <select className="form-control" name="method">
                      <option value="bank">BTC</option>
                      <option value="master">ETH</option>
                    </select> */}
                    <input
                      type="text"
                      name="currency_amount"
                      className="form-control"
                      placeholder="1000"
                      value={amount}
                      onChange={e => setAmount(e.target.value)}
                    />
                  </div>
                </div>
              }

              {name == "Claim" &&
                <div className="col-12">
                  <label className="form-label">Claim Document</label>
                  <div className="input-group">
                    {/* <select className="form-control" name="method">
                      <option value="bank">BTC</option>
                      <option value="master">ETH</option>
                    </select> */}
                    <input
                      type="file"
                      name="claim_document"
                      className="form-control"
                    />
                  </div>
                </div>
              }
            </>
          )}

          {/* <p className="mb-0">
            1 USD ~ 0.000088 BTC{" "}
            <a href="#">
              Expected rate <br />
              No extra fees
            </a>
          </p> */}

          <input
            type="submit"
            className={`btn btn-${color ? color : "primary"} btn-block`}
            value={`${name} Now`}
            onClick={async () => {
              let response;

              setTxHash("")

              if (name == "Buy") {
                response = await mintNft(signer, "0.1");
              } else if (name == "Claim") {
                response = await claimInsurance(signer, (parseFloat(amount) / 10000).toFixed(4));
              } else if (name == "Invest") {
                response = await invest(signer, (parseFloat(amount) / 10000).toFixed(4));
              } else {
                await signMessage(signer, name || "Action");
              }

              console.log(response)

              if (response) {
                setTxHash(response.hash)
              }
              
              setShow(true)
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default BuySellForm;
