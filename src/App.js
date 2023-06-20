import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import NoMatch from "./components/pages/NoMatch";
import Login from "./components/pages/Login";
import ReaderStatus from "./components/pages/reader-status/ReaderStatus";
import ReviewReport from "./components/pages/reader-status/ReviewReport";
import Cassette from "./components/pages/cassette/Cassette";
import Load from "./components/pages/cassette/Load-cassette";
import CassetteManually from "./components/pages/cassette/Manually";
import CassetteResult from "./components/pages/cassette/batch-entry";
import Maintenance from "./components/pages/maintenance/Maintenance";
import IsolateReportsStatus from "./components/pages/reports/isolatereports-status";
import MaintenanceLogin from "./components/pages/maintenance/Login";
import Reports from "./components/pages/reports/Reports";
import ReportsLogin from "./components/pages/reports/Login";
import ReportsSample from "./components/pages/reports/SampleReport";
import ReportsSupport from "./components/pages/reports/Support";
import Order from "./components/pages/order/Order";
import ProductDetail from "./components/pages/order/ProductDetail";
import Support from "./components/pages/Support";
import SystemSetup from "./components/pages/system-setup/SystemSetup";
import Systmsetup from "./components/pages/system-setup/system-setupnew";
import SystemSetupIp from "./components/pages/system-setup/SystemSetupIp";
import SystemSetupBInfo from "./components/pages/system-setup/SystemSetupBusinessInfo";
import SystemSetupPInfo from "./components/pages/system-setup/SystemSetupPersonalInfo";
import Header from "./components/shared/Header";
//import Sidebar from "./components/shared/Sidebar"
import SidebarLayout from "./components/shared/sidebarlayout";
import RackError from "./components/pages/reader-status/Error";
import RackCompleted from "./components/pages/reader-status/completed";
import IsolateReports from "./components/pages/reports/isolate-reports";
import IsolateReports1 from "./components/pages/reports/isolate-reports1";
import IsolatereportsNew from "./components/pages/reports/isloate-reportsnew";
import Generatereports from "./components/pages/reports/generate-reports";
import ReportOne from "./components/pages/reports/report1";
import ReportOneTwo from "./components/pages/reports/report1-two";
import Qcreports from "./components/pages/reports/qc-reports";
import Qcstatus from "./components/pages/reports/qc-status";
import ReportsAttribute from "./components/pages/reports/reportsattribute";
import ReportsAttributeTwo from "./components/pages/reports/reportsattribute-two";
import Unverifiedreports from "./components/pages/reports/unverified-reports";
import Viewreport from "./components/pages/reports/view-report";
import Alert from "./components/pages/maintenance/alert";
import Systemstats from "./components/pages/maintenance/systemstats";
import Qc from "./components/pages/maintenance/qc";
import Systemstatsone from "./components/pages/maintenance/systemstatsone";

//import Test101 from "./components/pages/test101/test101";

import BuildReport from "./components/pages/build-report";
import BuildReportGraph from "./components/pages/build-report/graph/reports";
import BuildReportGrid from "./components/pages/build-report/grid/reports";

import SampleDetails from "./components/pages/report-details";
import SampleConcentrationDetails from "./components/pages/report-details/startDetails/sampleConcentrationDetails";
import EndResultDetails from "./components/pages/report-details/endResults/endResult";

