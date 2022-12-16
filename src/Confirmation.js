import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toast } from "react-bootstrap";

function Confirmation({ toggle }) {
  return (
    <Toast onClose={() => toggle(false)} bg="primary">
      <Toast.Header>
        <strong className="mr-auto"  >
          Your selected item is added to your shopping cart!
        </strong>
      </Toast.Header>
      <Toast.Body style={{color:"white"}}>Please continue with your shopping.</Toast.Body>
    </Toast>
  );
}

export default Confirmation;
