import { Avatar, Box, Skeleton, Stack } from "@mui/material";
import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import RenderAttachment from "../../components/shared/RenderAttachment";
import Table from "../../components/shared/Table";

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "attachments",
    headerName: "Attachments",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => {
      const { attachments } = params.row;
      return attachments?.length > 0
        ? attachments.map((i) => (
            <Box>
              <a
                href={i.url}
                download
                target="_blank"
                style={{ color: "black" }}
              >
                {RenderAttachment(i.file, i.url)}
              </a>
            </Box>
          ))
        : "No Attachments";
    },
  },
  {
    field: "content",
    headerName: "Content",
    headerClassName: "table-header",
    width: 400,
  },
  {
    field: "sender",
    headerName: "Sent By",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => (
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
        <span>{params.row.sender.name}</span>
      </Stack>
    ),
  },
  {
    field: "chat",
    headerName: "Chat",
    headerClassName: "table-header",
    width: 220,
  },
  {
    field: "groupChat",
    headerName: "Group Chat",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Time",
    headerClassName: "table-header",
    width: 250,
  },
];

const rows = [
  {
    id: 1,
    attachments: [
      { file: "pdf", url: "/example.pdf" },
      { file: "image", url: "/example.jpg" },
    ],
    content: "Sample message content here",
    sender: { name: "John Doe", avatar: "/avatar.jpg" },
    chat: "Sample Chat",
    groupChat: "Yes",
    createdAt: "October 30, 2024, 10:30:00 AM",
  },
];

const MessageManagement = () => (
  <AdminLayout>
    <Skeleton height={"100vh"} />
    <Table heading={"All Messages"} columns={columns} rows={rows} rowHeight={200} />
  </AdminLayout>
);

export default MessageManagement;
