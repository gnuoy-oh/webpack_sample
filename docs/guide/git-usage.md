# IRIS Design System 작업자를 위한 Git 사용법

Git을 이용하기 위해 설치할 것

- Window 사용자: [Git For Windows](https://gitforwindows.org/)

초기 설정 관련 가이드는 [이 곳](https://docs.google.com/presentation/d/1XfeLMGzZ6OmhFr3lWICV4-FA5C9cR2xgDTlRfXHsTUo/edit#slide=id.g99fa5101ef_0_315)에서 확인해주세요.

## Git Work flow

일반적인 기능 추가를 위한 워크 플로우

1. `upstream`의 최신 버전을 가져온다.

```bash
$ git fetch upstream
```

2. git log를 살피고 가장 최신 `upstream/dev`와 병합한다

   - 작업 history를 확인한다

   ```bash
   $ git log

   # 혹은 .gitconfig 파일을 작성했을 경우
   $ git lg2
   ```

   - `upstream/dev`와 병합한다

   ```bash
   $ git merge upstream/dev
   ```

3. `dev`브랜치에서 새로운 기능에 대한 `feature`브랜치를 분기, 이동한다

```bash
$ git checkout -b <feature>

# 위 명령어는 아래의 두 명령어를 합한 것
$ git branch <branch name>
$ git checkout <branch name>
```

4. 새로운 기능에 대한 작업을 수행한다

5. 새로운 기능에 대한 `feature`브랜치를 원격 저장소에 올려 다른 작업자와 공유한다

   - 새로운 브랜치의 내용을 커밋한다

   ```bash
   $ git add <some-file>               # 변경된 일부 파일을 스테이지 영역에 추가
   $ git commit -m "commit message"    # 작업 history를 남기는 commit 추가
   ```

   - 원격 저장소에 올린다 (origin과 upstream)

   ```bash
   $ git push origin <feature>
   $ git push upstream <feature>
   ```

6. 개발 작업까지 모두 완료된 후 `dev`브랜치로 병합한다

```bash
(HEAD -> dev)
$ git merge upstream/<feature>
```

7. 더 이상 필요하지 않은 `feature`브랜치는 삭제한다

## Git Branch

Git Workflow에서는 항상 유지되는 메인 브랜치들 (`master`, `dev`)와 일정 기간동안만 유지되는 보조 브랜치들 (`feature`)를 포함해 총 3가지의 브랜치를 사용한다. 각 브랜치의 사용법은 아래와 같다.

- `master` 브랜치: **제품으로 출시될 수 있는 브랜치**

  - 이력을 관리하기 위해 사용. 즉, 배포 가능한 상태만을 관리한다
  - IRIS의 배포 주기를 따라 `dev` 를 병합한다 (매주 목)

- `dev` 브랜치: **다음 출시 버전을 개발하는 브랜치**

  - 기능 개발을 위한 `feature`를 병합하기 위해 사용한다. 또한 `feature` 브랜치의 기반이 되는 브랜치이기도 하다
  - 간단한 이슈 처리는 `dev` 에서 직접 처리한다
  - 간단한 기능 개발은 `dev` 에서 직접 처리한다

- `feature` 브랜치: **기능을 개발하는 브랜치**
  - 신규 기능 퍼블리싱이 이루어지는 브랜치, 대규모 개발 혹은 변경이 필요할 때마다 `dev`브랜치로부터 분기한다
  - 신규 기능 기준표
    | 구분 | 정의 |
    | ------- | ---------------- |
    | 신규 기능 | 큰 규모로 개발이 필요한 경우 |
    | 구조 변경 | 큰 규모로 구조가 변경되는 경우 |
    | 공통 스타일 | 코어 스타일(e.g.font-family, color), 공통 컴포넌트(e.g. select box) 스타일이 변경되는 경우|

## Commit Message

1. 커밋 메시지는 제목과 본문으로 작성할 수 있으며 빈 행으로 구분한다 (WinOS에서는 엔터 2번)
2. 제목은 가급적 50자로 제한하며, 최대 69자를 넘지 않는다
3. 제목 행은 명령조 혹은 구문으로 작성하는것을 권장한다
4. 제목 끝에 마침표(.)는 찍지 않는다
5. 본문은 _어떻게_ 보다는 _무엇_ 과 _왜_ 를 설명한다 (코드는 보통 따로 설명될 필요가 없다)
6. 커밋에는 Prefix(접두어)와 서비스명을 포함한다

   ```
   git commit -m "Prefix(service-name): commit message"
   ```

   공통 내용에 대한 커밋은 서비스명 없이 `Prefix: commit message`의 형태로 작성한다.
   아래는 IRIS Design System에서 사용하는 접두어와 그 의미이다.

   | Prefix  | Meaning                       |
   | ------- | ----------------------------- |
   | Add     | 새로운 파일이나 디렉토리 추가 |
   | Fix     | 오류, 버그 수정               |
   | Resolve | 버그 외 기능 추가, 개선       |
   | Change  | 문서, 디렉토리 등 변경        |
   | Update  | 배포를 위한 CSS 등 갱신       |
   | ...     | ...                           |

## Utiles

alias 등으로 git 사용을 편리하게 해주는 도구. 루트 디렉토리의 `.gitconfig` 에 생성한다

1. 홈 디렉토리(루트 디렉토리)로 간다 `~`
2. .gitconfig 파일 설정을 변경해준다 `cat .gitconfig` 혹은 파일이 이미 있는 경우 `vi .gitconfig`
3. 위와 같이 vi로 작성하는게 어렵다면, vscode에서 `.gitconfig` 파일을 열어 수정해도 된다
4. 아래 내용을 붙이되, `user`와 `email`을 본인 정보로 잘 변경하기!

```bash
[alias]
stat = status
co = checkout
vd = difftool
vdiff = difftool
up = fetch upstream
rb = rebase origin/master
ss = stash
sp = stash pop
bh = branch
lg = log --abbrev-commit --color --date=relative --graph --pretty=format:'%C(red)%h%Creset -%C(blue)%d%Creset %s %Cgreen[%C(bold blue)<%an>%Creset'
lg2 = log --graph --all --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset) %C(bold yellow)%d%C(reset)%n'' %C(white)%s%C(reset) %C(bold white)? %an%C(reset)' --abbrev-commit
lg3 = log --graph --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(bollow)%d%C(reset)%n'' %C(white)%s%C(reset) %C(bold white)? %an%C(reset)' --abbrev-commit
ll = log --pretty=format:"%C(yellow)%h%Cred%d %Creset%s%Cblue [%cn]" --decorate --numstat
[format]
pretty = format:%C(red)%h%Creset %Cgreen[%cr] %C(bold blue)<%an>%Creset %n %C(blue)%d%Creset %s
[diff]
tool = vimdiff
[difftool]
prompt = false
[color]
diff = auto
interactive = auto
status = auto
branch = auto
[core]
autocrlf = input
eol = lf
[user]
name = user name
email = user@email.com
[filter "lfs"]
clean = git-lfs clean -- %f
smudge = git-lfs smudge -- %f
process = git-lfs filter-process
required = true
```

[^1]: 새로운 기능을 포함한 상태로 모든 기능이 정상적으로 동작 하는 상태를 말한다
