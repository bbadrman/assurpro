import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ResourcesPage from './pages/resources';
import QuoteRequest from './pages/quote-request';
import TaxiInsurance from './pages/taxi-insurance';
import TransportInsurance from './pages/transport-insurance';
import VTCInsurance from './pages/vtc-insurance';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/quote-request" element={<QuoteRequest />} />
        <Route path="/taxi-insurance" element={<TaxiInsurance />} />
        <Route path="/transport-insurance" element={<TransportInsurance />} />
        <Route path="/vtc-insurance" element={<VTCInsurance />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
