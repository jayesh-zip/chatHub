import { Drawer, Grid, Skeleton } from "@mui/material";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import { getOrSaveFromStorage } from "../../lib/features";
import DeleteChatMenu from "../dialogs/DeleteChatMenu";
import Title from "../shared/Title";
import ChatList from "../specific/ChatList";
import Profile from "../specific/Profile";
import Header from "./Header";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;
    const deleteMenuAnchor = useRef(null);

    const [onlineUsers, setOnlineUsers] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    const [newMessagesAlert, setNewMessagesAlert] = useState([]);

    useEffect(() => {
      getOrSaveFromStorage({ key: "NEW_MESSAGE_ALERT", value: newMessagesAlert });
    }, [newMessagesAlert]);

    const handleDeleteChat = (e, chatId, groupChat) => {
      deleteMenuAnchor.current = e.currentTarget;
    };

    const handleMobileClose = () => setIsMobile(false);

    return (
      <>
        <Title />
        <Header />

        <DeleteChatMenu deleteMenuAnchor={deleteMenuAnchor} />

        <Drawer open={isMobile} onClose={handleMobileClose}>
          <ChatList
            w="70vw"
            chatId={chatId}
            handleDeleteChat={handleDeleteChat}
            newMessagesAlert={newMessagesAlert}
            onlineUsers={onlineUsers}
          />
        </Drawer>

        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            height={"100%"}
          >
            <ChatList
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
              newMessagesAlert={newMessagesAlert}
              onlineUsers={onlineUsers}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} chatId={chatId} />
          </Grid>

          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
          >
            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
