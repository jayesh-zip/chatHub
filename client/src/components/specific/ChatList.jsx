import { Stack } from "@mui/material";

const ChatList = ({
  w = "100%",
  chats = [1,2,3,4],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"} overflow={"auto"} height={"100%"}>
      {chats?.map((data) => {
        return (
          <div>{data}</div>
        );
      })}
    </Stack>
  );
};

export default ChatList;