import type { TableCellProps } from "@mui/material";
import { Box, CircularProgress, TableCell, TableRow } from "@mui/material";

export const Loading = (props: TableCellProps) => {
  return (
    <TableRow hover={false}>
      <TableCell {...props}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            my: 4,
          }}
        >
          <CircularProgress />
        </Box>
      </TableCell>
    </TableRow>
  );
};
