import { NewsAgency } from "../newAgency/NewsAgency.js";
import { InternationalNewsChannel, LocalNewsStation, NewsNetwork } from "../newsNetwork/NewsNetwork.js";

// Usage
const newsAgency = new NewsAgency();
const mainNetwork = new NewsNetwork();

// Create child observers
const localStation = new LocalNewsStation();
const globalChannel = new InternationalNewsChannel();

// Build hierarchy
mainNetwork.addChild(localStation);
mainNetwork.addChild(globalChannel);

// Register composite observer with subject
newsAgency.attach(mainNetwork);

// Trigger notification
newsAgency.publishNews("TypeScript 5.0 released with new features!");