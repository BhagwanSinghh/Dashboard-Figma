import { ListItemText, ListItem, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

import { Radio } from "@mui/material";

export const StyledRadio = styled(Radio)({
  "& .MuiSvgIcon-root": {
    color: "white",
    "& path": {
      fill: "white",
      stroke: "blue",
      strokeWidth: "1px",
    },
  },

  "&.Mui-checked .MuiSvgIcon-root::before": {
    content: '""',
    display: "block",
    width: "8px",
    height: "8px",
    background: "white",
    borderRadius: "50%",
    border: "1px solid blue",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

export const StyledListItemText = styled(ListItemText)({
  fontFamily: "Poppins", 
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "14px",
  color: "#ffffff",
});

export const StyledRightBarTypo = styled(Typography)({
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "14px",
  color: "#4E62B1",
});

export const StyledTeamName = styled(Typography)({
  fontWeight: 500,
  fontSize: "10px",
  lineHeight: "10px",
  color: "#315EFB",
});

export const StyledInputUploads = styled(Typography)({
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "14px",
  color: "#585656",
});

export const StyledButtonInputUploads = styled(Button)({
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "14px",
  color: "#fff",
  padding: "10px 32px",
  width: "40%",
  backgroundColor: "#315EFB",
  borderRadius: "0px",
  textTransform: "none",
  '&:hover': {
    backgroundColor: "#213EAB",
  }
});

export const StyledListItem = styled(ListItem)({
  gap: "12px",
});


export const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: '12px',
  margin: "5px", 
  padding: "4px 14px",
  color: '#585656',
  borderRadius: '60px',
  border: `1px solid #315EFB`,
  transition: 'color 0.3s',
  '&:hover': {
    backgroundColor: '#315EFB',
    color: '#fff',
  },
}));



