import React, { Component } from "react";
import Header from './components/Header/Header'
import Main from "./components/Main/Main";
import FilterBar from './components/FilterBar/FilterBar'
import MemberWrapper from "./components/MemberWrapper/MemberWrapper";
import MemberCard from "./components/MemberCard/MemberCard";
import "./style.css";

class App extends Component {
    state = {
        loading: true,
        people: [],
    };

    async componentDidMount() {
        const url = "https://randomuser.me/api/?results=200&nat=us";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ loading: false, people: data.results });
    }

    render() {
        const employees = this.state.people;
        return (
            <React.Fragment>
                <Main>
                    <Header />
                    <br/>
                    <FilterBar />
                    <MemberWrapper>
                        {employees.map((person) => (
                            <MemberCard
                                key={person.id.value}
                                name={
                                    person.name.first + " " + person.name.last
                                }
                                img={person.picture.large}
                                location={person.location.city}
                                phone={person.phone}
                                email={person.email}
                            />
                        ))}
                    </MemberWrapper>
                </Main>
            </React.Fragment>
        );
    }
}

export default App;
