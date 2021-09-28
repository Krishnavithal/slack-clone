import {
    FiberManualRecord,
    Create,
    InsertComment,
    Inbox,
    Drafts,
    BookmarkBorder,
    PeopleAlt,
    Apps,
    FileCopy,
    ExpandLess,
    ExpandMore,
    Add
} from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import db from '../firebase';
import "../styles/Sidebar.css";
import SidebarOption from './SidebarOption';

function Sidebar() {

    const [channels, setChannels] = useState([]);

    useEffect(() => {
        // Run this code when the sidebar component loads only once since the we are sending empty array
        db.collection("rooms").onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        ))
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">


                    <h2>Clever Programmer</h2>
                    <h3><FiberManualRecord /> Krishna Vithal</h3>
                </div>
                <Create />
            </div>
            <SidebarOption Icon={InsertComment} title="Threads" />
            <SidebarOption Icon={Inbox} title="Mentions & Reactions" />
            <SidebarOption Icon={Drafts} title="Saved items" />
            <SidebarOption Icon={BookmarkBorder} title="Channel Browser" />
            <SidebarOption Icon={PeopleAlt} title="People & user groups" />
            <SidebarOption Icon={Apps} title="Apps" />
            <SidebarOption Icon={FileCopy} title="File browser" />
            <SidebarOption Icon={ExpandLess} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMore} title="Channels" />
            <hr />
            <SidebarOption Icon={Add} title="Add Channel" addChannelOptions={""} />
            {/* connect to db and list all channels */}
            {/* <SidebarOption ... /> */}
            {channels.map(ch => (
                <SidebarOption title={ch.name} id={ch.id} />
            ))}
        </div>
    )
}

export default Sidebar
