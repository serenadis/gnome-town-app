import React, {useEffect} from "react";
import { Search, Menu, Container, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import _ from "lodash";


const MenuBar = props => {

    useEffect(() => {
        console.log("PROPS ", props.results);
    }, []);


  return (
        <Container>
        <Menu color={"teal"} inverted stackable icon='labeled'>
            <Menu.Item header as={Link} to={"/"}><Icon name='home' />Welcome to Brastlewark</Menu.Item>
          <Menu.Item position='right'>
              <Search
                  fluid
                  name="gnome"
                  placeholder="Search gnomes by name"
                  showNoResults={false}
                  loading={props.loading_search}
                  results={props.results}
                  onSearchChange={_.debounce(props.handleSearchChange, 500, {leading: true})}
                  value={props.value}
                  onResultSelect={props.onResultSelect}
                  aligned= 'right'
                  minCharacters={3}
              />
          </Menu.Item>
        </Menu>
        </Container>
  );
};


export default MenuBar;
