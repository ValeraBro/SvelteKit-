<script>
    import { theme } from '$lib/stores/theme';
    import { onMount } from 'svelte';
    
    import { lang } from '$lib/stores/lang';
    import { t } from '$lib/i18n';

    let currentTheme = 'light';
    
    onMount(() => {
        const unsubscribe = theme.subscribe($theme => {
            currentTheme = $theme;
        });
        
        return () => unsubscribe();
    });

   

  

  $: title = t('header.title', $lang);
  $: themeTranslation = t(`theme.${currentTheme}`, $lang); // Берём перевод темы
  $: subtitle = t('header.subtitle', $lang, { 
    theme: themeTranslation // Подставляем переведённую тему
  });
 </script>

<h1>{title}</h1>
<p>{subtitle}</p>

<!-- <h1>Добро пожаловать в мое приложение!</h1>
<p>Текущая тема: {currentTheme === 'dark' ? 'Тёмная' : 'Светлая'}</p> -->

<style>
    h1 {
        margin-top: 60px;
        text-align: center;
    }
    p {
        text-align: center;
    }
</style>