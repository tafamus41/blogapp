import { Alert, Stack } from "@mui/material";

export const NoDataMessage = () => {
  return (
    <Stack sx={{ width: "50%", minHeight: "89.3vh", m: "auto" }} spacing={2}>
      <Alert severity="warning" sx={{ textAlign: "center" }}>
        No data was found on this page.
      </Alert>
    </Stack>
  );
};
