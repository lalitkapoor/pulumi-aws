// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ApiGateway.Inputs
{

    public sealed class DomainNameMutualTlsAuthenticationGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, `s3://bucket-name/key-name`.
        /// The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version.
        /// </summary>
        [Input("truststoreUri", required: true)]
        public Input<string> TruststoreUri { get; set; } = null!;

        /// <summary>
        /// The version of the S3 object that contains the truststore. To specify a version, you must have versioning enabled for the S3 bucket.
        /// </summary>
        [Input("truststoreVersion")]
        public Input<string>? TruststoreVersion { get; set; }

        public DomainNameMutualTlsAuthenticationGetArgs()
        {
        }
    }
}