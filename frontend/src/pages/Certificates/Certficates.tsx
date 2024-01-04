import React, { useState } from "react";
import PageTransitionStyle from "../layout/PageTransitionStyle";
import { Breadcrumb } from "react-bootstrap";
import styled from "styled-components";
import Page1 from "./Page1";
import Page2 from "./Page2";

const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 2rem;
`;

const CertficatesPage = () => {
  const [pageNum, setPageNum] = useState(1);

  const currActive = pageNum === 1 ? true : false;

  return (
    <PageTransitionStyle>
      <StyledBreadcrumb>
        <Breadcrumb.Item
          className="item"
          active={currActive}
          onClick={() => setPageNum(1)}
        >
          Page 1
        </Breadcrumb.Item>
        <Breadcrumb.Item
          className="item"
          active={!currActive}
          onClick={() => setPageNum(2)}
        >
          Page 2
        </Breadcrumb.Item>
      </StyledBreadcrumb>
      {pageNum === 1 ? <Page1 /> : <Page2 />}
    </PageTransitionStyle>
  );
};

export default CertficatesPage;
