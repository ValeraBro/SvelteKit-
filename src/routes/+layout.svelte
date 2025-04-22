<script lang="ts">
	import '../app.css';
    import { theme, toggleTheme } from '$lib/stores/theme';
    import { onMount } from 'svelte';
    import { lang, setLanguage } from '$lib/stores/lang';
    import { t } from '$lib/i18n';

    let isDark = false;
    
    onMount(() => {
        const unsubscribe = theme.subscribe($theme => {
            isDark = $theme === 'dark';
        });
        
        return () => unsubscribe();
    });
</script>

 
<div class="language-container ">
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
      <span class="label">English</span>
    </button>
  
    <button class="lang-btn russia" on:click={() => setLanguage('ru')}>
      <div class="flag-tricolor">
        <div class="stripe white"></div>
        <div class="stripe blue"></div>
        <div class="stripe red"></div>
      </div>
      <span class="label">  Русский</span>
    </button>
  </div>
 

<div class="theme-container">
    <label class="theme-switch">
        <input 
            type="checkbox" 
            bind:checked={isDark}
            on:change={toggleTheme}
            aria-label="Переключить тему"
        >
        <span class="slider">
            <span class="icon sun">
                <svg viewBox="0 0 24 24" width="16" height="16">
                    <circle cx="12" cy="12" r="5" fill="currentColor"/>
                    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="1.5"/>
                </svg>
            </span>
            <span class="icon moon">
                <svg viewBox="0 0 24 24" width="16" height="16">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/>
                </svg>
            </span>
        </span>
    </label>
    <slot />

 </div>

<style>
    .theme-container {
        min-height: 100vh;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    :global(:root) {
        --bg-light: #ffffff;
        --text-light: #333333;
        --bg-dark: #1a1a1a;
        --text-dark: #f0f0f0;
    }

    :global(.light) {
        background-color: var(--bg-light);
        color: var(--text-light);
    }

    :global(.dark) {
        background-color: var(--bg-dark);
        color: var(--text-dark);
    }

    .theme-switch {
        --width: 60px;
        --height: 32px;
        --padding: 2px;
        --transition: 0.4s;
        
        position: fixed;
        top: 20px;
        right: 20px;
        display: inline-block;
        width: var(--width);
        height: var(--height);
        z-index: 1000;
    }

    .theme-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f0f0f0;
        border: 1px solid #ddd;
        transition: var(--transition);
        border-radius: 34px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 var(--padding);
    }

    .slider:before {
        position: absolute;
        content: "";
        height: calc(var(--height) - 8px);
        width: calc(var(--height) - 8px);
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: var(--transition);
        border-radius: 50%;
        z-index: 2;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }

    input:checked + .slider {
        background-color: #333;
        border-color: #444;
    }

    input:checked + .slider:before {
        transform: translateX(calc(var(--width) - var(--height)));
    }

    .icon {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }

    .sun {
        color: #f39c12;
    }

    .moon {
        color: #f1c40f;
    }

    :global(.dark) .slider {
        background-color: #444;
        border-color: #555;
    }





    

   /* Базовые стили контейнера */
  .language-container {
    margin: 10px; /* Отступ со всех сторон */
    position: relative;
    display: inline-flex;
    gap: 12px;
    padding: 10px;
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
    background: #0039A6;
    color: white;
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
</style>