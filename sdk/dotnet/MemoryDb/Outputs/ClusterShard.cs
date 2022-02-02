// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.MemoryDb.Outputs
{

    [OutputType]
    public sealed class ClusterShard
    {
        /// <summary>
        /// Name of this node.
        /// * `endpoint`
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// Set of nodes in this shard.
        /// </summary>
        public readonly ImmutableArray<Outputs.ClusterShardNode> Nodes;
        /// <summary>
        /// Number of individual nodes in this shard.
        /// </summary>
        public readonly int? NumNodes;
        /// <summary>
        /// Keyspace for this shard. Example: `0-16383`.
        /// </summary>
        public readonly string? Slots;

        [OutputConstructor]
        private ClusterShard(
            string? name,

            ImmutableArray<Outputs.ClusterShardNode> nodes,

            int? numNodes,

            string? slots)
        {
            Name = name;
            Nodes = nodes;
            NumNodes = numNodes;
            Slots = slots;
        }
    }
}