# Tooltips & Glossary

## Structure
The component presents a tooltip (title & description) based on a dictionary.

It tries to use an external Vuex dictionary (`$store.state.glossary`). If it cannot be found, it falls back to [dict.json](./dict.json).

The external dictionary must have the following structure and fields:  
```
{
  "lookup-key": 
  {
    "title": "Application layer",
    "description": "Yada yada yada"
  }
}
```  
where `lookup-key` is the entry-specific lookup key (e.g. *application-layer*, *blockchain*), `title` and `description` 
are expected key names.
