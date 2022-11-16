import Head from "next/head";
import { Box, Container } from "@mui/material";
import { VoitureListResults } from "../components/voiture/voiture-list-results";
import { VoitureListToolbar } from "../components/voiture/voiture-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { voitures } from "../__mocks__/voitures";

const Page = () => (
  <>
    <Head>
      <title>Voitures</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <VoitureListToolbar />
        <Box sx={{ mt: 3 }}>
          <VoitureListResults voitures={voitures} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
