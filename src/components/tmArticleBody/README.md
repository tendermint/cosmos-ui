# tm-article-body

Article body component for Vue 2

## Usage

    <template>
      <tm-article-body>
        <p><strong>Whoops!</strong> The page you visited either does not exist or has been deleted in a website reshuffle. We're sorry for the inconvenience. Try visiting one of these pages below:</p>
        <ul>
          <li><router-link :to="'/'">Dashboard</router-link></li>
          <li><router-link :to="'/signup'">Sign Up</router-link></li>
          <li><router-link :to="'/signin'">Sign In</router-link></li>
        </ul>
      </tm-article-body>
    </template>

    <script>
      import { TmArticleBody } from '@tendermint/ui'
      export default {
        components: {
          TmArticleBody
        }
      }
    </script>

    <style>
      .tm-article-body {
        width: 320px;
      }
    </style>
