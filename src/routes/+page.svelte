<script>
    import { theme } from '$lib/stores/theme';
    import { onMount } from 'svelte';
    
    let currentTheme = 'light';
    
    onMount(() => {
        const unsubscribe = theme.subscribe($theme => {
            currentTheme = $theme;
        });
        
        return () => unsubscribe();
    });
</script>

<h1>Добро пожаловать в мое приложение!</h1>
<p>Текущая тема: {currentTheme === 'dark' ? 'Тёмная' : 'Светлая'}</p>

<style>
    h1 {
        margin-top: 60px;
        text-align: center;
    }
    p {
        text-align: center;
    }
</style>