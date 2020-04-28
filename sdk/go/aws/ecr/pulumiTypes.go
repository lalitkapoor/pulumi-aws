// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ecr

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

type RepositoryImageScanningConfiguration struct {
	// Indicates whether images are scanned after being pushed to the repository (true) or not scanned (false).
	ScanOnPush bool `pulumi:"scanOnPush"`
}

// RepositoryImageScanningConfigurationInput is an input type that accepts RepositoryImageScanningConfigurationArgs and RepositoryImageScanningConfigurationOutput values.
// You can construct a concrete instance of `RepositoryImageScanningConfigurationInput` via:
//
// 		 RepositoryImageScanningConfigurationArgs{...}
//
type RepositoryImageScanningConfigurationInput interface {
	pulumi.Input

	ToRepositoryImageScanningConfigurationOutput() RepositoryImageScanningConfigurationOutput
	ToRepositoryImageScanningConfigurationOutputWithContext(context.Context) RepositoryImageScanningConfigurationOutput
}

type RepositoryImageScanningConfigurationArgs struct {
	// Indicates whether images are scanned after being pushed to the repository (true) or not scanned (false).
	ScanOnPush pulumi.BoolInput `pulumi:"scanOnPush"`
}

func (RepositoryImageScanningConfigurationArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*RepositoryImageScanningConfiguration)(nil)).Elem()
}

func (i RepositoryImageScanningConfigurationArgs) ToRepositoryImageScanningConfigurationOutput() RepositoryImageScanningConfigurationOutput {
	return i.ToRepositoryImageScanningConfigurationOutputWithContext(context.Background())
}

func (i RepositoryImageScanningConfigurationArgs) ToRepositoryImageScanningConfigurationOutputWithContext(ctx context.Context) RepositoryImageScanningConfigurationOutput {
	return pulumi.ToOutputWithContext(ctx, i).(RepositoryImageScanningConfigurationOutput)
}

func (i RepositoryImageScanningConfigurationArgs) ToRepositoryImageScanningConfigurationPtrOutput() RepositoryImageScanningConfigurationPtrOutput {
	return i.ToRepositoryImageScanningConfigurationPtrOutputWithContext(context.Background())
}

func (i RepositoryImageScanningConfigurationArgs) ToRepositoryImageScanningConfigurationPtrOutputWithContext(ctx context.Context) RepositoryImageScanningConfigurationPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(RepositoryImageScanningConfigurationOutput).ToRepositoryImageScanningConfigurationPtrOutputWithContext(ctx)
}

// RepositoryImageScanningConfigurationPtrInput is an input type that accepts RepositoryImageScanningConfigurationArgs, RepositoryImageScanningConfigurationPtr and RepositoryImageScanningConfigurationPtrOutput values.
// You can construct a concrete instance of `RepositoryImageScanningConfigurationPtrInput` via:
//
// 		 RepositoryImageScanningConfigurationArgs{...}
//
//  or:
//
// 		 nil
//
type RepositoryImageScanningConfigurationPtrInput interface {
	pulumi.Input

	ToRepositoryImageScanningConfigurationPtrOutput() RepositoryImageScanningConfigurationPtrOutput
	ToRepositoryImageScanningConfigurationPtrOutputWithContext(context.Context) RepositoryImageScanningConfigurationPtrOutput
}

type repositoryImageScanningConfigurationPtrType RepositoryImageScanningConfigurationArgs

func RepositoryImageScanningConfigurationPtr(v *RepositoryImageScanningConfigurationArgs) RepositoryImageScanningConfigurationPtrInput {
	return (*repositoryImageScanningConfigurationPtrType)(v)
}

func (*repositoryImageScanningConfigurationPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**RepositoryImageScanningConfiguration)(nil)).Elem()
}

func (i *repositoryImageScanningConfigurationPtrType) ToRepositoryImageScanningConfigurationPtrOutput() RepositoryImageScanningConfigurationPtrOutput {
	return i.ToRepositoryImageScanningConfigurationPtrOutputWithContext(context.Background())
}

func (i *repositoryImageScanningConfigurationPtrType) ToRepositoryImageScanningConfigurationPtrOutputWithContext(ctx context.Context) RepositoryImageScanningConfigurationPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(RepositoryImageScanningConfigurationPtrOutput)
}

type RepositoryImageScanningConfigurationOutput struct{ *pulumi.OutputState }

func (RepositoryImageScanningConfigurationOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*RepositoryImageScanningConfiguration)(nil)).Elem()
}

func (o RepositoryImageScanningConfigurationOutput) ToRepositoryImageScanningConfigurationOutput() RepositoryImageScanningConfigurationOutput {
	return o
}

func (o RepositoryImageScanningConfigurationOutput) ToRepositoryImageScanningConfigurationOutputWithContext(ctx context.Context) RepositoryImageScanningConfigurationOutput {
	return o
}

func (o RepositoryImageScanningConfigurationOutput) ToRepositoryImageScanningConfigurationPtrOutput() RepositoryImageScanningConfigurationPtrOutput {
	return o.ToRepositoryImageScanningConfigurationPtrOutputWithContext(context.Background())
}

func (o RepositoryImageScanningConfigurationOutput) ToRepositoryImageScanningConfigurationPtrOutputWithContext(ctx context.Context) RepositoryImageScanningConfigurationPtrOutput {
	return o.ApplyT(func(v RepositoryImageScanningConfiguration) *RepositoryImageScanningConfiguration {
		return &v
	}).(RepositoryImageScanningConfigurationPtrOutput)
}

// Indicates whether images are scanned after being pushed to the repository (true) or not scanned (false).
func (o RepositoryImageScanningConfigurationOutput) ScanOnPush() pulumi.BoolOutput {
	return o.ApplyT(func(v RepositoryImageScanningConfiguration) bool { return v.ScanOnPush }).(pulumi.BoolOutput)
}

type RepositoryImageScanningConfigurationPtrOutput struct{ *pulumi.OutputState }

func (RepositoryImageScanningConfigurationPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**RepositoryImageScanningConfiguration)(nil)).Elem()
}

func (o RepositoryImageScanningConfigurationPtrOutput) ToRepositoryImageScanningConfigurationPtrOutput() RepositoryImageScanningConfigurationPtrOutput {
	return o
}

func (o RepositoryImageScanningConfigurationPtrOutput) ToRepositoryImageScanningConfigurationPtrOutputWithContext(ctx context.Context) RepositoryImageScanningConfigurationPtrOutput {
	return o
}

func (o RepositoryImageScanningConfigurationPtrOutput) Elem() RepositoryImageScanningConfigurationOutput {
	return o.ApplyT(func(v *RepositoryImageScanningConfiguration) RepositoryImageScanningConfiguration { return *v }).(RepositoryImageScanningConfigurationOutput)
}

// Indicates whether images are scanned after being pushed to the repository (true) or not scanned (false).
func (o RepositoryImageScanningConfigurationPtrOutput) ScanOnPush() pulumi.BoolPtrOutput {
	return o.ApplyT(func(v *RepositoryImageScanningConfiguration) *bool {
		if v == nil {
			return nil
		}
		return &v.ScanOnPush
	}).(pulumi.BoolPtrOutput)
}

func init() {
	pulumi.RegisterOutputType(RepositoryImageScanningConfigurationOutput{})
	pulumi.RegisterOutputType(RepositoryImageScanningConfigurationPtrOutput{})
}