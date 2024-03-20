import { Header, Segment, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function PageHeader() {
  return (
    <Segment clearing>
      <Header as="h2" floated="right" color="green">
        <Link to="" >
          Logout
        </Link>
      </Header>

      <Header as="h2" floated="left">
        <Link to="">
          <Image
            src="https://i.imgur.com/0d3Uu6d.png" size='small'
          ></Image>
        </Link>
      </Header>
    </Segment>
  );
}