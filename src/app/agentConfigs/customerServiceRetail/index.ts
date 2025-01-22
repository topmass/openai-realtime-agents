import listener from "./listener";
import returns from "./returns";
import sales from "./sales";
import simulatedHuman from "./simulatedHuman";
import { injectTransferTools } from "../utils";

listener.downstreamAgents = [returns, sales, simulatedHuman];
returns.downstreamAgents = [listener, sales, simulatedHuman];
sales.downstreamAgents = [listener, returns, simulatedHuman];
simulatedHuman.downstreamAgents = [listener, returns, sales];

const agents = injectTransferTools([
  listener,
  returns,
  sales,
  simulatedHuman,
]);

export default agents;