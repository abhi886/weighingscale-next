export { default as Layout } from "./Layout";

// Why is this file needed
/* This index.js file is a re-export for all the modules in common folder. This file will expose the common folders functionality via
a single entry point. In other words, a person who would like to use this module should import only from the this file. Like 
import {Layout, ...} from "common/index.js" */
