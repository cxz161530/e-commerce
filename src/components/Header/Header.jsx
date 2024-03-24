import { Header, Segment, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Header.css"

export default function PageHeader(props) {
  console.log(props)
  const {loggedUser, handleLogout, itemCount}=props
  
  return (
    <Segment clearing>
      <Header as="h2" floated="right" style={{marginTop: "30px"}}>
        <Link to="cart">
        <i class="fa badge fa-lg"  value={itemCount}>&#xf07a;</i>
    
        </Link>
        <Link to=""  onClick={handleLogout}>
          <span className="logoutColor">
            Log out
          </span>
        </Link>
      </Header>

      <Header as="h2" floated="left">
        <Link to="">
          <Image
            src="https://i.imgur.com/0d3Uu6d.png" style={{width: '150px', height: 'auto'}}
          ></Image>
        </Link>
      </Header>
    </Segment>
  );
}