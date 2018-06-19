# tm-modules

Module component and Modules wrapper component for Vue 2.

## Usage

    <template>
      <tm-modules>
        <tm-module>
          <div slot="title">Module Header Title</div>
          <div slot="menu"><a href="#">Random Link</a></div>
          <div>
            This is the main body area.
          </div>
          <div slot="footer">Here is the module footer</div>
        </tm-module>
        <tm-module>
          <div slot="title">Module Two</div>
          <div>
            This is the other body area.
          </div>
          <div slot="footer">Here is the other footer</div>
        </tm-module>
      </tm-modules>
    </template>

    <script>
      import { TmModule, TmModules } from '@tendermint/ui'
      export default {
        name: 'key-values-demo',
        components: {
          Module, Modules
        }
      }
    </script>
