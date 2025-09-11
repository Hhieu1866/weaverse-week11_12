## Research for Feature: Implement Prev/Next functionality in OurFavourites component

### Research Task: Testing framework and practices for React/TypeScript in this project.

**Objective**: Identify the existing testing setup (if any) or recommend a suitable one for a React/TypeScript project, specifically for UI components.

**Approach**:
1.  Examine `package.json` for testing-related dependencies (e.g., `jest`, `react-testing-library`, `vitest`). (Already done, none found)
2.  Look for existing test files (e.g., `*.test.ts`, `*.spec.tsx`) in the `src` or `tests` directories.
3.  If no clear setup, research common testing practices for React/TypeScript applications.

**Findings**:
- No explicit testing framework found in `package.json`.
- No existing test files (`.test.ts`, `.spec.tsx`) found in the `src` directory.
- This indicates a lack of established testing practices in the project.

**Decision**:
- Recommend `Vitest` as the test runner and `React Testing Library` for UI component testing.

**Rationale**:
- `Vitest` is a fast and modern test runner that integrates well with Vite, which is already used in the project.
- `React Testing Library` is the recommended way to test React components, focusing on user behavior rather than implementation details.

**Alternatives considered**:
- `Jest`: A popular choice, but `Vitest` offers better integration with Vite and often faster performance.
- `Cypress`/`Playwright`: End-to-end testing frameworks, not suitable for unit/integration testing of individual components.