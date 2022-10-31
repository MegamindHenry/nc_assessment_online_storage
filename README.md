# nc_assessment_online_storage
Nordcloud assessment project - online storage


# deploy infra
#### resource group
```bash
rg_name=rg-xuefeng-aug-we
```

#### deploy complete
```bash
az deployment group create --template-file main.bicep --resource-group $rg_name --parameters main.parameters.json --mode Complete
```

#### empty complete
```bash
az deployment group create --template-file empty.bicep --resource-group $rg_name --mode Complete
```