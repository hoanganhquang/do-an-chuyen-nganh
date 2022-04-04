import "./SignUpForm.scss";

function SignUpForm() {
  return (
    <div className="SignUpForm form" data-aos="fade-left">
      <h1>Đăng ký</h1>

      <div className="form-control">
        <p className="input-title">Tài khoản đăng ký</p>
        <input
          type="text"
          name=""
          className="input"
          placeholder="example@email.com"
        />
      </div>

      <div className="form-control">
        <p className="input-title">Mật khẩu</p>
        <input type="password" name="" className="input" />
      </div>

      <div className="form-footer">
        <button className="primaryBtn">Đăng ký</button>
      </div>
    </div>
  );
}

export default SignUpForm;
