import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  window.addEventListener('error', e => {
    if (e.message === 'ResizeObserver loop limit exceeded' || e.message === 'Script error.') {
      const resizeObserverErrDiv = document.getElementById(
        'webpack-dev-server-client-overlay-div'
      )
      const resizeObserverErr = document.getElementById(
        'webpack-dev-server-client-overlay'
      )
      if (resizeObserverErr) {
        resizeObserverErr.setAttribute('style', 'display: none');
      }
      if (resizeObserverErrDiv) {
        resizeObserverErrDiv.setAttribute('style', 'display: none');
      }
    }
  })
 }, []);

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
                element={<ReaderStatus />}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/rack1/error`}
                element={<RackError />}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/rack1/completed`}
                element={<RackCompleted />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/review-report`}
                element={<ReviewReport />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/cassette`}
                element={<Cassette />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/cassette/manually`}
                element={<CassetteManually />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/cassette/batch-entry`}
                element={<CassetteResult />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/cassette/load-cassette`}
                element={<Load />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance`}
                element={<MaintenanceLogin />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance/view`}
                element={<Maintenance />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/isolatereports-status`}
                element={<IsolateReportsStatus />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance/alert`}
                element={<Alert />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance/systemstats`}
                element={<Systemstats />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance/systemstatsone`}
                element={<Systemstatsone />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance/qc`}
                element={<Qc />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports`}
                element={<Reports />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/login`}
                element={<ReportsLogin />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/isolate-reports`}
                element={<IsolateReports />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/isolate-reports1`}
                element={<IsolateReports1 />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/isloate-reportsnew`}
                element={<IsolatereportsNew />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/generate-reports`}
                element={<Generatereports />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/unverified-reports`}
                element={<Unverifiedreports />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/view-report`}
                element={<Viewreport />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/report1`}
                element={<ReportOne />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/report1-two`}
                element={<ReportOneTwo />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/reportsattribute`}
                element={<ReportsAttribute />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/reportsattributetwo`}
                element={<ReportsAttributeTwo />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/sample-report`}
                element={<ReportsSample />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/support`}
                element={<ReportsSupport />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/qc-reports`}
                element={<Qcreports />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/qc-status`}
                element={<Qcstatus />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/order`}
                element={<Order />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/order/:productSlug`}
                element={<ProductDetail />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/system-setup/system-setupnew`}
                element={<Systmsetup />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/system-setup`}
                element={<SystemSetup />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/system-setup/ip`}
                element={<SystemSetupIp />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/system-setup/business-info`}
                element={<SystemSetupBInfo />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/system-setup/personal-info`}
                element={<SystemSetupPInfo />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/support`}
                element={<Support />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/build-report`}
                element={<BuildReport />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/build-report/grid`}
                element={<BuildReportGrid />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/build-report/graph`}
                element={<BuildReportGraph />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/sample-details`}
                element={<SampleDetails />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/sample-report/concentration-details`}
                element={<SampleConcentrationDetails />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/sample-report/end-results`}
                element={<EndResultDetails />}
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
