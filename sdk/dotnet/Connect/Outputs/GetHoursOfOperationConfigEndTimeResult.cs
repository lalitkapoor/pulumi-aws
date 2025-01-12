// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Connect.Outputs
{

    [OutputType]
    public sealed class GetHoursOfOperationConfigEndTimeResult
    {
        /// <summary>
        /// Specifies the hour of opening.
        /// </summary>
        public readonly int Hours;
        /// <summary>
        /// Specifies the minute of opening.
        /// </summary>
        public readonly int Minutes;

        [OutputConstructor]
        private GetHoursOfOperationConfigEndTimeResult(
            int hours,

            int minutes)
        {
            Hours = hours;
            Minutes = minutes;
        }
    }
}
