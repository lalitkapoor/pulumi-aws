// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Glue.Inputs
{

    public sealed class SecurityConfigurationEncryptionConfigurationGetArgs : Pulumi.ResourceArgs
    {
        [Input("cloudwatchEncryption", required: true)]
        public Input<Inputs.SecurityConfigurationEncryptionConfigurationCloudwatchEncryptionGetArgs> CloudwatchEncryption { get; set; } = null!;

        [Input("jobBookmarksEncryption", required: true)]
        public Input<Inputs.SecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionGetArgs> JobBookmarksEncryption { get; set; } = null!;

        /// <summary>
        /// A `s3_encryption ` block as described below, which contains encryption configuration for S3 data.
        /// </summary>
        [Input("s3Encryption", required: true)]
        public Input<Inputs.SecurityConfigurationEncryptionConfigurationS3EncryptionGetArgs> S3Encryption { get; set; } = null!;

        public SecurityConfigurationEncryptionConfigurationGetArgs()
        {
        }
    }
}