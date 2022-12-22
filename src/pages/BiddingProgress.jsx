import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import CustomTable from "../components/BiddingProgress/CustomTable";

const style = {
  fontFamily: "Unbounded",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95vw",
  height: "90vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "4px",
  overflow: "auto",
};

const BiddingProgress = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        sx={{ my: 2 }}
        onClick={handleOpen}
        variant="contained"
        size="large"
      >
        <Typography fontFamily={style.fontFamily}>Ход торгов</Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* header */}
          <Box
            display="flex"
            flexDirection={{
              xs: "column",
              md: "row",
            }}
            justifyContent="left"
            alignItems={{
              sx: "flex-start",
              md: "center",
            }}
          >
            <Typography
              fontFamily={style.fontFamily}
              fontSize="24px"
              fontWeight="300"
              color="red"
            >
              Ход торгов:&nbsp;
            </Typography>
            <Typography
              fontFamily={style.fontFamily}
              fontSize="24px"
              component="div"
              color="red"
              fontWeight="500"
            >
              изготовление подогревателей T-2 LTS BJM WS-8.42-2017-41/9 - 2 ШТ.
              (21.10.2020 10:00)
            </Typography>
          </Box>

          {/* content */}
          <Box>
            <Typography
              marginTop={8}
              fontFamily={style.fontFamily}
              component="div"
              paddingY={1}
              paddingX={1}
              bgcolor="#ffb3bf"
              color="red"
              align="left"
              sx={{
                opacity: "0.7",
              }}
            >
              Стоимость изготовления предоставляется за вычетом стоимости
              теплообменной трубы 16х2б 0х3000мм, поставляемой ООО "ЛОТОС
              инжиниринг" не позднее 13.11.2020г
            </Typography>
            <CustomTable handleClose={handleClose} />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default BiddingProgress;
