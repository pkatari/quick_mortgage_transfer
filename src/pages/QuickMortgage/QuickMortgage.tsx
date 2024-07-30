import {useState} from "react";
import "./QuickMortgage.scss";

export const QuickMortgage = () => {
  const [agree, setAgree] = useState(false);
  const [submitMessage,setSubmitMessage] = useState("");
  const [isButtonClicked,setIsButtonClicked] = useState<boolean>(false);

  const checkboxHandler = () => {
    setAgree(!agree);

  }

  const btnHandler = () => {
    setIsButtonClicked(true);
    setSubmitMessage("Congratulations,Your Quick Mortgage Transfer application has been proccessed successfully.");
  };

  return (
    <div className="quickMortgage">
      <div className="transferContainer">
            <h2 style={{textAlign:"center",color:"#5a287d",marginBottom:"20px"}}>Mortgage Transfer Agreement</h2>
            <div style={{marginTop:"10px"}}>This Mortgage Transfer Agreement ("Agreement") is made on <b>31st July,2024</b> by and between:</div>
            <div style={{marginTop:"10px"}}><b>Mr Jane Diane,</b> of<b> 49 Featherstone Street,London,EC1Y 8SY </b>("Transferor"), and </div>
            <div style={{marginTop:"10px"}}><b>Mr Thomas Oliver</b>, of <b>14 CLIFTON DOWN ROAD,BRISTOL,BS8 4BF</b> ("Transferee").</div>
            <h3 style={{color:"#5a287d",marginTop:"20px",marginBottom:"10px"}}>Recitals</h3>
            <ul>
            <li style={{marginLeft:"30px",marginBottom:"10px"}}>WHEREAS, the Transferor is the holder of a mortgage dated <b>21st June,2012</b>, in the principal amount of <b>£ 1,800,00</b>, secured by the property located at  <b>One, Hyde Park, 100 Knightsbridge, London SW1X 7LJ, United Kingdom</b> ("Property").</li>
            <li style={{marginLeft:"30px",marginBottom:"10px"}}>WHEREAS, the Transferor wishes to transfer, and the Transferee wishes to assume, all rights, title, and interest in and to the mortgage.
           </li></ul>
           <h3 style={{color:"#5a287d",marginTop:"20px",marginBottom:"10px"}}>Agreement</h3>
            <ol>
            <li style={{marginLeft:"30px",marginBottom:"10px"}}><b style={{color:"#5a287d"}}>Transfer of Mortgage:</b> The Transferor hereby transfers to the Transferee all rights, title, and interest in and to the mortgage dated <b>31st July,2024.</b>, including all rights to receive payment of principal and interest from <b>Mr Jane Diane</b>.</li>

            <li style={{marginLeft:"30px",marginBottom:"10px"}}><b style={{color:"#5a287d"}}>Effective Date:</b> The transfer shall be effective as of <b>31st July,2024.</b></li>

            <li style={{marginLeft:"30px",marginBottom:"10px"}}><b style={{color:"#5a287d"}}>Representations and Warranties:</b>
            <ul>
            <li style={{marginLeft:"30px",marginBottom:"10px",marginTop:"10px"}}>The Transferor represents and warrants that they have the authority to transfer the mortgage and that the mortgage is valid and enforceable.</li>
            <li style={{marginLeft:"30px",marginBottom:"10px"}}>The Transferee represents and warrants that they have the authority to assume the mortgage and agree to be bound by its terms.</li></ul></li>
            <li style={{marginLeft:"30px",marginBottom:"10px"}}><b style={{color:"#5a287d"}}>Indemnity:</b> The Transferee agrees to indemnify and hold harmless the Transferor from any liabilities or obligations arising from the mortgage after the Effective Date.</li>
           <li style={{marginLeft:"30px",marginBottom:"10px"}}><b style={{color:"#5a287d"}}>Governing Law:</b> This Agreement shall be governed by and construed in accordance with the laws of England and Wales.</li></ol>
        </div>   
        <div className="container">
            <div>
              <input type="checkbox" id="agree" onChange={checkboxHandler} />
              <label htmlFor="agree"> I agree to <b>terms and conditions.</b></label>
            </div>
            <button disabled={!agree || isButtonClicked} className="btn" onClick={btnHandler}>
              Submit
            </button>
           { isButtonClicked && <div style={{marginTop:"10px",color:"red",fontSize:"20px"}}>{submitMessage}</div> }
          </div>
      </div>

  );
};
