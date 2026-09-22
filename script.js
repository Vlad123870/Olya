const commands = [
  { title: "Показать текущую директорию", description: "Выводит полный путь к папке, в которой вы находитесь.", command: "pwd", category: "Навигация", warning: "" },
  { title: "Показать файлы", description: "Показывает содержимое текущей директории.", command: "ls", category: "Навигация", warning: "" },
  { title: "Подробный список", description: "Показывает скрытые файлы, права доступа, владельцев и размеры.", command: "ls -la", category: "Навигация", warning: "" },
  { title: "Перейти в папку", description: "Переходит в указанную директорию.", command: "cd путь/к/папке", category: "Навигация", warning: "" },
  { title: "Перейти на уровень выше", description: "Переходит в родительскую директорию.", command: "cd ..", category: "Навигация", warning: "" },
  { title: "Перейти домой", description: "Переходит в домашнюю директорию пользователя.", command: "cd ~", category: "Навигация", warning: "" },
  { title: "Очистить терминал", description: "Очищает содержимое окна терминала.", command: "clear", category: "Навигация", warning: "" },
  { title: "История команд", description: "Показывает ранее выполненные команды.", command: "history", category: "Навигация", warning: "" },
  { title: "Создать папку", description: "Создаёт новую директорию.", command: "mkdir имя_папки", category: "Файлы", warning: "" },
  { title: "Создать файл", description: "Создаёт пустой файл.", command: "touch файл.txt", category: "Файлы", warning: "" },
  { title: "Удалить файл", description: "Удаляет указанный файл.", command: "rm файл.txt", category: "Файлы", warning: "Осторожно: удаление через rm обычно не перемещает файл в корзину." },
  { title: "Удалить папку", description: "Удаляет папку и её содержимое.", command: "rm -r имя_папки", category: "Файлы", warning: "Осторожно: проверьте путь перед выполнением команды." },
  { title: "Скопировать файл", description: "Создаёт копию файла.", command: "cp файл.txt копия.txt", category: "Файлы", warning: "" },
  { title: "Скопировать папку", description: "Копирует папку вместе с содержимым.", command: "cp -r папка копия_папки", category: "Файлы", warning: "" },
  { title: "Переместить или переименовать", description: "Перемещает файл или меняет его имя.", command: "mv старое.txt новое.txt", category: "Файлы", warning: "" },
  { title: "Вывести содержимое файла", description: "Печатает содержимое файла в терминал.", command: "cat файл.txt", category: "Файлы", warning: "" },
  { title: "Просмотреть файл постранично", description: "Открывает файл для удобного просмотра по страницам. Выход — Q.", command: "less файл.txt", category: "Файлы", warning: "" },
  { title: "Начало файла", description: "Показывает первые 10 строк файла.", command: "head файл.txt", category: "Файлы", warning: "" },
  { title: "Конец файла", description: "Показывает последние 10 строк файла.", command: "tail файл.txt", category: "Файлы", warning: "" },
  { title: "Найти файл", description: "Ищет файлы и папки по имени или другим условиям.", command: "find . -name \"*.txt\"", category: "Поиск и текст", warning: "" },
  { title: "Найти текст", description: "Ищет совпадения с шаблоном внутри файлов.", command: "grep -n \"слово\" файл.txt", category: "Поиск и текст", warning: "" },
  { title: "Вывести текст", description: "Выводит строку или значение переменной.", command: "echo \"Привет, Git Bash!\"", category: "Поиск и текст", warning: "" },
  { title: "Информация о пользователе", description: "Показывает имя текущего пользователя.", command: "whoami", category: "Система", warning: "" },
  { title: "Информация о системе", description: "Выводит сведения о системе и ядре.", command: "uname -a", category: "Система", warning: "" },
  { title: "Показать переменные окружения", description: "Выводит переменные окружения текущей оболочки.", command: "env", category: "Система", warning: "" },
  { title: "Создать переменную окружения", description: "Создаёт переменную для текущей сессии Bash.", command: "export NAME=\"value\"", category: "Система", warning: "" },
  { title: "Найти исполняемый файл", description: "Показывает путь, по которому найдена команда.", command: "which git", category: "Система", warning: "" },
  { title: "Создать алиас", description: "Создаёт сокращение для часто используемой команды.", command: "alias gs=\"git status\"", category: "Система", warning: "" },
  { title: "Изменить права файла", description: "Изменяет права доступа к файлу.", command: "chmod +x script.sh", category: "Система", warning: "" },
  { title: "Инициализировать репозиторий", description: "Создаёт новый локальный Git-репозиторий.", command: "git init", category: "Основы Git", warning: "" },
  { title: "Проверить состояние", description: "Показывает изменения и неотслеживаемые файлы.", command: "git status", category: "Основы Git", warning: "" },
  { title: "Добавить файл в индекс", description: "Подготавливает конкретный файл к коммиту.", command: "git add файл.txt", category: "Основы Git", warning: "" },
  { title: "Добавить все изменения", description: "Добавляет все изменения в текущей директории.", command: "git add .", category: "Основы Git", warning: "" },
  { title: "Создать коммит", description: "Сохраняет подготовленные изменения с сообщением.", command: "git commit -m \"описание изменений\"", category: "Основы Git", warning: "" },
  { title: "История коммитов", description: "Показывает историю коммитов в подробном виде.", command: "git log", category: "Основы Git", warning: "" },
  { title: "Краткая история", description: "Показывает коммиты в компактном формате.", command: "git log --oneline --graph --all", category: "Основы Git", warning: "" },
  { title: "Показать изменения", description: "Показывает изменения, ещё не добавленные в индекс.", command: "git diff", category: "Основы Git", warning: "" },
  { title: "Показать коммит", description: "Показывает содержимое и метаданные коммита.", command: "git show HEAD", category: "Основы Git", warning: "" },
  { title: "Настроить Git", description: "Задаёт имя автора для будущих коммитов.", command: "git config --global user.name \"Ваше имя\"", category: "Основы Git", warning: "" },
  { title: "Настроить email Git", description: "Задаёт email автора для будущих коммитов.", command: "git config --global user.email \"you@example.com\"", category: "Основы Git", warning: "" },
  { title: "Открыть справку Git", description: "Показывает справку по команде Git.", command: "git help commit", category: "Основы Git", warning: "" },
  { title: "Список веток", description: "Показывает локальные ветки.", command: "git branch", category: "Ветки", warning: "" },
  { title: "Создать ветку", description: "Создаёт новую ветку без переключения на неё.", command: "git branch имя_ветки", category: "Ветки", warning: "" },
  { title: "Переключиться на ветку", description: "Переходит на существующую ветку.", command: "git switch имя_ветки", category: "Ветки", warning: "" },
  { title: "Создать и открыть ветку", description: "Создаёт ветку и сразу переключается на неё.", command: "git switch -c имя_ветки", category: "Ветки", warning: "" },
  { title: "Удалить ветку", description: "Удаляет локальную ветку после её слияния.", command: "git branch -d имя_ветки", category: "Ветки", warning: "" },
  { title: "Принудительно удалить ветку", description: "Удаляет ветку независимо от состояния слияния.", command: "git branch -D имя_ветки", category: "Ветки", warning: "Осторожно: можно потерять несохранённые в других ветках коммиты." },
  { title: "Объединить ветки", description: "Вливает изменения указанной ветки в текущую.", command: "git merge имя_ветки", category: "Ветки", warning: "" },
  { title: "Перенести коммиты на новую основу", description: "Переписывает базу текущей ветки поверх другой ветки.", command: "git rebase main", category: "Ветки", warning: "Осторожно: не переписывайте историю общих веток без понимания последствий." },
  { title: "Применить отдельный коммит", description: "Переносит изменения конкретного коммита в текущую ветку.", command: "git cherry-pick HASH", category: "Ветки", warning: "" },
  { title: "Добавить удалённый репозиторий", description: "Связывает локальный репозиторий с удалённым.", command: "git remote add origin URL", category: "Удалённый Git", warning: "" },
  { title: "Показать удалённые адреса", description: "Выводит URL удалённых репозиториев.", command: "git remote -v", category: "Удалённый Git", warning: "" },
  { title: "Клонировать репозиторий", description: "Скачивает репозиторий с историей на компьютер.", command: "git clone URL", category: "Удалённый Git", warning: "" },
  { title: "Отправить изменения", description: "Загружает коммиты в удалённую ветку.", command: "git push origin main", category: "Удалённый Git", warning: "" },
  { title: "Отправить и связать ветку", description: "Отправляет ветку и устанавливает upstream-связь.", command: "git push -u origin main", category: "Удалённый Git", warning: "" },
  { title: "Получить изменения и объединить", description: "Скачивает изменения и выполняет слияние.", command: "git pull", category: "Удалённый Git", warning: "" },
  { title: "Получить изменения без слияния", description: "Скачивает новые данные с сервера без изменения рабочей ветки.", command: "git fetch origin", category: "Удалённый Git", warning: "" },
  { title: "Временно убрать изменения", description: "Сохраняет незакоммиченные изменения во временное хранилище.", command: "git stash", category: "Отмена и восстановление", warning: "" },
  { title: "Вернуть изменения из stash", description: "Возвращает последние временно сохранённые изменения.", command: "git stash pop", category: "Отмена и восстановление", warning: "" },
  { title: "Показать список stash", description: "Показывает все временные сохранения.", command: "git stash list", category: "Отмена и восстановление", warning: "" },
  { title: "Убрать файл из индекса", description: "Убирает файл из staging, сохраняя изменения в рабочей папке.", command: "git restore --staged файл.txt", category: "Отмена и восстановление", warning: "" },
  { title: "Отменить изменения файла", description: "Восстанавливает файл из последнего коммита или указанного источника.", command: "git restore файл.txt", category: "Отмена и восстановление", warning: "Осторожно: незакоммиченные изменения в файле могут быть потеряны." },
  { title: "Создать отменяющий коммит", description: "Отменяет изменения указанного коммита новым коммитом.", command: "git revert HASH", category: "Отмена и восстановление", warning: "" },
  { title: "Сбросить HEAD", description: "Перемещает указатель HEAD на другой коммит.", command: "git reset --soft HEAD~1", category: "Отмена и восстановление", warning: "Осторожно: режимы reset отличаются последствиями для индекса и рабочих файлов." },
  { title: "Удалить неотслеживаемые файлы", description: "Удаляет неотслеживаемые файлы из рабочей папки.", command: "git clean -n", category: "Отмена и восстановление", warning: "Сначала используйте -n для предварительного просмотра; удаление через -f необратимо." },
  { title: "Работа с тегами", description: "Показывает существующие теги.", command: "git tag", category: "Продвинутый Git", warning: "" },
  { title: "Создать тег", description: "Создаёт тег на текущем коммите.", command: "git tag v1.0.0", category: "Продвинутый Git", warning: "" },
  { title: "Показать авторов строк", description: "Показывает, кто и в каком коммите изменил каждую строку.", command: "git blame файл.txt", category: "Продвинутый Git", warning: "" },
  { title: "Проверить версию Git", description: "Показывает установленную версию Git.", command: "git --version", category: "Продвинутый Git", warning: "" },
  { title: "Показать ветки и граф", description: "Показывает историю с ветками и тегами в компактном виде.", command: "git log --oneline --decorate --graph --all", category: "Продвинутый Git", warning: "" }
];

