// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AppSync.Outputs
{

    [OutputType]
    public sealed class GraphQLApiLambdaAuthorizerConfig
    {
        /// <summary>
        /// The number of seconds a response should be cached for. The default is 5 minutes (300 seconds). The Lambda function can override this by returning a `ttlOverride` key in its response. A value of 0 disables caching of responses. Minimum value of 0. Maximum value of 3600.
        /// </summary>
        public readonly int? AuthorizerResultTtlInSeconds;
        /// <summary>
        /// The ARN of the Lambda function to be called for authorization. Note: This Lambda function must have a resource-based policy assigned to it, to allow `lambda:InvokeFunction` from service principal `appsync.amazonaws.com`.
        /// </summary>
        public readonly string AuthorizerUri;
        /// <summary>
        /// A regular expression for validation of tokens before the Lambda function is called.
        /// </summary>
        public readonly string? IdentityValidationExpression;

        [OutputConstructor]
        private GraphQLApiLambdaAuthorizerConfig(
            int? authorizerResultTtlInSeconds,

            string authorizerUri,

            string? identityValidationExpression)
        {
            AuthorizerResultTtlInSeconds = authorizerResultTtlInSeconds;
            AuthorizerUri = authorizerUri;
            IdentityValidationExpression = identityValidationExpression;
        }
    }
}