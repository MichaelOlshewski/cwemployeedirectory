import React, { Component, useState, useEffect } from "react";
import MemberWrapper from "./components/MemberWrapper/MemberWrapper";
import MemberCard from "./components/MemberCard/MemberCard";
import axios from "axios";
import "./style.css";

class App extends Component {
    state = {};

    employeeData = async () => {
        try {
            const res = await axios.get(
                "https://randomuser.me/api/?results=200&nat=us"
            );
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <div className="App">
                <MemberWrapper>
                    <MemberCard />
                </MemberWrapper>
            </div>
        );
    }
}

export default App;
