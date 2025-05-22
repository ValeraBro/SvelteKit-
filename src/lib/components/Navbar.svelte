<script lang="ts">
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import { lang, setLanguage } from '$lib/stores/lang';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte'; // <-- Импортируем

  const navLinks = [
    { path: "/", name: "Главная", id: "home" },
    { path: "/about", name: "О нас", id: "about" },
    { path: "/contact", name: "Контакты", id: "contact" },
    { path: "/blog", name: "Блог", id: "blog" },
  ];

  let isMenuOpen = false;

  function closeMenu() {
    isMenuOpen = false;
  }


  let dropdownOpen = false;
  
  const languages = [
    {
      code: 'en',
      name: 'English',
      flagClass: 'usa'
    },
    {
      code: 'ru',
      name: 'Русский',
      flagClass: 'russia'
    }
  ];

  function setLanguageAndClose(code: string) {
    setLanguage(code);
    dropdownOpen = false;
  }

  $: currentLanguage = languages.find(l => l.code === $lang);
</script>

<nav class="navbar">
  <div class="container">
    <a href="/" class="logo">mRemoteNG</a>
 

    
   
    
     <div class="menu-wrapper" class:open={isMenuOpen}>
      <ul class="nav-links" transition:fade>
        {#each navLinks as link}
          <li class:active={$page.url.pathname === link.path}>
            <a href={link.path} on:click={closeMenu}>{link.name}</a>
          </li>
        {/each}

         <!--   контейнер для тоггла -->
    <li class="mobile-theme-container">
      <div class="mobile-theme-toggle">
         <ThemeToggle />
      </div>
    </li>

    <li class="mobile-theme-container mobile-theme-toggle">
      <div class="language-dropdown material-theme">
       <!-- Кнопка-триггер -->
      <button 
      class="dropdown-trigger {currentLanguage.flagClass}"
      on:click={() => dropdownOpen = !dropdownOpen}
    >
      <div class="flag-container">
        {#if currentLanguage.code === 'en'}
          <div class="flag-stripes">
            <div class="stripe red"></div>
            <div class="stripe white"></div>
            <div class="stripe red"></div>
            <div class="stripe white"></div>
            <div class="stripe red"></div>
            <div class="stripe white"></div>
            <div class="stripe red"></div>
            <div class="canton">
              <div class="star">★</div>
            </div>
          </div>
        {:else}
          <div class="flag-tricolor">
            <div class="stripe white"></div>
            <div class="stripe blue"></div>
            <div class="stripe red"></div>
          </div>
        {/if}
      </div>
  
    </button>
  
    <!-- Выпадающий список -->
    {#if dropdownOpen}
      <div class="dropdown-menu" transition:fade>
        {#each languages as language}
          <div 
            class="dropdown-item {language.flagClass} {language.code === $lang ? 'active' : ''}"
            on:click={() => setLanguageAndClose(language.code)}
          >
            <div class="flag-container">
              {#if language.code === 'en'}
                <div class="flag-stripes">
                  <div class="stripe red"></div>
                  <div class="stripe white"></div>
                  <div class="stripe red"></div>
                  <div class="stripe white"></div>
                  <div class="stripe red"></div>
                  <div class="stripe white"></div>
                  <div class="stripe red"></div>
                  <div class="canton">
                    <div class="star">★</div>
                  </div>
                </div>
              {:else}
                <div class="flag-tricolor">
                  <div class="stripe white"></div>
                  <div class="stripe blue"></div>
                  <div class="stripe red"></div>
                </div>
              {/if}
            </div>
            <!-- <span>{language.name}</span> -->
          </div>
        {/each}
      </div>
    {/if}
  </div>
      </li>

      </ul>
    </div>




    <div class="container-lefting-suk">

    <div class="desktop-theme mobile-hide">
      <ThemeToggle />
    </div>


    <div class="language-dropdown material-theme mobile-hide">
      
      <!-- Кнопка-триггер -->
      <button 
        class="dropdown-trigger {currentLanguage.flagClass}"
        on:click={() => dropdownOpen = !dropdownOpen}
      >
        <div class="flag-container">
          {#if currentLanguage.code === 'en'}
            <div class="flag-stripes">
              <div class="stripe red"></div>
              <div class="stripe white"></div>
              <div class="stripe red"></div>
              <div class="stripe white"></div>
              <div class="stripe red"></div>
              <div class="stripe white"></div>
              <div class="stripe red"></div>
              <div class="canton">
                <div class="star">★</div>
              </div>
            </div>
          {:else}
            <div class="flag-tricolor">
              <div class="stripe white"></div>
              <div class="stripe blue"></div>
              <div class="stripe red"></div>
            </div>
          {/if}
        </div>
    
      </button>
    
      <!-- Выпадающий список -->
      {#if dropdownOpen}
        <div class="dropdown-menu" transition:fade>
          {#each languages as language}
            <div 
              class="dropdown-item {language.flagClass} {language.code === $lang ? 'active' : ''}"
              on:click={() => setLanguageAndClose(language.code)}
            >
              <div class="flag-container">
                {#if language.code === 'en'}
                  <div class="flag-stripes">
                    <div class="stripe red"></div>
                    <div class="stripe white"></div>
                    <div class="stripe red"></div>
                    <div class="stripe white"></div>
                    <div class="stripe red"></div>
                    <div class="stripe white"></div>
                    <div class="stripe red"></div>
                    <div class="canton">
                      <div class="star">★</div>
                    </div>
                  </div>
                {:else}
                  <div class="flag-tricolor">
                    <div class="stripe white"></div>
                    <div class="stripe blue"></div>
                    <div class="stripe red"></div>
                  </div>
                {/if}
              </div>
              <!-- <span>{language.name}</span> -->
            </div>
          {/each}
        </div>
      {/if}
    </div>
    

  </div>
         
    <!-- <div class="language-container mobile-hide">
      <button class="lang-btn usa" on:click={() => setLanguage('en')}>
        <div class="flag-stripes">
          <div class="stripe red"></div>
          <div class="stripe white"></div>
          <div class="stripe red"></div>
          <div class="stripe white"></div>
          <div class="stripe red"></div>
          <div class="stripe white"></div>
          <div class="stripe red"></div>
          <div class="canton">
            <div class="star">★</div>
          </div>
        </div>
       </button>
    
      <button class="lang-btn russia" on:click={() => setLanguage('ru')}>
        <div class="flag-tricolor">
          <div class="stripe white"></div>
          <div class="stripe blue"></div>
          <div class="stripe red"></div>
        </div>
       </button>
    </div> -->

   <!-- Бургер с анимацией -->
   <button
   class="burger"
   on:click={() => (isMenuOpen = !isMenuOpen)}
   aria-label="Меню"
   class:open={isMenuOpen}
 >
   <span class="line top"></span>
   <span class="line middle"></span>
   <span class="line bottom"></span>
 </button>


  </div>
</nav>

<style>
   .container-lefting-suk {
    display: flex;
    align-items: center;
 
  }
  .desktop-theme{
    padding: 10px;

   }
  /* Базовые стили */
  .navbar {
    background: #04a7de ; /* #04a7de   #1e40af */
    color: white;
    padding: 0;
    position: relative;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 2400px;
    margin: 0 auto;
    padding: 1rem;
    position: relative;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: white;
    z-index: 101; /* Чтобы был поверх меню */
  }

  /* Стили меню на десктопе */
  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 0;
    position: relative;
    transition: color 0.3s;
  }

  .nav-links a:hover {
    color: #93c5fd; /* Светло-голубой */
  }

  .nav-links li.active a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #93c5fd;
  }

  /* Бургер-кнопка (анимированная) */
  .burger {
    display: none;
    background: none;
    border: none;
    width: 30px;
    height: 24px;
    position: relative;
    cursor: pointer;
    z-index: 101;
      margin-left: auto; /* Прижимаем к правому краю */

    padding: 0;
  }

  .burger .line {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: white;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .burger .top {
    top: 0;
  }

  .burger .middle {
    top: 50%;
    transform: translateY(-50%);
  }

  .burger .bottom {
    bottom: 0;
  }

  /* Анимация бургера в открытом состоянии */
  .burger.open .top {
    transform: translateY(10px) rotate(45deg);
  }

  .burger.open .middle {
    opacity: 0;
  }

  .burger.open .bottom {
    transform: translateY(-10px) rotate(-45deg);
  }

  /* Адаптивность (мобильные) */
  @media (max-width: 768px) {
    .burger {
      display: block;
    }

    .menu-wrapper {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: #1e40af;
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.3s ease-out;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    }

    .menu-wrapper.open {
      max-height: 1000px; /* Достаточно для меню */
    }

    .nav-links {
      flex-direction: column;
      gap: 0;
      padding: 1rem;
    }

    .nav-links li {
      padding: 0.75rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .nav-links li:last-child {
      border-bottom: none;
    }
  }



/* Базовые стили контейнера */
.language-container {
     position: relative;
    display: inline-flex;
    gap: 5px;
     /* background: rgba(255,255,255,0); */
    border-radius: 12px;
    /* box-shadow: 0 4px 15px rgba(0,0,0,0.1); */
    isolation: isolate; /* Важно: изолирует от других элементов */
    z-index: 100;
  }

  /* Общие стили кнопок */
  .lang-btn {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow: hidden;
  }

  /* Стилизация флага США */
  .lang-btn.usa {
    background: #0a3161;
    color: white;
  }

  .flag-stripes {
    position: relative;
    width: 24px;
    height: 16px;
    display: flex;
    flex-direction: column;
  }

  .stripe {
    height: 2px;
  }
  .stripe.red { background: #B22234; }
  .stripe.white { background: white; }

  .canton {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 8px;
    background: #0a3161;
    display: grid;
    place-items: center;
  }
  .star {
    font-size: 6px;
    color: white;
    transform: translateY(-0.5px);
  }

  /* Стилизация флага России */
  .lang-btn.russia {
    background: #0a3161;
    color: rgb(0, 255, 132);
  }

  .flag-tricolor {
    width: 24px;
    height: 16px;
    display: flex;
    flex-direction: column;
  }
  .flag-tricolor .stripe {
    flex: 1;
  }
  .flag-tricolor .white { background: white; }
  .flag-tricolor .blue { background: #0039A6; }
  .flag-tricolor .red { background: #D52B1E; }

  /* Эффекты взаимодействия */
  .lang-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  }

  .lang-btn:active {
    transform: translateY(0);
  }

   

  /* Гарантия изоляции от других элементов */
  .language-container::before {
    margin: 10px; /* Отступ со всех сторон */

    content: '';
    position: relative;
    inset: -5px;
    /* background: rgba(0, 0, 0, 0.1); */
    z-index: -1;
    border-radius: 16px;
    opacity: 0.9;
  }




  .mobile-theme-container {
  padding: 0.5rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-theme-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
}

.mobile-theme-toggle .theme-switch {
  flex-shrink: 0; /* Предотвращает сжатие */
  margin: 0; /* Убираем внешние отступы */
}

@media (min-width: 769px) {
  .mobile-theme-container {
    display: none;
  }
}

 

@media (max-width: 768px) {
  .mobile-hide {
    opacity: 0;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    pointer-events: none;
  }
}




/* Material Design стили (серо-голубая тема) */
.material-theme {
    --primary-color: #2196F3;
    --primary-light: #BBDEFB;
    --text-primary: #212121;
    --text-secondary: #757575;
    --divider-color: #BDBDBD;
    --background: #99accf;
    --hover-color: #3189c4f0;
  }

  .language-dropdown {
    position: relative;
    display: inline-block;
     font-family: 'Roboto', sans-serif;
  }

  .dropdown-trigger {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 10px 16px;
    background-color: var(--background);
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    color: var(--text-primary);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-align: left;
    
   }

  .dropdown-trigger:hover {
    background-color: var(--hover-color);
    border-color: var(--primary-light);
  }

  .dropdown-icon {
    margin-left: auto;
    font-family: 'Material Icons';
    font-size: 20px;
    color: var(--text-secondary);
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 4px;
    background: var(--background);
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.1);
    z-index: 1000;
    overflow: hidden;
    transform-origin: top center;
    animation: scaleIn 0.2s ease-out;
 
  }
  @media (max-width: 768px) {
  .dropdown-menu {
    position: relative;

  }
}
  @keyframes scaleIn {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  .dropdown-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    z-index: 1000;

  }

  .dropdown-item:hover {
    background-color: var(--hover-color);
  }

  .dropdown-item.active {
    background-color: var(--primary-light);
    color: var(--primary-color);
    
  }
</style>