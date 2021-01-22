// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package apigateway

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
	case "aws:apigateway/account:Account":
		r, err = NewAccount(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/apiKey:ApiKey":
		r, err = NewApiKey(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/authorizer:Authorizer":
		r, err = NewAuthorizer(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/basePathMapping:BasePathMapping":
		r, err = NewBasePathMapping(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/clientCertificate:ClientCertificate":
		r, err = NewClientCertificate(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/deployment:Deployment":
		r, err = NewDeployment(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/documentationPart:DocumentationPart":
		r, err = NewDocumentationPart(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/documentationVersion:DocumentationVersion":
		r, err = NewDocumentationVersion(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/domainName:DomainName":
		r, err = NewDomainName(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/integration:Integration":
		r, err = NewIntegration(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/integrationResponse:IntegrationResponse":
		r, err = NewIntegrationResponse(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/method:Method":
		r, err = NewMethod(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/methodResponse:MethodResponse":
		r, err = NewMethodResponse(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/methodSettings:MethodSettings":
		r, err = NewMethodSettings(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/model:Model":
		r, err = NewModel(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/requestValidator:RequestValidator":
		r, err = NewRequestValidator(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/resource:Resource":
		r, err = NewResource(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/response:Response":
		r, err = NewResponse(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/restApi:RestApi":
		r, err = NewRestApi(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/restApiPolicy:RestApiPolicy":
		r, err = NewRestApiPolicy(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/stage:Stage":
		r, err = NewStage(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/usagePlan:UsagePlan":
		r, err = NewUsagePlan(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/usagePlanKey:UsagePlanKey":
		r, err = NewUsagePlanKey(ctx, name, nil, pulumi.URN_(urn))
	case "aws:apigateway/vpcLink:VpcLink":
		r, err = NewVpcLink(ctx, name, nil, pulumi.URN_(urn))
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
		"apigateway/account",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/apiKey",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/authorizer",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/basePathMapping",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/clientCertificate",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/deployment",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/documentationPart",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/documentationVersion",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/domainName",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/integration",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/integrationResponse",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/method",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/methodResponse",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/methodSettings",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/model",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/requestValidator",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/resource",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/response",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/restApi",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/restApiPolicy",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/stage",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/usagePlan",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/usagePlanKey",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"apigateway/vpcLink",
		&module{version},
	)
}