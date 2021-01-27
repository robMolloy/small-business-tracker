import React from "react";
import { ContactContextProvider } from "./ContactContext";
import { CustomerContextProvider } from "./CustomerContext";
import { PrjCusLinkContextProvider } from "./PrjCusLinkContext";
import { ProjectContextProvider } from "./ProjectContext";
import { RecItemContextProvider } from "./RecItemContext";
import { RecordContextProvider } from "./RecordContext";

const AllContextProviders = ({ children }) => {
  return (
    <ContactContextProvider>
      <CustomerContextProvider>
        <PrjCusLinkContextProvider>
          <ProjectContextProvider>
            <RecItemContextProvider>
              <RecordContextProvider>{children}</RecordContextProvider>
            </RecItemContextProvider>
          </ProjectContextProvider>
        </PrjCusLinkContextProvider>
      </CustomerContextProvider>
    </ContactContextProvider>
  );
};

export default AllContextProviders;
