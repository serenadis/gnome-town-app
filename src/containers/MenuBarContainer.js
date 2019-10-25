import React,  {useState, useEffect} from "react";
import MenuBar from "../components/MenuBar";
import { connect } from "react-redux";
import {startGetProfileById, startGetProfiles} from "../store/actions/profile";
import _ from "lodash";
import {history} from "../routers/AppRouters";

export const MenuBarContainer = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        resetComponent();
    }, []);


    const handleSearchChange = (e, {value}) => {

        setValue(value);
        setIsLoading(true);

        setTimeout(() => {
            if (value.length < 1) return resetComponent();
            const arrayFinal = props.profiles.filter(o => o.value.toLowerCase().includes(value.toLowerCase()))
            console.log(value, arrayFinal);

            setIsLoading(false);
            setResults(arrayFinal);

        }, 300)
    };


    const resetComponent = () => {
        if(!props.profile || _.isEmpty(props.profiles)) props.getProfiles();
        setIsLoading(false);
        setResults([]);
        setValue('')
    };

    const onResultSelect= (e, {result}) =>{
        console.log(e,result.key);
        setValue(result.title);
        history.push({
            pathname: "/" + result.key
        })
        props.getProfileById(result.key);
    }


    return (
        <div>
            <MenuBar
                handleSearchChange={handleSearchChange}
                loading_search={isLoading}
                value={value}
                results={results}
                onResultSelect = {onResultSelect}
                minCharacters={3}
            />
        </div>
    );
}

const mapStateToProps = state => ({
    profiles: _.toArray(
        _.mapValues(state.profileReducer.profiles, o => {
            return {
                key: o.id,
                value: o.name,
                title: o.name
            };
        })
    )
});

const mapDispatchToProps = dispatch => {
    return {
        getProfiles: () => dispatch(startGetProfiles()),
        getProfileById: (id) => dispatch(startGetProfileById(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuBarContainer);
