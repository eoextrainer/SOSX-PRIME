# Savepoints & Rollback Workflow for Eternelles SPA

## Savepoints (Stable Versions)
- Tag each stable version with `stable-vX.Y` (e.g., `stable-v1.0`, `stable-v1.1`).
- Always push tags to the remote repo after tagging.

## Creating a Savepoint
1. Ensure all changes are committed:
   ```sh
   git add .
   git commit -m "Describe your changes"
   ```
2. Tag the commit as stable:
   ```sh
   git tag stable-vX.Y -m "Stable version: description"
   git push origin <branch> --tags
   ```

## Rolling Back to a Stable Version
1. List available tags:
   ```sh
   git tag
   ```
2. Checkout the desired stable version:
   ```sh
   git checkout tags/stable-vX.Y -b restore-stable-vX.Y
   ```
3. (Optional) Merge or fast-forward this branch into your main branch as needed.

## Best Practices
- Only tag thoroughly tested, production-ready versions as stable.
- Document changes in the tag message.
- Use branches for experimental or in-progress work; merge to main/wireframe-phase1 only after validation.

---

This workflow ensures you can always restore or reference a stable version of the Eternelles SPA wireframe, both locally and remotely.
