import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./styles.css";

import { Index } from "./routes/index";
import { PrivacyPage } from "./routes/PrivacyPage";
import { TermsPage } from "./routes/TermsPage";
import { ImprintPage } from "./routes/ImprintPage";

const queryClient = new QueryClient();

function App() {
  const path = window.location.pathname;
  const base = import.meta.env.BASE_URL;

  if (path === `${base}privacy` || path === "/privacy") {
    return <PrivacyPage />;
  }

  if (path === `${base}terms` || path === "/terms") {
    return <TermsPage />;
  }

  if (path === `${base}imprint` || path === "/imprint") {
    return <ImprintPage />;
  }

  return <Index />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);