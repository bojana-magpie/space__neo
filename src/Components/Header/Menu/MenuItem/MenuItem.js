import React from 'react';

const MenuItem = (props) => {
    const title = props.title;
    return (
        <li>{ title }</li>
    )
}

export default MenuItem;