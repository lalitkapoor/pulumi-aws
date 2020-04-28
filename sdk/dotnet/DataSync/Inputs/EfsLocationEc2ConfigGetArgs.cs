// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.DataSync.Inputs
{

    public sealed class EfsLocationEc2ConfigGetArgs : Pulumi.ResourceArgs
    {
        [Input("securityGroupArns", required: true)]
        private InputList<string>? _securityGroupArns;

        /// <summary>
        /// List of Amazon Resource Names (ARNs) of the EC2 Security Groups that are associated with the EFS Mount Target.
        /// </summary>
        public InputList<string> SecurityGroupArns
        {
            get => _securityGroupArns ?? (_securityGroupArns = new InputList<string>());
            set => _securityGroupArns = value;
        }

        /// <summary>
        /// Amazon Resource Name (ARN) of the EC2 Subnet that is associated with the EFS Mount Target.
        /// </summary>
        [Input("subnetArn", required: true)]
        public Input<string> SubnetArn { get; set; } = null!;

        public EfsLocationEc2ConfigGetArgs()
        {
        }
    }
}