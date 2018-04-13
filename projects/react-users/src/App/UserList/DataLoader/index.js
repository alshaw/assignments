import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

const DataLoader = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader size="huge">is this working</Loader>
      </Dimmer>
    </Segment>
  </div>
);

export default DataLoader;