/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL - events component.
 */

// Core dependencies
import React from "react";

// App dependencies
import {EventsStaticQuery} from "../../hooks/events-query";
import Scoop from "../scoops/scoop";
import * as ScoopsService from "../../utils/scoops.service";

// Styles
import compStyles from "./events.module.css";

class Events extends React.Component {

    render() {
        const {scoops, type} = this.props;
        return (
            <Scoop className={compStyles.event} noEvents={compStyles.noEvents} featuredOnly={false} scoops={scoops} type={type}/>
        );
    }
}

export default (props) => {

    const events = EventsStaticQuery();
    const eventsScoops = ScoopsService.getScoops(events);
    const past = props && props.past === "";
    const scoopsByDate = ScoopsService.filterScoopsByDate(eventsScoops, past);
    const type = past ? "past events" : "upcoming events";

    return (
        <Events scoops={scoopsByDate} type={type}/>
    )
}
