import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownopen: false,
    };
  }
  toggle = () => {
    this.setState((prevState) => ({
      dropdownopen: !prevState.dropdownopen,
    }));
  };
  render() {
    return (
      <div className="pa4 tc">
        <Dropdown isOpen={this.state.dropdownopen} toggle={this.toggle}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownopen}>
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="br-100 ba h3 w3 dib"
              alt="avatar"
            />
          </DropdownToggle>
          <DropdownMenu
            className="b--transparent shadow-5"
            style={{
              marginTop: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}>
            <DropdownItem>View profile</DropdownItem>
            <DropdownItem>Sign out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;
