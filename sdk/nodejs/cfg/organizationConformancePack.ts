// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../types";
import * as utilities from "../utilities";

/**
 * Manages a Config Organization Conformance Pack. More information can be found in the [Managing Conformance Packs Across all Accounts in Your Organization](https://docs.aws.amazon.com/config/latest/developerguide/conformance-pack-organization-apis.html) and [AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html) documentation. Example conformance pack templates may be found in the [AWS Config Rules Repository](https://github.com/awslabs/aws-config-rules/tree/master/aws-config-conformance-packs).
 *
 * > **NOTE:** This resource must be created in the Organization master account or a delegated administrator account, and the Organization must have all features enabled. Every Organization account except those configured in the `excludedAccounts` argument must have a Configuration Recorder with proper IAM permissions before the Organization Conformance Pack will successfully create or update. See also the [`aws.cfg.Recorder` resource](https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html).
 *
 * ## Example Usage
 * ### Using Template Body
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const exampleOrganization = new aws.organizations.Organization("exampleOrganization", {
 *     awsServiceAccessPrincipals: ["config-multiaccountsetup.amazonaws.com"],
 *     featureSet: "ALL",
 * });
 * const exampleOrganizationConformancePack = new aws.cfg.OrganizationConformancePack("exampleOrganizationConformancePack", {
 *     inputParameters: [{
 *         parameterName: "AccessKeysRotatedParameterMaxAccessKeyAge",
 *         parameterValue: "90",
 *     }],
 *     templateBody: `Parameters:
 *   AccessKeysRotatedParameterMaxAccessKeyAge:
 *     Type: String
 * Resources:
 *   IAMPasswordPolicy:
 *     Properties:
 *       ConfigRuleName: IAMPasswordPolicy
 *       Source:
 *         Owner: AWS
 *         SourceIdentifier: IAM_PASSWORD_POLICY
 *     Type: AWS::Config::ConfigRule
 * `,
 * }, {
 *     dependsOn: [
 *         aws_config_configuration_recorder.example,
 *         exampleOrganization,
 *     ],
 * });
 * ```
 * ### Using Template S3 URI
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const exampleOrganization = new aws.organizations.Organization("exampleOrganization", {
 *     awsServiceAccessPrincipals: ["config-multiaccountsetup.amazonaws.com"],
 *     featureSet: "ALL",
 * });
 * const exampleBucket = new aws.s3.Bucket("exampleBucket", {});
 * const exampleBucketObject = new aws.s3.BucketObject("exampleBucketObject", {
 *     bucket: exampleBucket.id,
 *     key: "example-key",
 *     content: `Resources:
 *   IAMPasswordPolicy:
 *     Properties:
 *       ConfigRuleName: IAMPasswordPolicy
 *       Source:
 *         Owner: AWS
 *         SourceIdentifier: IAM_PASSWORD_POLICY
 *     Type: AWS::Config::ConfigRule
 * `,
 * });
 * const exampleOrganizationConformancePack = new aws.cfg.OrganizationConformancePack("exampleOrganizationConformancePack", {templateS3Uri: pulumi.interpolate`s3://${exampleBucket.bucket}/${exampleBucketObject.key}`}, {
 *     dependsOn: [
 *         aws_config_configuration_recorder.example,
 *         exampleOrganization,
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * Config Organization Conformance Packs can be imported using the `name`, e.g.
 *
 * ```sh
 *  $ pulumi import aws:cfg/organizationConformancePack:OrganizationConformancePack example example
 * ```
 */
export class OrganizationConformancePack extends pulumi.CustomResource {
    /**
     * Get an existing OrganizationConformancePack resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrganizationConformancePackState, opts?: pulumi.CustomResourceOptions): OrganizationConformancePack {
        return new OrganizationConformancePack(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:cfg/organizationConformancePack:OrganizationConformancePack';

    /**
     * Returns true if the given object is an instance of OrganizationConformancePack.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrganizationConformancePack {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrganizationConformancePack.__pulumiType;
    }

    /**
     * Amazon Resource Name (ARN) of the organization conformance pack.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Amazon S3 bucket where AWS Config stores conformance pack templates. Delivery bucket must begin with `awsconfigconforms` prefix. Maximum length of 63.
     */
    public readonly deliveryS3Bucket!: pulumi.Output<string | undefined>;
    /**
     * The prefix for the Amazon S3 bucket. Maximum length of 1024.
     */
    public readonly deliveryS3KeyPrefix!: pulumi.Output<string | undefined>;
    /**
     * Set of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack. Maximum of 1000 accounts.
     */
    public readonly excludedAccounts!: pulumi.Output<string[] | undefined>;
    /**
     * Set of configuration blocks describing input parameters passed to the conformance pack template. Documented below. When configured, the parameters must also be included in the `templateBody` or in the template stored in Amazon S3 if using `templateS3Uri`.
     */
    public readonly inputParameters!: pulumi.Output<outputs.cfg.OrganizationConformancePackInputParameter[] | undefined>;
    /**
     * The name of the organization conformance pack. Must begin with a letter and contain from 1 to 128 alphanumeric characters and hyphens.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A string containing full conformance pack template body. Maximum length of 51200. Drift detection is not possible with this argument.
     */
    public readonly templateBody!: pulumi.Output<string | undefined>;
    /**
     * Location of file, e.g. `s3://bucketname/prefix`, containing the template body. The uri must point to the conformance pack template that is located in an Amazon S3 bucket in the same region as the conformance pack. Maximum length of 1024. Drift detection is not possible with this argument.
     */
    public readonly templateS3Uri!: pulumi.Output<string | undefined>;

