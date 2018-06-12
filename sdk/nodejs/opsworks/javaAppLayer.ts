// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides an OpsWorks Java application layer resource.
 */
export class JavaAppLayer extends pulumi.CustomResource {
    /**
     * Get an existing JavaAppLayer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: JavaAppLayerState): JavaAppLayer {
        return new JavaAppLayer(name, <any>state, { id });
    }

    /**
     * Keyword for the application container to use. Defaults to "tomcat".
     */
    public readonly appServer: pulumi.Output<string | undefined>;
    /**
     * Version of the selected application container to use. Defaults to "7".
     */
    public readonly appServerVersion: pulumi.Output<string | undefined>;
    /**
     * Whether to automatically assign an elastic IP address to the layer's instances.
     */
    public readonly autoAssignElasticIps: pulumi.Output<boolean | undefined>;
    /**
     * For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
     */
    public readonly autoAssignPublicIps: pulumi.Output<boolean | undefined>;
    /**
     * Whether to enable auto-healing for the layer.
     */
    public readonly autoHealing: pulumi.Output<boolean | undefined>;
    public readonly customConfigureRecipes: pulumi.Output<string[] | undefined>;
    public readonly customDeployRecipes: pulumi.Output<string[] | undefined>;
    /**
     * The ARN of an IAM profile that will be used for the layer's instances.
     */
    public readonly customInstanceProfileArn: pulumi.Output<string | undefined>;
    /**
     * Custom JSON attributes to apply to the layer.
     */
    public readonly customJson: pulumi.Output<string | undefined>;
    /**
     * Ids for a set of security groups to apply to the layer's instances.
     */
    public readonly customSecurityGroupIds: pulumi.Output<string[] | undefined>;
    public readonly customSetupRecipes: pulumi.Output<string[] | undefined>;
    public readonly customShutdownRecipes: pulumi.Output<string[] | undefined>;
    public readonly customUndeployRecipes: pulumi.Output<string[] | undefined>;
    /**
     * Whether to enable Elastic Load Balancing connection draining.
     */
    public readonly drainElbOnShutdown: pulumi.Output<boolean | undefined>;
    /**
     * `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
     */
    public readonly ebsVolumes: pulumi.Output<{ iops?: number, mountPoint: string, numberOfDisks: number, raidLevel?: string, size: number, type?: string }[] | undefined>;
    /**
     * Name of an Elastic Load Balancer to attach to this layer
     */
    public readonly elasticLoadBalancer: pulumi.Output<string | undefined>;
    /**
     * Whether to install OS and package updates on each instance when it boots.
     */
    public readonly installUpdatesOnBoot: pulumi.Output<boolean | undefined>;
    /**
     * The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
     */
    public readonly instanceShutdownTimeout: pulumi.Output<number | undefined>;
    /**
     * Options to set for the JVM.
     */
    public readonly jvmOptions: pulumi.Output<string | undefined>;
    /**
     * Keyword for the type of JVM to use. Defaults to `openjdk`.
     */
    public readonly jvmType: pulumi.Output<string | undefined>;
    /**
     * Version of JVM to use. Defaults to "7".
     */
    public readonly jvmVersion: pulumi.Output<string | undefined>;
    /**
     * A human-readable name for the layer.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The id of the stack the layer will belong to.
     */
    public readonly stackId: pulumi.Output<string>;
    /**
     * Names of a set of system packages to install on the layer's instances.
     */
    public readonly systemPackages: pulumi.Output<string[] | undefined>;
    /**
     * Whether to use EBS-optimized instances.
     */
    public readonly useEbsOptimizedInstances: pulumi.Output<boolean | undefined>;

