# tm-tm-key-values

KeyValue component and KeyValues wrapper component for Vue 2.

## Usage

    <template>
      <tm-key-values>
        <tm-key-value>
          <div slot="value">1337</div>
          <div slot="key">People</div>
        </tm-key-value>
        <tm-key-value>
          <div slot="value">506</div>
          <div slot="key">Incidents</div>
        </tm-key-value>
      </tm-key-values>
    </template>

    <script>
      import { TmKeyValue,TmKeyValues } from '@tendermint/ui'
      export default {
        name: 'tm-key-values-demo',
        components: {
          TmKeyValue, TmKeyValues
        }
      }
    </script>
