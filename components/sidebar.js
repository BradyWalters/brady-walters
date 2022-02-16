import * as React from 'react';
import Avatar from './avatar'
import TopLinks from './top-links';

export default function Sidebar(props) {
    return (
        <>
            <h2>Brady Walters</h2>
            <Avatar />
            <TopLinks />
        </>
    );
}