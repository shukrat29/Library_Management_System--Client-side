import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/customInput/CustomInput";
import { signUpInputs } from "../../assets/customInputs/userSignUpInputs";

const SignUpPage = () => {
  return (
    <div className="d-flex justify-content-center pt-5">
      <Form style={{ width: "550px" }} className="card p-5 shadow-lg">
        <h3>Welcome to library</h3>
        <hr />
        {signUpInputs.map((input) => (
          <CustomInput key={input.name} {...input} />
        ))}

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUpPage;
