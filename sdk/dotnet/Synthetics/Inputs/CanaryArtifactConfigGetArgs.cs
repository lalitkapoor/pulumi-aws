// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Synthetics.Inputs
{

    public sealed class CanaryArtifactConfigGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Configuration of the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. See S3 Encryption.
        /// </summary>
        [Input("s3Encryption")]
        public Input<Inputs.CanaryArtifactConfigS3EncryptionGetArgs>? S3Encryption { get; set; }

        public CanaryArtifactConfigGetArgs()
        {
        }
    }
}