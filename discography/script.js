(() => {
  const albums = [
    {
      id: 1,
      title: "Поганая молодёжь",
      group: "Гражданская оборона",
      year: "1985",
      desc: "Самые первые шаги, где уже чувствуется летовская интонация, но звук ещё сырой и максималистский.",
    },
    {
      id: 2,
      title: "Оптимизм",
      group: "Гражданская оборона",
      year: "1985",
      desc: "Молодой задор и вера в то, что можно перевернуть этот мир.",
    },
    {
      id: 3,
      title: "Красный альбом",
      group: "Гражданская оборона",
      year: "1987",
      desc: "Летов переосмысливает раннее творчество, придавая ему новую форму и глубину.",
    },
    {
      id: 4,
      title: "Мышеловка",
      group: "Гражданская оборона",
      year: "1987",
      desc: "Летов начинает выстраивать свою вселенную тотального сопротивления.",
    },
    {
      id: 5,
      title: "Хорошо!!",
      group: "Гражданская оборона",
      year: "1987",
      desc: "Энергия зашкаливает, сквозь шум и грязь пробивается подлинное.",
    },
    {
      id: 6,
      title: "Тоталитаризм",
      group: "Гражданская оборона",
      year: "1987",
      desc: "Название говорит о системе, которая давит и уничтожает личность.",
    },
    {
      id: 7,
      title: "Некрофилия",
      group: "Гражданская оборона",
      year: "1987",
      desc: "Тема смерти входит в творчество как естественная часть бытия.",
    },
    {
      id: 8,
      title: "Всё идёт по плану",
      group: "Гражданская оборона",
      year: "1988",
      desc: "Альбом-классика с ироничным названием о тотальном контроле.",
    },
    {
      id: 9,
      title: "Так закалялась сталь",
      group: "Гражданская оборона",
      year: "1988",
      desc: "Творческий тандем Летова и Янки, где нежность сочетается с бескомпромиссностью.",
    },
    {
      id: 10,
      title: "Боевой стимул",
      group: "Гражданская оборона",
      year: "1988",
      desc: "Сборник, подводящий итог целому периоду.",
    },
    {
      id: 11,
      title: "Тошнота",
      group: "Гражданская оборона",
      year: "1989",
      desc: "Экзистенциальная тошнота от окружающей фальши.",
    },
    {
      id: 12,
      title: "Песни радости и счастья",
      group: "Гражданская оборона",
      year: "1989",
      desc: "Название звучит издевательски, но Летов ищет радость внутри.",
    },
    {
      id: 13,
      title: "Война",
      group: "Гражданская оборона",
      year: "1989",
      desc: "Постоянная битва с самим собой и с миром.",
    },
    {
      id: 14,
      title: "Здорово и вечно",
      group: "Гражданская оборона",
      year: "1989",
      desc: "Летов выходит за рамки панк-рока в поисках пространства и свободы.",
    },
    {
      id: 15,
      title: "Армагеддон-Попс",
      group: "Гражданская оборона",
      year: "1989",
      desc: "Конец света будет негромким и похожим на дешёвую попсу.",
    },
    {
      id: 16,
      title: "Русское поле экспериментов",
      group: "Гражданская оборона",
      year: "1989",
      desc: "Подведение итогов целой эпохи перед чем-то совершенно новым.",
    },
    {
      id: 17,
      title: "Инструкция по выживанию",
      group: "Гражданская оборона",
      year: "1990",
      desc: "Переломный момент — Летов берёт чужие песни и расширяет границы своего мира.",
    },
    {
      id: 18,
      title: "Прыг-Скок",
      group: "Егор и Опизденевшие",
      year: "1990",
      desc: "Дебютный альбом сайд-проекта, где Летов уходит в эксперименты с психоделией и магией, отойдя от привычного панк-звучания.",
    },
    {
      id: 19,
      title: "Вершки и корешки",
      group: "Егор Летов",
      year: "1990",
      desc: "Сольный акустический альбом, созданный под давлением друзей, чтобы зафиксировать домашнее, камерное исполнение старых песен.",
    },
    {
      id: 20,
      title: "Все как у людей",
      group: "Егор Летов",
      year: "1990",
      desc: "Одноимённая песня считается одной из лучших у Летова, он планировал сделать её гораздо длиннее, но концовку пришлось урезать для цельности альбома.",
    },
    {
      id: 21,
      title: "Прыг-Скок",
      group: "Егор и Опизденевшие",
      year: "1993",
      desc: "Переиздание психоделического альбома сайд-проекта Егора Летова.",
    },
    {
      id: 22,
      title: "Солнцеворот",
      group: "Гражданская оборона",
      year: "1997",
      desc: "Возвращение после долгого молчания, агрессии становится меньше, появляется больше света.",
    },
    {
      id: 23,
      title: "Невыносимая лёгкость бытия",
      group: "Гражданская оборона",
      year: "1997",
      desc: "Размышления о жизни, где в лёгкости скрыта трагедия, а в тяжести — освобождение.",
    },
    {
      id: 24,
      title: "Русское поле эксперимента",
      group: "Егор Летов",
      year: "1990",
      desc: "Запись сделана в декабре 1988 года на домашней студии Сергея Фирсова в период, когда Летов изнемогал от температуры и насморка.",
    },
    {
      id: 25,
      title: "Звездопад",
      group: "Гражданская оборона",
      year: "2002",
      desc: "Альбом советских песен, где Летов видит подлинность в том, что когда-то ненавидел.",
    },
    {
      id: 26,
      title: "Долгая счастливая жизнь",
      group: "Гражданская оборона",
      year: "2004",
      desc: "Осознание, что счастье — это каждый прожитый день, а не бесконечный праздник.",
    },
    {
      id: 27,
      title: "Реанимация",
      group: "Гражданская оборона",
      year: "2005",
      desc: "Процесс воскрешения и рождение новой философии принятия вместо бунта.",
    },
    {
      id: 28,
      title: "Лунный переворот",
      group: "Гражданская оборона",
      year: "2005",
      desc: "Переиздание и переосмысление альбома «Солнцеворот», которое сам Летов считал неудачно сведённым, и в 2005 году частично переписал и пересвёл его.",
    },
    {
      id: 29,
      title: "Сносная тяжесть бытия",
      group: "Гражданская оборона",
      year: "2005",
      desc: "Переиздание альбома «Невыносимая лёгкость бытия» с пересведённым материалом, отсылающее к роману Милана Кундеры.",
    },
    {
      id: 30,
      title: "Зачем снятся сны?",
      group: "Гражданская оборона",
      year: "2007",
      desc: "Последний прижизненный альбом — светлое прощание, где агрессия уступает место любви, а песня «Сияние» становится квинтэссенцией всего творчества.",
    },
  ];

  const track = document.getElementById("carousel-track");
  const meta = document.getElementById("album-meta");
  const titleEl = meta.querySelector(".album-meta__title");
  const groupEl = meta.querySelector(".album-meta__group");
  const yearEl = meta.querySelector(".album-meta__year");
  const descEl = meta.querySelector(".album-meta__desc");
  const countEl = meta.querySelector(".album-meta__count");
  const prevBtn = document.querySelector(".carousel__btn--prev");
  const nextBtn = document.querySelector(".carousel__btn--next");
  const bgA = document.getElementById("bg-a");
  const bgB = document.getElementById("bg-b");

  let index = 0;
  let busy = false;
  let bgToggle = false;
  let musicReady = false;
  let isPlaying = false;
  let playSeq = 0;
  let playChain = Promise.resolve();
  let slideDeadline = 0;
  const DURATION = 700;
  const SLIDE_MS = 10000;

  const player = new Audio();
  player.preload = "auto";
  player.loop = true;
  player.volume = 1;

  const playBtn = document.getElementById("play-btn");
  const timerFill = document.getElementById("track-timer-fill");

  const albumUrl = (id) => `../image/albums/${id}.png`;
  const musicUrl = (id) => `../music/${id}.mp3`;

  const middleTime = (duration) => {
    if (!Number.isFinite(duration) || duration <= 0) return 0;
    const ratio = 0.4 + Math.random() * 0.15;
    const maxStart = Math.max(0, duration - 12);
    return Math.min(duration * ratio, maxStart);
  };

  const waitCanPlay = (timeoutMs = 6000) =>
    new Promise((resolve, reject) => {
      if (player.readyState >= 3 && Number.isFinite(player.duration) && player.duration > 0) {
        resolve();
        return;
      }
      let done = false;
      const finish = (fn) => {
        if (done) return;
        done = true;
        player.removeEventListener("canplay", onOk);
        player.removeEventListener("canplaythrough", onOk);
        player.removeEventListener("loadeddata", onOk);
        player.removeEventListener("error", onErr);
        clearTimeout(timer);
        fn();
      };
      const onOk = () => finish(resolve);
      const onErr = () => finish(() => reject(new Error("audio error")));
      const timer = window.setTimeout(() => finish(resolve), timeoutMs);
      player.addEventListener("canplay", onOk);
      player.addEventListener("canplaythrough", onOk);
      player.addEventListener("loadeddata", onOk);
      player.addEventListener("error", onErr);
    });

  const setPlayUi = (playing) => {
    isPlaying = playing;
    if (!playBtn) return;
    playBtn.classList.toggle("is-playing", playing);
    playBtn.setAttribute("aria-pressed", playing ? "true" : "false");
    playBtn.setAttribute("aria-label", playing ? "Пауза" : "Слушать");
  };

  const updateTimerFill = () => {
    if (!timerFill) return;
    if (!slideDeadline) {
      timerFill.style.transform = "scaleX(0)";
      return;
    }
    const elapsed = SLIDE_MS - (slideDeadline - Date.now());
    const progress = Math.min(1, Math.max(0, elapsed / SLIDE_MS));
    timerFill.style.transform = `scaleX(${progress})`;
  };

  const resetTimer = () => {
    if (isPlaying) {
      slideDeadline = Date.now() + SLIDE_MS;
    } else {
      slideDeadline = 0;
    }
    updateTimerFill();
  };

  const playAlbumNow = async (albumId) => {
    const seq = ++playSeq;

    try {
      player.pause();
    } catch {
      /* ignore */
    }

    const nextSrc = musicUrl(albumId);
    const sameFile = player.src && player.src.replace(/\\/g, "/").endsWith(`/music/${albumId}.mp3`);

    if (!sameFile) {
      player.src = nextSrc;
      player.load();
      await waitCanPlay();
    }

    if (seq !== playSeq) return false;

    try {
      if (player.duration > 0) player.currentTime = middleTime(player.duration);
    } catch {
      /* ignore */
    }

    try {
      await player.play();
    } catch (err) {
      if (seq !== playSeq) return false;
      // one retry after tiny delay
      await new Promise((r) => setTimeout(r, 120));
      if (seq !== playSeq) return false;
      try {
        await player.play();
      } catch {
        setPlayUi(false);
        return false;
      }
    }

    if (seq !== playSeq) return false;

    player.volume = 1;
    musicReady = true;
    setPlayUi(true);
    resetTimer();
    return true;
  };

  const playAlbum = (albumId) => {
    playChain = playChain
      .catch(() => {})
      .then(() => playAlbumNow(albumId));
    return playChain;
  };

  const pauseMusic = () => {
    playSeq += 1;
    try {
      player.pause();
    } catch {
      /* ignore */
    }
    setPlayUi(false);
    resetTimer();
  };

  const togglePlay = async () => {
    if (isPlaying && musicReady && !player.paused) {
      pauseMusic();
      return;
    }
    musicReady = true;
    await playAlbum(albums[index].id);
  };

  const setBackground = (albumId) => {
    const nextLayer = bgToggle ? bgA : bgB;
    const prevLayer = bgToggle ? bgB : bgA;
    nextLayer.style.backgroundImage = `url("${albumUrl(albumId)}")`;
    nextLayer.classList.add("is-active");
    prevLayer.classList.remove("is-active");
    bgToggle = !bgToggle;
  };

  const createSlide = (album) => {
    const slide = document.createElement("div");
    slide.className = "carousel__slide";
    slide.dataset.id = String(album.id);

    const img = document.createElement("img");
    img.src = albumUrl(album.id);
    img.alt = `${album.group} — ${album.title}`;
    img.width = 600;
    img.height = 600;
    img.draggable = false;

    slide.appendChild(img);
    return slide;
  };

  const renderMeta = (album) => {
    titleEl.textContent = album.title;
    groupEl.textContent = album.group;
    yearEl.textContent = album.year;
    descEl.textContent = album.desc;
    countEl.textContent = `${album.id} / ${albums.length}`;
  };

  const showMeta = () => {
    meta.classList.remove("is-fading");
    meta.classList.add("is-visible");
  };

  const hideMeta = () => {
    meta.classList.remove("is-visible");
    meta.classList.add("is-fading");
  };

  const setButtons = (disabled) => {
    prevBtn.disabled = disabled;
    nextBtn.disabled = disabled;
  };

  const goTo = (nextIndex, direction) => {
    if (busy || nextIndex === index) return;
    busy = true;
    setButtons(true);

    const current = track.querySelector(".carousel__slide.is-active");
    const album = albums[nextIndex];
    const incoming = createSlide(album);
    index = nextIndex;

    incoming.classList.add(direction === "next" ? "is-enter-next" : "is-enter-prev");
    track.appendChild(incoming);

    hideMeta();
    setBackground(album.id);
    resetTimer();

    if (musicReady) {
      playAlbum(album.id);
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (current) {
          current.classList.add("is-animating");
          current.classList.remove("is-active");
          current.classList.add(direction === "next" ? "is-leave-next" : "is-leave-prev");
        }

        incoming.classList.add("is-animating");
        incoming.classList.remove("is-enter-next", "is-enter-prev");
        incoming.classList.add("is-active");
      });
    });

    window.setTimeout(() => {
      if (current) current.remove();
      renderMeta(album);
      showMeta();
      busy = false;
      setButtons(false);
    }, DURATION);
  };

  const next = () => goTo((index + 1) % albums.length, "next");
  const prev = () => goTo((index - 1 + albums.length) % albums.length, "prev");

  const checkSlideTimer = () => {
    updateTimerFill();
    if (!slideDeadline || busy) return;
    if (!musicReady || !isPlaying || player.paused) return;
    if (Date.now() < slideDeadline) return;
    // Lock deadline immediately so background interval can't fire twice
    slideDeadline = Date.now() + SLIDE_MS;
    next();
  };

  // init
  const first = createSlide(albums[0]);
  first.classList.add("is-active");
  track.appendChild(first);
  renderMeta(albums[0]);
  showMeta();
  bgA.style.backgroundImage = `url("${albumUrl(albums[0].id)}")`;
  bgA.classList.add("is-active");
  resetTimer();
  window.setInterval(checkSlideTimer, 250);
  document.addEventListener("visibilitychange", checkSlideTimer);
  window.addEventListener("focus", checkSlideTimer);

  if (playBtn) {
    playBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      togglePlay();
    });
  }

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
    if (e.key === " " && e.target === document.body) {
      e.preventDefault();
      togglePlay();
    }
  });

  const stage = document.querySelector(".carousel__stage");
  const swipeTarget = stage || track;
  let touchX = null;
  let touchY = null;

  swipeTarget.addEventListener(
    "touchstart",
    (e) => {
      touchX = e.changedTouches[0].clientX;
      touchY = e.changedTouches[0].clientY;
    },
    { passive: true }
  );
  swipeTarget.addEventListener(
    "touchend",
    (e) => {
      if (touchX == null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      const dy = e.changedTouches[0].clientY - (touchY ?? 0);
      touchX = null;
      touchY = null;
      if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) next();
      else prev();
    },
    { passive: true }
  );
})();