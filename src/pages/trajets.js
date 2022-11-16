import Head from "next/head";
import { Box, Container } from "@mui/material";
import { TrajetListResults } from "../components/trajet/trajet-list-results";
import { TrajetListToolbar } from "../components/trajet/trajet-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { trajets } from "../__mocks__/trajets";

const Page = () => (
  <>
    <Head>
      <title>Trajets</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <TrajetListToolbar />
        <Box sx={{ mt: 3 }}>
          <TrajetListResults trajets={trajets} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
