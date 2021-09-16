# Tooltips & Glossary

## Structure
File [dict.json](./dict.json) contains the source for hover tooltips and the [Cosmos Glossary](https://cosmos.network/glossary).

Each item in the file has the following components:  
* **Identifier**: Not seen by readers, used as a lookup when defining tooltips (e.g. `application-layer`)
* **Text**: Formatted in [Markdown](https://www.markdownguide.org/basic-syntax/), has a *title* and a *description*.  
  These two are separated by a newline character `\n`.
  
## Making tooltip/glossary changes

* Use an online Markdown editor (e.g. [LivePreview](https://markdownlivepreview.com/)).
* Keep the description in a single line. Otherwise you might break auto-wrapping of text. 
* If you add hyperlinks, make sure they work in the preview.
* Paste back into [dict.json](./dict.json) in a single line. Do not forget the separating `\n`. 
* Create a pull request for review. 