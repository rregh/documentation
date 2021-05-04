---
sidebar_position: 1
---

# .NET

## ASP.NET Core

- We use the latest version of .NET
- We use `System.Text.Json` over `Newtonsoft.Json` when possible
- We don't use `[JsonPropertyName]` but prefer Json Naming strategies
- We use lower `camelCase` for JSON element names
- We use [Refit](https://github.com/reactiveui/refit) for abstracting REST APIs
- We use [AutoMapper](https://automapper.org/) for class mappings
- We use [FluentValidation](https://github.com/FluentValidation/FluentValidation) for validating models

## Secrets

### Adding a new secret

All secrets should be declared in the `appsettings.json` file. You can group resources by creating nested objects in the `appsettings.json` file. The secret values in this file are always empty. Non-secret values can be set. A sample `appsettings.json` file:

```json
{
  "AzureBlobStorage": {
    "ConnectionString": "" // <-- Keep empty
  },
  "Environment": "Prod" // <-- not a secret
}
```

The secrets for development should be stored in the `appsettings.Development.json` file which is ignored by git.

```json
{
  "AzureBlobStorage": {
    "ConnectionString": "connection_string_here"
  },
  "Environment": "Prod"
}
```

### Using the secret

<Tabs
	groupId="framework"
  defaultValue="aspnet"
  values={[
    {label: 'ASP.NET', value: 'aspnet'},
    {label: 'Other', value: 'other'}
  ]
}>
<TabItem value="aspnet">

The secrets from the `appsettings.json` file will be available via the `IConfiguration configuration` object automatically via Dependency Injection. You can access the secrets from there.

```csharp
public class AwesomeService
{
    public AwesomeService(IConfiguration configuration)
    {
        var connectionString = configuration["AzureBlobStorage:ConnectionString"];
    }
}
```

</TabItem>
<TabItem value="other">

In projects **other than ASP.NET**, make sure, that both files are set to `CopyToOutputDirectory` in the `.csproj` file.

```xml
<ItemGroup>
  <None Update="appsettings.json">
    <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
  </None>
  <None Update="appsettings.Development.json">
    <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
  </None>
</ItemGroup>
```

Add the `Wemogy.Core` NuGet package

```bash
dotnet add package Wemogy.Core
```

Register an instance of the `IConfiguration` interface.

```csharp
var configuration = ConfigurationFactory.BuildConfiguration();
```

The secrets from the `appsettings.json` file will be now available via the `configuration` object. You can access the secrets from there.

```csharp
var connectionString = configuration["AzureBlobStorage:ConnectionString"];
```

</TabItem>
</Tabs>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';