## Git Flow

## 깃 브랜치 종류

- [ main branch ] : local 작업사항
- [ dev branch ] : 개발 서버 배포 작업사항
- [ prod branch ] : 프로덕션 서버 배포 작업사항
- [ {{jira issue ticket number}} branch ] : 기능개발 브랜치
- [ feature-{{feature name}} branch ] : 개발에 필요한 로컬내 개별 브랜치

## 깃 브랜치 전략

```mermaid
---
title : 깃 브랜치 전략
---

gitGraph
    commit id: "project setting"
    branch prod
    branch dev
    checkout prod
    branch jira-issue
    checkout jira-issue
    commit id: "issue commit"
    commit id: "issue commit2"
    checkout main
    merge jira-issue
    commit id: "jira issue merge"
    branch feature-a
    checkout feature-a
    commit id: "feature a"
    checkout main
    merge feature-a
    commit id: "feature a merge"
    commit id: "local test done"
    checkout dev
    merge main
    checkout prod
    merge dev
    commit id: "dev server test done"
    commit id: "publish setting"
    checkout prod
    branch hotfix
    commit id: "hotfix issue commit"
    checkout prod
    merge hotfix
    commit id: "deploy"
```
