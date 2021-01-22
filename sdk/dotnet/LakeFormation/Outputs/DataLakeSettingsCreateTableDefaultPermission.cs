// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.LakeFormation.Outputs
{

    [OutputType]
    public sealed class DataLakeSettingsCreateTableDefaultPermission
    {
        /// <summary>
        /// List of permissions that are granted to the principal. Valid values may include `ALL`, `SELECT`, `ALTER`, `DROP`, `DELETE`, `INSERT`, and `DESCRIBE`. For more details, see [Lake Formation Permissions Reference](https://docs.aws.amazon.com/lake-formation/latest/dg/lf-permissions-reference.html).
        /// </summary>
        public readonly ImmutableArray<string> Permissions;
        /// <summary>
        /// Principal who is granted permissions. To enforce metadata and underlying data access control only by IAM on new databases and tables set `principal` to `IAM_ALLOWED_PRINCIPALS` and `permissions` to `["ALL"]`.
        /// </summary>
        public readonly string? Principal;

        [OutputConstructor]
        private DataLakeSettingsCreateTableDefaultPermission(
            ImmutableArray<string> permissions,

            string? principal)
        {
            Permissions = permissions;
            Principal = principal;
        }
    }
}