    /**
     * Create a JavaAppLayer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JavaAppLayerArgs, opts?: pulumi.ResourceOptions)
    constructor(name: string, argsOrState?: JavaAppLayerArgs | JavaAppLayerState, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: JavaAppLayerState = argsOrState as JavaAppLayerState | undefined;
            inputs["appServer"] = state ? state.appServer : undefined;
            inputs["appServerVersion"] = state ? state.appServerVersion : undefined;
            inputs["autoAssignElasticIps"] = state ? state.autoAssignElasticIps : undefined;
            inputs["autoAssignPublicIps"] = state ? state.autoAssignPublicIps : undefined;
            inputs["autoHealing"] = state ? state.autoHealing : undefined;
            inputs["customConfigureRecipes"] = state ? state.customConfigureRecipes : undefined;
            inputs["customDeployRecipes"] = state ? state.customDeployRecipes : undefined;
            inputs["customInstanceProfileArn"] = state ? state.customInstanceProfileArn : undefined;
            inputs["customJson"] = state ? state.customJson : undefined;
            inputs["customSecurityGroupIds"] = state ? state.customSecurityGroupIds : undefined;
            inputs["customSetupRecipes"] = state ? state.customSetupRecipes : undefined;
            inputs["customShutdownRecipes"] = state ? state.customShutdownRecipes : undefined;
            inputs["customUndeployRecipes"] = state ? state.customUndeployRecipes : undefined;
            inputs["drainElbOnShutdown"] = state ? state.drainElbOnShutdown : undefined;
            inputs["ebsVolumes"] = state ? state.ebsVolumes : undefined;
            inputs["elasticLoadBalancer"] = state ? state.elasticLoadBalancer : undefined;
            inputs["installUpdatesOnBoot"] = state ? state.installUpdatesOnBoot : undefined;
            inputs["instanceShutdownTimeout"] = state ? state.instanceShutdownTimeout : undefined;
            inputs["jvmOptions"] = state ? state.jvmOptions : undefined;
            inputs["jvmType"] = state ? state.jvmType : undefined;
            inputs["jvmVersion"] = state ? state.jvmVersion : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["stackId"] = state ? state.stackId : undefined;
            inputs["systemPackages"] = state ? state.systemPackages : undefined;
            inputs["useEbsOptimizedInstances"] = state ? state.useEbsOptimizedInstances : undefined;
        } else {
            const args = argsOrState as JavaAppLayerArgs | undefined;
            if (!args || args.stackId === undefined) {
                throw new Error("Missing required property 'stackId'");
            }
            inputs["appServer"] = args ? args.appServer : undefined;
            inputs["appServerVersion"] = args ? args.appServerVersion : undefined;
            inputs["autoAssignElasticIps"] = args ? args.autoAssignElasticIps : undefined;
            inputs["autoAssignPublicIps"] = args ? args.autoAssignPublicIps : undefined;
            inputs["autoHealing"] = args ? args.autoHealing : undefined;
            inputs["customConfigureRecipes"] = args ? args.customConfigureRecipes : undefined;
            inputs["customDeployRecipes"] = args ? args.customDeployRecipes : undefined;
            inputs["customInstanceProfileArn"] = args ? args.customInstanceProfileArn : undefined;
            inputs["customJson"] = args ? args.customJson : undefined;
            inputs["customSecurityGroupIds"] = args ? args.customSecurityGroupIds : undefined;
            inputs["customSetupRecipes"] = args ? args.customSetupRecipes : undefined;
            inputs["customShutdownRecipes"] = args ? args.customShutdownRecipes : undefined;
            inputs["customUndeployRecipes"] = args ? args.customUndeployRecipes : undefined;
            inputs["drainElbOnShutdown"] = args ? args.drainElbOnShutdown : undefined;
            inputs["ebsVolumes"] = args ? args.ebsVolumes : undefined;
            inputs["elasticLoadBalancer"] = args ? args.elasticLoadBalancer : undefined;
            inputs["installUpdatesOnBoot"] = args ? args.installUpdatesOnBoot : undefined;
            inputs["instanceShutdownTimeout"] = args ? args.instanceShutdownTimeout : undefined;
            inputs["jvmOptions"] = args ? args.jvmOptions : undefined;
            inputs["jvmType"] = args ? args.jvmType : undefined;
            inputs["jvmVersion"] = args ? args.jvmVersion : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["stackId"] = args ? args.stackId : undefined;
            inputs["systemPackages"] = args ? args.systemPackages : undefined;
            inputs["useEbsOptimizedInstances"] = args ? args.useEbsOptimizedInstances : undefined;
        }
        super("aws:opsworks/javaAppLayer:JavaAppLayer", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering JavaAppLayer resources.
 */
export interface JavaAppLayerState {
    /**
     * Keyword for the application container to use. Defaults to "tomcat".
     */
    readonly appServer?: pulumi.Input<string>;
    /**
     * Version of the selected application container to use. Defaults to "7".
     */
    readonly appServerVersion?: pulumi.Input<string>;
    /**
     * Whether to automatically assign an elastic IP address to the layer's instances.
     */
    readonly autoAssignElasticIps?: pulumi.Input<boolean>;
    /**
     * For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
     */
    readonly autoAssignPublicIps?: pulumi.Input<boolean>;
    /**
     * Whether to enable auto-healing for the layer.
     */
    readonly autoHealing?: pulumi.Input<boolean>;
    readonly customConfigureRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly customDeployRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ARN of an IAM profile that will be used for the layer's instances.
     */
    readonly customInstanceProfileArn?: pulumi.Input<string>;
    /**
     * Custom JSON attributes to apply to the layer.
     */
    readonly customJson?: pulumi.Input<string>;
    /**
     * Ids for a set of security groups to apply to the layer's instances.
     */
    readonly customSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    readonly customSetupRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly customShutdownRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly customUndeployRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to enable Elastic Load Balancing connection draining.
     */
    readonly drainElbOnShutdown?: pulumi.Input<boolean>;
    /**
     * `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
     */
    readonly ebsVolumes?: pulumi.Input<{ iops?: pulumi.Input<number>, mountPoint: pulumi.Input<string>, numberOfDisks: pulumi.Input<number>, raidLevel?: pulumi.Input<string>, size: pulumi.Input<number>, type?: pulumi.Input<string> }[]>;
    /**
     * Name of an Elastic Load Balancer to attach to this layer
     */
    readonly elasticLoadBalancer?: pulumi.Input<string>;
    /**
     * Whether to install OS and package updates on each instance when it boots.
     */
    readonly installUpdatesOnBoot?: pulumi.Input<boolean>;
    /**
     * The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
     */
    readonly instanceShutdownTimeout?: pulumi.Input<number>;
    /**
     * Options to set for the JVM.
     */
    readonly jvmOptions?: pulumi.Input<string>;
    /**
     * Keyword for the type of JVM to use. Defaults to `openjdk`.
     */
    readonly jvmType?: pulumi.Input<string>;
    /**
     * Version of JVM to use. Defaults to "7".
     */
    readonly jvmVersion?: pulumi.Input<string>;
    /**
     * A human-readable name for the layer.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The id of the stack the layer will belong to.
     */
    readonly stackId?: pulumi.Input<string>;
    /**
     * Names of a set of system packages to install on the layer's instances.
     */
    readonly systemPackages?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to use EBS-optimized instances.
     */
    readonly useEbsOptimizedInstances?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a JavaAppLayer resource.
 */
export interface JavaAppLayerArgs {
    /**
     * Keyword for the application container to use. Defaults to "tomcat".
     */
    readonly appServer?: pulumi.Input<string>;
    /**
     * Version of the selected application container to use. Defaults to "7".
     */
    readonly appServerVersion?: pulumi.Input<string>;
    /**
     * Whether to automatically assign an elastic IP address to the layer's instances.
     */
    readonly autoAssignElasticIps?: pulumi.Input<boolean>;
    /**
     * For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
     */
    readonly autoAssignPublicIps?: pulumi.Input<boolean>;
    /**
     * Whether to enable auto-healing for the layer.
     */
    readonly autoHealing?: pulumi.Input<boolean>;
    readonly customConfigureRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly customDeployRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ARN of an IAM profile that will be used for the layer's instances.
     */
    readonly customInstanceProfileArn?: pulumi.Input<string>;
    /**
     * Custom JSON attributes to apply to the layer.
     */
    readonly customJson?: pulumi.Input<string>;
    /**
     * Ids for a set of security groups to apply to the layer's instances.
     */
    readonly customSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    readonly customSetupRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly customShutdownRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly customUndeployRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to enable Elastic Load Balancing connection draining.
     */
    readonly drainElbOnShutdown?: pulumi.Input<boolean>;
    /**
     * `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
     */
    readonly ebsVolumes?: pulumi.Input<{ iops?: pulumi.Input<number>, mountPoint: pulumi.Input<string>, numberOfDisks: pulumi.Input<number>, raidLevel?: pulumi.Input<string>, size: pulumi.Input<number>, type?: pulumi.Input<string> }[]>;
    /**
     * Name of an Elastic Load Balancer to attach to this layer
     */
    readonly elasticLoadBalancer?: pulumi.Input<string>;
    /**
     * Whether to install OS and package updates on each instance when it boots.
     */
    readonly installUpdatesOnBoot?: pulumi.Input<boolean>;
    /**
     * The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
     */
    readonly instanceShutdownTimeout?: pulumi.Input<number>;
    /**
     * Options to set for the JVM.
     */
    readonly jvmOptions?: pulumi.Input<string>;
    /**
     * Keyword for the type of JVM to use. Defaults to `openjdk`.
     */
    readonly jvmType?: pulumi.Input<string>;
    /**
     * Version of JVM to use. Defaults to "7".
     */
    readonly jvmVersion?: pulumi.Input<string>;
    /**
     * A human-readable name for the layer.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The id of the stack the layer will belong to.
     */
    readonly stackId: pulumi.Input<string>;
    /**
     * Names of a set of system packages to install on the layer's instances.
     */
    readonly systemPackages?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to use EBS-optimized instances.
     */
    readonly useEbsOptimizedInstances?: pulumi.Input<boolean>;
}