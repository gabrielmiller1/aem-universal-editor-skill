Use the AEM Universal Editor Engineering skill.

Implement this Universal Editor capability using only currently documented,
supported APIs.

Before coding:
1. inspect the repository
2. classify the requirement using the skill decision model
3. identify the existing App Builder/UIX extension architecture
4. verify the current Adobe Universal Editor extension-point documentation
5. state which extension point and host APIs will be used

During implementation:
- keep register/attach code small
- use vendor-prefixed stable IDs
- use React Spectrum
- isolate backend integration
- do not expose secrets
- handle loading/empty/error states

After implementation:
- run the relevant validators/tests
- perform the extension review checklist
- summarize any API assumptions
