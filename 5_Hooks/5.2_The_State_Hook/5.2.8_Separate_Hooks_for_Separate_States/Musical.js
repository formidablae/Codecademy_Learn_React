import React, { useState } from "react";

function Musical() {
    const [state, setState] = useState({
        title: "Best Musical Ever",
        actors: ["George Wilson", "Tim Hughes", "Larry Clements"],
        locations: {
            Chicago: {
                dates: ["1/1", "2/2"],
                address: "chicago theater"
            },
            SanFrancisco: {
                dates: ["5/2"],
                address: "sf theater"
            }
        }
    })
}

function MusicalRefactored() {
    // write your code here
    const [title, setTitle] = useState("Best Musical Ever");
    const [actors, setActors] = useState(["George Wilson", "Tim Hughes", "Larry Clements"]);
    const [locations, setLocations] = useState({
        Chicago: {
            dates: ["1/1", "2/2"],
            address: "chicago theater"
        },
        SanFrancisco: {
            dates: ["5/2"],
            address: "sf theater"
        }
    });
}
