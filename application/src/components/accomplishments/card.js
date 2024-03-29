
import React from "react";
import {ExperienceCards, ServicesIcon} from "../services/ServicesElements";
import Icon2 from "../../images/online.svg";


const Card = ({num, tag, img}) => {
    return (
        <ExperienceCards>
            <h1>{num}</h1>
            <p>{tag}</p>
            <ServicesIcon src={img} />
        </ExperienceCards>
);
}

export default Card;