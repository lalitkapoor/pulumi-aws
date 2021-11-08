// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

// Export members:
export * from "./voiceConnector";
export * from "./voiceConnectorGroup";
export * from "./voiceConnectorLogging";
export * from "./voiceConnectorOrganization";
export * from "./voiceConnectorStreaming";
export * from "./voiceConnectorTermination";
export * from "./voiceConnectorTerminationCredentials";

// Import resources to register:
import { VoiceConnector } from "./voiceConnector";
import { VoiceConnectorGroup } from "./voiceConnectorGroup";
import { VoiceConnectorLogging } from "./voiceConnectorLogging";
import { VoiceConnectorOrganization } from "./voiceConnectorOrganization";
import { VoiceConnectorStreaming } from "./voiceConnectorStreaming";
import { VoiceConnectorTermination } from "./voiceConnectorTermination";
import { VoiceConnectorTerminationCredentials } from "./voiceConnectorTerminationCredentials";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "aws:chime/voiceConnector:VoiceConnector":
                return new VoiceConnector(name, <any>undefined, { urn })
            case "aws:chime/voiceConnectorGroup:VoiceConnectorGroup":
                return new VoiceConnectorGroup(name, <any>undefined, { urn })
            case "aws:chime/voiceConnectorLogging:VoiceConnectorLogging":
                return new VoiceConnectorLogging(name, <any>undefined, { urn })
            case "aws:chime/voiceConnectorOrganization:VoiceConnectorOrganization":
                return new VoiceConnectorOrganization(name, <any>undefined, { urn })
            case "aws:chime/voiceConnectorStreaming:VoiceConnectorStreaming":
                return new VoiceConnectorStreaming(name, <any>undefined, { urn })
            case "aws:chime/voiceConnectorTermination:VoiceConnectorTermination":
                return new VoiceConnectorTermination(name, <any>undefined, { urn })
            case "aws:chime/voiceConnectorTerminationCredentials:VoiceConnectorTerminationCredentials":
                return new VoiceConnectorTerminationCredentials(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("aws", "chime/voiceConnector", _module)
pulumi.runtime.registerResourceModule("aws", "chime/voiceConnectorGroup", _module)
pulumi.runtime.registerResourceModule("aws", "chime/voiceConnectorLogging", _module)
pulumi.runtime.registerResourceModule("aws", "chime/voiceConnectorOrganization", _module)
pulumi.runtime.registerResourceModule("aws", "chime/voiceConnectorStreaming", _module)
pulumi.runtime.registerResourceModule("aws", "chime/voiceConnectorTermination", _module)
pulumi.runtime.registerResourceModule("aws", "chime/voiceConnectorTerminationCredentials", _module)