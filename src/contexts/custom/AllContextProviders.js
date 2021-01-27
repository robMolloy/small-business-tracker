import React from "react";
import ContactContext from "./ContactContext";
import CustomerContext from "./CustomerContext";
import PrjCusLinkContext from "./PrjCusLinkContext";
import ProjectContext from "./ProjectContext";
import RecItemContext from "./RecItemContext";
import RecordContext from "./RecordContext";

const AllContextProviders = ({ children }) => {
  return (
    <ContactContext.Provider>
      <CustomerContext.Provider>
        <PrjCusLinkContext.Provider>
          <ProjectContext.Provider>
            <RecItemContext.Provider>
              <RecordContext.Provider>{children}</RecordContext.Provider>
            </RecItemContext.Provider>
          </ProjectContext.Provider>
        </PrjCusLinkContext.Provider>
      </CustomerContext.Provider>
    </ContactContext.Provider>
  );
};

export default AllContextProviders;
