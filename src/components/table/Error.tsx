import ErrorIcon from "@mui/icons-material/Error";
import type { TableCellProps } from "@mui/material";
import { Box, TableCell, TableRow, Typography } from "@mui/material";

export const Error = ({ children, ...rest }: TableCellProps) => {
  return (
    <TableRow hover={false}>
      <TableCell {...rest}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            my: 4,
            color: "text.secondary",
            gap: 1,
          }}
        >
          <ErrorIcon fontSize="large" />
          <Typography variant="body2">
            {children ?? "Unknown Error Occurred"}
          </Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
};
