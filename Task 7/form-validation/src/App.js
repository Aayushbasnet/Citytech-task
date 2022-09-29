// import "./styles.css";
import { useState } from "react";
export default function App() {
  const [error, setError] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  function onSubmit() {
    console.log("asa");
    var s = "";
    if (
      firstname == "" ||
      lastname == "" ||
      email == "" ||
      password == "" ||
      phone == "" ||
      comment == ""
    ) {
      s = s + "Please enter all the form.      ";
      console.log("adsdsa");
    }
    if (password.length < 8) {
      s = s + "Password should be greater than 8 digit.      ";
    }
    if (phone.length <= 10) {
      s = s + "Phone number should be less than 13.            ";
    }
    if (comment.length > 100) {
      s = s + "Comment should not be greater than 100 digits.             ";
    }

    if (s === "") {
      setError("");
    } else {
      setError(s);
    }
  }
  return (
    <div className="App">
      <>
        <header>
          <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: "#563d7c" }}
          >
            <div className="container">
              <a
                className="navbar-brand"
                href="http://127.0.0.1:5500/Task%203/index.html"
              >
                <img
                  src="../Task 3/image/bootstrap-logo.svg"
                  alt="Bootstrap"
                  width={40}
                  height={34}
                />
              </a>
              <ul
                className="navbar-nav me-auto mb-3 mt-3"
                style={{ textAlign: "center" }}
              >
                <li className="nav-item">
                  <a
                    className="nav-link active text-light fw-bolder"
                    aria-current="page"
                    href="#"
                  >
                    Docs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-light"
                    style={{ opacity: "0.75" }}
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-light"
                    style={{ opacity: "0.75" }}
                    aria-current="page"
                    href="#"
                  >
                    Form
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-light"
                    style={{ opacity: "0.75" }}
                    aria-current="page"
                    href="#"
                  >
                    Themes
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-light"
                    style={{ opacity: "0.75" }}
                    aria-current="page"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
              </ul>

              <form className="d-flex mt-3 mb-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
        </header>
        {/* form section */}

        <div className="form bg-info">
          <h1 className="pt-3" style={{ textAlign: "center" }}>
            Task 4 -- Fill in the form below :
          </h1>

          <form action="" id="employeeForm">
            <h6>{error}</h6>
            <div
              className="container bg-light border p-3 shadow mt-3"
              style={{ width: 500, margin: "auto" }}
            >
              {/* first name */}
              <div className="mb-3">
                <label htmlFor="first-name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstname}
                  className="form-control"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  id="first-name"
                  placeholder="Enter your first name"
                  pattern="[a-zA-Z]+"
                  required=""
                />
              </div>
              {/* last name */}
              <div className="mb-3">
                <label htmlFor="last-name" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastname}
                  className="form-control"
                  id="last-name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  placeholder="Enter your last name"
                  pattern="[a-zA-Z]+"
                  required=""
                />
              </div>
              {/* email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  placeholder="Enter your email"
                  required=""
                />
              </div>
              {/* password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter your password"
                  required=""
                />
              </div>
              {/* gender */}
              <div className="mb-3">
                Gender : <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    defaultValue="male"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    defaultValue="female"
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="other"
                    defaultValue="other"
                  />
                  <label className="form-check-label" htmlFor="other">
                    Other
                  </label>
                </div>
              </div>
              {/* phone number */}
              <div className="mb-3">
                <label htmlFor="phone-number" className="form-label">
                  Phone number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone-number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  placeholder="Enter your Phone number"
                  required=""
                />
              </div>
              {/* position */}
              <div className="mb-3">
                <label htmlFor="position" className="form-label">
                  Position
                </label>
                <select
                  className="form-select"
                  aria-label="position"
                  id="position"
                  required=""
                >
                  <option disabled="">Select your post</option>
                  <option selected="" value="HR Manager">
                    HR Manager
                  </option>
                  <option value="Intern">Intern</option>
                  <option value="QA">QA</option>
                  <option value="Developer">Developer</option>
                </select>
              </div>
              {/* date of enrollment */}
              <div className="mb-3">
                <label htmlFor="enrollment-date" className="form-label">
                  Enrollment Date:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="enrollment-date"
                  required=""
                />
              </div>
              {/* interest */}
              <div className="mb-3">
                Interest: <br />
                <input
                  type="checkbox"
                  id="nodeJs"
                  name="interest"
                  defaultValue="NodeJS"
                />
                <label htmlFor="nodeJs"> NodeJs</label>{" "}
                <span style={{ marginLeft: 10 }} />
                <input
                  type="checkbox"
                  id="react"
                  name="interest"
                  defaultValue="React"
                />
                <label htmlFor="react"> React</label>
                <span style={{ marginLeft: 10 }} />
                <input
                  type="checkbox"
                  id="ui-ux"
                  name="interest"
                  defaultValue="UI/UX"
                />
                <label htmlFor="ui-ux"> UI/UX</label>
              </div>
              {/* remarks */}
              <div className="mb-3">
                <label htmlFor="remark">Remarks</label>
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  id="remark"
                  style={{ height: 100 }}
                  defaultValue={""}
                />
              </div>
              {/* submit button */}
              <div className="mb-3">
                <button
                  type="button"
                  id="submitBtn"
                  onClick={onSubmit}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    </div>
  );
}
