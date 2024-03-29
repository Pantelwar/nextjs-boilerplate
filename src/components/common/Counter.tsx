import { Button, ButtonGroup, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { appSlice } from "slices/app.slice";
import type { RootState } from "store";

export function Counter() {
  const count = useSelector((state: RootState) => state.app.value);
  const dispatch = useDispatch();

  return (
    <Stack gap={2}>
      <Typography variant="h1" textAlign="center">
        {count}
      </Typography>
      <ButtonGroup variant="outlined">
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(appSlice.actions.decrement())}
        >
          -
        </Button>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(appSlice.actions.increment())}
        >
          +
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
