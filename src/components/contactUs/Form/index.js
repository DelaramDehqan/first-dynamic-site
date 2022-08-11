import React from "react";
import "./index.css";

let defaultError = true;

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      errorName: "",
      errorFamilyName: "",
      errorPhone: "",
      errorEmail: "",
      errorMessage: "",
      contactInfo: [],
    };
  }

  componentDidMount() {
    defaultError = false;
  }

  validateName = () => {
    const { fname } = this.props;
    if (fname === "") this.setState({ errorName: ".نام اجباری است" });
    else if (/\d/.test(fname)) {
      this.setState({ errorName: ".نام نباید شامل اعداد باشد" });
    } else if (fname.length <= 2) {
      this.setState({
        errorName: ".نام باید حداقل 3 کاراکتر باشد",
      });
    } else this.setState({ errorName: "" });
  };

  validateFamilyName = () => {
    const { familyName } = this.props;
    if (familyName === "")
      this.setState({ errorFamilyName: ".نام خانوادگی اجباری است" });
    else if (/\d/.test(familyName)) {
      this.setState({ errorFamilyName: "نام نباید شامل اعداد یاشد." });
    } else if (familyName.length <= 2) {
      this.setState({
        errorFamilyName: ".نام خانوادگی باید حداقل 3 کاراکتر باشد",
      });
    } else this.setState({ errorFamilyName: "" });
  };

  validatePhone = () => {
    const { phone } = this.props;
    if (phone === "") this.setState({ errorPhone: "شماره تماس اجباری است" });
    else if (!/\d/.test(phone)) {
      this.setState({ errorPhone: "شماره تماس نباید شامل حروف باشد" });
    } else if (phone.length < 8) {
      this.setState({
        errorPhone: "شماره تماس باید حداقل 8 کاراکتر باشد",
      });
    } else this.setState({ errorPhone: "" });
  };

  validateEmail = () => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { email } = this.props;
    if (email === "") {
      this.setState({ errorEmail: ".ایمیل اجباری است" });
    } else if (!email.match(validRegex)) {
      this.setState({
        errorEmail: ".لطفا ایمیل را به صورت صحیح وارد کنید",
      });
    } else {
      this.setState({ errorEmail: "" });
    }
  };

  validateDetail = () => {
    const { detail } = this.props;
    if (detail === "") this.setState({ errorDetail: "نوشتــن  پیغام اجباری است" });
    else if (/\d/.test(detail)) {
      this.setState({ errorDetail: ".پیغام نباید شامل اعداد باشد" });
    } else if (detail.length <= 20) {
      this.setState({
        errorDetail: ".پیغام باید حداقل 20 کاراکتر باشد",
      });
    } else this.setState({ errorDetail: "" });
  };
  render() {
    const { fname, familyName, phone, email, detail, formBtn } = this.props;

    const { errorName, errorFamilyName, errorPhone, errorEmail, errorDetail } =
      this.state;
    const isValid =
      errorName === "" &&
      errorFamilyName === "" &&
      errorPhone === "" &&
      errorEmail === "" &&
      errorDetail !== "";
    return (
      <div className="bodyform">
      <form  className='conUsBody' onSubmit={(e) => this.props.addContact(e)}>
        <h3>ارتــــباط با ما</h3>
        <input
          value={fname}
          onChange={(e) => this.props.handelChange(e, this.validateName)}
          type="text"
          name="fname"
          placeholder="...نام"
        ></input>
        <div className={this.state.errorName ? "error-message" : "empty"}>
          {this.state.errorName}
        </div>
        <input
          value={familyName}
          onChange={(e) => this.props.handelChange(e, this.validateFamilyName)}
          type="text"
          name="familyName"
          placeholder="...نام خانوادگی"
        ></input>
        <div className={this.state.errorFamilyName ? "error-message" : "empty"}>
          {this.state.errorFamilyName}
        </div>
        <input
          value={phone}
          onChange={(e) => this.props.handelChange(e, this.validatePhone)}
          type="text"
          name="phone"
          placeholder="...شماره تماس"
        ></input>
        <div className={this.state.errorPhone ? "error-message" : "empty"}>
          {this.state.errorPhone}
        </div>
        <textarea
          value={detail}
          onChange={(e) => this.props.handelChange(e, this.validateDetail())}
          type="text"
          name="detail"
          placeholder="...پیـــغام"
        ></textarea>
        <div className={this.state.errorDetail ? "error-message" : "empty"}>
          {this.state.errorDetail}
        </div>
        <input
          value={email}
          onChange={(e) => this.props.handelChange(e, this.validateEmail())}
          type="email"
          name="email"
          placeholder="...ایمیل"
        ></input>
        <div className={this.state.errorEmail ? "error-message" : "empty"}>
          {this.state.errorEmail}
        </div>
        <input
          className="addBtn"
          type="submit"
          value={formBtn}
          disabled={!isValid || defaultError}
        ></input>
      </form>
      </div>
    );
  }
}

export default Form;