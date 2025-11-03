import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import "./HorizontalTimeline.css";

const HorizontalTimelines = () => {
    const [value, setValue] = useState(0);
    const [previous, setPrevious] = useState(0);

    // Values should be only date
    const VALUES = ["2016", "2017", "2018", "2019", "2020", "2021", "2022"];

    // Description array corresponding to values
    const description = [
        "Explore detailed Customs Data, Statistical Data, Mirror Data, Bill of Lading Data, ",
        "ReactJS is widely embraced in web development for its efficiency and flexibility, offering developers an extensive toolkit to craft dynamic and interactive user interfaces.",
        "Explore detailed Customs Data, Statistical Data, Mirror Data, Bill of Lading Data2",
        "Explore detailed Customs Data, Statistical Data, Mirror Data, Bill of Lading Data3",
        "ReactJS is widely embraced in web development for its efficiency and flexibility, offering developers an extensive toolkit to craft dynamic and interactive user interfaces.",
        "Explore detailed Customs Data, Statistical Data, Mirror Data, Bill of Lading Data5",
        "Explore detailed Customs Data, Statistical Data, Mirror Data, Bill of Lading Data6",
    ];

    return (
        <div className="root-div">
            <div className="withofTettimmle">
                <HorizontalTimeline
                    styles={{ outline: "#c8c8c8", foreground: "#ffffff" }}
                    index={value}
                    indexClick={(index) => {
                        setValue(index);
                        setPrevious(value);
                    }}
                    values={VALUES.map(date => date.substring(0, 4))}
                />
            </div>
            <div className="textDescOurjrny">{description[value]} <p>Read More..</p> </div>
        </div>
    );
};

export default HorizontalTimelines;