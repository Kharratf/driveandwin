import React, { useState } from "react";

import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { Distance } from "../components/dashboard/budget";
import { MesTrajets } from "../components/dashboard/latest-orders";
import { MesVoitures } from "../components/dashboard/latest-products";
import { Sales } from "../components/dashboard/sales";
import { TasksProgress } from "../components/dashboard/tasks-progress";
import { Carburant } from "../components/dashboard/total-customers";
import { MaxSpeed } from "../components/dashboard/total-profit";
import { TrafficByDevice } from "../components/dashboard/traffic-by-device";
import { DashboardLayout } from "../components/dashboard-layout";
import { Bar } from "react-chartjs-2";
import { Button, Card, CardContent, CardHeader, Divider } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import Swal from "sweetalert2/src/sweetalert2";
import Modal from "react-bootstrap/Modal";

const Page = () => {
  return (
    <>
      <Head>
        <title>Drive and win</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={4} sm={6} xl={4} xs={12}>
              <Distance />
            </Grid>
            <Grid item xl={4} lg={4} sm={6} xs={12}>
              <Carburant />
            </Grid>
            {/* <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid> */}
            <Grid item xl={4} lg={4} sm={6} xs={12}>
              <MaxSpeed sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <MesVoitures sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <MesTrajets />
            </Grid>

            <Grid item lg={8} md={12} xl={9} xs={12}>
              <Sales />
            </Grid>

            <Grid item lg={4} md={6} xl={3} xs={12}>
              <TrafficByDevice sx={{ height: "100%" }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
