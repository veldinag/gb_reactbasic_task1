import React from "react"
import {Grid} from "@material-ui/core"

import AddChatButton from "../AddChatButton";
import RemoveChatButton from "../RemoveChatButton";

const AddRemoveForm = ({chatId}) => {

    return (
        <Grid container spacing={1}>
            <Grid item>
                <AddChatButton/>
            </Grid>
            <Grid item>
                <RemoveChatButton chatId={chatId}/>
            </Grid>
        </Grid>
    )
}

export default AddRemoveForm