import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// To test promises based on request
global.fetch = require("jest-fetch-mock");
