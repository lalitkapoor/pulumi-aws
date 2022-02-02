// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ec2
{
    /// <summary>
    /// Previews a CIDR from an IPAM address pool. Only works for private IPv4.
    /// 
    /// ## Example Usage
    /// 
    /// Basic usage:
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Aws = Pulumi.Aws;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         var current = Output.Create(Aws.GetRegion.InvokeAsync());
    ///         var exampleVpcIpam = new Aws.Ec2.VpcIpam("exampleVpcIpam", new Aws.Ec2.VpcIpamArgs
    ///         {
    ///             OperatingRegions = 
    ///             {
    ///                 new Aws.Ec2.Inputs.VpcIpamOperatingRegionArgs
    ///                 {
    ///                     RegionName = current.Apply(current =&gt; current.Name),
    ///                 },
    ///             },
    ///         });
    ///         var exampleVpcIpamPool = new Aws.Ec2.VpcIpamPool("exampleVpcIpamPool", new Aws.Ec2.VpcIpamPoolArgs
    ///         {
    ///             AddressFamily = "ipv4",
    ///             IpamScopeId = exampleVpcIpam.PrivateDefaultScopeId,
    ///             Locale = current.Apply(current =&gt; current.Name),
    ///         });
    ///         var exampleVpcIpamPoolCidr = new Aws.Ec2.VpcIpamPoolCidr("exampleVpcIpamPoolCidr", new Aws.Ec2.VpcIpamPoolCidrArgs
    ///         {
    ///             IpamPoolId = exampleVpcIpamPool.Id,
    ///             Cidr = "172.2.0.0/16",
    ///         });
    ///         var exampleVpcIpamPreviewNextCidr = new Aws.Ec2.VpcIpamPreviewNextCidr("exampleVpcIpamPreviewNextCidr", new Aws.Ec2.VpcIpamPreviewNextCidrArgs
    ///         {
    ///             IpamPoolId = exampleVpcIpamPool.Id,
    ///             NetmaskLength = 28,
    ///             DisallowedCidrs = 
    ///             {
    ///                 "172.2.0.0/32",
    ///             },
    ///         }, new CustomResourceOptions
    ///         {
    ///             DependsOn = 
    ///             {
    ///                 exampleVpcIpamPoolCidr,
    ///             },
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    [AwsResourceType("aws:ec2/vpcIpamPreviewNextCidr:VpcIpamPreviewNextCidr")]
    public partial class VpcIpamPreviewNextCidr : Pulumi.CustomResource
    {
        /// <summary>
        /// The previewed CIDR from the pool.
        /// </summary>
        [Output("cidr")]
        public Output<string> Cidr { get; private set; } = null!;

        /// <summary>
        /// Exclude a particular CIDR range from being returned by the pool.
        /// </summary>
        [Output("disallowedCidrs")]
        public Output<ImmutableArray<string>> DisallowedCidrs { get; private set; } = null!;

        /// <summary>
        /// The ID of the pool to which you want to assign a CIDR.
        /// </summary>
        [Output("ipamPoolId")]
        public Output<string> IpamPoolId { get; private set; } = null!;

        /// <summary>
        /// The netmask length of the CIDR you would like to preview from the IPAM pool.
        /// </summary>
        [Output("netmaskLength")]
        public Output<int?> NetmaskLength { get; private set; } = null!;


        /// <summary>
        /// Create a VpcIpamPreviewNextCidr resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public VpcIpamPreviewNextCidr(string name, VpcIpamPreviewNextCidrArgs args, CustomResourceOptions? options = null)
            : base("aws:ec2/vpcIpamPreviewNextCidr:VpcIpamPreviewNextCidr", name, args ?? new VpcIpamPreviewNextCidrArgs(), MakeResourceOptions(options, ""))
        {
        }

        private VpcIpamPreviewNextCidr(string name, Input<string> id, VpcIpamPreviewNextCidrState? state = null, CustomResourceOptions? options = null)
            : base("aws:ec2/vpcIpamPreviewNextCidr:VpcIpamPreviewNextCidr", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing VpcIpamPreviewNextCidr resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static VpcIpamPreviewNextCidr Get(string name, Input<string> id, VpcIpamPreviewNextCidrState? state = null, CustomResourceOptions? options = null)
        {
            return new VpcIpamPreviewNextCidr(name, id, state, options);
        }
    }

    public sealed class VpcIpamPreviewNextCidrArgs : Pulumi.ResourceArgs
    {
        [Input("disallowedCidrs")]
        private InputList<string>? _disallowedCidrs;

        /// <summary>
        /// Exclude a particular CIDR range from being returned by the pool.
        /// </summary>
        public InputList<string> DisallowedCidrs
        {
            get => _disallowedCidrs ?? (_disallowedCidrs = new InputList<string>());
            set => _disallowedCidrs = value;
        }

        /// <summary>
        /// The ID of the pool to which you want to assign a CIDR.
        /// </summary>
        [Input("ipamPoolId", required: true)]
        public Input<string> IpamPoolId { get; set; } = null!;

        /// <summary>
        /// The netmask length of the CIDR you would like to preview from the IPAM pool.
        /// </summary>
        [Input("netmaskLength")]
        public Input<int>? NetmaskLength { get; set; }

        public VpcIpamPreviewNextCidrArgs()
        {
        }
    }

    public sealed class VpcIpamPreviewNextCidrState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The previewed CIDR from the pool.
        /// </summary>
        [Input("cidr")]
        public Input<string>? Cidr { get; set; }

        [Input("disallowedCidrs")]
        private InputList<string>? _disallowedCidrs;

        /// <summary>
        /// Exclude a particular CIDR range from being returned by the pool.
        /// </summary>
        public InputList<string> DisallowedCidrs
        {
            get => _disallowedCidrs ?? (_disallowedCidrs = new InputList<string>());
            set => _disallowedCidrs = value;
        }

        /// <summary>
        /// The ID of the pool to which you want to assign a CIDR.
        /// </summary>
        [Input("ipamPoolId")]
        public Input<string>? IpamPoolId { get; set; }

        /// <summary>
        /// The netmask length of the CIDR you would like to preview from the IPAM pool.
        /// </summary>
        [Input("netmaskLength")]
        public Input<int>? NetmaskLength { get; set; }

        public VpcIpamPreviewNextCidrState()
        {
        }
    }
}