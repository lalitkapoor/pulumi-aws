// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this resource to invoke a lambda function. The lambda function is invoked with the [RequestResponse](https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html#API_Invoke_RequestSyntax) invocation type.
 *
 * > **NOTE:** This resource _only_ invokes the function when the arguments call for a create or update. In other words, after an initial invocation on _apply_, if the arguments do not change, a subsequent _apply_ does not invoke the function again. To dynamically invoke the function, see the `triggers` example below. To always invoke a function on each _apply_, see the [`aws.lambda.Invocation`](https://www.terraform.io/docs/providers/aws/d/lambda_invocation.html) data source.
 *
 * ## Example Usage
 * ### Dynamic Invocation Example Using Triggers
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * import * as crypto from "crypto";
 *
 * const example = new aws.lambda.Invocation("example", {
 *     functionName: aws_lambda_function.lambda_function_test.function_name,
 *     triggers: {
 *         redeployment: crypto.createHash('sha1').update(JSON.stringify([aws_lambda_function.example.environment])).digest('hex'),
 *     },
 *     input: JSON.stringify({
 *         key1: "value1",
 *         key2: "value2",
 *     }),
 * });
 * ```
 */
export class Invocation extends pulumi.CustomResource {
    /**
     * Get an existing Invocation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InvocationState, opts?: pulumi.CustomResourceOptions): Invocation {
        return new Invocation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:lambda/invocation:Invocation';

    /**
     * Returns true if the given object is an instance of Invocation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Invocation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Invocation.__pulumiType;
    }

    /**
     * Name of the lambda function.
     */
    public readonly functionName!: pulumi.Output<string>;
    /**
     * JSON payload to the lambda function.
     */
    public readonly input!: pulumi.Output<string>;
    /**
     * Qualifier (i.e., version) of the lambda function. Defaults to `$LATEST`.
     */
    public readonly qualifier!: pulumi.Output<string | undefined>;
    /**
     * String result of the lambda function invocation.
     */
    public /*out*/ readonly result!: pulumi.Output<string>;
    public readonly triggers!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a Invocation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InvocationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InvocationArgs | InvocationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InvocationState | undefined;
            resourceInputs["functionName"] = state ? state.functionName : undefined;
            resourceInputs["input"] = state ? state.input : undefined;
            resourceInputs["qualifier"] = state ? state.qualifier : undefined;
            resourceInputs["result"] = state ? state.result : undefined;
            resourceInputs["triggers"] = state ? state.triggers : undefined;
        } else {
            const args = argsOrState as InvocationArgs | undefined;
            if ((!args || args.functionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'functionName'");
            }
            if ((!args || args.input === undefined) && !opts.urn) {
                throw new Error("Missing required property 'input'");
            }
            resourceInputs["functionName"] = args ? args.functionName : undefined;
            resourceInputs["input"] = args ? args.input : undefined;
            resourceInputs["qualifier"] = args ? args.qualifier : undefined;
            resourceInputs["triggers"] = args ? args.triggers : undefined;
            resourceInputs["result"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Invocation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Invocation resources.
 */
export interface InvocationState {
    /**
     * Name of the lambda function.
     */
    functionName?: pulumi.Input<string>;
    /**
     * JSON payload to the lambda function.
     */
    input?: pulumi.Input<string>;
    /**
     * Qualifier (i.e., version) of the lambda function. Defaults to `$LATEST`.
     */
    qualifier?: pulumi.Input<string>;
    /**
     * String result of the lambda function invocation.
     */
    result?: pulumi.Input<string>;
    triggers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a Invocation resource.
 */
export interface InvocationArgs {
    /**
     * Name of the lambda function.
     */
    functionName: pulumi.Input<string>;
    /**
     * JSON payload to the lambda function.
     */
    input: pulumi.Input<string>;
    /**
     * Qualifier (i.e., version) of the lambda function. Defaults to `$LATEST`.
     */
    qualifier?: pulumi.Input<string>;
    triggers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}