function App() {
  useEffect(() => {
    window.addEventListener("error", (e) => {
      if (
        e.message === "ResizeObserver loop limit exceeded" ||
        e.message === "Script error."
      ) {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);
  
  const ProtectedRoute = ({ element: Component, ...props }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === 'true';
    return isLoggedIn ? (
      <Component {...props} />
    ) : (
      <Navigate to={process.env.PUBLIC_URL + "/"} />
    );
  };

  return (
    <>
      <Router>
        <Header></Header>

        <div className="main-content-part">
          <Routes>
            <Route element={<SidebarLayout />}>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/readerstatus`}
                element={<ProtectedRoute element={ReaderStatus} />}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/rack1/error`}
                element={<ProtectedRoute element={RackError} />}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/rack1/completed`}
                element={<RackCompleted />}
                element={<ProtectedRoute element={RackCompleted} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/review-report`}
                element={<ProtectedRoute element={ReviewReport} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/cassette`}
                element={<ProtectedRoute element={Cassette} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/cassette/manually`}
                // element={<CassetteManually />}
                element={<ProtectedRoute element={CassetteManually} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/cassette/batch-entry`}
                // element={<CassetteResult />}
                element={<ProtectedRoute element={CassetteResult} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/cassette/load-cassette`}
                // element={<Load />}
                element={<ProtectedRoute element={Load} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance`}
                // element={<MaintenanceLogin />}
                element={<ProtectedRoute element={MaintenanceLogin} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance/view`}
                // element={<Maintenance />}
                element={<ProtectedRoute element={Maintenance} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/isolatereports-status`}
                element={<IsolateReportsStatus />}
                element={<ProtectedRoute element={ReviewReport} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance/alert`}
                // element={<Alert />}
                element={<ProtectedRoute element={Alert} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance/systemstats`}
                // element={<Systemstats />}
                element={<ProtectedRoute element={Systemstats} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance/systemstatsone`}
                // element={<Systemstatsone />}
                element={<ProtectedRoute element={Systemstatsone} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance/qc`}
                // element={<Qc />}
                element={<ProtectedRoute element={Qc} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports`}
                // element={<Reports />}
                element={<ProtectedRoute element={Reports} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/login`}
                // element={<ReportsLogin />}
                element={<ProtectedRoute element={ReportsLogin} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/isolate-reports`}
                // element={<IsolateReports />}
                element={<ProtectedRoute element={IsolateReports} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/isolate-reports1`}
                // element={<IsolateReports1 />}
                element={<ProtectedRoute element={IsolateReports1} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/isloate-reportsnew`}
                // element={<IsolatereportsNew />}
                element={<ProtectedRoute element={IsolatereportsNew} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/generate-reports`}
                // element={<Generatereports />}
                element={<ProtectedRoute element={Generatereports} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/unverified-reports`}
                // element={<Unverifiedreports />}
                element={<ProtectedRoute element={Unverifiedreports} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/view-report`}
                // element={<Viewreport />}
                element={<ProtectedRoute element={Viewreport} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/report1`}
                // element={<ReportOne />}
                element={<ProtectedRoute element={ReportOne} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/report1-two`}
                // element={<ReportOneTwo />}
                element={<ProtectedRoute element={ReportOneTwo} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/reportsattribute`}
                // element={<ReportsAttribute />}
                element={<ProtectedRoute element={ReportsAttribute} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/reportsattributetwo`}
                // element={<ReportsAttributeTwo />}
                element={<ProtectedRoute element={ReportsAttributeTwo} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/sample-report`}
                // element={<ReportsSample />}
                element={<ProtectedRoute element={ReportsSample} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/support`}
                // element={<ReportsSupport />}
                element={<ProtectedRoute element={ReportsSupport} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/qc-reports`}
                // element={<Qcreports />}
                element={<ProtectedRoute element={Qcreports} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/qc-status`}
                // element={<Qcstatus />}
                element={<ProtectedRoute element={Qcstatus} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/order`}
                // element={<Order />}
                element={<ProtectedRoute element={Order} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/order/:productSlug`}
                // element={<ProductDetail />}
                element={<ProtectedRoute element={ProductDetail} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/system-setup/system-setupnew`}
                // element={<Systmsetup />}
                element={<ProtectedRoute element={Systmsetup} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/system-setup`}
                // element={<SystemSetup />}
                element={<ProtectedRoute element={SystemSetup} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/system-setup/ip`}
                // element={<SystemSetupIp />}
                element={<ProtectedRoute element={SystemSetupIp} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/system-setup/business-info`}
                // element={<SystemSetupBInfo />}
                element={<ProtectedRoute element={SystemSetupBInfo} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/system-setup/personal-info`}
                // element={<SystemSetupPInfo />}
                element={<ProtectedRoute element={SystemSetupPInfo} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/support`}
                // element={<Support />}
                element={<ProtectedRoute element={Support} />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/build-report`}
                // element={<BuildReport />}
                element={<ProtectedRoute element={BuildReport} />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/build-report/grid`}
                // element={<BuildReportGrid />}
                element={<ProtectedRoute element={BuildReportGrid} />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/build-report/graph`}
                // element={<BuildReportGraph />}
                element={<ProtectedRoute element={BuildReportGraph} />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/sample-details`}
                // element={<SampleDetails />}
                element={<ProtectedRoute element={SampleDetails} />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/sample-report/concentration-details`}
                // element={<SampleConcentrationDetails />}
                element={<ProtectedRoute element={SampleConcentrationDetails} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/sample-report/end-results`}
                // element={<EndResultDetails />}
                element={<ProtectedRoute element={EndResultDetails} />}
              />

              <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
