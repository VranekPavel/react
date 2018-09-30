import React from "react";
import PropTypes from "prop-types";

function Item (props) {
    return (
        <div className={props.class} onClick={props.onClick}>{props.value}</div>
    );

}

Item.propTypes = {
    class: PropTypes.string,
    onClick: PropTypes.func,
    value: PropTypes.string,
}

export default Item
