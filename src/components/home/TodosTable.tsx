import {
  CancelOutlined,
  CheckCircleOutline,
  Refresh,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Error } from "components/table/Error";
import { Loading } from "components/table/Loading";
import { NoData } from "components/table/NoData";
import { useTranslation } from "next-i18next";
import { publicService } from "services/public.service";

export const TodosTable = () => {
  const { data, isFetching, isError, refetch } = publicService.useGetTodosQuery(
    {
      _start: 0,
      _end: 10,
    }
  );
  const { t } = useTranslation();

  return (
    <TableContainer>
      <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
        <Typography variant="h3">Todos</Typography>
        <IconButton onClick={refetch} disabled={isFetching}>
          <Refresh />
        </IconButton>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t("ID")}</TableCell>
            <TableCell>{t("Title")}</TableCell>
            <TableCell>{t("Status")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isError ? (
            <Error colSpan={3} />
          ) : isFetching ? (
            <Loading colSpan={3} />
          ) : data?.length === 0 ? (
            <NoData colSpan={3} />
          ) : (
            data?.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>
                  {row.completed ? (
                    <CheckCircleOutline color="success" />
                  ) : (
                    <CancelOutlined color="error" />
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
