import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";

const Footer: FC = (): JSX.Element => {
  return (
    <Page id="footer">
      <PageHeader header="O PORTFOLIO" description="INFORMACJE" />
    </Page>
  );
};

export default Footer;
