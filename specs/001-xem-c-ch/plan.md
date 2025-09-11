# Implementation Plan: Implement Prev/Next functionality in OurFavourites component

**Branch**: `001-xem-c-ch` | **Date**: 2025-09-11 | **Spec**: E:/Weaverse/internship-program/week_11-12/elowen-online-store/specs/001-xem-c-ch/spec.md
**Input**: Feature specification from `/specs/001-xem-c-ch/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
4. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
5. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, or `GEMINI.md` for Gemini CLI).
6. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
7. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
8. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
Implement prev/next navigation functionality in the `OurFavourites.tsx` component, mirroring the behavior found in `SubscribeSection.tsx`.

## Technical Context
**Language/Version**: TypeScript/React  
**Primary Dependencies**: React, lucide-react, tailwindcss  
**Storage**: N/A  
**Testing**: Vitest, React Testing Library  
**Target Platform**: Web browser  
**Project Type**: Web (frontend)  
**Performance Goals**: Smooth scrolling, responsive UI.  
**Constraints**: Replicate existing `SubscribeSection.tsx` functionality.  
**Scale/Scope**: Single UI component modification.

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Simplicity**:
- Projects: 1 (frontend)
- Using framework directly? Yes
- Single data model? Yes (for products)
- Avoiding patterns? Yes

**Architecture**:
- EVERY feature as library? No (UI component)
- Libraries listed: React, lucide-react, tailwindcss
- CLI per library: N/A
- Library docs: N/A

**Testing (NON-NEGOTIABLE)**:
- RED-GREEN-Refactor cycle enforced? Yes (will be enforced with new setup)
- Git commits show tests before implementation? Yes (will be enforced with new setup)
- Order: Contract→Integration→E2E→Unit strictly followed? Yes (will be enforced with new setup)
- Real dependencies used? N/A
- Integration tests for: new libraries, contract changes, shared schemas? Yes (will be enforced with new setup)
- FORBIDDEN: Implementation before test, skipping RED phase: Yes (will be enforced with new setup)

**Observability**:
- Structured logging included? N/A
- Frontend logs → backend? N/A
- Error context sufficient? N/A

**Versioning**:
- Version number assigned? Yes (from package.json)
- BUILD increments on every change? N/A
- Breaking changes handled? N/A

## Project Structure

### Documentation (this feature)
```
specs/[###-feature]/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
# Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure]
```

**Structure Decision**: Option 1: Single project (DEFAULT)

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - Testing framework and practices.

2. **Generate and dispatch research agents**:
   ```
   Task: "Research testing framework and practices for React/TypeScript in this project."
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - Product (from `SubscribeSection.tsx` and `OurFavourites.tsx` context)
   - Navigation state (current index/offset)

2. **Generate API contracts** from functional requirements:
   - N/A (UI component, no external API)

3. **Generate contract tests** from contracts:
   - N/A

4. **Extract test scenarios** from user stories:
   - Test scenarios for prev/next button clicks, and edge cases (first/last item).

5. **Update agent file incrementally** (O(1) operation):
   - Run `/scripts/update-agent-context.sh gemini`
   - Add new tech from current plan (React, TypeScript, TailwindCSS, Lucide-React)
   - Update recent changes (keep last 3)
   - Keep under 150 lines for token efficiency
   - Output to repository root

**Output**: data-model.md, failing tests, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `/templates/tasks-template.md` as base
- Generate tasks from Phase 1 design docs (data model, quickstart)
- Each entity → model creation task [P]
- Each user story → integration test task
- Implementation tasks to make tests pass

**Ordering Strategy**:
- TDD order: Tests before implementation
- Dependency order: Models before services before UI
- Mark [P] for parallel execution (independent files)

**Estimated Output**: 5-10 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking
*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |


## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [ ] Phase 1: Design complete (/plan command)
- [ ] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [ ] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented

---
*Based on Constitution v2.1.1 - See `/memory/constitution.md`*