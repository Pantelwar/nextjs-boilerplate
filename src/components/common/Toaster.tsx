import { CheckCircle, Close, Warning } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import toast, { Toaster as RootToaster } from "react-hot-toast";

export const Toaster = () => {
  return (
    <RootToaster position="bottom-right">
      {(currentToast) => {
        const { message, type, id } = currentToast;
        let color = "warning.main";
        if (type === "success") color = "success.main";
        if (type === "error") color = "error.main";
        let icon = <Warning />;
        if (type === "success") icon = <CheckCircle />;
        return (
          <Box
            sx={{
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              boxShadow: 1,
              borderRadius: "4px",
              minWidth: "372px",
              px: 2,
              py: 1,
              borderLeftWidth: "4px",
              borderLeftColor: color,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color,
            }}
          >
            {icon}
            <Typography
              variant="body2"
              sx={{ flexGrow: 1, px: 2, color: "text.primary" }}
            >
              {typeof message === "function" ? message(currentToast) : message}
            </Typography>
            {type !== "loading" && (
              <IconButton
                sx={{ color: "text.secondary" }}
                onClick={() => toast.dismiss(id)}
              >
                <Close fontSize="small" />
              </IconButton>
            )}
          </Box>
        );
      }}
    </RootToaster>
  );
};