    /**
     * Create a OrganizationConformancePack resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: OrganizationConformancePackArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrganizationConformancePackArgs | OrganizationConformancePackState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OrganizationConformancePackState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["deliveryS3Bucket"] = state ? state.deliveryS3Bucket : undefined;
            inputs["deliveryS3KeyPrefix"] = state ? state.deliveryS3KeyPrefix : undefined;
            inputs["excludedAccounts"] = state ? state.excludedAccounts : undefined;
            inputs["inputParameters"] = state ? state.inputParameters : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["templateBody"] = state ? state.templateBody : undefined;
            inputs["templateS3Uri"] = state ? state.templateS3Uri : undefined;
        } else {
            const args = argsOrState as OrganizationConformancePackArgs | undefined;
            inputs["deliveryS3Bucket"] = args ? args.deliveryS3Bucket : undefined;
            inputs["deliveryS3KeyPrefix"] = args ? args.deliveryS3KeyPrefix : undefined;
            inputs["excludedAccounts"] = args ? args.excludedAccounts : undefined;
            inputs["inputParameters"] = args ? args.inputParameters : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["templateBody"] = args ? args.templateBody : undefined;
            inputs["templateS3Uri"] = args ? args.templateS3Uri : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(OrganizationConformancePack.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering OrganizationConformancePack resources.
 */
export interface OrganizationConformancePackState {
    /**
     * Amazon Resource Name (ARN) of the organization conformance pack.
     */
    arn?: pulumi.Input<string>;
    /**
     * Amazon S3 bucket where AWS Config stores conformance pack templates. Delivery bucket must begin with `awsconfigconforms` prefix. Maximum length of 63.
     */
    deliveryS3Bucket?: pulumi.Input<string>;
    /**
     * The prefix for the Amazon S3 bucket. Maximum length of 1024.
     */
    deliveryS3KeyPrefix?: pulumi.Input<string>;
    /**
     * Set of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack. Maximum of 1000 accounts.
     */
    excludedAccounts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set of configuration blocks describing input parameters passed to the conformance pack template. Documented below. When configured, the parameters must also be included in the `templateBody` or in the template stored in Amazon S3 if using `templateS3Uri`.
     */
    inputParameters?: pulumi.Input<pulumi.Input<inputs.cfg.OrganizationConformancePackInputParameter>[]>;
    /**
     * The name of the organization conformance pack. Must begin with a letter and contain from 1 to 128 alphanumeric characters and hyphens.
     */
    name?: pulumi.Input<string>;
    /**
     * A string containing full conformance pack template body. Maximum length of 51200. Drift detection is not possible with this argument.
     */
    templateBody?: pulumi.Input<string>;
    /**
     * Location of file, e.g. `s3://bucketname/prefix`, containing the template body. The uri must point to the conformance pack template that is located in an Amazon S3 bucket in the same region as the conformance pack. Maximum length of 1024. Drift detection is not possible with this argument.
     */
    templateS3Uri?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OrganizationConformancePack resource.
 */
export interface OrganizationConformancePackArgs {
    /**
     * Amazon S3 bucket where AWS Config stores conformance pack templates. Delivery bucket must begin with `awsconfigconforms` prefix. Maximum length of 63.
     */
    deliveryS3Bucket?: pulumi.Input<string>;
    /**
     * The prefix for the Amazon S3 bucket. Maximum length of 1024.
     */
    deliveryS3KeyPrefix?: pulumi.Input<string>;
    /**
     * Set of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack. Maximum of 1000 accounts.
     */
    excludedAccounts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set of configuration blocks describing input parameters passed to the conformance pack template. Documented below. When configured, the parameters must also be included in the `templateBody` or in the template stored in Amazon S3 if using `templateS3Uri`.
     */
    inputParameters?: pulumi.Input<pulumi.Input<inputs.cfg.OrganizationConformancePackInputParameter>[]>;
    /**
     * The name of the organization conformance pack. Must begin with a letter and contain from 1 to 128 alphanumeric characters and hyphens.
     */
    name?: pulumi.Input<string>;
    /**
     * A string containing full conformance pack template body. Maximum length of 51200. Drift detection is not possible with this argument.
     */
    templateBody?: pulumi.Input<string>;
    /**
     * Location of file, e.g. `s3://bucketname/prefix`, containing the template body. The uri must point to the conformance pack template that is located in an Amazon S3 bucket in the same region as the conformance pack. Maximum length of 1024. Drift detection is not possible with this argument.
     */
    templateS3Uri?: pulumi.Input<string>;
}