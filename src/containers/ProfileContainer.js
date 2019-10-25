import React, {useEffect, useState} from "react";
import {Container, Header, Item, Segment, Icon, Dimmer, Loader, Table, Image, Popup} from 'semantic-ui-react'
import { connect } from "react-redux";
import {startGetProfileById} from "../store/actions/profile";
import {Link} from "react-router-dom";


const ProfileContainer = props => {

    useEffect(() => {
        console.log("VALUES ", props.match.params.id);
        props.getProfileById(Number(props.match.params.id));
    }, []);

    const findProfessionIcon = (profession) => {
        switch (profession) {
            case "Metalworker":
                return "legal";
            case "Woodcarver":
                return "tree";
            case "Stonecarver":
                return "gem";
            case " Tinker":
                return "asl interpreting";
            case "Tailor":
                return "cut";
            case "Potter":
                return "flask";
            case "Brewer":
                return "beer";
            case "Medic":
                return "doctor";
            case "Prospector":
                return "pin";
            case "Gemcutter":
                return "gem";
            case "Mason":
                return "wrench";
            case "Cook":
                return "spoon";
            case "Baker":
                return "food";
            case "Miner":
                return "gem";
            case "Carpenter":
                return "dolly";
            case "Farmer":
                return "warehouse";
            case "Tax inspector":
                return "detective";
            case "Smelter":
                return "thermometer";
            case "Butcher":
                return "grunt";
            case "Sculptor":
                return "hourglass four";
            case "Blacksmith":
                return "key";
            case "Mechanic":
                return "wrench";
            case "Leatherworker":
                return "shopping bag";
            case "Marble Carver":
                return "cubes";
            default:
                return "user";
        }
    }

    return (
      <Container>
          <Dimmer active={props.loading} inverted>
              <Loader inverted>Loading</Loader>
          </Dimmer>
        <Segment color={"teal"}>
            {props.profile &&
                <>
            <Header>{props.profile.name}</Header>
                    <div className="profile_thumb" style={{backgroundImage: "url("+props.profile.thumbnail+")"}}/>
                <Item.Group>
                     <Item >
                        <Item.Content>
                            <Item.Header>
                                Personal Information
                            </Item.Header>
                            <Item.Description>
                                <Table color={"teal"} style={{opacity:0.8}} >
                                    <Table.Header/>
                                    <Table.Body >
                                        <Table.Row >
                                            <Table.Cell width={2}><Icon name='birthday' /> Age</Table.Cell>
                                            <Table.Cell>{props.profile.age}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell width={2}><Icon name='arrows alternate vertical' /> Height</Table.Cell>
                                            <Table.Cell>{Number(props.profile.height).toFixed(2) + " cm"}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell width={2}><Icon name='arrows alternate horizontal' /> Weight</Table.Cell>
                                            <Table.Cell>{Number(props.profile.weight).toFixed(2) + " kg"}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell width={2}><Icon color={props.profile.hair_color.toLowerCase()} name='tint' /> Hair color</Table.Cell>
                                            <Table.Cell>{props.profile.hair_color}</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Item.Header>
                                    Professions
                                </Item.Header>
                                <Item.Description>
                                    <Segment.Inline>
                                        <Table color={"teal"} inverted>
                                            <Table.Body>
                                            {props.profile.professions.length > 0 ?
                                                <Table.Row>
                                                    <Table.Cell>
                                                {props.profile.professions.map(obj =>
                                                        <Popup
                                                            content={obj}
                                                            key={obj}
                                                            position='top left'
                                                            trigger={<Icon circular inverted name={findProfessionIcon(obj)} />}
                                                        />
                                                )}
                                                    </Table.Cell>
                                                </Table.Row> :
                                                    <Table.Row>
                                                <Table.Cell>Unemployed</Table.Cell>
                                            </Table.Row>}
                                                </Table.Body>
                                            </Table>
                                    </Segment.Inline>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Item.Header>
                                    Friends
                                </Item.Header>
                                <Item.Description>
                                    <Table color={"teal"} unstackable>
                                        <Table.Header/>
                                        <Table.Body>
                                            {props.profile.friendsInfo.length > 0 ?
                                                props.profile.friendsInfo.map(obj =>
                                                <Table.Row>
                                                    <Table.Cell width={2}>
                                                    <div className="thumb" style={{backgroundImage: "url("+obj.thumbnail+")"}}/></Table.Cell>
                                                    <Table.Cell><Link onClick={() => {
                                                        props.getProfileById(obj.id);
                                                    }} to={{pathname: '/' + obj.id}}>{obj.name}</Link></Table.Cell>
                                                </Table.Row>)
                                            : <Table.Row>
                                                    <Table.Cell>Antisocial</Table.Cell>
                                                </Table.Row>}
                                        </Table.Body>
                                    </Table>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group></>}
        </Segment>
      </Container>
  );
};

const mapStateToProps = state => ({
    loading: state.profileReducer.loading,
    profile: state.profileReducer.profile

});

const mapDispatchToProps = dispatch => {
    return {
        getProfileById: (id) => dispatch(startGetProfileById(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer);