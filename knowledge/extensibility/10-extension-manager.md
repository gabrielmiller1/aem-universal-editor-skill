# Extension Manager

Status: **VOLATILE**
Last verified: 2026-09-08
Official source: https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/configuring-and-extending/extension-manager

In AEM as a Cloud Service, Extension Manager is used to manage UI extensions.

Current documented capabilities include:
- enable/disable extensions per AEM instance
- configure extension parameters
- preview extensions
- generate shareable preview links
- discover Adobe-provided extensions/experimental capabilities

## Deployment design

Do not treat `aio app deploy` as the whole production story.

Document:
- Adobe Developer Console project
- workspace strategy
- extension configuration variables
- AEM instance enablement
- preview/approval process
- production support ownership
- rollback/disable procedure
