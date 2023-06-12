import FindInPageIcon from "@mui/icons-material/FindInPage";
import type { TableCellProps } from "@mui/material";
import { Box, TableCell, TableRow, Typography } from "@mui/material";

export const NoData = ({ children, ...rest }: TableCellProps) => {
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
          <FindInPageIcon fontSize="large" />
          <Typography variant="body2">
            {children ?? "No data available"}
          </Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
};
