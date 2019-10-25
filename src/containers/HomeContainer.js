import React, {useEffect, useState} from "react";
import { Container, Dimmer, Item, Segment, Loader } from 'semantic-ui-react'
import { connect } from "react-redux";
import {startGetProfiles} from "../store/actions/profile";
import { NavLink } from "react-router-dom";


const HomeContainer = props => {


    useEffect(() => {
        if(!props.profiles) props.getProfiles();
    }, []);


  return (
      <Container>
          <Dimmer active={props.loading} inverted>
              <Loader inverted>Loading</Loader>
          </Dimmer>
        <Segment color={"teal"}>
        {props.profiles &&
            <Item.Group divided unstackable>
                {props.profiles.map(obj =>
                    <Item>
                        <Item.Content>
                        <div className="thumb" style={{backgroundImage: "url("+obj.thumbnail+")"}}/>
                            <NavLink to={{pathname: '/' + obj.id}}>{obj.name}</NavLink>
                        </Item.Content>
                    </Item>)}
            </Item.Group>}
                </Segment>
      </Container>
  );
};

const mapStateToProps = state => ({
    loading: state.profileReducer.loading,
    profiles: state.profileReducer.profiles
});

const mapDispatchToProps = dispatch => {
    return {
        getProfiles: () => dispatch(startGetProfiles())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);