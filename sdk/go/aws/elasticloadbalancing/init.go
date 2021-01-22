// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package elasticloadbalancing

import (
	"fmt"

	"github.com/blang/semver"
	"github.com/pulumi/pulumi-aws/sdk/v3/go/aws"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

type module struct {
	version semver.Version
}

func (m *module) Version() semver.Version {
	return m.version
}

func (m *module) Construct(ctx *pulumi.Context, name, typ, urn string) (r pulumi.Resource, err error) {
	switch typ {
	case "aws:elasticloadbalancing/appCookieStickinessPolicy:AppCookieStickinessPolicy":
		r, err = NewAppCookieStickinessPolicy(ctx, name, nil, pulumi.URN_(urn))
	case "aws:elasticloadbalancing/attachment:Attachment":
		r, err = NewAttachment(ctx, name, nil, pulumi.URN_(urn))
	case "aws:elasticloadbalancing/listenerPolicy:ListenerPolicy":
		r, err = NewListenerPolicy(ctx, name, nil, pulumi.URN_(urn))
	case "aws:elasticloadbalancing/loadBalancer:LoadBalancer":
		r, err = NewLoadBalancer(ctx, name, nil, pulumi.URN_(urn))
	case "aws:elasticloadbalancing/loadBalancerBackendServerPolicy:LoadBalancerBackendServerPolicy":
		r, err = NewLoadBalancerBackendServerPolicy(ctx, name, nil, pulumi.URN_(urn))
	case "aws:elasticloadbalancing/loadBalancerCookieStickinessPolicy:LoadBalancerCookieStickinessPolicy":
		r, err = NewLoadBalancerCookieStickinessPolicy(ctx, name, nil, pulumi.URN_(urn))
	case "aws:elasticloadbalancing/loadBalancerPolicy:LoadBalancerPolicy":
		r, err = NewLoadBalancerPolicy(ctx, name, nil, pulumi.URN_(urn))
	case "aws:elasticloadbalancing/sslNegotiationPolicy:SslNegotiationPolicy":
		r, err = NewSslNegotiationPolicy(ctx, name, nil, pulumi.URN_(urn))
	default:
		return nil, fmt.Errorf("unknown resource type: %s", typ)
	}

	return
}

func init() {
	version, err := aws.PkgVersion()
	if err != nil {
		fmt.Println("failed to determine package version. defaulting to v1: %v", err)
	}
	pulumi.RegisterResourceModule(
		"aws",
		"elasticloadbalancing/appCookieStickinessPolicy",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"elasticloadbalancing/attachment",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"elasticloadbalancing/listenerPolicy",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"elasticloadbalancing/loadBalancer",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"elasticloadbalancing/loadBalancerBackendServerPolicy",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"elasticloadbalancing/loadBalancerCookieStickinessPolicy",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"elasticloadbalancing/loadBalancerPolicy",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"elasticloadbalancing/sslNegotiationPolicy",
		&module{version},
	)
}