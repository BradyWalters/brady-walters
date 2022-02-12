import * as React from 'react';
import Avatar from './avatar'
import SidebarLinks from "./sidebar-links";
import SocialLinks from "./social-links";
import { Heading } from 'theme-ui';

export default function Sidebar(props) {
    return (
        <>
            <Heading>Brady Walters</Heading>
            <Avatar />
            <SidebarLinks />
            <SocialLinks />
        </>
    );
}