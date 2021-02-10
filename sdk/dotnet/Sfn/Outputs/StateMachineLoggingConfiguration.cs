// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Sfn.Outputs
{

    [OutputType]
    public sealed class StateMachineLoggingConfiguration
    {
        /// <summary>
        /// Determines whether execution data is included in your log. When set to FALSE, data is excluded.
        /// </summary>
        public readonly bool? IncludeExecutionData;
        /// <summary>
        /// Defines which category of execution history events are logged. Valid Values: ALL | ERROR | FATAL | OFF
        /// </summary>
        public readonly string? Level;
        /// <summary>
        /// Amazon Resource Name (ARN) of CloudWatch log group. Make sure the State Machine does have the right IAM Policies for Logging.
        /// </summary>
        public readonly string? LogDestination;

        [OutputConstructor]
        private StateMachineLoggingConfiguration(
            bool? includeExecutionData,

            string? level,

            string? logDestination)
        {
            IncludeExecutionData = includeExecutionData;
            Level = level;
            LogDestination = logDestination;
        }
    }
}