const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const categoryTabs = document.getElementById("categoryTabs");
const commandsGrid = document.getElementById("commandsGrid");
const emptyState = document.getElementById("emptyState");
const commandCount = document.getElementById("commandCount");
const toast = document.getElementById("toast");
const gitSearch = document.getElementById("gitSearch");
const views = {
  gitbash: document.getElementById("gitbashView"),
  visualstudio: document.getElementById("visualstudioView"),
  vscode: document.getElementById("vscodeView")
};
const sectionNavItems = document.querySelectorAll(".section-nav__item");

const categories = ["Все", ...new Set(commands.map(item => item.category))];
let activeCategory = "Все";
let searchQuery = "";

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function pluralize(number) {
  const mod10 = number % 10;
  const mod100 = number % 100;
  if (mod10 === 1 && mod100 !== 11) return "команда";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return "команды";
  return "команд";
}

function renderTabs() {
  categoryTabs.innerHTML = categories.map(category => `
    <button class="tab ${category === activeCategory ? "is-active" : ""}"
      type="button" data-category="${escapeHtml(category)}" role="tab"
      aria-selected="${category === activeCategory}">
      ${escapeHtml(category)}
    </button>
  `).join("");
}

function getFilteredCommands() {
  return commands.filter(item => {
    const categoryMatch = activeCategory === "Все" || item.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    const searchMatch = !query || [item.title, item.description, item.command, item.category, item.warning]
      .some(value => value.toLowerCase().includes(query));
    return categoryMatch && searchMatch;
  });
}

