import * as React from "react";
import { container } from "./layout.module.css";

const PolicyPage = () => {
  return (
    <main className={container}>
      <h1>Privacy Policy</h1>

      <p>
        This website does not collect private information except through third
        party integrations that you will be asked to accept. For cookie
        information store when you visit this site please read the cookie
        policy.
      </p>
    </main>
  );
};
export default PolicyPage;
