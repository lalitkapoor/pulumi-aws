// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ecs
{
    /// <summary>
    /// ## Import
    /// 
    /// `aws_ecs_tag` can be imported by using the ECS resource identifier and key, separated by a comma (`,`), e.g.,
    /// 
    /// ```sh
    ///  $ pulumi import aws:ecs/tag:Tag example arn:aws:ecs:us-east-1:123456789012:cluster/example,Name
    /// ```
    /// </summary>
    [AwsResourceType("aws:ecs/tag:Tag")]
    public partial class Tag : Pulumi.CustomResource
    {
        /// <summary>
        /// Tag name.
        /// </summary>
        [Output("key")]
        public Output<string> Key { get; private set; } = null!;

        /// <summary>
        /// Amazon Resource Name (ARN) of the ECS resource to tag.
        /// </summary>
        [Output("resourceArn")]
        public Output<string> ResourceArn { get; private set; } = null!;

        /// <summary>
        /// Tag value.
        /// </summary>
        [Output("value")]
        public Output<string> Value { get; private set; } = null!;


        /// <summary>
        /// Create a Tag resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Tag(string name, TagArgs args, CustomResourceOptions? options = null)
            : base("aws:ecs/tag:Tag", name, args ?? new TagArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Tag(string name, Input<string> id, TagState? state = null, CustomResourceOptions? options = null)
            : base("aws:ecs/tag:Tag", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Tag resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Tag Get(string name, Input<string> id, TagState? state = null, CustomResourceOptions? options = null)
        {
            return new Tag(name, id, state, options);
        }
    }

    public sealed class TagArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Tag name.
        /// </summary>
        [Input("key", required: true)]
        public Input<string> Key { get; set; } = null!;

        /// <summary>
        /// Amazon Resource Name (ARN) of the ECS resource to tag.
        /// </summary>
        [Input("resourceArn", required: true)]
        public Input<string> ResourceArn { get; set; } = null!;

        /// <summary>
        /// Tag value.
        /// </summary>
        [Input("value", required: true)]
        public Input<string> Value { get; set; } = null!;

        public TagArgs()
        {
        }
    }

    public sealed class TagState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Tag name.
        /// </summary>
        [Input("key")]
        public Input<string>? Key { get; set; }

        /// <summary>
        /// Amazon Resource Name (ARN) of the ECS resource to tag.
        /// </summary>
        [Input("resourceArn")]
        public Input<string>? ResourceArn { get; set; }

        /// <summary>
        /// Tag value.
        /// </summary>
        [Input("value")]
        public Input<string>? Value { get; set; }

        public TagState()
        {
        }
    }
}