function renderCommands() {
  const filtered = getFilteredCommands();
  commandsGrid.innerHTML = filtered.map(item => `
    <article class="command-card">
      <div class="command-card__top">
        <h2 class="command-card__title">${escapeHtml(item.title)}</h2>
        <span class="command-card__category">${escapeHtml(item.category)}</span>
      </div>
      <p class="command-card__description">${escapeHtml(item.description)}</p>
      <div class="example">Пример:</div>
      <div class="command">
        <code>${escapeHtml(item.command)}</code>
        <button class="copy-btn" type="button" data-command="${escapeHtml(item.command)}">Копировать</button>
      </div>
      ${item.warning ? `<div class="warning">⚠ ${escapeHtml(item.warning)}</div>` : ""}
    </article>
  `).join("");
  emptyState.classList.toggle("hidden", filtered.length !== 0);
  commandCount.textContent = `${filtered.length} ${pluralize(filtered.length)}`;
}

let toastTimer;
function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

async function copyCommand(command, button) {
  try {
    await navigator.clipboard.writeText(command);
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = command;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }
  button.classList.add("is-copied");
  button.textContent = "Скопировано";
  showToast(`Скопировано: ${command}`);
  setTimeout(() => {
    button.classList.remove("is-copied");
    button.textContent = "Копировать";
  }, 1400);
}

categoryTabs.addEventListener("click", event => {
  const button = event.target.closest(".tab");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderTabs();
  renderCommands();
});

commandsGrid.addEventListener("click", event => {
  const button = event.target.closest(".copy-btn");
  if (button) copyCommand(button.dataset.command, button);
});

searchInput.addEventListener("input", event => {
  searchQuery = event.target.value;
  clearSearch.style.display = searchQuery ? "block" : "none";
  renderCommands();
});

clearSearch.addEventListener("click", () => {
  searchQuery = "";
  searchInput.value = "";
  clearSearch.style.display = "none";
  searchInput.focus();
  renderCommands();
});

function setView(viewName) {
  Object.entries(views).forEach(([name, element]) => {
    const isActive = name === viewName;
    element.classList.toggle("is-active", isActive);
    element.hidden = !isActive;
  });

  sectionNavItems.forEach(item => {
    const isActive = item.dataset.view === viewName;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-current", isActive ? "page" : "false");
  });

  gitSearch.classList.toggle("hidden", viewName !== "gitbash");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

sectionNavItems.forEach(item => {
  item.addEventListener("click", () => setView(item.dataset.view));
});

renderTabs();
renderCommands();
setView("gitbash");
