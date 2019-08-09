# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class LoadBalancerCookieStickinessPolicy(pulumi.CustomResource):
    cookie_expiration_period: pulumi.Output[float]
    """
    The time period after which
    the session cookie should be considered stale, expressed in seconds.
    """
    lb_port: pulumi.Output[float]
    """
    The load balancer port to which the policy
    should be applied. This must be an active listener on the load
    balancer.
    """
    load_balancer: pulumi.Output[str]
    """
    The load balancer to which the policy
    should be attached.
    """
    name: pulumi.Output[str]
    """
    The name of the stickiness policy.
    """
    def __init__(__self__, resource_name, opts=None, cookie_expiration_period=None, lb_port=None, load_balancer=None, name=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a load balancer cookie stickiness policy, which allows an ELB to control the sticky session lifetime of the browser.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[float] cookie_expiration_period: The time period after which
               the session cookie should be considered stale, expressed in seconds.
        :param pulumi.Input[float] lb_port: The load balancer port to which the policy
               should be applied. This must be an active listener on the load
               balancer.
        :param pulumi.Input[str] load_balancer: The load balancer to which the policy
               should be attached.
        :param pulumi.Input[str] name: The name of the stickiness policy.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/lb_cookie_stickiness_policy.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['cookie_expiration_period'] = cookie_expiration_period
            if lb_port is None:
                raise TypeError("Missing required property 'lb_port'")
            __props__['lb_port'] = lb_port
            if load_balancer is None:
                raise TypeError("Missing required property 'load_balancer'")
            __props__['load_balancer'] = load_balancer
            __props__['name'] = name
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="aws:elasticloadbalancing/loadBalancerCookieStickinessPolicy:LoadBalancerCookieStickinessPolicy")])
        opts = alias_opts if opts is None else opts.merge(alias_opts)
        super(LoadBalancerCookieStickinessPolicy, __self__).__init__(
            'aws:elb/loadBalancerCookieStickinessPolicy:LoadBalancerCookieStickinessPolicy',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, cookie_expiration_period=None, lb_port=None, load_balancer=None, name=None):
        """
        Get an existing LoadBalancerCookieStickinessPolicy resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[float] cookie_expiration_period: The time period after which
               the session cookie should be considered stale, expressed in seconds.
        :param pulumi.Input[float] lb_port: The load balancer port to which the policy
               should be applied. This must be an active listener on the load
               balancer.
        :param pulumi.Input[str] load_balancer: The load balancer to which the policy
               should be attached.
        :param pulumi.Input[str] name: The name of the stickiness policy.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/lb_cookie_stickiness_policy.html.markdown.
        """
        opts = pulumi.ResourceOptions(id=id) if opts is None else opts.merge(pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["cookie_expiration_period"] = cookie_expiration_period
        __props__["lb_port"] = lb_port
        __props__["load_balancer"] = load_balancer
        __props__["name"] = name
        return LoadBalancerCookieStickinessPolicy(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
