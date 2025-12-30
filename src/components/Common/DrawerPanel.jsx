import { Drawer } from "@mui/material";
export default function DrawerPanel({ open, onClose, children }) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: "50vw",
            minWidth: { xs:500,md:768},
          },
        },
      }}
    >
      {children}
    </Drawer>
  );
}
