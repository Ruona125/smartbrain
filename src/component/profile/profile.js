import React from "react";
import "./profile.css";

const Profile = ({ isProfileOpen, toggleModal }) => {
  return (
    <div className="profile-modal">
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
        <main className="pa4 black-80 w-80">
          <img
            src="http://tachyons.io/img/logo.jpg"
            className="h3 w3 dib"
            alt="avatar"
          />
          <h1>John Doe</h1>
          <h4>Images submitted: 5</h4>
          <p>Member since: January</p>
          <hr />

          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">
              Name
            </label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="name"
              id="name"
              // onChange={this.onNameChange}
            />
          </div>

          <div className="mt3">
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="email"
              id="email"
              // onChange={this.onEmailChange}
            />
          </div>

          <div className="mt3">
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="email"
              id="email"
              // onChange={this.onEmailChange}
            />
          </div>
        </main>
      </article>
    </div>
  );
};

export default Profile;
