# AGENTS.md

## Project

Personal portfolio website for Heriyanto.

## General Rules

- Inspect the existing code before making changes.
- Prefer modifying existing code over introducing unnecessary abstractions.
- Do not redesign the UI unless explicitly requested.
- Do not change content/copy unless explicitly requested.
- Do not generate or replace visual assets unless explicitly requested.
- Preserve the existing dark technical portfolio aesthetic.
- Preserve responsive behavior.
- Keep changes scoped to the requested task.

## React / TSX

- Inspect the actual JSX structure before modifying CSS.
- Only use CSS classes/selectors that actually exist in the JSX.
- Avoid unnecessary wrapper elements.
- Avoid changing component structure for a CSS-only task.

## CSS

- Reuse existing selectors where possible.
- Do not append duplicate overrides when an existing rule can be edited.
- Keep typography hierarchy consistent.
- Avoid unnecessary `!important`.
- Keep desktop and mobile behavior intentional.

## Visual Changes

When modifying visual styling:

1. Inspect the current implementation.
2. Identify the exact selectors involved.
3. Make the smallest change that solves the problem.
4. Do not modify unrelated sections.
5. Verify the result after editing.

## Validation

After code changes:

- Check for TypeScript/React errors.
- Run the project's existing lint/build commands when appropriate.
- Check that referenced assets and CSS selectors exist.
- Do not claim a change is complete without actually editing the files.
