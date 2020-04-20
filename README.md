# Svelte Society Day

Repo from Svelte Society Day presentation.

### Environment Variables

The example Sapper project uses `rollup-plugin-replace` for environment variable replacement. Any environment variable prefixed with `SOCIETY_` will automatically be replaced in the code if it's listed as a `process.env.*` variable. For example:

	process.env.SOCIETY_JWT_SECRET

Is replaced with with the JWT secret.

`process.env.NODE_ENV` is the only non-prefixed variables replaced.
